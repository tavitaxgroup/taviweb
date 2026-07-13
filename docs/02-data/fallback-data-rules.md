# Fallback Data Rules

## Mục tiêu fallback
Trang demo không được trống hoặc vỡ layout khi thiếu dữ liệu. Fallback cần trung thực, không giả mạo thông tin cụ thể của doanh nghiệp.

## Thiếu ảnh
| Tình huống | Xử lý |
|---|---|
| `image_url` null | Dùng ảnh fallback theo ngành |
| URL lỗi | Dùng fallback và log warning |
| Chỉ có 1 ảnh | Dùng 1 ảnh thật + placeholder ngành trong gallery |

Không dùng ảnh không liên quan, ảnh người nổi tiếng, logo thương hiệu khác hoặc ảnh có watermark rõ.

## Thiếu số điện thoại
| Có dữ liệu thay thế | CTA chính |
|---|---|
| Có `facebook_url` | `Nhắn Facebook` |
| Có `facebook_email` | `Gửi email` |
| Có địa chỉ | `Xem bản đồ` |
| Không có gì | `Xem thông tin demo` |

## Thiếu review/rating
- Ẩn điểm sao nếu thiếu `rating`.
- Ẩn số review nếu `user_ratings_total` thiếu hoặc bằng 0.
- Dùng trust badge generic: `Thông tin được trình bày rõ ràng`, `CTA dễ liên hệ`, `Tối ưu cho mobile`.

## Business đã có website
Không loại bỏ tự động. Cách hiển thị:
- Footer có thể ghi `Website hiện tại` nếu cần.
- Outreach nên định vị: “bản demo giao diện mới” hoặc “landing page chuyển đổi”.
- Không nói “doanh nghiệp chưa có website”.

## Fallback service
Mỗi ngành có 4-6 dịch vụ mặc định. Ví dụ nha khoa:
```json
[
  { "title": "Khám và tư vấn nha khoa", "description": "Trình bày dịch vụ khám tổng quát và tư vấn chăm sóc răng miệng." },
  { "title": "Tẩy trắng răng", "description": "Không gian giới thiệu dịch vụ thẩm mỹ nụ cười." },
  { "title": "Niềng răng", "description": "Mô tả quy trình tư vấn và theo dõi chỉnh nha." }
]
```

## Log fallback
Nên log ở `notes` hoặc bảng log riêng:
```txt
[warning] image_url missing, used fallback for template dental
[warning] phone missing, primary CTA changed to facebook
```
