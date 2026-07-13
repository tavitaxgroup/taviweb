# Legal Data Policy

## Nguyên tắc dữ liệu
Dữ liệu từ Google Maps/Facebook là dữ liệu public nhưng vẫn cần dùng cẩn trọng. Demo không được khiến khách hiểu rằng doanh nghiệp đã chính thức phê duyệt website.

## Quy tắc hiển thị
- Chỉ hiển thị field cần thiết cho demo.
- Không hiển thị dữ liệu nhạy cảm không public.
- Không chỉnh sửa rating/review count.
- Không tạo review giả mạo.
- Không dùng logo/ảnh có bản quyền nếu không có quyền rõ ràng.

## Google/Facebook
- Không scrape hoặc lưu dữ liệu trái với điều khoản nền tảng.
- Nếu dùng API chính thức, tuân thủ caching và attribution theo chính sách.
- Không dùng Facebook email để spam hàng loạt.
- Có cơ chế `do_not_contact`.

## Disclaimer đề xuất cho footer demo
```txt
Đây là bản demo giao diện được tạo từ thông tin công khai nhằm minh họa ý tưởng thiết kế. Nội dung có thể được chỉnh sửa theo thông tin chính thức của doanh nghiệp.
```

## Outreach compliance
- [ ] Có lý do liên hệ hợp lý.
- [ ] Tin nhắn ngắn, không gây hiểu nhầm.
- [ ] Có cách để khách từ chối nhận thêm liên hệ.
- [ ] Không gửi lặp nhiều lần trong thời gian ngắn.

## Khi khách yêu cầu gỡ
1. Đặt `outreach_status = do_not_contact`.
2. Đặt `demo_status = hidden` hoặc xóa quyền public.
3. Ghi chú thời gian và yêu cầu.
4. Không gửi tiếp qua kênh khác.
