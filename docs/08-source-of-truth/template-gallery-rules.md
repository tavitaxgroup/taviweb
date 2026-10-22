# Source Of Truth - Template Gallery Rules

Cập nhật: 2026-10-22.

Kho giao diện là thư viện mẫu website của TAVIWEB. Khu vực này phục vụ khách xem mẫu và chọn phong cách, không phải khu vực kỹ thuật nói về lead, Supabase hay render engine.

## Route

| Route | Nội dung |
|---|---|
| `/kho-giao-dien` | Route alias, redirect về `/kho-giao-dien/noi_that` |
| `/kho-giao-dien/[industry_key]` | Trang kho giao diện của một ngành |
| `/kho-giao-dien/[industry_key]/[template_id]` | Trang chi tiết một mẫu trong catalog |

## UI hiện tại

Trang kho giao diện dùng layout:

```txt
Header TAVIWEB
  -> Link Kho giao diện mặc định vào /kho-giao-dien/noi_that
  -> Dropdown ngoài header: 18 ngành nghề (3 nhóm B2B & 15 ngành dọc)
  -> Sidebar trái trong trang kho: 18 ngành nghề trong một khung lớn
  -> Nội dung phải:
      - Breadcrumb
      - Ô thông tin chính dạng card tinh gọn
      - Grid thẻ mẫu giao diện (đồng nhất định dạng card đứng với ảnh cuộn dài, hover tự cuộn, nút 'Xem chi tiết' và 'Xem demo')
```

Quy tắc UI:

- Sidebar trái chỉ dùng một khung lớn, không tách thành nhiều khung nhỏ.
- Sidebar không hiện icon mũi tên trước tên ngành.
- Nội dung phải phải rộng hơn sidebar.
- Không hiện lưới chọn tất cả ngành trong nội dung kho giao diện.
- Click "Kho giao diện" ở header phải vào thẳng ngành mặc định `noi_that`.
- Tất cả thẻ mẫu giao diện (cả `render_template` và `reference_image`) đều dùng chung định dạng card đứng `.gallery-reference-card` với ảnh preview cuộn dài thực tế, mang lại sự đồng nhất, sang trọng và chuyên nghiệp.
- **Quy tắc giá tiền**: TUYỆT ĐỐI KHÔNG HIỂN THỊ GIÁ TIỀN trên thẻ mẫu giao diện (thẻ chỉ hiển thị tên mẫu và tên gói; giá chuyển sang tư vấn báo giá linh hoạt).
- Card ảnh template dài khi hover phải tự cuộn chậm từ trên xuống dưới, hiện nút `Xem chi tiết` (mở modal ảnh lớn) và nút `Xem demo` (chuyển hướng đến đúng URL demo của mẫu).
- Toàn bộ ảnh thẻ mẫu và modal đều có cơ chế `onError` fallback đảm bảo giao diện không bao giờ bị vỡ ảnh.
- Khi bấm `Xem chi tiết`, hiện modal có ảnh lớn trong vùng scroll độc lập.
- Modal chi tiết phải cho người dùng lướt xem hết toàn bộ ảnh template dài, không được cắt mất phần cuối ảnh.
- Ảnh trong modal tự cuộn chậm từ trên xuống sau khi mở, người dùng tự scroll/chạm/kéo thì auto-scroll phải dừng lại.
- Layout modal desktop: bên trái là ảnh preview scroll độc lập, bên phải là thông tin mẫu. Modal có chiều cao theo viewport để không tràn khỏi màn hình.
- Layout modal mobile/tablet: nội dung có thể xếp 1 cột, nhưng vùng ảnh vẫn phải scroll được hết ảnh.
- Modal chi tiết phải có thông tin cơ bản của mẫu: mã mẫu, gói, tag và CTA tư vấn (chỉ hiện dòng chi phí nếu có cấu hình).
- Không để các khối text đầu trang quá lớn hoặc thô.
- Không hiện các từ kỹ thuật như `render`, `Supabase`, `lead`, `mock data` cho khách.
- Có thể dùng từ thân thiện: `Mẫu website`, `Mẫu giao diện`, `Mẫu tham khảo`.

## Catalog source

File duy nhất quản lý ngành và mẫu:

```txt
src/lib/templates/templateCatalog.ts
```

Hiện tại `industryCatalog` có **18 ngành nghề** (gồm 3 nhóm B2B cốt lõi: `corporate_profile`, `b2b_product`, `lead_generation` và 15 ngành dọc). Toàn bộ thẻ `render_template` được gắn ảnh cuộn dài thực tế chuẩn WebP tại `public/assets/anh-template/live-previews/{industryKey}-live.webp`.

## Hai loại mẫu

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

## Quy tắc với `render_template`

Một item `render_template` phải có:

- `id`
- `industryKey` (thuộc 18 industry keys chuẩn)
- `templateKey`
- `demoUrl` (trỏ đến route demo thực tế)
- `thumbnail` & `longPreviewImage` (trỏ đến ảnh chụp cuộn dài thực tế chuẩn WebP)
- `status: "active"`

Ví dụ mẫu thực tế chuẩn:

