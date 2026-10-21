# Template Spec: Kiến Trúc & Xây Dựng Cao Cấp (Prague Architecture)

Cập nhật: 2026-10-21.

## 1. Thông tin chung
- **Mã mẫu (Catalog ID)**: `XD002`
- **Template Key**: `xay_dung_2`
- **Ngành chính (Industry Key)**: `cong_ty_xay_dung`
- **Package Name**: Gói website xây dựng cao cấp
- **Source Code**: `src/template-sources/xay_dung_2/`
- **Standalone Route**: `/xay-dung-2`
- **Demo Route**: `/demo/[place_id]?template=xay_dung_2`
- **Ảnh chụp toàn trang**: `public/assets/anh-template/xay-dung/XD002-prague.webp`

## 2. Phong cách thiết kế (Design Philosophy)
- Phong cách tối giản, sang trọng chuẩn Châu Âu (European Architectural Minimalism).
- Sử dụng typography thanh lịch (`font-serif` kết hợp `font-sans`), không gian âm rộng rãi, hiệu ứng chuyển động mượt mà.
- Phù hợp cho các công ty kiến trúc, tổng thầu xây dựng cao cấp, biệt thự, resort, cảnh quan và hoàn thiện nội ngoại thất.

## 3. Màu sắc & Nhận diện
| Vai trò | Màu | Mã Hex |
|---|---|---|
| Background | Slate Dark / Ivory Light | `#0f172a` / `#f8fafc` |
| Primary Accent | Amber Bronze / Gold | `#d97706` / `#b45309` |
| Text Primary | White / Dark Charcoal | `#ffffff` / `#0f172a` |
| Text Muted | Slate 400 | `#94a3b8` |

## 4. Các khối chức năng chính (Sections)
1. **Header / Navbar**: Logo thương hiệu, menu điều hướng đa mục, nút báo giá / liên hệ.
2. **Hero Banner**: Tiêu đề "Kiến Tạo Không Gian Sống Đẳng Cấp", background ảnh kiến trúc toàn cảnh, chỉ số ấn tượng.
3. **Giới thiệu & Triết lý thiết kế (About & Philosophy)**: Trình bày tầm nhìn, sứ mệnh, số năm kinh nghiệm và cam kết chất lượng.
4. **Dịch vụ cốt lõi (Services)**:
   - Thiết kế kiến trúc biệt thự & công trình cao cấp.
   - Thi công xây dựng trọn gói (chìa khóa trao tay).
   - Thiết kế & sản xuất thi công nội thất.
   - Giám sát tác giả & quản lý dự án.
5. **Bộ sưu tập dự án (Projects Gallery)**: Lưới dự án đa phong cách (hiện đại, tân cổ điển, cảnh quan), lọc theo danh mục.
6. **Chỉ số năng lực & Thống kê (Counters)**: Số lượng công trình hoàn thành, diện tích sàn, tỉ lệ hài lòng.
7. **Đội ngũ chuyên gia (Architectural Team)**: Kiến trúc sư trưởng, kỹ sư kết cấu, chuyên gia nội thất.
8. **Giải thưởng & Chứng nhận (Awards)**: Khẳng định uy tín và giải thưởng kiến trúc danh giá.
9. **Đánh giá từ khách hàng & đối tác (Testimonials)**: Trải nghiệm thực tế từ chủ đầu tư.
10. **Biểu mẫu dự toán & Báo giá nhanh (Cost Estimation Form)**: Hỗ trợ khách hàng gửi thông tin diện tích, quy mô công trình để nhận báo giá tức thì.
11. **Footer**: Thông tin liên hệ, hotline, địa chỉ, bản đồ và mạng xã hội.

## 5. Dữ liệu động kết nối (Dynamic Lead Injection)
- Đồng bộ tự động tên doanh nghiệp, số điện thoại hotline, địa chỉ từ Supabase table `leads`.
- Hỗ trợ ghi đè linh hoạt qua cột `template_data` JSON.
