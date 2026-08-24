# BẢN MÔ TẢ TÍNH NĂNG & CHỨC NĂNG HỆ THỐNG TAVIWEB
*Tài liệu giới thiệu chức năng trực quan dành cho Khách hàng & đào tạo Sales*

---

Tài liệu này mô tả chi tiết **6 phân hệ tính năng chính** của hệ thống TAVIWEB theo ngôn ngữ chức năng đời thường, giúp chủ doanh nghiệp dễ dàng hình dung quy trình vận hành và giúp nhân viên Sales trình diễn thuyết phục nhất.

---

## 1. CRM - QUẢN LÝ KHÁCH HÀNG & PHÂN QUYỀN TÀI KHOẢN

> **Hình dung đơn giản**: Một bảng quản lý công việc có chia thành các cột trạng thái khách hàng (Khách Mới -> Đã Gọi -> Đã Báo Giá -> Đang Đàm Phán -> Chốt Thành Công / Thất Bại). Mỗi khách hàng là một thẻ thông tin mà bạn có thể dễ dàng kéo thả giữa các cột.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Không bao giờ trôi khách**: Khi khách hàng để lại số điện thoại ngoài Website hoặc nhắn tin cho AI Bot, hệ thống sẽ tự động tạo một thẻ thông tin khách hàng trong CRM và thông báo cho nhân viên. Chủ doanh nghiệp không cần mở Google Sheet hay chép tay ra sổ.
*   **Bảo mật dữ liệu**: Chủ doanh nghiệp có thể tạo tài khoản cho nhân viên Sales. Nhân viên nào chỉ thấy khách hàng được phân công cho nhân viên đó, còn chủ cơ sở (Admin) có thể xem toàn bộ hệ thống. Thông tin khách hàng là tài sản trọn đời của cơ sở, không lo bị nhân viên mang đi khi nghỉ việc.
*   **Lịch sử tương tác rõ ràng**: Bấm vào một khách hàng sẽ thấy toàn bộ lịch sử tư vấn của AI, ghi chú yêu cầu riêng của khách (ví dụ: *"Khách muốn làm phòng VIP"*, *"Khách chỉ rảnh ngày cuối tuần"*).

### 📋 Các chức năng chi tiết bên trong:
1.  **Quản lý thông tin liên hệ**: Lưu thông tin Tên, Số điện thoại, Facebook Fanpage, Nguồn khách (Google Maps, Fanpage, Website...).
2.  **Bảng Kanban kéo thả**: Kéo thả thẻ khách hàng để đổi trạng thái tư vấn nhanh chóng.
3.  **Hệ thống phân quyền**: Phân chia tài khoản "Quản trị viên" (Sếp) và "Nhân viên kinh doanh" (Sales).
4.  **Tạo báo giá gửi khách**: Tích chọn dịch vụ, nhập số lượng, hệ thống tự động xuất link báo giá kèm mã QR chuyển khoản ngân hàng chính xác số tiền cần trả.

---

## 2. CMS - QUẢN LÝ NỘI DUNG WEBSITE TỰ ĐỘNG

> **Hình dung đơn giản**: Một công cụ giúp chủ doanh nghiệp tự cập nhật, thay đổi bảng giá dịch vụ, hình ảnh thực tế hay bài viết trên Website của mình dễ dàng như cách đăng bài lên Facebook cá nhân mà không cần thuê lập trình viên.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Làm chủ Website 100%**: Muốn đổi giá dịch vụ, thêm ảnh phòng ốc mới hay đăng bài chúc mừng ngày lễ? Chủ cơ sở chỉ cần vào trang quản trị gõ chữ, tải ảnh lên là Website tự động thay đổi ngay lập tức.
*   **AI tự viết bài đăng Web (Gói Super)**: Không biết viết bài chuẩn SEO? Chủ doanh nghiệp chỉ cần nhập chủ đề mong muốn (ví dụ: *"Cách chăm sóc răng sau khi tẩy trắng"*), AI sẽ tự động viết một bài viết chuyên nghiệp, chuẩn SEO dài 800 từ và đăng lên trang tin tức của Web để hút khách hàng tìm kiếm trên Google.

