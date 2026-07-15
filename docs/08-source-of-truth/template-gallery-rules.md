# Source Of Truth - Template Gallery Rules

Cap nhat: 2026-07-15.

Kho giao dien la thu vien mau website cua TAVIWEB. Khu vuc nay phuc vu khach xem mau va chon phong cach, khong phai khu vuc ky thuat noi ve lead, Supabase hay render engine.

## Route

| Route | Noi dung |
|---|---|
| `/kho-giao-dien` | Trang tong, co sidebar 15 nganh nghe va danh sach nganh |
| `/kho-giao-dien/[industry_key]` | Trang kho giao dien cua mot nganh |
| `/kho-giao-dien/[industry_key]/[template_id]` | Trang chi tiet mot mau trong catalog |

## UI hien tai

Trang kho giao dien dung layout:

```txt
Header TAVIWEB
  -> Sidebar trai: 15 nganh nghe trong mot khung lon
  -> Noi dung phai:
      - Breadcrumb
      - O thong tin chinh dang card
      - Danh sach mau/nganh
```

Quy tac UI:

- Sidebar trai chi dung mot khung lon, khong tach thanh nhieu khung nho.
- Sidebar khong hien icon mui ten truoc ten nganh.
- Noi dung phai phai rong hon sidebar.
- Khong de cac khoi text dau trang qua lon hoac tho.
- Khong hien cac tu ky thuat nhu `render`, `Supabase`, `lead`, `mock data` cho khach.
- Co the dung tu than thien: `Mau website`, `Mau giao dien`, `Mau tham khao`.

## Catalog source

File duy nhat quan ly nganh va mau:

```txt
src/lib/templates/templateCatalog.ts
```

Hien tai `industryCatalog` co 15 nganh. `templateCatalog` duoc tao tu `industryCatalog`, moi nganh co mot item `render_template`.

## Hai loai mau

| Type | Y nghia | Dung cho demo data? | Co demo URL? |
|---|---|---:|---:|
| `render_template` | Template code that trong `src/template-sources` | Co | Co |
| `reference_image` | Anh dai tham khao bo sung sau | Khong | Khong bat buoc |

Khong duoc dung `reference_image` de render `/demo/[place_id]`.

## Schema chuan

```ts
export type TemplateCatalogItem = {
  id: string
  type: "render_template" | "reference_image"
  industryKey: IndustryKey
  templateKey?: IndustryKey
  name: string
  description: string
  tags: string[]
  thumbnail: string
  longPreviewImage?: string
  demoUrl?: string
  status: "active" | "draft"
  order: number
}
```

## Quy tac voi `render_template`

Mot item `render_template` phai co:

- `id`
- `industryKey`
- `templateKey`
- `demoUrl`
- `thumbnail`
- `status: "active"`

Vi du:

```ts
{
  id: "nha_khoa-render-01",
  type: "render_template",
  industryKey: "nha_khoa",
  templateKey: "nha_khoa",
  name: "Nha khoa - mau website",
  demoUrl: "/demo/mock-nha_khoa",
  thumbnail: "/template-previews/nha_khoa-render-01.jpg",
  status: "active",
  order: 1
}
```

## Quy tac voi `reference_image`

Mot item `reference_image` dung cho anh dai tham khao trong kho giao dien. No khong can `templateKey`, khong bat buoc co `demoUrl`.

Vi du:

```ts
{
  id: "spa-minimal-reference-01",
  type: "reference_image",
  industryKey: "spa",
  name: "Spa toi gian - mau tham khao",
  description: "Mau anh dai phu hop spa cao cap, tone trang va xanh la nhe.",
  tags: ["Spa", "Toi gian"],
  thumbnail: "/template-previews/spa-minimal-reference-01.jpg",
  longPreviewImage: "/template-long/spa-minimal-reference-01.jpg",
  status: "active",
  order: 2
}
```

## Quy tac ten file anh

Anh public phai nam trong:

```txt
public/template-previews/{template_id}.jpg
public/template-long/{template_id}.jpg
```

Khong dat ten file co dau tieng Viet, khoang trang hoac ky tu dac biet.

## Checklist khi them mau vao kho

- [ ] Them item vao `src/lib/templates/templateCatalog.ts`.
- [ ] `id` khong trung.
- [ ] `industryKey` thuoc 15 key chuan.
- [ ] Neu la `render_template`, co `templateKey` va `demoUrl`.
- [ ] Neu la `reference_image`, co `longPreviewImage`.
- [ ] UI khong nhac `Supabase`, `lead`, `render engine`, `mock data`.
- [ ] Khong sua `/demo/[place_id]` neu chi them anh tham khao.
