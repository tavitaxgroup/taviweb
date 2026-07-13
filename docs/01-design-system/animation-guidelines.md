# Animation Guidelines

## Mục tiêu
Animation chỉ dùng để làm giao diện mượt và premium hơn, không làm nặng trang demo hoặc che dữ liệu.

## Animation được phép
| Pattern | Thời lượng | Dùng cho |
|---|---:|---|
| Fade up | 200-400ms | Section/card xuất hiện |
| Hover lift | 150-220ms | Service card, CTA |
| Image zoom nhẹ | 300ms | Gallery hover desktop |
| Sticky navbar shadow | tức thời/150ms | Khi scroll |

## Không nên dùng
- Parallax nặng.
- Animation vô hạn trên nhiều element.
- Text typing effect cho nội dung quan trọng.
- Scroll hijacking.
- Transition layout làm dịch chuyển CTA.

## Accessibility
Tôn trọng `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Quy tắc hiệu năng
- Animate `opacity` và `transform`, tránh animate `width`, `height`, `top`, `left`.
- Không dùng video background cho MVP trừ khi đã tối ưu.
