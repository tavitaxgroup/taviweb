# Deployment Vercel

## Chuẩn bị
1. Push code lên GitHub.
2. Import project vào Vercel.
3. Chọn framework Next.js.
4. Thêm environment variables.
5. Deploy preview.
6. Test `/demo/{place_id}` với record thật.

## Environment variables trên Vercel
| Variable | Scope | Ghi chú |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | client/server | URL Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | client/server | anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | server only | không expose client |
| `NEXT_PUBLIC_SITE_URL` | client/server | domain production |

## Quy trình deploy
```txt
main branch -> production
feature branch -> preview deployment
```

## Test sau deploy
- [ ] `/demo/{place_id}` render được.
- [ ] Unknown place_id trả 404.
- [ ] Thiếu ảnh vẫn render.
- [ ] Thiếu phone vẫn có CTA thay thế.
- [ ] Metadata đúng.
- [ ] Không expose service role key trong browser.

## Domain
MVP có thể dùng:
```txt
https://builder-demo.vercel.app/demo/{place_id}
```

Khi gửi khách nhiều hơn, nên dùng domain riêng:
```txt
https://demo.tencongtycuaban.com/demo/{place_id}
```
