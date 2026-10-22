# Source Of Truth - Project Architecture

Cập nhật: 2026-10-22.

Tài liệu này là nguồn sự thật cho kiến trúc hiện tại của dự án `taviweb`. Mọi developer hoặc AI coding agent phải đọc file này trước khi sửa code để tránh làm lệch cấu trúc hệ thống.

## Vai trò hệ thống

`taviweb` là một Next.js App Router project duy nhất, gồm 4 khu vực chính:

| Khu vực | Route | Vai trò |
|---|---|---|
| Website công ty | `/` | Trang giới thiệu TAVIWEB, dịch vụ thiết kế website, quy trình, bảng giá và form liên hệ |
| Kho giao diện | `/kho-giao-dien/noi_that` | Trang kho giao diện mặc định, hiện ngành nội thất và sidebar 18 ngành |
| Demo renderer & Hub | `/demo/[place_id]` | Render website demo theo dữ liệu lead từ Supabase table `leads` hoặc mock data. Khi ngành có > 1 template render và là lead khách hàng (chưa chọn `?template=`), tự động hiển thị **Industry Template Hub** để khách hàng chọn mẫu |
| Standalone Templates | `/xay-dung-2` | Route xem trực tiếp mẫu độc lập (Mẫu XD002 - Prague Architecture) |

Không tách thành nhiều app deploy. Website công ty, kho giao diện, template hub và demo renderer dùng chung domain, chung codebase và chung deploy Vercel/Next.js.

## Route hiện tại

```txt
src/app/(public)/page.tsx
src/app/(public)/demo/[place_id]/page.tsx
src/app/(public)/xay-dung-2/page.tsx
src/app/(public)/kho-giao-dien/page.tsx
src/app/(public)/kho-giao-dien/[industry_key]/page.tsx
src/app/(public)/kho-giao-dien/[industry_key]/[template_id]/page.tsx
src/app/(admin)/admin/...
```

Ý nghĩa:

- `/`: trang chủ TAVIWEB.
- `/kho-giao-dien`: route alias, tự động redirect về `/kho-giao-dien/noi_that`.
- `/kho-giao-dien/[industry_key]`: trang kho giao diện của từng ngành (18 ngành).
- `/kho-giao-dien/[industry_key]/[template_id]`: trang chi tiết item trong catalog.
- `/demo/[place_id]`:
  - **Khách hàng / Lead thực tế (ngành có 1 template)**: Render trực tiếp landing page theo thông tin thương hiệu của doanh nghiệp.
  - **Khách hàng / Lead thực tế (ngành có > 1 template, ví dụ Xây dựng có XD001 & XD002)**: Hiển thị giao diện **Industry Template Hub** (`IndustryTemplateHub.tsx`) mang nhận diện TAVIWEB để khách hàng xem thẻ ảnh cuộn dài và bấm trải nghiệm bản demo trực tiếp theo từng phương án.
  - **Link Demo mẫu canonical (`/demo/mock-{industry_key}`)**: Đi thẳng vào Mẫu 1 (XD001), không qua Hub.
  - **Link Demo có tham số `?template={templateKey}`**: Đi thẳng vào template chỉ định được render theo dữ liệu lead (ví dụ: `?template=xay_dung_2` hoặc `?template=cong_ty_xay_dung`).
- `/xay-dung-2`: trang demo standalone độc lập của mẫu kiến trúc & xây dựng XD002 (Prague Architecture).
- `/admin/...`: hệ thống quản trị nội bộ gồm CRM Deals/Leads, CMS bài viết, Quản lý Booking/Lịch hẹn, và Cài đặt chung hệ thống.

## Phân vùng code

