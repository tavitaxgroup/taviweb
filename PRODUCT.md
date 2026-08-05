# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Chủ doanh nghiệp nhỏ và vừa (SMB) tại Việt Nam có nhu cầu sở hữu website giới thiệu hoặc bán hàng chuyên nghiệp nhanh chóng. Họ muốn kiểm tra chất lượng giao diện thực tế trước khi quyết định ký hợp đồng.

## Product Purpose
TAVIWEB giúp doanh nghiệp Việt có thể xem trước giao diện trang web thực tế của mình chỉ trong vài giây bằng cách kéo thông tin và dữ liệu tự động của doanh nghiệp từ Google Place ID, từ đó rút ngắn thời gian tư vấn, thuyết phục khách hàng và tăng tỷ lệ chuyển đổi ký kết hợp đồng thiết kế.

## Positioning
Nền tảng thiết kế website thông minh & demo tự động đầu tiên dành cho doanh nghiệp Việt. Thay vì vẽ wireframe hoặc chọn template tĩnh từ xa, TAVIWEB tự động tạo ra một website demo thực tế hoàn chỉnh sử dụng chính thông tin, địa chỉ, ảnh, hotline và đánh giá thật của khách hàng từ Google Business/Place ID.

## Operating Context
Hệ thống vận hành song song hai luồng:
1. Landing page giới thiệu TAVIWEB, bảng giá, quy trình và kho giao diện mẫu.
2. Trình kết xuất demo (/demo/[place_id]) tự động lấy dữ liệu lead từ Supabase table `leads` và nạp vào 15 giao diện ngành mẫu (dental, clinic, cafe, construction, spa, gym, etc.) để hiển thị tức thì.

## Capabilities and Constraints
- Khả năng: Tạo demo tự động dựa trên dữ liệu Google Place ID. Kho giao diện mẫu hỗ trợ 15 ngành nghề Việt Nam.
- Ràng buộc: Toàn bộ các template giao diện phải được phát triển độc lập và tự đóng gói (self-contained), không được nhúng bất kỳ hàm truy vấn hoặc fetch dữ liệu trực tiếp từ cơ sở dữ liệu Supabase hay REST API nội bộ để tránh xung đột hiệu năng. Tất cả dữ liệu của lead phải được truyền gián tiếp qua Adapter/State từ ngoài vào.

## Brand Commitments
- Thương hiệu: TAVIWEB.
- Tiêu chí thiết kế: Giao diện hiện đại, tối giản, sang trọng, tập trung tối đa vào tốc độ tải trang nhanh và tối ưu SEO.
- Tông giọng: Chuyên nghiệp, đáng tin cậy, thực tế và minh bạch.

## Evidence on Hand
- Kho dữ liệu mock cho 15 ngành nghề thông dụng tại Việt Nam (spa, nha khoa, cafe, etc.) nằm trong `src/lib/demo/mockDemoData.ts`.
- 15 mẫu mã nguồn website hoàn chỉnh đã được cấu hình adapter nằm trong `src/template-sources/`.
- Tài liệu quy chuẩn kiến trúc hiện tại nằm trong `docs/08-source-of-truth/`.

## Product Principles
1. **Trải nghiệm thực tế đi trước**: Khách hàng luôn được thấy và tương tác trực tiếp với website của chính họ trước khi nghe báo giá chi tiết.
2. **Minh bạch & Độc lập**: Không sử dụng các cam kết ảo về hiệu năng. Thiết kế giao diện rõ ràng, bàn giao source code độc lập cho khách quản trị.
3. **Thẩm mỹ cao cấp**: Giao diện đạt chuẩn hiện đại của các SaaS toàn cầu nhưng được bản địa hóa ngôn ngữ và nội dung hoàn hảo cho thị trường Việt Nam.