```ts
{
  id: "XD001",
  type: "render_template",
  industryKey: "cong_ty_xay_dung",
  templateKey: "cong_ty_xay_dung",
  name: "Website xây dựng & thi công XD001",
  description: "Mẫu website chuyên nghiệp cho công ty xây dựng, nhà thầu thi công, cảnh quan và hoàn thiện công trình.",
  tags: ["Xây dựng", "Live Demo", "Công trình", "Mẫu website", "TAVIWEB"],
  thumbnail: "/assets/anh-template/xay-dung/XD001-live.webp",
  longPreviewImage: "/assets/anh-template/xay-dung/XD001-live.webp",
  demoUrl: "/demo/mock-cong_ty_xay_dung",
  packageName: "Gói website xây dựng tiêu chuẩn",
  status: "active",
  order: 101
}
```

Đối với các ngành nghề thông thường, `renderTemplateItems` tự động cấu hình:
```ts
{
  id: `${industry.key}-main-template`,
  type: "render_template",
  industryKey: industry.key,
  templateKey: industry.key,
  name: `Mẫu website ${industry.name}`,
  description: industry.description,
  tags: [industry.name, "Mẫu website", "TAVIWEB"],
  thumbnail: `/assets/anh-template/live-previews/${industry.key}-live.webp`,
  longPreviewImage: `/assets/anh-template/live-previews/${industry.key}-live.webp`,
  packageName: `Gói website ${industry.name.toLowerCase()}`,
  demoUrl: `/demo/mock-${industry.key}`,
  status: "active",
  order: industry.order
}
```

## Quy tắc với `reference_image`

Một item `reference_image` dùng cho ảnh dài tham khảo trong kho giao diện. Nó không cần `templateKey`, không bắt buộc có `demoUrl`.

Ví dụ:

```ts
{
  id: "NT001",
  type: "reference_image",
  industryKey: "noi_that",
  name: "Website nội thất NT001",
  description: "Mẫu website nội thất dạng ảnh dài, phù hợp doanh nghiệp thiết kế và thi công không gian.",
  tags: ["Nội thất", "Ảnh dài", "Portfolio"],
  thumbnail: "/assets/anh-template/noi-that/NT001.jpg",
  longPreviewImage: "/assets/anh-template/noi-that/NT001.jpg",
  packageName: "Gói website nội thất",
  priceLabel: "Liên hệ",
  status: "active",
  order: 901
}
```

## Quy tắc tên file và vị trí ảnh

Ảnh preview dài hiện tại nằm trong:

```txt
public/assets/anh-template/live-previews/{industryKey}-live.webp   (Ảnh chụp tự động từ bản demo live)
public/assets/anh-template/{ten-nganh}/{ma-template}.jpg          (Ảnh thiết kế tham khảo)
public/assets/anh-template/{ten-nganh}/{ma-template}.webp         (Ảnh thiết kế tham khảo định dạng WebP)
```

Ví dụ:

```txt
public/assets/anh-template/live-previews/noi_that-live.webp
public/assets/anh-template/xay-dung/XD001-live.webp
public/assets/anh-template/xay-dung/XD002-prague.webp
public/assets/anh-template/noi-that/NT001.jpg
public/assets/anh-template/xay-dung/XD003.jpg
public/assets/anh-template/nha-hang/NH001.jpg
```

`ten-nganh` là tên folder không dấu, có gạch nối. `ma-template` chính là mã mẫu hiện trên card, ví dụ `XD003`.

Không đặt tên file có dấu tiếng Việt, khoảng trắng hoặc ký tự đặc biệt.

## Checklist khi thêm mẫu vào kho

- [ ] Thêm item vào `src/lib/templates/templateCatalog.ts`.
- [ ] `id` không trùng.
- [ ] `industryKey` thuộc 18 key chuẩn hệ thống.
- [ ] Nếu là `render_template`, có `templateKey` và `demoUrl`.
- [ ] Nếu là `reference_image`, có `thumbnail` và `longPreviewImage` trỏ đến `public/assets/anh-template`.
- [ ] Card dùng định dạng chuẩn `.gallery-reference-card` đồng bộ.
- [ ] Tuyệt đối KHÔNG hiển thị nhãn giá tiền cụ thể trên thẻ.
- [ ] Hover card có nút `Xem chi tiết` và ảnh cuộn chậm.
- [ ] Modal xem chi tiết có ảnh lớn trong vùng scroll độc lập.
- [ ] Người dùng có thể lướt xem hết toàn bộ ảnh dài trong modal, gồm cả phần cuối ảnh.
- [ ] Modal không tràn khỏi viewport desktop; mobile/tablet vẫn scroll được mượt mà.
- [ ] Modal xem chi tiết có ảnh tự cuộn chậm sau khi mở.
- [ ] Auto-scroll trong modal dừng lại khi người dùng scroll, chạm hoặc kéo ảnh.
- [ ] Modal xem chi tiết có mã mẫu, gói, tag và CTA tư vấn.
- [ ] UI không nhắc `Supabase`, `lead`, `render engine`, `mock data`.
- [ ] Không sửa `/demo/[place_id]` nếu chỉ thêm ảnh tham khảo.
