# Source Of Truth - Template Gallery Rules

Cap nhat: 2026-07-15.

Kho giao dien la thu vien mau website cua TAVIWEB. Khu vuc nay phuc vu khach xem mau va chon phong cach, khong phai khu vuc ky thuat noi ve lead, Supabase hay render engine.

## Route

| Route | Noi dung |
|---|---|
| `/kho-giao-dien` | Route alias, redirect ve `/kho-giao-dien/noi_that` |
| `/kho-giao-dien/[industry_key]` | Trang kho giao dien cua mot nganh |
| `/kho-giao-dien/[industry_key]/[template_id]` | Trang chi tiet mot mau trong catalog |

## UI hien tai

Trang kho giao dien dung layout:

```txt
Header TAVIWEB
  -> Link Kho giao dien mac dinh vao /kho-giao-dien/noi_that
  -> Dropdown ngoai header: 15 nganh nghe
  -> Sidebar trai trong trang kho: 15 nganh nghe trong mot khung lon
  -> Noi dung phai:
      - Breadcrumb
      - O thong tin chinh dang card
      - The ngang cua mau render/demo hien co
      - Ben duoi la grid anh template dai cua nganh dang xem
```

Quy tac UI:

- Sidebar trai chi dung mot khung lon, khong tach thanh nhieu khung nho.
- Sidebar khong hien icon mui ten truoc ten nganh.
- Noi dung phai phai rong hon sidebar.
- Khong hien luoi chon tat ca nganh trong noi dung kho giao dien.
- Click "Kho giao dien" o header phai vao thang nganh mac dinh `noi_that`.
- Card anh template dai phai nam ben duoi the ngang render/demo cu.
- Card anh template dai khi hover phai hien nut `Xem chi tiet` va anh tu cuon cham tu tren xuong phan duoi.
- Khi bam `Xem chi tiet`, hien modal co anh lon trong vung scroll doc lap.
- Modal chi tiet phai cho nguoi dung luot xem het toan bo anh template dai, khong duoc cat mat phan cuoi anh.
- Anh trong modal tu cuon cham tu tren xuong sau khi mo, nguoi dung tu scroll/cham/keo thi auto-scroll phai dung lai.
- Layout modal desktop: ben trai la anh preview scroll doc lap, ben phai la thong tin mau. Modal co chieu cao theo viewport de khong tran khoi man hinh.
- Layout modal mobile/tablet: noi dung co the xep 1 cot, nhung vung anh van phai scroll duoc het anh.
- Modal chi tiet phai co thong tin co ban cua mau: ma mau, goi, chi phi, tag va CTA tu van.
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

Anh preview dai hien tai nam trong:

```txt
public/assets/anh-template/{ten-nganh}/{ma-template}.jpg
public/assets/anh-template/{ten-nganh}/{ma-template}.webp
```

Vi du:

```txt
public/assets/anh-template/noi-that/NT001.jpg
public/assets/anh-template/xay-dung/XD003.jpg
public/assets/anh-template/nha-hang/NH001.jpg
```

`ten-nganh` la ten folder khong dau, co gach noi. `ma-template` chinh la ma mau hien tren card, vi du `XD003`.

Khong dat ten file co dau tieng Viet, khoang trang hoac ky tu dac biet.

## Checklist khi them mau vao kho

- [ ] Them item vao `src/lib/templates/templateCatalog.ts`.
- [ ] `id` khong trung.
- [ ] `industryKey` thuoc 15 key chuan.
- [ ] Neu la `render_template`, co `templateKey` va `demoUrl`.
- [ ] Neu la `reference_image`, co `thumbnail` va `longPreviewImage` tro den `public/assets/anh-template`.
- [ ] Card anh hien ben duoi the render/demo cu.
- [ ] Hover card co nut `Xem chi tiet` va anh cuon cham.
- [ ] Modal xem chi tiet co anh lon trong vung scroll doc lap.
- [ ] Nguoi dung co the luot xem het toan bo anh dai trong modal, gom ca phan cuoi anh.
- [ ] Modal khong tran khoi viewport desktop; mobile/tablet van scroll duoc.
- [ ] Modal xem chi tiet co anh tu cuon cham sau khi mo.
- [ ] Auto-scroll trong modal dung lai khi nguoi dung scroll, cham hoac keo anh.
- [ ] Modal xem chi tiet co ma mau, goi, chi phi va CTA tu van.
- [ ] UI khong nhac `Supabase`, `lead`, `render engine`, `mock data`.
- [ ] Khong sua `/demo/[place_id]` neu chi them anh tham khao.
