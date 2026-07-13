# Builder Agent Overview

## Vai trò
Builder Agent là worker/agent chịu trách nhiệm biến record doanh nghiệp thành demo website có thể gửi khách.

## Nguồn dữ liệu
Agent đọc từ:
- Supabase bảng `businesses`.
- Google Sheet nếu dùng làm queue kiểm duyệt.
- File cấu hình template registry trong codebase.

## Điều kiện xử lý
Agent chỉ xử lý record:
```sql
demo_status in ('pending', 'failed_retryable')
and status in ('new', 'qualified')
```

## Luồng xử lý
1. Fetch batch doanh nghiệp.
2. Validate field bắt buộc.
3. Normalize industry.
4. Chọn `template_key`.
5. Build `DemoPageData`.
6. Validate object.
7. Tạo `demo_url`.
8. Cập nhật Supabase.
9. Đẩy record sang QC hoặc outreach queue.

## Pseudo-code batch
```ts
async function runBuilderBatch(limit = 50) {
  const leads = await fetchPendingBusinesses(limit)

  for (const business of leads) {
    try {
      await markGenerating(business.id)
      validateRequiredFields(business)
      const templateKey = business.template_key ?? routeTemplateByIndustry(business.industry)
      const data = buildDemoPageData(business, templateKey)
      validateDemoPageData(data)
      const demoUrl = buildDemoUrl(business.place_id)
      await updateDemoReady(business.id, { templateKey, demoUrl })
    } catch (error) {
      await logDemoFailure(business.id, error)
    }
  }
}
```

## Nguyên tắc an toàn
- Không ghi đè `name`, `phone`, `rating`, `website`, `image_url`.
- Update có điều kiện để tránh race condition:
```sql
where id = :id and demo_status in ('pending', 'generating')
```
- Mọi lỗi phải có message đủ rõ để retry.
