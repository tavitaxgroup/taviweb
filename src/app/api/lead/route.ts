import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, phone, service } = body;

    if (!phone) {
      return NextResponse.json({ error: "Số điện thoại là bắt buộc" }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.trim() === "") {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
      // Return fallback success to prevent client errors if not configured yet
      return NextResponse.json({ 
        success: true, 
        warning: "GOOGLE_SHEETS_WEBHOOK_URL chưa được cấu hình trong .env.local" 
      });
    }

    // Prepare lead payload for Google Sheets Web App Webhook
    const payload = {
      type: type === "consult" ? "Tư vấn nhanh" : "Liên hệ chi tiết",
      name: name || "Khách hàng vãng lai",
      phone: phone,
      service: service || "Nhu cầu chung",
      status: "Mới",
      timestamp: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
    };

    // Forward request to Google Sheets Google Apps Script URL
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const result = await response.json().catch(() => ({}));
    if (result.status === "error") {
      throw new Error(result.message || "Google Apps Script error");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error submitting lead to Google Sheets:", error);
    return NextResponse.json(
      { error: error.message || "Gửi thông tin thất bại" },
      { status: 500 }
    );
  }
}
