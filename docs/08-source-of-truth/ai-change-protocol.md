# Source Of Truth - AI Change Protocol

Cap nhat: 2026-08-05.

File nay danh cho AI coding agent va developer truoc khi sua project `taviweb`.

## Thu tu doc tai lieu

Truoc khi sua code, doc theo thu tu:

1. `docs/08-source-of-truth/project-architecture.md`
2. File rules dung voi khu vuc dang sua:
   - `template-gallery-rules.md`
   - `demo-renderer-rules.md`
   - `document-inventory.md`
3. Neu can tham khao prompt/template cu, doc tiep `docs/HDSD` hoac `docs/05-prompts`.

## Xac dinh khu vuc dang sua

| Khu vuc | Duoc sua | Khong sua neu khong lien quan |
|---|---|---|
| Website cong ty | `src/app/page.tsx`, `src/components/company`, CSS `.company-software` | `src/template-sources`, `src/lib/demo` |
| Kho giao dien | `src/app/kho-giao-dien`, `src/components/template-gallery`, `src/lib/templates/templateCatalog.ts`, CSS `.gallery-*` | Supabase fetch, demo renderer |
| Demo renderer | `src/app/demo/[place_id]`, `src/lib/demo`, `src/lib/supabase`, `src/components/demo` | Kho giao dien neu khong can |
| Template source | `src/template-sources/{industry}` | Company site, catalog neu khong can |
| Tai lieu | `docs/08-source-of-truth` | Code runtime neu chi sua doc |

## Quy tac sua website cong ty

- Brand hien tai la `TAVIWEB`.
- Anh hero trang chu phai nam o `public/assets/tavi-software-hero.png`.
- Khong chuyen anh hero vao `src/public`.
- CSS cua trang cong ty nam trong scope `.company-software`.
- Dropdown kho giao dien trong header lay danh sach tu `industryCatalog`.
- Phan Dịch vụ dung bo cuc Tab tuong tac (Interactive Tabs) 2 cot toi gian.
- Phan Quy trình dung bo cuc The rong xep chong 3D (Double-Bezel long nhau: `.process-step-card-outer` va `.process-step-card-inner`) dat duoi tieu de can giua. Danh sach dau viec bàn giao (deliverables) hien thi dang luoi 3 cot (3-column grid).
- Phan Footer dung bo cuc da cot cao cap (Premium Multi-Column Footer) ho tro chia cot linh hoat va responsive.
- Bang gia su dung he thong 3 Tab tuong tac voi thanh Tab Switcher hinh nhong bo tron kien Apple/Linear (`border-radius: 9999px`) bang nen kinh mo (`backdrop-filter: blur(20px)`), ho tro hover icon va co nhan gợi ý "GỢI Ý" capsule gradient do nhap nhay tren Tab 3.
- Tab 1 (Bang gia cau phan le): Hien thi thanh cong thuc tinh tong o tren dau va 3 cot chi phi doc lap (Thiet ke, Ten mien, Van hanh) cho phep click de mo overlay modal chi tiet. Tat ca cac option khong mat phi (Giao dien mau, Duong dan con, goi Basic) hien thi duy nhat chu "Miễn phí" dam co mau do.
- Tab 2 (Tu cau hinh & Tinh gia): Bo tinh toan tu dong thoi gian thuc ho tro cong don cac dải gia dong (Min-Max) cua goi Doanh nghiep va Ten mien rieng, va hien thi badge goi y combo khop voi Phuong an A, B, C, D o goc duoi phia phai.
- Tab 3 (Cac phuong an tron goi): Danh sach 4 the combo (A, B, C, D) duoc thiet ke dong bo, hien thi thong tin cau phan va gia ban dau & duy tri verbtim tu PDF, su dung ten goi goc cua tung combo.
- Bo doi nut lien he noi (Zalo & Hotline) o goc duoi phai phai co dang hinh tron 52px doi xung. Nut Hotline co animation song rung mờ nhe nhang (pulse glow) va tu dong truot mo rong chieu ngang (slide width) khi hover de hien thi so dien thoai.
- Anh trong slider marquee (`DraggableMarquee`) dung anh tuong trung (Symbolic Stock Photos) va anh nguoi dung tu tai len trong `/public/template-previews/` voi `object-position: center`.

## Quy tac sua kho giao dien

- Sidebar trai co 15 nganh nghe va nam trong mot khung lon.
- Khong hien mui ten truoc ten nganh trong sidebar.
- Noi dung phai rong hon sidebar.
- `/kho-giao-dien` chi redirect ve `/kho-giao-dien/noi_that`; khong tao lai man hinh chon tat ca nganh.
- Link "Kho giao dien" tren header trang chu phai tro den `/kho-giao-dien/noi_that`.
- Khong hien cac tu ky thuat `Supabase`, `lead`, `mock data`, `render engine` cho khach.
- Neu them mau moi, sua `src/lib/templates/templateCatalog.ts`.
- Neu chi them anh tham khao, khong sua `/demo/[place_id]`.

## Quy tac sua demo renderer

- `/demo/[place_id]` luon hien website demo truc tiep.
- Khong them dashboard, playground, form sua lead, form chon doanh nghiep.
- Section/template component khong fetch Supabase.
- Business mapping nam trong `src/lib/demo` va adapter trong `StudioTemplateRenderer`.
- Template source co the giu design goc, chi thay text/link/anh theo lead.

## Quy tac voi docs cu

- `docs/08-source-of-truth` la nguon su that hien tai.
- Cac folder `00-07`, `04-templates`, `05-prompts`, `HDSD` la tai lieu nen tang/tham khao/prompt cu, khong duoc coi la kien truc runtime hien tai neu mau thuan voi `08-source-of-truth`.
- Khong xoa tai lieu cu neu chua co yeu cau ro. Neu can don dep, xem `document-inventory.md`.

## Checklist truoc khi ket thuc

- [ ] Chay `npx.cmd tsc --noEmit --incremental false`.
- [ ] Neu co sua code runtime, chay `npm.cmd run build`.
- [ ] Kiem tra route lien quan:
  - `/`
  - `/kho-giao-dien` redirect ve `/kho-giao-dien/noi_that`
  - `/kho-giao-dien/nha_khoa`
  - `/demo/mock-nha_khoa`
- [ ] Khong commit `.next`, `node_modules`, log, `.env.local`.
- [ ] Neu sua brand/path/field Supabase, cap nhat `docs/08-source-of-truth`.
