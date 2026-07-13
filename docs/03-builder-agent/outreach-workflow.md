# Outreach Workflow

## Điều kiện gửi demo
Chỉ gửi khi:
- `demo_status = approved`
- `demo_url` không rỗng
- `outreach_status in ('not_sent', 'queued')`
- Có ít nhất một kênh liên hệ: phone, Facebook hoặc email

## Ưu tiên kênh
| Điều kiện | Kênh |
|---|---|
| Có số điện thoại/Zalo | Zalo |
| Có Facebook URL | Messenger/Facebook |
| Có email | Email |

## Nội dung tin nhắn nguyên tắc
- Cá nhân hóa bằng tên doanh nghiệp.
- Nói rõ đây là bản demo gợi ý.
- Không khẳng định thông tin chưa kiểm chứng.
- CTA nhẹ: “Anh/chị xem thử bản demo”.

## Ví dụ ngắn
```txt
Chào anh/chị {business.name}, bên em có dựng thử một bản demo website theo thông tin public của mình để anh/chị dễ hình dung giao diện mới:
{demo_url}
Nếu anh/chị muốn chỉnh lại màu sắc/nội dung theo thương hiệu hiện tại, em có thể gửi bản đề xuất chi tiết hơn.
```

## Update sau gửi
```ts
await updateBusiness({
  outreach_status: "sent",
  demo_status: "sent",
  zalo_sent_at: channel === "zalo" ? now : null,
  email_sent_at: channel === "email" ? now : null
})
```

## Không gửi nếu
- Doanh nghiệp yêu cầu không liên hệ.
- Dữ liệu có dấu hiệu sai nghiêm trọng.
- Demo không qua QC.
- Link demo trả lỗi.
