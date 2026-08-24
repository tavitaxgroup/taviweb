# CẨM NANG HƯỚNG DẪN SỬ DỤNG HỆ THỐNG QUẢN TRỊ ADMIN (CUSTOMER ADMIN GUIDE)
*Tài liệu hướng dẫn trực quan bằng hình ảnh dành cho Khách hàng & Sales Demo*

---

Chào mừng bạn đến với hệ thống quản trị **TAVIWEB**. Tài liệu này hướng dẫn chi tiết từng bước vận hành các chức năng trong trang quản trị Admin, kèm theo hình ảnh chụp giao diện thực tế giúp bạn dễ dàng làm quen và thao tác.

---

## 1. ĐĂNG NHẬP HỆ THỐNG & BẢNG ĐIỀU KHIỂN CHÍNH (DASHBOARD)

Để truy cập vào hệ thống quản trị của cơ sở:
1.  Truy cập đường dẫn: `http://localhost:3000/admin/crm/login` (hoặc tên miền riêng của doanh nghiệp dạng `admin.tenmiencuaban.com`).
2.  Nhập thông tin tài khoản được cấp phát (ví dụ mặc định: `admin@tavi.com` / mật khẩu: `admin123`).
3.  Bấm nút **Đăng nhập** để vào trang chủ quản trị Dashboard.

### Giao diện Dashboard hiển thị các chỉ số đo lường tức thì:
*   **Tổng số cơ hội (Deals)**: Tổng số khách hàng đang được chăm sóc trong phễu bán hàng.
*   **Tương tác / Ghi chú**: Tổng số hoạt động ghi chép cuộc gọi, gặp mặt của nhân viên.
*   **Quy trình CRM**: Số quy trình/pipeline đang hoạt động.
*   **Doanh thu tạm tính**: Tổng giá trị của các hợp đồng đã chốt thành công.

![Bảng điều khiển trung tâm Dashboard](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/dashboard.png)

---

## 2. QUẢN TRỊ KHÁCH HÀNG (CRM) & BẢNG KANBAN

Phân hệ CRM giúp bạn quản lý toàn bộ các giao dịch với khách hàng. Quy trình bán hàng được chia thành các cột trực quan theo tiến độ tư vấn thực tế.

### Các giai đoạn chăm sóc khách hàng:
1.  **Khách Mới (New)**: Mọi số điện thoại do AI Chatbot thu thập được ngoài Website hoặc khách điền form sẽ tự động đổ về cột này dưới dạng thẻ (Card) thông tin.
2.  **Đã Gọi (Contacted)**: Nhân viên đã gọi điện tư vấn lần đầu.
3.  **Đã Gửi Báo Giá (Quote Sent)**: Đã thiết lập báo giá gửi khách.
4.  **Đang Đàm Phán (Negotiating)**: Đang thương lượng chốt lịch hẹn.
5.  **Chốt Deal (Won)**: Khách đã đến trải nghiệm dịch vụ và thanh toán thành công.
6.  **Từ Chối (Lost)**: Khách hủy lịch hẹn hoặc không có nhu cầu thực tế.

### Cách thao tác:
*   **Kéo thả thẻ Deal**: Giữ chuột và di chuyển thẻ từ cột này sang cột khác để đổi trạng thái của khách.
*   **Xem lịch sử chi tiết**: Bấm vào thẻ khách hàng để mở popup ghi chú hoạt động và lịch sử chat của Bot AI.

![Quản trị quy trình chăm sóc khách hàng CRM Kanban](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/crm_kanban.png)

---

## 3. HỆ THỐNG ĐẶT LỊCH HẸN & BẢNG CALENDAR (BOOKING ENGINE)

Phân hệ này giải quyết triệt để bài toán trùng lịch của cơ sở và phân bổ ca làm việc cho nhân viên kinh doanh/kỹ thuật viên.

