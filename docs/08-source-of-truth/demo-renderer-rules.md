# Source Of Truth - Demo Renderer Rules

Cap nhat: 2026-07-15.

Demo renderer la phan render website demo public theo `place_id`. Route `/demo/[place_id]` phai hien truc tiep landing page cua doanh nghiep, khong hien dashboard hay man hinh cau hinh.

## Muc tieu

Khi truy cap:

```txt
/demo/{place_id}
```

He thong phai:

1. Lay `place_id` tu URL.
2. Goi `getBusinessByPlaceId(place_id)` de fetch tu Supabase table `leads`.
3. Neu khong tim thay lead hoac la mock URL, fallback sang `getMockLeadByPlaceId(place_id)`.
4. Chon template bang `routeTemplateByIndustry(lead.industry)`.
5. Build `DemoPageData` bang `buildDemoPageData`.
6. Render template qua `DemoTemplateRenderer` va `StudioTemplateRenderer`.

## Khong duoc tao trong route demo

- Dashboard.
- Playground.
- Form nhap ten doanh nghiep.
- Form chon doanh nghiep mau.
- Live editor.
- Preset launcher.
- UI cau hinh du lieu.

## File chinh

| File | Vai tro |
|---|---|
| `src/app/demo/[place_id]/page.tsx` | Fetch lead, build data, render template |
| `src/app/demo/[place_id]/not-found.tsx` | Trang fallback khi khong co lead |
| `src/lib/supabase/server.ts` | Fetch Supabase REST API |
| `src/lib/demo/buildDemoPageData.ts` | Map lead thanh `DemoPageData` |
| `src/lib/demo/mockDemoData.ts` | Mock data cho 15 nganh |
| `src/lib/demo/templateRouter.ts` | Chon template theo industry |
| `src/lib/demo/templateDefaults.ts` | Fallback text, service, image theo nganh |
| `src/components/demo/DemoTemplateRenderer.tsx` | Renderer entry |
| `src/components/demo/StudioTemplateRenderer.tsx` | Adapter va registry 15 template that |
| `src/template-sources/{industry}` | Source template da import tu Studio AI |

## Supabase table

Ten bang hien tai:

```txt
leads
```

Field quan trong:

| Field | Vai tro |
|---|---|
| `id` | ID noi bo Supabase |
| `place_id` | Route `/demo/[place_id]` |
| `industry` | Chon template |
| `status` | Trang thai lead |
| `name` | Ten doanh nghiep |
| `formatted_address` | Dia chi |
| `formatted_phone_number` | CTA goi dien |
| `website` | Hien dang dung nhu link Facebook fallback neu co |
| `image_url` | Anh Google/Facebook neu co |
| `rating` | Trust metric |
| `user_ratings_total` | Review count |
| `facebook_url` | Link Facebook uu tien neu co |
| `facebook_followers` | Social proof neu co |
| `facebook_email` | Email neu co |
| `demo_url` | URL demo da tao |
| `demo_status` | Trang thai demo |
| `outreach_status` | Trang thai outreach |
| `notes` | Ghi chu noi bo |

## Quy tac Facebook link

Trong giai doan hien tai:

1. Neu `facebook_url` co gia tri, uu tien dung `facebook_url`.
2. Neu `facebook_url` trong nhung `website` co gia tri, coi `website` la link Facebook.
3. Neu khong co ca hai, CTA Facebook fallback ve `https://facebook.com/`.

Quy tac hien thi:

- Khong hien raw URL dai trong UI neu co the hien bang button.
- Label nen la `Lien he Facebook`, `Tu van qua Facebook`, hoac tuong duong theo template.
- Neu URL bi sai dang `https://https//...`, mapper phai normalize truoc khi render.

## Fallback quan trong

- Thieu anh: dung anh fallback theo nganh trong `templateDefaults` hoac template source.
- Thieu phone: CTA chuyen sang Facebook, email hoac map.
- Thieu rating: an metric rating neu template ho tro.
- Ten doanh nghiep dai: navbar phai hien hop ly, khong lam vo layout.
- `industry` khong hop le: fallback ve `phong_kham` theo `DEFAULT_TEMPLATE_KEY`.

## Mock route chuan

Moi nganh co mock route:

```txt
/demo/mock-{industry_key}
```

Vi du:

```txt
/demo/mock-nha_khoa
/demo/mock-spa
/demo/mock-garage_oto
```

Mock data chi de preview he thong. Khong dua mock data vao UI component.

## Checklist khi sua demo renderer

- [ ] `/demo/mock-nha_khoa` van chay.
- [ ] `/demo/mock-spa` van chay.
- [ ] `/demo/mock-garage_oto` van chay.
- [ ] Mot lead Supabase that render dung template theo `industry`.
- [ ] Lead ten dai khong lam vo navbar.
- [ ] Thieu anh co fallback.
- [ ] Thieu phone co CTA thay the.
- [ ] Co Facebook URL thi button link dung.
- [ ] Khong lam thay doi kho giao dien neu chi sua demo renderer.
