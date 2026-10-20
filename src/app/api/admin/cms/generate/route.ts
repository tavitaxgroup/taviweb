import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { adminSupabase } from '@/lib/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export async function POST(req: Request) {
  try {
    const { topic, tone, keywords } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Vui lòng nhập chủ đề bài viết.' }, { status: 400 });
    }

    // Resolve API key from Tenant or Environment
    let apiKey =
      process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || '';
    let tenantName = 'Doanh nghiệp';

    try {
      const cookieStore = await cookies();
      const token = cookieStore.get('crm_token')?.value;
      if (token) {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        if (decoded?.tenant_id) {
          const { data: tenantData } = await adminSupabase
            .from('tenants')
            .select('name, gemini_api_key')
            .eq('id', decoded.tenant_id)
            .maybeSingle();
          if (tenantData?.name) tenantName = tenantData.name;
          if (tenantData?.gemini_api_key) apiKey = tenantData.gemini_api_key;
        }
      }
    } catch {
      // Fallback to env key if cookie parsing fails
    }

    const systemPrompt = `Bạn là một biên tập viên nội dung và chuyên gia SEO cao cấp cho thương hiệu "${tenantName}".
Hãy viết một bài blog chuyên sâu, chuẩn SEO về chủ đề: "${topic}".
Phong cách viết: "${tone || 'Chuyên nghiệp, hữu ích'}".
${keywords ? `Từ khóa trọng tâm cần lồng ghép tự nhiên: ${keywords}` : ''}

YÊU CẦU ĐẦU RA:
- Bài viết dài khoảng 500 - 800 từ, chia bố cục mạch lạc bằng thẻ <h2>, <h3>, <p>, <ul>, <li>, <strong>, <blockquote>.
- Nội dung thực tế, giàu giá trị chuyên môn, trình bày tinh tế.
- Chèn 2 thẻ <img src="https://image.pollinations.ai/prompt/{english-visual-prompt}?width=960&height=540&nologo=true" alt="{mo-ta-anh}" /> ở vị trí hợp lý.

TRẢ VỀ DUY NHẤT JSON HỢP LỆ THEO CẤU TRÚC:
{
  "title": "Tiêu đề bài viết cuốn hút, chuẩn SEO (45-68 ký tự)",
  "contentHtml": "Nội dung HTML của bài viết"
}`;

    if (apiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: systemPrompt }] }],
              generationConfig: {
                responseMimeType: 'application/json',
                temperature: 0.65,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiJson = await geminiRes.json();
          const rawText = geminiJson?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const jsonStr = rawText.substring(
              rawText.indexOf('{'),
              rawText.lastIndexOf('}') + 1
            );
            const parsed = JSON.parse(jsonStr);
            if (parsed.title && parsed.contentHtml) {
              return NextResponse.json({
                title: parsed.title,
                contentHtml: parsed.contentHtml,
              });
            }
          }
        }
      } catch (aiErr) {
        console.warn('Gemini CMS generation fallback triggered:', aiErr);
      }
    }

    // Smart Structured Editorial Fallback when API key is not configured or quota exceeded
    const kwList = keywords
      ? keywords
          .split(',')
          .map((k: string) => k.trim())
          .filter(Boolean)
      : [topic];
    const primaryKw = kwList[0] || topic;

    const fallbackHtml = `
      <p>Trong bối cảnh khách hàng ngày càng chú trọng đến chất lượng trải nghiệm và hiệu quả lâu dài, <strong>${topic}</strong> đang trở thành một trong những chủ đề được quan tâm hàng đầu tại <strong>${tenantName}</strong>. Bài viết dưới đây sẽ tổng hợp những góc nhìn chuyên môn và kinh nghiệm thực tế giúp bạn đưa ra lựa chọn tối ưu nhất.</p>
      <h2>1. Vì sao ${primaryKw} lại đóng vai trò quan trọng?</h2>
      <p>Nhiều nghiên cứu và thực tiễn vận hành cho thấy việc đầu tư bài bản vào <strong>${primaryKw}</strong> không chỉ mang lại giá trị thẩm mỹ và sự an tâm tức thì, mà còn giúp tiết kiệm đáng kể thời gian cũng như chi phí về lâu dài.</p>
      <ul>
        <li><strong>Chuẩn hóa quy trình chất lượng:</strong> Mọi bước thực hiện đều tuân thủ tiêu chuẩn an toàn và kiểm định khắt khe.</li>
        <li><strong>Cá nhân hóa theo nhu cầu:</strong> Mỗi khách hàng đều được lắng nghe và xây dựng phác đồ/giải pháp riêng biệt.</li>
        <li><strong>Hiệu quả bền vững:</strong> Tập trung vào giá trị cốt lõi thay vì các giải pháp ngắn hạn.</li>
      </ul>
      <h2>2. Những tiêu chí cốt lõi cần lưu ý khi lựa chọn</h2>
      <p>Để đạt được kết quả như kỳ vọng, chuyên gia tại <strong>${tenantName}</strong> khuyến nghị bạn cân nhắc 3 yếu tố then chốt:</p>
      <h3>Đội ngũ chuyên môn & Kinh nghiệm thực tế</h3>
      <p>Tay nghề và sự tận tâm của đội ngũ trực tiếp tư vấn, thực hiện là yếu tố quyết định đến 80% sự hài lòng của khách hàng.</p>
      <h3>Minh bạch về quy trình và chi phí</h3>
      <p>Một dịch vụ uy tín luôn đi kèm bảng báo giá rõ ràng, lộ trình cụ thể và cam kết đồng hành sau khi hoàn tất.</p>
      <blockquote>"Chất lượng thực sự không nằm ở những lời quảng cáo hoa mỹ, mà thể hiện ở sự chỉn chu trong từng chi tiết nhỏ nhất dành cho khách hàng."</blockquote>
      <h2>3. Giải pháp toàn diện tại ${tenantName}</h2>
      <p>Tại <strong>${tenantName}</strong>, chúng tôi không ngừng nâng cấp không gian, trang thiết bị và quy trình phục vụ nhằm mang lại trải nghiệm trọn vẹn nhất. Nếu bạn đang cần tư vấn chi tiết hơn về <strong>${topic}</strong>, đừng ngần ngại đặt lịch hẹn trực tuyến hoặc liên hệ ngay với đội ngũ chuyên viên của chúng tôi.</p>
    `.trim();

    return NextResponse.json({
      title: `${topic}: Cẩm nang chi tiết & Kinh nghiệm từ chuyên gia`,
      contentHtml: fallbackHtml,
    });
  } catch (error: any) {
    console.error('Error generating AI content:', error);
    return NextResponse.json(
      { error: error.message || 'Không thể khởi tạo nội dung AI.' },
      { status: 500 }
    );
  }
}
