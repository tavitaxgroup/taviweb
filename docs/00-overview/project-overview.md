# Project Overview

## Tên dự án
Builder Agent tạo website demo tự động cho doanh nghiệp.

## Bài toán
Dữ liệu doanh nghiệp đã có trong Supabase, được tổng hợp từ Google Maps và Facebook. Mỗi bản ghi có thông tin nhận diện, liên hệ, hình ảnh, rating, review count, website hiện tại, fanpage, followers và email. Dự án cần biến dữ liệu đó thành các website demo cá nhân hóa theo ngành tại route:

```txt
/demo/{place_id}
```

## Luồng tổng quát
1. Thu thập hoặc nhập dữ liệu doanh nghiệp vào bảng `businesses`.
2. Chuẩn hóa `industry` và gán `template_key`.
3. Builder Agent đọc doanh nghiệp có `demo_status = pending`.
4. Agent chọn template theo `template_key`.
5. Agent dựng `DemoPageData` từ dữ liệu thật và fallback.
6. Next.js render trang demo động tại `/demo/[place_id]`.
7. Agent cập nhật `demo_url`, `demo_status`, log lỗi nếu có.
8. Sau khi review, Agent gửi link demo qua Zalo hoặc email.

## Cấu trúc website chuẩn
Mọi template ngành phải giữ cùng thứ tự section để dễ automation:

| Thứ tự | Section | Component đề xuất | Mục đích |
|---:|---|---|---|
| 1 | Navbar | `DemoNavbar` | Hiển thị tên, CTA gọi điện/liên hệ |
| 2 | Hero Section | `DemoHero` | Tạo ấn tượng đầu tiên và CTA |
| 3 | Trust/Social Proof | `TrustBar` | Rating, review, followers |
| 4 | About Section | `AboutSection` | Giới thiệu doanh nghiệp |
| 5 | Services Section | `ServicesSection` | Dịch vụ chính theo ngành |
| 6 | Gallery Section | `GallerySection` | Ảnh thực tế hoặc ảnh fallback |
| 7 | Why Choose Us | `WhyChooseUsSection` | Lý do chọn doanh nghiệp |
| 8 | Reviews Section | `ReviewsSection` | Review, rating, bằng chứng xã hội |
| 9 | Contact CTA | `ContactCTASection` | Gọi điện, mở map, nhắn Facebook |
| 10 | Footer | `DemoFooter` | Thông tin, link, ghi chú demo |

## Đầu ra chính
- Bộ template UI theo ngành cho Stitch AI.
- Prompt chuyển design thành Next.js cho Studio AI.
- Quy tắc Builder Agent chọn template và map dữ liệu.
- Tài liệu triển khai Next.js, Supabase, Vercel.
- Checklist kiểm soát chất lượng trước khi gửi khách.

## Nguyên tắc quan trọng
- Không hard-code tên, ảnh, số điện thoại, địa chỉ trong component.
- Mọi dữ liệu vào trang phải đi qua `DemoPageData`.
- Template theo ngành khác nhau về tone, màu, nội dung dịch vụ, nhưng không khác cấu trúc website.
- Fallback phải đủ tốt để demo không bị trống khi thiếu ảnh, review hoặc số điện thoại.
- Trang demo là bản gợi ý thương mại, cần tránh diễn đạt như website chính thức nếu chưa được khách xác nhận.