### 📋 Các chức năng chi tiết bên trong:
1.  **Quản lý dịch vụ**: Thêm mới, sửa giá tiền, cập nhật hình ảnh và mô tả cho từng dịch vụ của cơ sở.
2.  **Đăng tin tức & Bài viết**: Trình soạn thảo văn bản dễ dùng giúp đăng các bài viết chia sẻ kiến thức, mẹo làm đẹp, cẩm nang chăm sóc sức khỏe.
3.  **Tự động viết SEO bằng AI**: AI tự phân tích từ khóa, viết bài và đăng bài viết tự động theo lịch hẹn trước.

---

## 3. HỆ THỐNG BOOKING - ĐẶT LỊCH HẸN THỜI GIAN THỰC

> **Hình dung đơn giản**: Phía ngoài Website là lịch đặt hẹn để khách tự bấm chọn ngày, giờ trống và chọn nhân sự phục vụ. Phía trong Admin là một cuốn lịch tổng hiển thị trực quan ca làm việc của toàn bộ nhân viên trong ngày/tuần.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Trải nghiệm đặt lịch 30 giây**: Khách hàng vào web tự chọn dịch vụ, chọn ca trực của bác sĩ/kỹ thuật viên yêu thích và thời gian rảnh. Không cần gọi điện thoại đặt chỗ rườm rà.
*   **Chống trùng lịch tuyệt đối**: Nếu giường/phòng của Spa đã kín chỗ, hoặc bác sĩ đó đã được khách khác đặt lịch vào khung giờ 9h00 sáng, hệ thống tự động khóa giờ đó ngoài Web. Khách hàng tiếp theo sẽ không thể chọn giờ này nữa.
*   **Nhắc lịch tự động (Gói Super)**: Hệ thống tự động gửi tin nhắn SMS hoặc Zalo nhắc nhở lịch hẹn cho khách trước giờ hẹn 2 tiếng, tránh tình trạng khách quên lịch, bùng lịch.

### 📋 Các chức năng chi tiết bên trong:
1.  **Trang đặt lịch công khai**: Tích hợp trên Website hiển thị ca trực, khung giờ còn trống thực tế.
2.  **Quản lý tài nguyên giới hạn**: Cấu hình số giường, số phòng tối đa hoặc số kỹ thuật viên phục vụ cùng lúc để khóa lịch khi quá tải.
3.  **Bảng Calendar điều phối**: Hiển thị toàn bộ lịch hẹn dạng lịch tuần/lịch tháng. Chủ cơ sở có thể kéo thả để đổi giờ hẹn của khách dễ dàng.
4.  **Đặt lịch thủ công**: Thêm nhanh lịch hẹn cho khách gọi điện đặt trực tiếp hoặc khách vãng lai bước vào cơ sở.

---

## 4. DASHBOARD - BẢNG ĐIỀU KHIỂN & BÁO CÁO DOANH SỐ

> **Hình dung đơn giản**: Một màn hình trung tâm hiển thị toàn bộ con số "sức khỏe" kinh doanh của cơ sở bao gồm: Hôm nay thu bao nhiêu tiền, có bao nhiêu khách đặt lịch, chatbot mang về bao nhiêu số điện thoại.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Nắm bắt kinh doanh trong 5 giây**: Mỗi buổi sáng chỉ cần mở điện thoại vào Dashboard là chủ cơ sở nắm được toàn bộ dòng tiền, lịch hẹn trong ngày và hiệu suất của nhân viên mà không cần hỏi han báo cáo.
*   **Theo dõi doanh số chính xác**: Doanh số được tự động tổng hợp từ các lịch hẹn hoàn thành và giao dịch thành công trên CRM, giúp quản lý dòng tiền minh bạch, không lo thất thoát.

### 📋 Các chức năng chi tiết bên trong:
1.  **Báo cáo doanh thu**: Biểu đồ hiển thị doanh thu theo ngày, tuần, tháng.
2.  **Thống kê nguồn khách**: Cho biết khách hàng đến từ kênh nào nhiều nhất (Facebook, Google Maps hay tự tìm kiếm trên Web).
3.  **Đo lường hiệu suất AI**: Hiển thị tổng số cuộc chat của Bot và tỷ lệ chốt số thành công của trợ lý ảo.
4.  **Quản lý chỉ tiêu KPI**: Thống kê doanh số thực tế của từng nhân viên sales so với mục tiêu KPI được giao đầu tháng.

