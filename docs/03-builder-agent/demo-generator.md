# Demo Generator

## Mô hình tạo demo
MVP không cần build static page riêng cho từng doanh nghiệp. Demo được tạo bằng cách đảm bảo route `/demo/[place_id]` có thể fetch record và render đúng template.

## Tạo demo URL
```ts
function buildDemoUrl(placeId: string) {
  return `${process.env.NEXT_PUBLIC_SITE_URL}/demo/${encodeURIComponent(placeId)}`
}
```

## Update Supabase
```ts
await supabase
  .from("businesses")
  .update({
    demo_url: demoUrl,
    demo_status: "ready",
    template_key: templateKey,
    updated_at: new Date().toISOString()
  })
  .eq("id", business.id)
```

## Khi render lỗi
| Lỗi | Xử lý |
|---|---|
| Không tìm thấy `place_id` | render 404 |
| Unknown `template_key` | fallback hoặc 500 có log |
| Ảnh lỗi | render fallback image |
| Thiếu phone | CTA chuyển sang map/facebook |

## Review trước khi gửi
Agent có thể đặt `demo_status = ready`. Người hoặc QC worker đổi sang `approved` sau khi kiểm tra. Outreach chỉ gửi record `approved`.
