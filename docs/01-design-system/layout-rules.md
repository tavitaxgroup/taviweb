# Layout Rules

## Layout chuẩn
Mỗi trang demo dùng cùng thứ tự:
1. Navbar
2. Hero
3. Trust/Social Proof
4. About
5. Services
6. Gallery
7. Why Choose Us
8. Reviews
9. Contact CTA
10. Footer

## Grid
| Viewport | Container | Grid |
|---|---|---|
| Mobile `< 640px` | full width, padding 20px | 1 column |
| Tablet `640-1023px` | padding 24px | 2 columns khi phù hợp |
| Desktop `>= 1024px` | max 1120px | 12-column hoặc CSS grid 2/3 columns |

## Section rhythm
```css
.section {
  padding: 56px 20px;
}

@media (min-width: 768px) {
  .section {
    padding: 88px 32px;
  }
}
```

## Hero layout
- Mobile: text trước, ảnh sau hoặc ảnh nền có overlay rõ.
- Desktop: 2 cột, text 45%-55%, media 45%-55%.
- Hero phải hiển thị tên doanh nghiệp, ngành/dịch vụ chính, địa chỉ ngắn và CTA trong màn hình đầu.

## Card layout
- Service cards: 1 cột mobile, 3 cột desktop.
- Review cards: carousel hoặc grid 1/3, nhưng không cần hiệu ứng phức tạp.
- Cards không được phụ thuộc vào chiều dài text cố định.

## Gallery layout
| Số ảnh | Layout |
|---:|---|
| 0 | Hiển thị fallback visual theo ngành |
| 1 | 1 ảnh lớn |
| 2-3 | Grid đều |
| 4+ | Mosaic đơn giản hoặc grid 4 ảnh |

## Không nên làm
- Không tạo layout mỗi ngành quá khác nhau.
- Không dùng hero dạng quá editorial nếu khó map dữ liệu.
- Không để card lồng trong card.
- Không để text dài làm vỡ CTA hoặc navbar.
- Không dùng hiệu ứng parallax nặng cho MVP.
