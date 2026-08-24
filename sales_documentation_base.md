# TÀI LIỆU NỀN TẢNG HỖ TRỢ XÂY DỰNG TÀI LIỆU BÁN HÀNG (SALES GUIDE BASE)

Tài liệu này tóm tắt toàn bộ giải pháp **TAVIWEB** theo góc nhìn nghiệp vụ kinh doanh, giá trị thương mại và trải nghiệm người dùng (End-to-End User Experience). Mục tiêu là cung cấp thông tin chuẩn hóa để người dùng (hoặc AI khác) có thể đọc hiểu ngay lập tức và biên soạn thành tài liệu đào tạo Sale, cẩm nang giới thiệu cho khách hàng, hoặc kết hợp với hệ thống khác.

---

## PHẦN I: BÀI THUYẾT TRÌNH BÁN HÀNG SIÊU TỐC (ELEVATOR PITCH)

> **TAVIWEB** là giải pháp chuyển đổi số toàn diện cho doanh nghiệp địa phương (phòng khám, spa, salon, nhà hàng, luật sư, trung tâm đào tạo...). Chúng tôi giúp doanh nghiệp sở hữu **Website thương hiệu riêng chỉ trong 30 giây**, tích hợp sẵn **Trợ lý ảo chốt sale tự động AI (RAG Chatbot)** hoạt động 24/7 và hệ thống **CRM Quản trị khách hàng & Lịch hẹn** đồng bộ khép kín. Không cần lập trình, không cần kiến thức kỹ thuật, khởi tạo tức thì để thu hút và giữ chân khách hàng.

---

## PHẦN II: PHÂN TÍCH GIÁ TRỊ CỐT LÕI (VALUE PROPOSITIONS)

### 1. Đối với khách hàng cuối của TAVI (Chủ cơ sở kinh doanh, Spa, Nha khoa...)
* **Tăng trưởng doanh thu 24/7**: Chatbot AI không chỉ trả lời câu hỏi thông thường mà đóng vai trò là một **Sale Agent chuyên nghiệp**, có nhiệm vụ thuyết phục và thu thập số điện thoại của khách truy cập website để chuyển về cho nhân viên tư vấn.
* **Thời gian triển khai siêu tốc**: Hệ thống tự động tạo dựng bộ khung website đẹp mắt, chuẩn SEO theo đúng ngành nghề (Nha khoa, Spa, Gym...) chỉ bằng vài cú click.
* **Quản trị khép kín tất cả trong một (All-in-One)**: Thay vì dùng riêng lẻ Website, phần mềm CRM, và phần mềm lịch hẹn (gây tốn kém và rời rạc dữ liệu), TAVIWEB cung cấp một giải pháp đồng bộ hoàn hảo: **Web + AI Bot + CRM + Booking Calendar**.
* **Đào tạo Bot dễ dàng (Zero-Coding RAG)**: Chỉ cần dán văn bản hoặc tải tài liệu hướng dẫn dịch vụ của mình lên, Chatbot AI sẽ tự động học và trả lời chính xác theo văn phong của quán/cơ sở đó.

### 2. Đối với đội ngũ kinh doanh (Sales Reps) của TAVI
* **Nguồn Data nóng dồi dào**: Hệ thống bò cào tự động tìm kiếm trực tiếp trên Google Maps & Facebook những doanh nghiệp đang hoạt động tốt nhưng **chưa có website** hoặc chỉ có Fanpage. Đây là tệp khách hàng tiềm năng có tỷ lệ chốt cực cao.
* **Quy trình bán hàng thông minh**: Hệ thống tự động lọc ra các "Khách Xịn" (đã xác thực số điện thoại và chắc chắn chưa có web), giúp sale không mất thời gian gọi lọc data rác.
* **Vũ khí Demo trực quan (Demo Sells)**: Sale có thể khởi tạo nhanh một bản web demo thực tế có gắn logo, tên thương hiệu và số điện thoại của khách hàng để gửi cho họ trải nghiệm trước khi xuống tiền mua.

---

## PHẦN III: HỆ THỐNG TÍNH NĂNG CHI TIẾT (PRODUCT MODULES)

Hệ thống được thiết kế chia làm **3 nhóm chức năng cốt lõi**:

