# Business Data Schema

## Field chi tiết
| Field | Kiểu | Ý nghĩa | Ví dụ |
|---|---|---|---|
| `id` | uuid | ID nội bộ Supabase | `b0d...` |
| `place_id` | text | Google Place ID hoặc ID duy nhất | `ChIJ...` |
| `industry` | text | Ngành đã chuẩn hóa hoặc raw | `dental` |
| `status` | text | Trạng thái lead | `qualified` |
| `name` | text | Tên doanh nghiệp | `Nha Khoa ABC` |
| `formatted_address` | text | Địa chỉ đầy đủ | `123 Nguyễn Trãi, Q.1` |
| `formatted_phone_number` | text | Số điện thoại public | `0901 234 567` |
| `website` | text | Website hiện tại | `https://...` |
| `image_url` | text | Ảnh đại diện public | `https://...jpg` |
| `rating` | number | Điểm rating | `4.7` |
| `user_ratings_total` | number | Số review | `128` |
| `facebook_url` | text | Fanpage | `https://facebook.com/...` |
| `facebook_followers` | number | Số followers | `2500` |
| `facebook_email` | text | Email từ Facebook | `hello@...` |

## Field bắt buộc để tạo demo tối thiểu
- `place_id`
- `industry`
- `name`

Nếu thiếu 3 field này, không tạo demo. Cập nhật:

```txt
demo_status = failed
notes = "Missing required field: place_id/industry/name"
```

## Field nên có để demo tốt
- `formatted_address`
- `formatted_phone_number`
- `image_url`
- `rating`
- `user_ratings_total`
- `facebook_url`

## Ví dụ record
```json
{
  "place_id": "ChIJ123",
  "industry": "dental",
  "name": "Nha Khoa Minh Tâm",
  "formatted_address": "24 Lê Lợi, Quận 1, TP.HCM",
  "formatted_phone_number": "0901 234 567",
  "website": null,
  "image_url": "https://example.com/photo.jpg",
  "rating": 4.8,
  "user_ratings_total": 214,
  "facebook_url": "https://facebook.com/nhakhoaminhtam",
  "facebook_followers": 3200,
  "facebook_email": "contact@example.com"
}
```