### Các chức năng chính trên giao diện Calendar:
*   Hiển thị toàn bộ lịch hẹn đặt trước của khách theo dạng lịch tuần/lịch tháng.
*   Chủ cơ sở có thể đổi lịch hẹn bằng cách kéo thả ca hẹn sang ngày/giờ khác.
*   Bấm vào một ô giờ trống để đặt lịch thủ công cho khách gọi điện hoặc đến trực tiếp.
*   Hệ thống tự động khóa không cho khách đặt lịch trực tuyến ngoài Website khi phòng/giường đã kín hoặc nhân viên đó đã bận.

![Lịch điều phối đặt lịch hẹn Booking Calendar](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/booking_calendar.png)

---

## 4. CẤU HÌNH & HUẤN LUYỆN TRỢ LÝ AI (AI HUB)

Trang quản trị cho phép bạn huấn luyện chatbot AI trả lời thông minh theo tài liệu riêng của quán mà không cần biết lập trình.

### Quy trình nạp bộ não cho AI:
1.  Truy cập menu **AI Hub**.
2.  Nhập tên chỉ thị (System Prompt) hướng dẫn cách xưng hô cho Bot (ví dụ: *"Bạn là lễ tân Spa Luna, xưng em gọi anh/chị..."*).
3.  Tải lên các file tài liệu định dạng `.docx`, `.pdf`, `.txt` (bảng giá dịch vụ, chính sách chăm sóc khách hàng, câu hỏi thường gặp...).
4.  Bấm **Huấn luyện**. Hệ thống sẽ tự động phân tách tài liệu thành các khối kiến thức và nạp cho Bot trong vòng 10 giây.

![Giao diện nạp tài liệu huấn luyện AI Hub](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/ai_hub.png)

---

## 5. TRUNG TÂM DỮ LIỆU KHÁCH HÀNG TIỀM NĂNG (LEADS DASHBOARD)

Đây là kho dữ liệu khổng lồ do hệ thống bò cào của TAVIWEB tự động quét trên Google Maps và Facebook.

### Hướng dẫn lọc và đẩy khách hàng sang CRM:
1.  Truy cập menu **Leads Dashboard**.
2.  Sử dụng bộ lọc ở đầu bảng để lọc danh sách khách theo **Ngành nghề** (Nha khoa, Spa...), **Quận/Huyện**, **Tỉnh/Thành**.
3.  Xem trạng thái:
    -   **Khách Xịn (Verified)**: Cơ sở chắc chắn chưa có website, có thông tin SĐT hoặc Fanpage hoạt động tốt (đây là tệp khách hàng nóng dễ chốt).
    -   **Đã Có Web (Has Website)**: Hệ thống tự lọc bỏ qua để không tốn thời gian liên hệ.
4.  Bấm nút **Đẩy CRM** để chuyển thông tin cơ sở này thành Deal chăm sóc chính thức trong hệ thống CRM của nhân viên Sale phụ trách.

![Trung tâm dữ liệu khách hàng Leads Dashboard](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/leads_dashboard.png)

---

## 6. SAAS FACTORY - QUẢN LÝ DANH SÁCH KHÁCH HÀNG (WORKSPACES)

Màn hình cấu hình vòng đời của từng Tenant (Khách hàng sử dụng dịch vụ của TAVIWEB).

### Các thao tác quản lý doanh nghiệp thành viên:
*   **Thêm mới Khách hàng**: Nhập tên doanh nghiệp, slug (đường dẫn web), chọn mẫu giao diện thích hợp trong 15 template mẫu và cấp tài nguyên. Hệ thống tự động sinh tài khoản Admin CRM và xuất bản website ngay lập tức.
*   **Cấp hạn mức AI Token**: Theo dõi dung lượng sử dụng chatbot AI của từng khách hàng và bấm nút nạp thêm Token tức thì khi khách hết hạn mức.
*   **Quản lý Gói dịch vụ**: Nâng cấp/hạ cấp gói cước sử dụng (Basic, Starter, Pro, Super) và gia hạn thời gian hết hạn hệ thống.

![Màn hình quản trị hệ thống SaaS Factory Workspaces](file:///d:/TavitaxGroup/Project%20GitHub/BuilderAgentWebsite/taviweb/docs/09-sales-documentation/images/saas_factory.png)
