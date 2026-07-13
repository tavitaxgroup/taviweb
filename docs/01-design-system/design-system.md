# Design System Chung

## Mục tiêu
Design system này dùng cho 15 template demo website. Cảm giác tổng thể: premium, rõ ràng, hiện đại, dễ code, dễ thay dữ liệu tự động, không quá cầu kỳ.

## Nguyên tắc thiết kế
- Mobile-first, sau đó mở rộng lên tablet và desktop.
- Cấu trúc section cố định để Builder Agent map dữ liệu nhất quán.
- Mỗi section phải chịu được dữ liệu ngắn, dài hoặc thiếu một phần.
- Ảnh thực tế từ Google Maps/Facebook có thể không đồng đều nên layout phải có crop an toàn.
- CTA luôn rõ: gọi điện, xem bản đồ, nhắn Facebook hoặc gửi email.

## Token cơ bản
| Token | Giá trị |
|---|---|
| Container max width | `1120px` |
| Section padding mobile | `56px 20px` |
| Section padding desktop | `88px 32px` |
| Grid gap | `16px`, `24px`, `32px` |
| Border radius small | `8px` |
| Border radius card | `12px` |
| Border radius image | `16px` |
| Shadow card | `0 12px 32px rgba(15, 23, 42, 0.08)` |
| Hero image ratio | `4 / 3` hoặc `16 / 10` |
| Gallery ratio | `4 / 3` |
| Avatar ratio | `1 / 1` |

## Component dùng chung
| Component | Props chính | Ghi chú |
|---|---|---|
| `DemoNavbar` | `business`, `contact` | Sticky nhẹ, không che nội dung |
| `DemoHero` | `hero`, `business`, `contact` | Có CTA chính/phụ |
| `TrustBar` | `rating`, `reviewCount`, `followers` | Ẩn item thiếu dữ liệu |
| `AboutSection` | `about`, `business` | 2 cột desktop, 1 cột mobile |
| `ServicesSection` | `services[]` | 3-6 cards |
| `GallerySection` | `gallery[]` | 4-8 ảnh, fallback nếu thiếu |
| `WhyChooseUsSection` | `benefits[]` | 3-4 lợi ích |
| `ReviewsSection` | `reviews[]`, `rating` | Có fallback review copy |
| `ContactCTASection` | `contact`, `business` | CTA cuối trang |
| `DemoFooter` | `business`, `seo` | Có ghi chú demo nếu cần |

## CTA
CTA chính nên là hành động có xác suất chuyển đổi cao nhất:

| Điều kiện dữ liệu | CTA chính | CTA phụ |
|---|---|---|
| Có số điện thoại | Gọi ngay | Xem bản đồ |
| Không có số, có Facebook | Nhắn Facebook | Xem bản đồ |
| Có email | Gửi email | Xem bản đồ |
| Thiếu toàn bộ liên hệ | Xem vị trí | Xem dịch vụ |

## Accessibility
- Contrast text/body tối thiểu 4.5:1.
- Button có `aria-label` khi chỉ dùng icon.
- Focus state rõ cho link và button.
- Không dùng text trên ảnh nếu ảnh quá rối mà không có overlay.
- Không phụ thuộc màu sắc để truyền trạng thái.

## Tone chung
Template theo ngành được phép khác màu và cảm xúc, nhưng vẫn giữ cùng skeleton. Ví dụ spa mềm mại hơn garage, nhưng cả hai vẫn có Navbar, Hero, Trust, About, Services, Gallery, Why Choose Us, Reviews, Contact CTA, Footer.
