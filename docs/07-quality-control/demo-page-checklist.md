# Demo Page Checklist

## Functional
- [ ] `/demo/{place_id}` mở được.
- [ ] Unknown `place_id` trả 404.
- [ ] Template đúng với `template_key`.
- [ ] Nếu `template_key` null, router chọn đúng theo `industry`.
- [ ] Không có lỗi console nghiêm trọng.

## Data fallback
- [ ] Thiếu ảnh vẫn có hero đẹp.
- [ ] Thiếu phone vẫn có CTA khác.
- [ ] Thiếu rating không còn sao rỗng.
- [ ] Thiếu review count không hiển thị `0 reviews` nếu không có dữ liệu.
- [ ] Tên dài không vỡ layout.

## Responsive
- [ ] 360px không tràn ngang.
- [ ] 768px layout tablet ổn.
- [ ] 1440px container không quá rộng.
- [ ] Navbar mobile dễ dùng.
- [ ] CTA mobile bấm được bằng ngón tay.

## Performance
- [ ] Hero image load nhanh.
- [ ] Gallery lazy load.
- [ ] Không có layout shift lớn.
- [ ] Lighthouse performance >= 85.

## Before outreach
- [ ] `demo_status = approved`.
- [ ] `demo_url` mở được từ trình duyệt ẩn danh.
- [ ] Tin nhắn outreach đúng tên doanh nghiệp.
- [ ] Không gửi nếu dữ liệu có dấu hiệu sai nghiêm trọng.
