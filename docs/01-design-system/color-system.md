# Color System

## Nguyên tắc màu
Mỗi ngành có palette riêng nhưng dùng cùng vai trò màu:

| Token | Mục đích |
|---|---|
| `color.background` | Nền tổng thể |
| `color.surface` | Nền card/section phụ |
| `color.primary` | CTA chính, điểm nhấn |
| `color.secondary` | CTA phụ hoặc badge |
| `color.text` | Text chính |
| `color.muted` | Text phụ |
| `color.border` | Border nhẹ |
| `color.success` | Trạng thái tốt |
| `color.warning` | Cảnh báo nhẹ |

## Palette đề xuất theo nhóm ngành
| Nhóm | Primary | Secondary | Background |
|---|---|---|---|
| Y tế/Nha khoa | xanh teal `#0F766E` | xanh nhạt `#CCFBF1` | trắng lạnh `#F8FAFC` |
| Spa/Thẩm mỹ | rose `#BE5770` | champagne `#F4D7C5` | ivory `#FFFBF7` |
| Luật | navy `#1E3A5F` | gold `#C7A052` | xám sáng `#F8F7F4` |
| Giáo dục | blue `#2563EB` | amber `#F59E0B` | trắng `#FFFFFF` |
| Nhà hàng/Cafe | burgundy `#7F1D1D` | olive `#6B7A40` | warm white `#FAF7F2` |
| Công nghiệp/Garage | graphite `#1F2937` | orange `#F97316` | xám `#F3F4F6` |

## CTA contrast
- Primary CTA phải có contrast cao trên nền.
- Nếu dùng màu pastel, text CTA nên là màu đậm.
- Không dùng gradient phức tạp làm nền CTA trong MVP.

## Ví dụ CSS token
```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --primary: #0f766e;
  --secondary: #ccfbf1;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
}
```