| Folder/file | Vai trò |
|---|---|
| `src/components/company` | UI trang công ty TAVIWEB |
| `src/components/template-gallery` | UI kho giao diện hệ thống (đồng bộ chuẩn card đứng cuộn dài `.gallery-reference-card`) |
| `src/components/demo/IndustryTemplateHub.tsx` | UI Hub trưng bày các phương án mẫu giao diện cho khách hàng (xanh navy `#073b8e`, đỏ `#e20b12`, không để giá tiền, hover ảnh cuộn dài, modal popup xem full-page) |
| `src/components/demo/DemoTemplateRenderer.tsx` | Entry router renderer phân phối giữa các engine template |
| `src/components/demo/StudioTemplateRenderer.tsx` | Adapter engine render 15 template core |
| `src/template-sources/xay_dung_2` | Mã nguồn template kiến trúc & xây dựng cao cấp XD002 (Prague Architecture) |
| `src/template-sources/cong_ty_xay_dung` | Mã nguồn template xây dựng & thi công tiêu chuẩn XD001 |
| `src/template-sources/{industry}` | Các template render thật khác theo ngành |
| `src/modules/crm` | Hệ thống quản lý quan hệ khách hàng (CRM, Pipelines, Deals, Quotes, Kanban/Table) |
| `src/modules/booking` | Hệ thống đặt lịch trực tuyến, quản lý tài nguyên và dịch vụ |
| `src/components/cms` | Trình soạn thảo CMS bài viết và quản lý tin tức |
| `src/lib/templates/templateCatalog.ts` | Catalog ngành (18 ngành) và danh sách mẫu trong hệ thống |
| `src/lib/demo/buildDemoPageData.ts` | Map `BusinessLead` thành `DemoPageData` |
| `src/lib/demo/mockDemoData.ts` | Mock lead cho `/demo/mock-{industry_key}` và alias slugs |
| `src/lib/demo/templateRouter.ts` | Chọn template theo `industry` |
| `src/lib/demo/templateDefaults.ts` | Fallback content theo từng ngành |
| `src/lib/supabase/server.ts` | Fetch lead từ Supabase REST / PostgreSQL connection pool |
| `src/types/demo.ts` | Type chung: `IndustryKey`, `BusinessLead`, `DemoPageData` |
| `public/assets/anh-template/live-previews/` | Lưu ảnh chụp màn hình cuộn dài thực tế chuẩn WebP của 17 ngành nghề trực tiếp từ các bản demo live (`{industry_key}-live.webp`) |
| `public/assets/anh-template/xay-dung/` | Lưu ảnh chụp màn hình cuộn dài (`XD001-live.webp` chụp từ `/demo/mock-cong_ty_xay_dung`, `XD002-prague.webp` chụp từ `/xay-dung-2`) |

Lưu ý: Ảnh public phải nằm trong thư mục `public/...`.

## Industry keys chuẩn hệ thống

Field `industry` trong Supabase và `IndustryKey` trong code gồm 3 nhóm B2B cốt lõi và các ngành ngách:

| Industry key | Ngành / Loại hình | Số lượng mẫu render | Chi tiết mẫu |
|---|---|:---:|---|
| `cong_ty_xay_dung` | Công ty xây dựng & Kiến trúc | **2 mẫu** | Mẫu 1: `XD001` (Thi công xây dựng tiêu chuẩn)<br>Mẫu 2: `XD002` (Prague Architecture cao cấp) |
| `corporate_profile` | Doanh nghiệp B2B & Tập đoàn | 1 mẫu | Hồ sơ năng lực B2B đa ngành, tư vấn, đầu tư |
| `b2b_product` | Showroom Thiết bị & B2B | 1 mẫu | Trưng bày thiết bị, máy móc, vật tư công nghiệp |
| `lead_generation` | Tăng trưởng Doanh số & Chuyển đổi | 1 mẫu | Landing page chuyển đổi cao |
| `noi_that` | Thiết kế nội thất | 1 mẫu | Mẫu nội thất cao cấp |
| `nha_khoa` | Nha khoa | 1 mẫu | Mẫu phòng khám nha khoa |
| `spa` | Spa & Dưỡng sinh | 1 mẫu | Mẫu spa & chăm sóc sắc đẹp |
| `tham_my_vien` | Thẩm mỹ viện | 1 mẫu | Mẫu thẩm mỹ viện công nghệ cao |
| `phong_kham` | Phòng khám | 1 mẫu | Mẫu phòng khám đa khoa / chuyên khoa |
| `salon_toc` | Hair salon | 1 mẫu | Mẫu salon tóc & tạo mẫu |
| `luat_su` | Luật sư & Pháp lý | 1 mẫu | Mẫu văn phòng luật sư |
| `trung_tam_tieng_anh` | Trung tâm ngoại ngữ | 1 mẫu | Mẫu trung tâm đào tạo tiếng Anh |
| `dich_vu_ve_sinh` | Dịch vụ vệ sinh công nghiệp | 1 mẫu | Mẫu dịch vụ làm sạch công nghiệp |
| `nha_hang` | Nhà hàng | 1 mẫu | Mẫu ẩm thực & nhà hàng |
| `quan_cafe` | Quán cafe | 1 mẫu | Mẫu cafe & trà sữa |
| `studio_chup_anh` | Studio chụp ảnh cưới | 1 mẫu | Mẫu studio ảnh viện áo cưới |
| `phong_gym` | Gym/Fitness | 1 mẫu | Mẫu trung tâm thể hình |
| `garage_oto` | Garage ô tô | 1 mẫu | Mẫu gara & bảo dưỡng xe hơi |

