# Prompt Studio AI Final

Copy prompt này vào Studio AI khi bạn muốn chuyển thiết kế từ Stitch AI thành code Next.js.

> Cách dùng nhanh:
> 1. Thay `{TEN_NGANH}` bằng ngành đang làm, ví dụ `nha khoa`, `spa`, `thẩm mỹ viện`.
> 2. Thay `{TEMPLATE_KEY}` bằng template key, ví dụ `dental`, `spa`, `aesthetic-clinic`.
> 3. Thay `{TEMPLATE_COMPONENT}` bằng tên component, ví dụ `DentalTemplate`, `SpaTemplate`, `AestheticClinicTemplate`.
> 4. Dán thêm nội dung file prompt ngành trong `docs/05-prompts/studio-ai`.
> 5. Dán thêm các tài liệu implementation cần thiết trong `docs/06-implementation`.

```txt
Hãy chuyển thiết kế landing page {TEN_NGANH} này thành code Next.js.

ƯU TIÊN CAO NHẤT:
Nếu có mâu thuẫn giữa các phần prompt bên dưới, hãy ưu tiên các quy tắc sau:

1. Không tạo playground, dashboard, editor, sidebar chọn doanh nghiệp, form nhập/sửa dữ liệu.
2. Route /demo/[place_id] phải render landing page trực tiếp.
3. Hiện tại dùng mock data tạm, không yêu cầu kết nối Supabase thật ngay.
4. Mock data chỉ được nằm trong src/lib/demo/mockDemoData.ts.
5. UI component không được hard-code thông tin doanh nghiệp.
6. Section component chỉ nhận props, không fetch data.
7. Template component cần tạo là {TEMPLATE_COMPONENT}.
8. Template key là {TEMPLATE_KEY}.
9. Ngành là {TEN_NGANH}.
10. Phải bám sát thiết kế Stitch AI đã cung cấp. Không tự sáng tạo một giao diện preview hub khác.

BẮT BUỘC BÁM THEO THIẾT KẾ STITCH:
- Hãy chuyển đúng landing page trong thiết kế Stitch AI sang code.
- Giữ layout, section order, spacing, màu sắc, typography, CTA, card style và visual hierarchy theo thiết kế Stitch.
- Nếu thiết kế Stitch có hero cụ thể, hãy code hero đó. Không thay bằng màn hình chọn doanh nghiệp.
- Nếu thiết kế Stitch có gallery/services/reviews/contact, hãy code đúng các section đó.
- Chỉ thay text/ảnh thật bằng biến từ DemoPageData.
- Không tự thiết kế lại page khác với Stitch.

TUYỆT ĐỐI KHÔNG TẠO CÁC MÀN HÌNH SAU:
- Trang "Chọn Doanh Nghiệp Để Preview".
- Preview hub.
- Template preview list.
- Sample business cards.
- Trang chọn nhiều doanh nghiệp mẫu.
- Trang giới thiệu hệ thống template.
- Header kiểu "Supabase Ready", "Template Preview Hub", "Preview Template Landing Page".
- Root page hoặc App.tsx dùng để chọn template.
- UI demo nội bộ cho developer.

Mục tiêu:
Tạo một website template public cho doanh nghiệp thuộc ngành {TEN_NGANH}.
Trang này sẽ được render trực tiếp tại route /demo/[place_id].
Hiện tại dùng dữ liệu mẫu tạm để preview.
Sau này hệ thống Builder Agent/Supabase của tôi sẽ truyền dữ liệu thật vào.

Lưu ý cực kỳ quan trọng:
Đây KHÔNG phải playground.
Đây KHÔNG phải dashboard.
Đây KHÔNG phải form chỉnh sửa thông tin.
Đây KHÔNG phải màn hình chọn doanh nghiệp mẫu.
Đây KHÔNG phải công cụ live editor.

Không được tạo:
- Sidebar chọn doanh nghiệp.
- Form nhập tên doanh nghiệp.
- Form nhập số điện thoại.
- Form nhập ngành nghề.
- Form nhập địa chỉ.
- Form chỉnh rating/review.
- Live editor.
- Preset launcher.
- Path routing simulation trong src/App.tsx.
- Màn hình "chọn doanh nghiệp mẫu".
- UI để người dùng thay đổi dữ liệu trực tiếp.

Kết quả đúng:
Khi người dùng mở /demo/[place_id], họ phải nhìn thấy trực tiếp landing page của doanh nghiệp.
Nếu chưa có Supabase, route vẫn render bằng mock data tạm.
Mock data chỉ dùng để preview và phải nằm trong file data riêng, không nằm trong UI component.

Yêu cầu kỹ thuật:
- Dùng Next.js App Router.
- Dùng TypeScript.
- Dùng component-based architecture.
- Dùng Tailwind CSS nếu dự án đang dùng Tailwind.
- Dùng next/image cho ảnh.
- Không hard-code tên doanh nghiệp, ảnh, số điện thoại trong component.
- Dữ liệu truyền qua DemoPageData props.
- Hỗ trợ route thật /demo/[place_id].
- Hỗ trợ fallback data.
- Hỗ trợ SEO.
- Dễ tích hợp Supabase sau này.

Template cần tạo:
- template_key: {TEMPLATE_KEY}
- template component: {TEMPLATE_COMPONENT}

Cách xử lý dữ liệu hiện tại:
- Nếu chưa kết nối Supabase, tạo file src/lib/demo/mockDemoData.ts.
- mockDemoData.ts có thể chứa 1-2 record mẫu để test route, nhưng không được render danh sách record đó thành UI chọn doanh nghiệp.
- page.tsx tại /demo/[place_id] lấy dữ liệu mẫu theo place_id.
- Sau này tôi sẽ thay hàm mock bằng hàm fetch Supabase.
- Nếu place_id không tồn tại trong mock data, render not-found hoặc fallback 1 record mặc định. Không tạo trang chọn mẫu.

Luồng render bắt buộc:
1. Người dùng mở /demo/[place_id].
2. src/app/demo/[place_id]/page.tsx lấy place_id từ params.
3. page.tsx gọi getMockBusinessByPlaceId(place_id) hoặc getMockDemoData(place_id).
4. buildDemoPageData() chuyển business data thành DemoPageData.
5. DemoTemplateRenderer chọn template theo data.template.key.
6. DemoTemplateRenderer render {TEMPLATE_COMPONENT}.
7. Trang hiển thị trực tiếp website demo, không hiển thị màn hình cấu hình.

Cấu trúc mong muốn:
src/
  app/
    demo/
      [place_id]/
        page.tsx
        loading.tsx
        not-found.tsx

  components/
    demo/
      DemoTemplateRenderer.tsx
      templates/
        {TEMPLATE_COMPONENT}.tsx
      sections/
        DemoNavbar.tsx
        DemoHero.tsx
        TrustBar.tsx
        AboutSection.tsx
        ServicesSection.tsx
        GallerySection.tsx
        WhyChooseUsSection.tsx
        ReviewsSection.tsx
        ContactCTASection.tsx
        DemoFooter.tsx

  lib/
    demo/
      mockDemoData.ts
      buildDemoPageData.ts
      templateRouter.ts
      templateDefaults.ts
      fallbackRules.ts
      seo.ts

  types/
    demo.ts

DemoPageData shape:
{
  "business": {},
  "template": {},
  "hero": {},
  "trust": {},
  "about": {},
  "services": [],
  "gallery": [],
  "reviews": [],
  "contact": {},
  "seo": {}
}

Quy tắc component:
- Section component không được fetch Supabase.
- Section component chỉ nhận props.
- Template component chỉ nhận data: DemoPageData.
- Business logic mapping nằm trong lib/demo.
- Không hard-code business data trong UI component.

Ví dụ đúng:
<h1>{data.hero.title}</h1>

<Image
  src={data.hero.image.src}
  alt={data.hero.image.alt}
/>

<a href={data.contact.primaryAction.href}>
  {data.contact.primaryAction.label}
</a>

Ví dụ sai:
<h1>Nha Khoa Minh Tâm</h1>
<img src="/dental.jpg" />
<a href="tel:0901234567">Gọi ngay</a>

SEO:
- generateMetadata dùng data.seo.title và data.seo.description.
- Demo page mặc định noindex.
- Không tạo structured data chính thức khi dữ liệu chưa được khách xác nhận.

Fallback:
- Thiếu ảnh thì dùng ảnh fallback theo ngành.
- Thiếu phone thì CTA đổi sang Facebook, email hoặc bản đồ.
- Thiếu rating thì ẩn rating metric.
- Tên doanh nghiệp dài vẫn không làm vỡ layout.

Supabase readiness:
- Tạo sẵn hàm getBusinessByPlaceId(placeId) hoặc để TODO rõ ràng.
- Trong lần build hiện tại, chưa bắt buộc kết nối Supabase thật.
- Hãy tạo adapter rõ ràng: getMockBusinessByPlaceId(placeId) dùng ngay bây giờ; getBusinessByPlaceId(placeId) để sẵn hoặc TODO cho Supabase sau này.
- Không được làm app fail nếu chưa có env Supabase.
- Không expose SUPABASE_SERVICE_ROLE_KEY ra client.
- Page-level/server function mới được fetch data.
- Section component không biết Supabase schema.

Đây là prompt chi tiết theo ngành:
[copy nội dung file docs/05-prompts/studio-ai/{template-key}-studio-prompt.md]

Đây là tài liệu implementation:
[copy docs/06-implementation/nextjs-structure.md]
[copy docs/06-implementation/component-architecture.md]
[copy docs/06-implementation/dynamic-route-demo-place-id.md]
[copy docs/06-implementation/supabase-integration.md]

Kết quả mong muốn:
Tạo một Next.js public website template cho ngành {TEN_NGANH}.
Không tạo playground.
Không tạo form.
Không tạo màn hình chọn dữ liệu.
Không tạo dashboard.
Khi truy cập /demo/[place_id], trang landing page hiển thị ngay.
```

