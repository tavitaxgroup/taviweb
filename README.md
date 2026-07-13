# Builder Agent Website

MVP render website demo theo `place_id`.

## Luong Hien Tai

1. Nguoi dung mo `/demo/[place_id]`.
2. `src/app/demo/[place_id]/page.tsx` doc `place_id`.
3. He thong thu fetch lead tu Supabase qua `src/lib/supabase/server.ts`.
4. Neu chua cau hinh Supabase hoac khong tim thay record, he thong dung mock data trong `src/lib/demo/mockDemoData.ts`.
5. `buildDemoPageData()` map lead thanh `DemoPageData`.
6. `DemoTemplateRenderer` chon template theo `industry`.
7. Trang public landing page render truc tiep, khong co playground, form chinh sua hay dashboard.

## Industry Key

`industry` trong Supabase nen dung cung key voi template:

```txt
phong_kham
quan_cafe
garage_oto
tham_my_vien
nha_hang
noi_that
spa
cong_ty_xay_dung
luat_su
dich_vu_ve_sinh
salon_toc
nha_khoa
studio_chup_anh
trung_tam_tieng_anh
phong_gym
```

## Cau Hinh Supabase

File `.env.local` da duoc tao san. Dien gia tri that vao:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_BUSINESSES_TABLE=leads
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Mac dinh he thong doc bang `leads`. Neu sau nay doi ten bang, chi can doi `SUPABASE_BUSINESSES_TABLE`.

Code van ho tro fallback `SUPABASE_SERVICE_ROLE_KEY` va `NEXT_PUBLIC_SUPABASE_ANON_KEY` neu ban can dung cau hinh cu.

## Route Test Mock

Khi chua co Supabase, mo:

```txt
/demo/mock-nha_khoa
/demo/mock-quan_cafe
/demo/mock-garage_oto
/demo/mock-tham_my_vien
```

## Trang Thai Template

Renderer hien dung 15 template goc trong `src/template-sources/*`, giu anh/template goc va chi thay thong tin lead nhu ten, phone, dia chi, facebook, email, rating va review count.