## Luồng render demo và Template Hub

```mermaid
graph TD
    A[Người dùng truy cập /demo/place_id] --> B{Kiểm tra place_id}
    B -->|startsWith 'mock-'| C[Bỏ qua Hub -> Render thẳng Mẫu 1 XD001]
    B -->|Lead khách hàng thật / alias| D[Fetch lead từ Supabase/Alias]
    D --> E{Có tham số ?template= hoặc ?t=?}
    E -->|Có chỉ định template| F[Render trực tiếp template được chọn với data của lead]
    E -->|Không chỉ định template| G{Ngành có > 1 template render?}
    G -->|Có > 1 template| H[Hiển thị IndustryTemplateHub.tsx]
    G -->|Chỉ có 1 template| F
    H -->|Khách click 'Xem demo trực tiếp'| I[/demo/place_id?template=templateKey]
    H -->|Khách click 'Xem ảnh cuộn dài'| J[Mở TemplatePreviewModal cuộn tự động]
```

Quy tắc giao diện Template Hub (`IndustryTemplateHub.tsx`):
- **Phần đầu tinh gọn**: Không để văn bản giải thích dài dòng, breadcrumb phức tạp hay tiêu đề trùng lặp. Đặt tiêu đề lớn nổi bật: `MẪU WEBSITE CHO [TÊN DOANH NGHIỆP]` kèm chỉ dẫn cuộn ảnh góc phải.
- **Thẻ mẫu giao diện**:
  - Tự động cuộn ảnh từ trên xuống dưới khi rê chuột vào khung (`group-hover:-translate-y-[calc(100%-460px)]`).
  - Huy hiệu góc trái: `MẪU X • MÃ_MẪU` (ví dụ `MẪU 1 • XD001`, `MẪU 2 • XD002`).
  - Huy hiệu xanh: `ĐÃ ĐỒNG BỘ THƯƠNG HIỆU`.
  - **TUYỆT ĐỐI KHÔNG HIỂN THỊ GIÁ TIỀN** trên các thẻ mẫu.
  - Nút bấm chính: `Trải nghiệm bản demo` dẫn vào `/demo/[place_id]?template=[key]`.
  - Nút bấm phụ: `Xem ảnh toàn trang` mở modal popup cuộn tự động toàn bộ chiều dài website.
- **Phong cách chuẩn nhận diện TAVIWEB**:
  - Màu chủ đạo: Xanh Navy `#073b8e` (tiêu đề, thẻ, nút bấm).
  - Màu điểm nhấn: Đỏ thương hiệu `#e20b12` (eyebrow, hotline, nút CTA chính).
  - Typography: Font Sans `Be Vietnam Pro`, việt hóa hoàn chỉnh 100%.

## Luồng kho giao diện

Kho giao diện không fetch Supabase.

```txt
src/lib/templates/templateCatalog.ts
  -> /kho-giao-dien redirect /kho-giao-dien/noi_that
  -> /kho-giao-dien/[industry_key]
  -> /kho-giao-dien/[industry_key]/[template_id]
```

Hien tai moi nganh co mot item `render_template` tro den:

```txt
/demo/mock-{industry_key}
```

Sau nay moi nganh co the co nhieu item hon, gom:

