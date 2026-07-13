# Prompt Studio AI English Center - Dùng Ngay

Copy toàn bộ prompt này vào Studio AI khi muốn chuyển thiết kế landing page trung tâm tiếng Anh thành code Next.js.

```txt
Hãy chuyển thiết kế landing page trung tâm tiếng Anh này thành code Next.js.

ƯU TIÊN CAO NHẤT:
Nếu có mâu thuẫn giữa các phần prompt bên dưới, hãy ưu tiên các quy tắc sau:

1. Không tạo playground, dashboard, editor, sidebar chọn doanh nghiệp, form nhập/sửa dữ liệu.
2. Route /demo/[place_id] phải render landing page trực tiếp.
3. Hiện tại dùng mock data tạm, không yêu cầu kết nối Supabase thật ngay.
4. Mock data chỉ được nằm trong src/lib/demo/mockDemoData.ts.
5. UI component không được hard-code thông tin doanh nghiệp.
6. Section component chỉ nhận props, không fetch data.
7. Template component cần tạo là EnglishCenterTemplate.
8. Template key là english-center.
9. Ngành là trung tâm tiếng Anh.
10. Phải bám sát thiết kế Stitch AI đã cung cấp. Không tự sáng tạo giao diện preview hub khác.

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
Tạo một website template public cho doanh nghiệp thuộc ngành trung tâm tiếng Anh.
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
- template_key: english-center
- template component: EnglishCenterTemplate

Cách xử lý dữ liệu hiện tại:
- Nếu chưa kết nối Supabase, tạo file src/lib/demo/mockDemoData.ts.
- mockDemoData.ts có thể chứa 1-2 record mẫu để test route, nhưng không được render danh sách record đó thành UI chọn doanh nghiệp.
- page.tsx tại /demo/[place_id] lấy dữ liệu mẫu theo place_id.
- Sau này tôi sẽ thay hàm mock bằng hàm fetch Supabase.
- Không được làm app fail nếu chưa có env Supabase.
- Nếu place_id không tồn tại trong mock data, render not-found hoặc fallback 1 record mặc định. Không tạo trang chọn mẫu.

Luồng render bắt buộc:
1. Người dùng mở /demo/[place_id].
2. src/app/demo/[place_id]/page.tsx lấy place_id từ params.
3. page.tsx gọi getMockBusinessByPlaceId(place_id) hoặc getMockDemoData(place_id).
4. buildDemoPageData() chuyển business data thành DemoPageData.
5. DemoTemplateRenderer chọn template theo data.template.key.
6. DemoTemplateRenderer render EnglishCenterTemplate.
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
        EnglishCenterTemplate.tsx
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
<h1>Trung Tâm Anh Ngữ Future English</h1>
<img src="/english-center.jpg" />
<a href="tel:0901234567">Đăng ký tư vấn</a>

SEO:
- generateMetadata dùng data.seo.title và data.seo.description.
- Demo page mặc định noindex.
- Không tạo structured data chính thức khi dữ liệu chưa được khách xác nhận.

Fallback:
- Thiếu ảnh thì dùng ảnh fallback theo ngành.
- Thiếu phone thì CTA đổi sang Facebook, email hoặc bản đồ.
- Thiếu rating thì ẩn rating metric.
- Không hard-code khóa học, học phí, cam kết điểm số hoặc lịch khai giảng nếu không có dữ liệu.
- Không cam kết IELTS/TOEIC đầu ra nếu không có dữ liệu xác nhận.
- Tên doanh nghiệp dài vẫn không làm vỡ layout.

Supabase readiness:
- Trong lần build hiện tại, chưa bắt buộc kết nối Supabase thật.
- Tạo adapter rõ ràng: getMockBusinessByPlaceId(placeId) dùng ngay bây giờ; getBusinessByPlaceId(placeId) để sẵn hoặc TODO cho Supabase sau này.
- Không expose SUPABASE_SERVICE_ROLE_KEY ra client.
- Page-level/server function mới được fetch data.
- Section component không biết Supabase schema.

Prompt chi tiết theo ngành:
Template này render website demo public cho trung tâm tiếng Anh tại /demo/[place_id]. Hiện tại dùng mock data để preview, sau này thay bằng Supabase fetch.
Code template năng động, đáng tin, dễ hiểu cho phụ huynh và học viên, tối ưu CTA đăng ký tư vấn.
EnglishCenterTemplate dùng 10 section chuẩn: Navbar, Hero, Trust, About, Services, Gallery, Why Choose Us, Reviews, Contact CTA, Footer.
Bind business, hero, trust, about, services, gallery, reviews, contact, seo.
Không hard-code tên trung tâm, phone, ảnh, khóa học cụ thể, học phí, lịch khai giảng hoặc cam kết điểm số.
Mobile-first; trên mobile ưu tiên CTA đăng ký tư vấn, gọi trung tâm và xem địa chỉ.
Desktop dùng layout sáng, rõ, thân thiện, thể hiện lộ trình học tập và bằng chứng xã hội.
Không dùng video background; gallery lazy load.
Thiếu ảnh dùng fallback lớp học/trung tâm giáo dục an toàn.
Thiếu phone dùng Facebook/map/email.

Service mặc định nên phù hợp trung tâm tiếng Anh:
- Tiếng Anh giao tiếp.
- IELTS/TOEIC.
- Tiếng Anh trẻ em.
- Kiểm tra trình độ.
- Lớp nhóm nhỏ.
- Tư vấn lộ trình học.

Visual direction:
- Cảm giác năng động, học tập có lộ trình, tin cậy và thân thiện.
- Màu chính: blue education.
- Accent: amber, green hoặc cyan nhẹ.
- Hình ảnh: lớp học, giáo viên, học viên, bảng học, hoạt động lớp.
- Tránh thiết kế quá trẻ con nếu không biết trung tâm dành cho trẻ em.
- Tránh claim điểm số, chứng chỉ hoặc giáo viên bản ngữ nếu không có dữ liệu.

CTA direction:
- CTA chính: Đăng ký tư vấn.
- CTA phụ: Kiểm tra trình độ, Gọi trung tâm hoặc Xem địa chỉ.
- Nếu thiếu số điện thoại, không render nút gọi; dùng map/Facebook/email.

Tài liệu implementation cần tuân thủ:
- app/demo/[place_id]/page.tsx chỉ fetch, map và render.
- Component section không fetch Supabase.
- Template theo ngành chỉ quyết định theme, tone và thứ tự section, không thay skeleton.
- Business logic mapping nằm trong lib/demo.
- DemoTemplateRenderer chọn component theo data.template.key.
- Nếu unknown template_key thì fallback an toàn.

Kết quả mong muốn:
Tạo một Next.js public website template cho ngành trung tâm tiếng Anh.
Không tạo playground.
Không tạo form.
Không tạo màn hình chọn dữ liệu.
Không tạo dashboard.
Khi truy cập /demo/[place_id], trang landing page hiển thị ngay.
```