---

## 5. CHATBOT AI - TRỢ LÝ ẢO TỰ ĐỘNG CHỐT SỐ 24/7

> **Hình dung đơn giản**: Một nhân viên sale ảo hoạt động dưới góc Website. Bot nói chuyện thông minh như người thật, giải đáp mọi thắc mắc về giá cả, dịch vụ của cơ sở và khéo léo thuyết phục khách để lại số điện thoại để nhân viên gọi lại hỗ trợ.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Trả lời khách ngay lập tức**: Khách hàng nhắn tin lúc 1 giờ sáng vẫn được tư vấn chi tiết về dịch vụ niềng răng hay liệu trình trị nám ngay trong 1 giây. Khách không phải chờ đợi qua đêm dẫn đến bỏ đi sang đối thủ.
*   **AI chốt số tự động**: Thay vì chỉ trò chuyện suông, AI được huấn luyện theo kịch bản: *"Khi khách hỏi giá hoặc dịch vụ, hãy giải thích ngắn gọn rồi mời khách để lại Số điện thoại để hệ thống lưu mã giảm giá 10% và nhân viên gọi điện xác nhận ưu đãi"*. Số điện thoại khách để lại sẽ ngay lập tức được chuyển thẳng vào CRM để Sales gọi điện.

### 📋 Các chức năng chi tiết bên trong:
1.  **Tư vấn tri thức chuẩn xác**: AI chỉ trả lời dựa trên thông tin chính thống được chủ cơ sở tải lên, tuyệt đối không tự bịa ra thông tin làm ảnh hưởng uy tín thương hiệu.
2.  **Tự động xin thông tin**: Kịch bản xin tên, số điện thoại, nhu cầu của khách hàng lồng ghép tự nhiên vào cuộc hội thoại.
3.  **Nhận diện thông tin ảo**: AI tự lọc và nhận diện đúng định dạng số điện thoại Việt Nam trước khi gửi về CRM.
4.  **Trực chat đa kênh 24/7**: Hoạt động không ngày nghỉ, không cần lương, phản hồi siêu tốc dưới 1.5 giây.

---

## 6. HUẤN LUYỆN KỊCH BẢN CHATBOT - NẠP BỘ NÃO CHO AI

> **Hình dung đơn giản**: Một trang tính năng giúp bạn "dạy học" cho Bot AI của mình. Bạn chỉ cần tải file Word, PDF giới thiệu dịch vụ lên, Bot sẽ tự động đọc hiểu và biết cách tư vấn y như một nhân viên thực thụ.

### 🌟 Khách hàng trải nghiệm được gì?
*   **Dạy Bot trong 10 giây**: Không cần biết lập trình hay cấu hình luật chat phức tạp. Cơ sở có bảng giá mới, quy trình dịch vụ mới hay bác sĩ mới? Chỉ cần quăng file tài liệu mới lên, AI tự học và biết cách tư vấn ngay lập tức.
*   **Kiểm soát những gì Bot nói**: Doanh nghiệp hoàn toàn kiểm soát được nội dung tư vấn của Bot. Bạn muốn Bot xưng hô thế nào (Dạ/Em lịch sự), điều hướng khách mua sản phẩm nào trước đều có thể cài đặt dễ dàng.

### 📋 Các chức năng chi tiết bên trong:
1.  **Tải tài liệu đa định dạng**: Hệ thống tự động phân tích chữ từ file PDF, Word (.docx) hoặc Text (.txt).
2.  **Dán văn bản trực tiếp**: Ô nhập liệu nhanh để dán các câu hỏi thường gặp (FAQs) hoặc thông tin khuyến mãi ngắn hạn.
3.  **Cài đặt tính cách & câu lệnh chỉ thị**: Viết lời chỉ dẫn cho Bot (ví dụ: *"Bạn là chuyên viên tư vấn của Nha Khoa Tavi. Chỉ tư vấn làm răng thẩm mỹ, không tư vấn bệnh lý khác"*).
4.  **Theo dõi tài nguyên AI**: Màn hình hiển thị số lượng token còn lại trong tài khoản và cho phép nạp thêm Token tức thì.