- `render_template`: mau code render du lieu that.
- `reference_image`: anh dai tham khao trong `public/assets/anh-template`, khong dung de render `/demo/[place_id]`.

Trong trang nganh, card `render_template` phai nam tren cung. Grid card `reference_image` nam ben duoi, co hover auto-scroll va modal xem chi tiet.

Modal xem chi tiet cua `reference_image` phai:

- Dat trong viewport, khong tran khoi man hinh.
- Co cot anh preview scroll doc lap de xem het anh template dai.
- Tu cuon cham sau khi mo modal.
- Dung auto-scroll khi nguoi dung chu dong scroll, cham hoac keo anh.
- Co cot thong tin mau gom mo ta, ma mau, goi, chi phi, tag va CTA tu van.

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
- Khong tao lai trang chon nganh nghe tong o `/kho-giao-dien`; link Kho giao dien mac dinh phai vao `/kho-giao-dien/noi_that`.
- Khong pha bo bo cuc Tab tuong tac (Interactive Tabs) cua phan Dich vu, bo cuc The rong xep chong 3D Bezel kep (Double-Bezel) cua phan Quy trinh va bo cuc chan trang da cot (Premium Footer) cua trang chu TAVIWEB.
- Không phá bỏ cơ cấu tương thích dữ liệu kép (Dual-compatibility) của Gallery và Reviews để tránh gây lỗi crash server-side rendering cho các template khác nhau.
- Phải duy trì luồng phân tích và đè sâu dữ liệu JSON của cột `template_data` khi xử lý Demo Page Data cho bất kỳ template nào.
- Phải đảm bảo chiều cao Hero đồng bộ lý tưởng (`h-[600px] md:h-[650px]`) cho tất cả các template chính, không làm mờ/vỡ ảnh.
- Phải duy trì cơ chế slideshow tự động chuyển đổi ảnh sau 3 giây khi cấu hình mảng `hero_images`.
- Phải duy trì logic tự động chuyển đổi bí danh nút bấm CTA (primaryCta/secondaryCta) và chuẩn hóa dữ liệu Trust để tránh gây crash trang khi dữ liệu DB thay đổi.
- Phải duy trì cơ chế phân nhánh **Industry Template Hub** cho khách hàng thực tế khi một ngành có > 1 template render (`renderTemplates.length > 1 && !selectedTemplate && !isMockLead`).
- Tuyệt đối **không hiển thị giá tiền** (`template.priceLabel`) trên các thẻ mẫu giao diện trong Template Hub dành cho khách hàng.
- Phải đảm bảo route demo mẫu canonical (`/demo/mock-{industry_key}`) luôn đi thẳng vào Mẫu 1 (XD001), không rơi vào Hub chọn mẫu.
- Không để cờ `isMockPreview` ghi đè các nhãn giữ chỗ trong ngoặc vuông (`[hero.title]`, `[business.name]`) lên các trang demo công khai; các trang demo mẫu phải hiển thị dữ liệu và hình ảnh chân thực chuẩn tiếng Việt.
- Ảnh cuộn dài (long preview) trong kho giao diện và Hub phải được chụp từ URL canonical gốc: Mẫu 1 từ `/demo/mock-cong_ty_xay_dung` và Mẫu 2 từ `/xay-dung-2`.

## Checklist trước khi kết thúc một thay đổi

- [ ] Chạy `npm run typecheck` (`tsc --noEmit`) đạt 0 lỗi.
- [ ] Nếu có sửa route/build config, chạy `npm run build`.
- [ ] Kiểm tra `/`.
- [ ] Kiểm tra `/kho-giao-dien` redirect về `/kho-giao-dien/noi_that`.
- [ ] Kiểm tra route Hub chọn mẫu cho lead thực tế (ví dụ: `/demo/xay-dung-an-gia`).
- [ ] Kiểm tra route canonical mẫu 1 đi thẳng vào template (ví dụ: `/demo/mock-cong_ty_xay_dung`).
- [ ] Kiểm tra route standalone mẫu 2 (ví dụ: `/xay-dung-2`).
- [ ] Kiểm tra chức năng hover cuộn dài và modal xem ảnh toàn trang trong Template Hub.

