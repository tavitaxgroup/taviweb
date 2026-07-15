# Source Of Truth - Project Architecture

Cap nhat: 2026-07-15.

Tai lieu nay la nguon su that cho kien truc hien tai cua project `taviweb`. Moi developer hoac AI coding agent phai doc file nay truoc khi sua code de tranh lam lech cau truc he thong.

## Vai tro he thong

`taviweb` la mot Next.js App Router project duy nhat, gom 3 khu vuc chinh:

| Khu vuc | Route | Vai tro |
|---|---|---|
| Website cong ty | `/` | Trang gioi thieu TAVIWEB, dich vu thiet ke website, quy trinh, bang gia va form lien he |
| Kho giao dien | `/kho-giao-dien` | Thu vien mau website theo 15 nganh nghe de khach xem va chon mau |
| Demo renderer | `/demo/[place_id]` | Render website demo theo du lieu lead tu Supabase table `leads` hoac mock data |

Khong tach thanh nhieu app deploy trong MVP. Website cong ty, kho giao dien va demo renderer dung chung domain, chung codebase va chung deploy Vercel.

## Route hien tai

```txt
src/app/page.tsx
src/app/demo/[place_id]/page.tsx
src/app/kho-giao-dien/page.tsx
src/app/kho-giao-dien/[industry_key]/page.tsx
src/app/kho-giao-dien/[industry_key]/[template_id]/page.tsx
```

Y nghia:

- `/`: trang chu TAVIWEB.
- `/kho-giao-dien`: trang tong kho giao dien, co sidebar 15 nganh nghe.
- `/kho-giao-dien/[industry_key]`: trang kho giao dien cua tung nganh.
- `/kho-giao-dien/[industry_key]/[template_id]`: trang chi tiet item trong catalog, dung khi can mo rong nhieu mau.
- `/demo/[place_id]`: render landing page demo theo `place_id`.

## Phan vung code

| Folder/file | Vai tro |
|---|---|
| `src/components/company` | UI trang cong ty TAVIWEB |
| `src/components/template-gallery` | UI kho giao dien |
| `src/components/demo/DemoTemplateRenderer.tsx` | Entry renderer cho demo |
| `src/components/demo/StudioTemplateRenderer.tsx` | Registry va adapter de render 15 template that |
| `src/lib/templates/templateCatalog.ts` | Catalog 15 nganh va danh sach mau trong kho giao dien |
| `src/lib/demo/buildDemoPageData.ts` | Map `BusinessLead` thanh `DemoPageData` |
| `src/lib/demo/mockDemoData.ts` | Mock lead cho `/demo/mock-{industry_key}` |
| `src/lib/demo/templateRouter.ts` | Chon template theo `industry` |
| `src/lib/demo/templateDefaults.ts` | Fallback content theo tung nganh |
| `src/lib/supabase/server.ts` | Fetch lead tu Supabase REST API |
| `src/template-sources` | 15 template render that theo nganh |
| `src/types/demo.ts` | Type chung: `IndustryKey`, `BusinessLead`, `DemoPageData` |
| `public/assets/tavi-software-hero.png` | Anh background hero trang chu |

Luu y: `src/public/assets` khong phai thu muc serve static cua Next.js. Anh public phai nam trong `public/...`.

## 15 industry key chuan

Field `industry` trong Supabase va `IndustryKey` trong code phai dung cac key sau:

| Industry key | Nganh |
|---|---|
| `nha_khoa` | Nha khoa |
| `spa` | Spa |
| `tham_my_vien` | Tham my vien |
| `phong_kham` | Phong kham |
| `salon_toc` | Hair salon |
| `luat_su` | Luat su |
| `trung_tam_tieng_anh` | Trung tam tieng Anh |
| `dich_vu_ve_sinh` | Dich vu ve sinh |
| `noi_that` | Thiet ke noi that |
| `cong_ty_xay_dung` | Cong ty xay dung |
| `nha_hang` | Nha hang |
| `quan_cafe` | Quan cafe |
| `studio_chup_anh` | Studio chup anh |
| `phong_gym` | Gym/Fitness |
| `garage_oto` | Garage oto |

Neu them/sua industry key, bat buoc cap nhat dong bo:

1. `src/types/demo.ts`
2. `src/lib/demo/templateRouter.ts`
3. `src/lib/demo/templateDefaults.ts`
4. `src/lib/demo/mockDemoData.ts`
5. `src/components/demo/StudioTemplateRenderer.tsx`
6. `src/lib/templates/templateCatalog.ts`
7. Thu muc tuong ung trong `src/template-sources`

## Luong render demo

```txt
User truy cap /demo/{place_id}
  -> src/app/demo/[place_id]/page.tsx
  -> getBusinessByPlaceId(place_id)
  -> fallback getMockLeadByPlaceId(place_id)
  -> routeTemplateByIndustry(lead.industry)
  -> buildDemoPageData(lead, templateKey)
  -> DemoTemplateRenderer
  -> StudioTemplateRenderer
  -> src/template-sources/{industry}
```

Route demo khong duoc bien thanh dashboard, playground, form nhap lieu hoac man hinh chon doanh nghiep.

## Luong kho giao dien

Kho giao dien khong fetch Supabase.

```txt
src/lib/templates/templateCatalog.ts
  -> /kho-giao-dien
  -> /kho-giao-dien/[industry_key]
  -> /kho-giao-dien/[industry_key]/[template_id]
```

Hien tai moi nganh co mot item `render_template` tro den:

```txt
/demo/mock-{industry_key}
```

Sau nay moi nganh co the co nhieu item hon, gom:

- `render_template`: mau code render du lieu that.
- `reference_image`: anh dai tham khao, khong dung de render `/demo/[place_id]`.

## Bien moi truong

File local:

```txt
.env.local
```

Bien can co:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` dung de tao URL/metadata can domain day du. Khi deploy Vercel nen doi tu `http://localhost:3000` sang domain production.

## Quy tac khong duoc pha

- Khong hard-code du lieu lead that trong template component.
- Khong dua Supabase fetch vao component trong `src/template-sources`.
- Khong dua Supabase fetch vao `src/components/template-gallery`.
- Khong dung `website` lam website doanh nghiep trong UI demo o giai do hien tai; field nay dang duoc coi la link Facebook fallback neu co.
- Khong xoa `public/assets/tavi-software-hero.png` vi trang chu dang dung file nay lam hero background.
- Khong commit `.next`, `node_modules`, log hoac `.env.local`.
- Khong sua `src/template-sources` neu chi thay doi giao dien kho giao dien.

## Checklist truoc khi ket thuc mot thay doi

- [ ] Chay `npx.cmd tsc --noEmit --incremental false`.
- [ ] Neu co sua route/build config, chay `npm.cmd run build`.
- [ ] Kiem tra `/`.
- [ ] Kiem tra `/kho-giao-dien`.
- [ ] Kiem tra mot trang nganh, vi du `/kho-giao-dien/nha_khoa`.
- [ ] Kiem tra mot route demo, vi du `/demo/mock-nha_khoa`.
- [ ] Neu build loi cache Next.js, co the xoa rieng `.next` trong `taviweb` roi build lai.