### 1. Nhà máy SaaS & Kho dữ liệu Khách hàng (SaaS Factory & Leads Center)
*Phân hệ này dành cho người quản trị TAVI và Sale sử dụng để săn tìm và tạo hệ thống cho khách hàng:*
* **Cào dữ liệu thông minh**: Tự động quét các cơ sở kinh doanh theo khu vực địa lý và ngành nghề, kiểm tra trạng thái website để tìm ra các cơ sở chưa có web.
* **Xác thực tự động**: Hệ thống AI tự tìm kiếm đối chứng thông tin trên internet để đảm bảo danh sách khách hàng chất lượng cao (Verified Leads).
* **Khởi tạo Tenant tức thì (SaaS Factory)**: Điền tên, slug và chọn mẫu giao diện, hệ thống tự cấp phát không gian Web riêng, tạo tài khoản quản trị CRM riêng (`admin@tenant.com`) và nạp hạn mức AI token.

### 2. Trải nghiệm Website & AI Chatbot Chốt Sale (Public Site & AI Bot)
*Phân hệ hiển thị công khai tới khách hàng của chủ cơ sở:*
* **Kho 15 Giao diện chuẩn ngành nghề**: Thiết kế hiện đại, responsive hoàn toàn trên Mobile và Desktop, bao gồm các ngành hot nhất: Nha khoa, Spa, Thẩm mỹ viện, Phòng khám, Salon tóc, Văn phòng luật, Trung tâm tiếng Anh, Dịch vụ vệ sinh, Thiết kế nội thất, Xây dựng, Nhà hàng, Quán cafe, Studio ảnh, Phòng Gym, Garage ô tô.
* **AI Chatbot RAG (Retrieval-Augmented Generation)**: Bot được nhúng trực tiếp dưới góc trang web. Khi khách hỏi, Bot sẽ truy vấn cơ sở dữ liệu tri thức nội bộ của doanh nghiệp để đưa ra câu trả lời chuẩn xác nhất.
* **Kịch bản chốt số điện thoại (Call-to-Action)**: Bot tuân thủ lệnh bảo mật bảo vệ API key và luôn hướng cuộc hội thoại về việc xin thông tin liên hệ (số điện thoại) để chuyển tiếp cho Sale.

### 3. CRM Đa doanh nghiệp & Quản lý lịch hẹn (Multi-tenant CRM & Booking)
*Phân hệ nội bộ dành cho chủ cơ sở và nhân viên của họ quản lý kinh doanh:*
* **Bảng Kanban quản trị Deal**: Quản lý khách hàng theo các giai đoạn (Khách mới -> Đã gọi -> Đã báo giá -> Đàm phán -> Thành công / Thất bại).
* **Tự động hóa đồng bộ**: Khi khách hàng để lại số điện thoại cho Chatbot AI ngoài Website hoặc đặt lịch hẹn, hệ thống tự động tạo một Deal/Contact mới trong CRM và thông báo cho nhân viên.
* **Bộ tính toán & Xuất báo giá (Quote Generator)**: Chọn các gói dịch vụ (Cơ bản, Tiêu chuẩn, Cao cấp...) và số lượng, hệ thống tự tính tiền, tạo file báo giá chuyên nghiệp gửi cho khách hàng.
* **Quản lý lịch hẹn (Booking Engine)**:
  - Khách tự đặt lịch hẹn chọn ngày, giờ, nhân sự phục vụ trực tiếp trên web.
  - Chủ cơ sở quản lý danh sách lịch hẹn, phân bổ tài nguyên, phòng ốc và nhân sự hỗ trợ thông qua màn hình Calendar trực quan.
* **Báo cáo doanh thu & KPIs (Analytics Dashboard)**: Biểu đồ doanh số thực tế, số lượng tương tác, hiệu suất làm việc của từng nhân viên sale theo chỉ tiêu KPI hàng tháng.

---

## PHẦN IV: LUỒNG TRẢI NGHIỆM ĐỒNG BỘ (DATA & USER FLOW)

Để viết tài liệu hướng dẫn sinh động, hãy mô tả luồng chuyển dịch dữ liệu mượt mà từ khi bắt đầu đến khi tạo ra doanh thu:

```
[Bò cào TAVI] -> Quét & Xác thực Lead thô (Google Maps / Facebook)
      ↓
[CRM TAVI]     -> Nhân viên Sale của TAVI tiếp cận khách hàng bằng Web Demo có sẵn
      ↓
[SaaS Factory] -> Tạo Tenant & Website chính thức (ví dụ: taviweb.vn/spa-mai-anh)
      ↓
[Website Khách]-> Khách hàng truy cập -> Chatbot AI tư vấn & Đặt lịch hẹn tự động
      ↓
[CRM Khách]    -> Thông tin đổ thẳng vào CRM của chủ Spa để nhân viên gọi điện chốt đơn
```
