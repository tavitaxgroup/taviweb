import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Next.js 15 requires params to be awaited
    const { id: dealId } = await params;
    
    if (!dealId) {
      return NextResponse.json({ error: 'Missing deal ID' }, { status: 400 });
    }

    // 1. Fetch deal data and activities to feed to AI
    const { data: deal } = await supabase
      .from('crm_deals')
      .select('*, contact:crm_contacts(*)')
      .eq('id', dealId)
      .single();

    if (!deal) {
      return NextResponse.json({ error: 'Deal not found' }, { status: 404 });
    }

    const { data: activities } = await supabase
      .from('crm_activities')
      .select('*')
      .eq('deal_id', dealId)
      .order('created_at', { ascending: false });

    // 2. Try Real Gemini AI Analysis if API key is configured, otherwise smart contextual analysis
    const { data: tenantData } = await supabase
      .from('tenants')
      .select('gemini_api_key, name')
      .eq('id', deal.tenant_id)
      .maybeSingle();

    const apiKey = tenantData?.gemini_api_key || process.env.GEMINI_API_KEY;
    const formattedValue = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(deal.value || 0);
    const activityListText = (activities || [])
      .slice(0, 8)
      .map((a: any) => `- [${new Date(a.created_at).toLocaleString('vi-VN')}]: ${a.content}`)
      .join('\n');

    if (apiKey) {
      try {
        const prompt = `Bạn là chuyên gia phân tích bán hàng CRM cho doanh nghiệp "${tenantData?.name || 'TaviWeb'}".
Hãy phân tích cơ hội bán hàng (Deal) sau và trả về đúng định dạng JSON (không bọc markdown):
- Tiêu đề Deal: ${deal.title}
- Khách hàng: ${deal.contact?.name || 'Chưa rõ'} (SĐT: ${deal.contact?.phone || 'Chưa có'})
- Giá trị dự kiến: ${formattedValue}
- Thông tin thêm: ${JSON.stringify(deal.custom_data || {})}
- Lịch sử tương tác (${activities?.length || 0} lần):
${activityListText || 'Chưa có tương tác nào.'}

Trả về JSON có cấu trúc:
{
  "summary": "Tóm tắt ngắn gọn 2-3 câu đánh giá tình trạng khách hàng, có thể dùng **in đậm** cho ý chính",
  "next_steps": ["Hành động cụ thể 1", "Hành động cụ thể 2", "Hành động cụ thể 3"],
  "confidence_score": số nguyên từ 50 đến 95
}`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: 'application/json', temperature: 0.4 },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiJson = await geminiRes.json();
          const rawText = geminiJson?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const parsed = JSON.parse(rawText);
            if (parsed.summary && Array.isArray(parsed.next_steps)) {
              return NextResponse.json({
                summary: parsed.summary,
                next_steps: parsed.next_steps,
                confidence_score: Number(parsed.confidence_score) || 80,
              });
            }
          }
        }
      } catch (aiErr) {
        console.warn('Gemini Deal Summary fallback triggered:', aiErr);
      }
    }

    const activityCount = activities?.length || 0;
    const hasBooking = activities?.some((a: any) => a.content.toLowerCase().includes('booking') || a.content.toLowerCase().includes('đặt lịch'));
    const hasQuote = activities?.some((a: any) => a.content.toLowerCase().includes('báo giá'));
    const isNew = activityCount === 0;

    let summaryText = '';
    let nextSteps: string[] = [];
    let score = 68;

    if (isNew) {
      summaryText = `Khách hàng tiềm năng mới (**${deal.contact?.name || 'Chưa rõ tên'}**) vừa được tạo với giá trị dự kiến **${formattedValue}**, hiện chưa có lịch sử ghi chú chăm sóc.`;
      nextSteps = [
        `Gọi điện theo SĐT ${deal.contact?.phone || 'khách hàng'} trong vòng 15 phút đầu để xác nhận nhu cầu.`,
        'Lập bảng báo giá chi tiết và gửi qua Zalo cho khách tham khảo.',
      ];
      score = 65;
    } else if (hasBooking) {
      summaryText = `Khách hàng **${deal.contact?.name || ''}** đã chủ động đặt lịch hẹn trực tuyến (Giá trị dịch vụ dự kiến: **${formattedValue}**). Mức độ quan tâm thực tế rất cao.`;
      nextSteps = [
        'Gọi hoặc nhắn Zalo xác nhận lại khung giờ hẹn trước 2 tiếng.',
        'Chuẩn bị sẵn gói dịch vụ nâng cấp (Upsell) phù hợp khi khách tới cơ sở.',
      ];
      score = 88;
    } else if (hasQuote) {
      summaryText = `Đã gửi báo giá trị giá **${formattedValue}** cho khách hàng **${deal.contact?.name || ''}** (Tổng cộng **${activityCount}** tương tác). Khách đang trong giai đoạn cân nhắc ngân sách.`;
      nextSteps = [
        'Liên hệ giải đáp thắc mắc về các hạng mục trong báo giá đã gửi.',
        'Đề xuất ưu đãi chốt nhanh trong tuần để thúc đẩy quyết định.',
      ];
      score = 82;
    } else {
      summaryText = `Đã có **${activityCount}** lần tương tác với khách hàng **${deal.contact?.name || ''}** (Giá trị: **${formattedValue}**). Ghi chú mới nhất: "${activities?.[0]?.content.substring(0, 80)}...".`;
      nextSteps = [
        'Tạo lịch hẹn gọi lại (Reminder) để theo sát tiến độ quyết định của khách.',
        'Lập báo giá PDF chính thức trên CRM để gửi khách duyệt.',
      ];
      score = 76;
    }

    return NextResponse.json({
      summary: summaryText,
      next_steps: nextSteps,
      confidence_score: score,
    });
  } catch (error: any) {
    console.error('AI Summary Error:', error);
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}
