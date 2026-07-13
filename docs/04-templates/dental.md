# Template Spec: Nha Khoa

## 1. Template key
`dental`

## 2. Industry mapping
| Keyword | Match |
|---|---|
| nha khoa | direct |
| dentist | direct |
| dental clinic | direct |
| răng hàm mặt | related |

## 3. Mục tiêu cảm xúc
Sạch sẽ, an tâm, chuyên môn cao, thân thiện với gia đình.

## 4. Đối tượng khách hàng
Gia đình, người đi làm, phụ huynh có con cần chăm sóc răng, khách hàng quan tâm thẩm mỹ nụ cười.

## 5. Phong cách visual
Không gian sáng, nhiều khoảng trắng, ảnh ghế nha khoa hoặc nụ cười tự nhiên. Tránh cảm giác bệnh viện lạnh lẽo.

## 6. Màu sắc đề xuất
| Vai trò | Màu |
|---|---|
| Primary | teal `#0F766E` |
| Secondary | mint `#CCFBF1` |
| Accent | sky `#38BDF8` |
| Background | `#F8FAFC` |

## 7. Typography direction
Heading dùng `Manrope` hoặc `Plus Jakarta Sans`; body dùng `Inter`. Nét chữ rõ, tin cậy, hiện đại.

## 8. Hero direction
Hero nêu tên nha khoa, khu vực, lời hứa về nụ cười khỏe đẹp. CTA chính là gọi điện/đặt lịch, CTA phụ xem bản đồ.

## 9. Service section direction
Dịch vụ mặc định:
| Service | Mô tả |
|---|---|
| Khám và tư vấn nha khoa | Kiểm tra tình trạng răng miệng và tư vấn hướng điều trị phù hợp. |
| Cạo vôi và vệ sinh răng | Trình bày dịch vụ chăm sóc định kỳ. |
| Tẩy trắng răng | Nhấn mạnh thẩm mỹ nụ cười. |
| Niềng răng | Dịch vụ chỉnh nha cho trẻ em và người lớn. |
| Răng sứ thẩm mỹ | Cải thiện dáng răng và màu răng. |
| Điều trị răng đau | CTA đặt lịch khi cần hỗ trợ sớm. |

## 10. Gallery direction
Ưu tiên ảnh phòng khám, ghế điều trị, quầy lễ tân, đội ngũ. Nếu thiếu ảnh, dùng placeholder y tế sạch.

## 11. Review/trust direction
Hiển thị rating Google, số review, badge `Tư vấn rõ ràng`, `Không gian sạch`, `Dễ đặt lịch`.

## 12. CTA direction
CTA: `Đặt lịch tư vấn`, `Gọi ngay`, `Xem bản đồ`.

## 13. Những điều cần tránh
- Không dùng ảnh phẫu thuật hoặc ảnh răng quá cận cảnh gây khó chịu.
- Không hứa kết quả y khoa tuyệt đối.
- Không tạo review giả như người thật.

## 14. Data mapping riêng
| Data | Vị trí |
|---|---|
| `name` | Hero title, navbar, footer |
| `rating` | Trust bar, reviews intro |
| `formatted_phone_number` | CTA đặt lịch |
| `image_url` | Hero image, gallery first item |
| `formatted_address` | Contact CTA, map query |

## 15. Checklist thiết kế
- [ ] Hero nhìn sạch và đáng tin.
- [ ] CTA đặt lịch xuất hiện trên hero và cuối trang.
- [ ] Không dùng hình ảnh y khoa nhạy cảm.
- [ ] Service card có 4-6 dịch vụ nha khoa.
- [ ] Mobile không làm vỡ tên phòng khám dài.
