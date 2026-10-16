import { supabase, adminSupabase } from '@/lib/supabase';

import { TenantAiConfig, AiKey } from '../types';

export const AiService = {
  async getTenantAiConfig(tenantId: string): Promise<TenantAiConfig | null> {
    const { data, error } = await supabase
      .from('tenants')
      .select('ai_quota, ai_used, system_prompt')
      .eq('id', tenantId)
      .single();
    
    if (error || !data) return null;
    return data;
  },

  async getActiveAiKey(): Promise<AiKey | null> {
    const { data, error } = await adminSupabase
      .from('ai_keys')
      .select('*')
      .eq('is_default', true)
      .single();
    
    if (error || !data) return null;
    return data;
  },

  async logTokenUsage(tenantId: string, tokensUsed: number, currentUsed: number, quota: number): Promise<void> {
    try {
      await supabase.rpc('increment_ai_used', {
        tenant_id: tenantId,
        amount: tokensUsed
      });

      const newUsed = currentUsed + tokensUsed;

      await supabase.from('audit_logs').insert({
        tenant_id: tenantId,
        actor_type: 'system',
        action: 'ai_chat',
        payload: { tokens_used: tokensUsed, remaining: quota - newUsed }
      });
      
      console.log(`[AI Quota] Deducted ${tokensUsed} tokens for tenant ${tenantId}`);
    } catch (err) {
      console.error('Background AI Tracking Error:', err);
    }
  },

  buildCoreMessages(messages: any[]) {
    return messages.map((m: any) => {
      let content = m.content;
      if (!content && m.parts) {
        content = m.parts
          .filter((p: any) => p.type === 'text')
          .map((p: any) => p.text)
          .join('\n');
      }
      return {
        role: m.role,
        content: content || '',
      };
    });
  },

  getLLMModel(providerId: string, apiKey: string) {
    const { createOpenAI } = require('@ai-sdk/openai');
    const { createAnthropic } = require('@ai-sdk/anthropic');
    const { createGoogleGenerativeAI } = require('@ai-sdk/google');

    if (providerId === 'openai') {
      const customOpenAI = createOpenAI({ apiKey });
      return customOpenAI('gpt-4o-mini');
    } else if (providerId === 'anthropic') {
      const customAnthropic = createAnthropic({ apiKey });
      return customAnthropic('claude-3-haiku-20240307');
    } else {
      // Fallback & Gemini
      const customGoogle = createGoogleGenerativeAI({ apiKey });
      return customGoogle('gemini-3.5-flash');
    }
  },

  async handleAiBooking(tenantId: string, args: any) {
    const { BookingService } = require('@/modules/booking/api/booking.service');
    console.log('[AI BOOKING] RAW ARGS:', JSON.stringify(args, null, 2));
    const name = args.name || args.customer_name || args.customerName;
    const phone = args.phone || args.phone_number || args.customerPhone || args.phoneNumber;
    const service = args.service || args.service_name || args.serviceName;
    let time = args.time || args.booking_time || args.dateTime || args.date;
    
    console.log('[AI BOOKING] Parsed args:', name, service, time);
    
    if (!name || !phone || !service || !time) {
      throw new Error('Dữ liệu không hợp lệ. Vui lòng thử lại.');
    }
    
    const srvs = await BookingService.getServices(tenantId, adminSupabase);
    
    const matchedService = srvs?.find((s: any) => s.name.toLowerCase().includes(service.toLowerCase())) || srvs?.[0];
    
    if (!matchedService) {
      throw new Error('Không tìm thấy dịch vụ tương ứng trong hệ thống.');
    }

    if (typeof time === 'string') {
      const parts = time.match(/(\d{1,2})(?:[:h](\d{2}))?.*?(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?/i);
      if (parts) {
          const hour = parts[1].padStart(2, '0');
          const minute = (parts[2] || '00').padStart(2, '0');
          const day = parts[3].padStart(2, '0');
          const month = parts[4].padStart(2, '0');
          const year = parts[5] || new Date().getFullYear().toString();
          time = `${year}-${month}-${day}T${hour}:${minute}:00+07:00`;
      }
    }

    const startTime = new Date(time);
    if (isNaN(startTime.getTime())) {
      throw new Error('Thời gian không đúng định dạng. Xin lỗi khách và nhắc khách cung cấp ngày giờ rõ ràng hơn (VD: 14h ngày 15/08).');
    }

    if (startTime.getTime() < Date.now()) {
      throw new Error('Thời gian đặt lịch không thể ở trong quá khứ. Vui lòng xin khách chọn giờ khác.');
    }
    
    const endTime = new Date(startTime.getTime() + (matchedService.duration_minutes || 60) * 60000);

    try {
      await BookingService.createAppointment(tenantId, {
        customer_name: name,
        customer_phone: phone,
        service_id: matchedService.id,
        service_name: matchedService.name,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        status: 'pending'
      }, adminSupabase);
    } catch (dbError: any) {
      console.error('[AI BOOKING ERROR]', dbError);
      if (dbError.message?.includes('double_booking') || dbError.message?.includes('P0001')) {
         return { success: false, message: 'Khung giờ này đã có người đặt (trùng lịch), vui lòng từ chối nhẹ nhàng và xin khách chọn giờ khác.' };
      }
      return { success: false, message: 'Lỗi hệ thống khi lưu lịch.' };
    }

    return { 
      success: true, 
      message: 'Đã đặt lịch thành công! Hãy thông báo xác nhận lại với khách hàng thông tin (Dịch vụ, Giờ) và kết thúc hội thoại.' 
    };
  }
};