## Ví dụ dùng cho nha khoa

Thay placeholder:

```txt
{TEN_NGANH} = nha khoa
{TEMPLATE_KEY} = dental
{TEMPLATE_COMPONENT} = DentalTemplate
```

Sau đó copy thêm:

```txt
docs/05-prompts/studio-ai/dental-studio-prompt.md
docs/06-implementation/nextjs-structure.md
docs/06-implementation/component-architecture.md
docs/06-implementation/dynamic-route-demo-place-id.md
docs/06-implementation/supabase-integration.md
```

## Câu sửa nếu Studio AI đã tạo playground

Nếu Studio AI đã tạo màn hình giống dashboard/form chọn doanh nghiệp, dùng prompt này để sửa:

```txt
Hãy refactor lại bản hiện tại.

Loại bỏ toàn bộ live playground:
- Bỏ phần chọn doanh nghiệp mẫu.
- Bỏ form chỉnh sửa tên, phone, ngành, địa chỉ, rating.
- Bỏ preset launchers.
- Bỏ path routing simulation trong src/App.tsx.
- Bỏ mọi UI dashboard/editor.

Giữ lại các template component và section component tốt đã tạo.

Tạo route thật:
src/app/demo/[place_id]/page.tsx

Trong page.tsx hiện tại dùng mockDemoData để render.
Sau này tôi sẽ thay mockDemoData bằng Supabase fetch.

Kết quả cuối cùng:
Khi mở /demo/[place_id], người dùng nhìn thấy trực tiếp landing page demo.
Không thấy màn hình cấu hình, không thấy form, không thấy sidebar.
```
