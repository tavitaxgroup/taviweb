# Thư viện mẫu cấu hình JSON (`template_data`) Đầy Đủ & Chi Tiết Nhất cho 6 Template Chính

Tài liệu này là cẩm nang cấu hình đầy đủ mọi thuộc tính (phím tắt ảnh, khối văn bản đầu trang, danh sách dịch vụ, các chỉ số đánh giá, đánh giá chi tiết, thông tin liên hệ và chân trang) cho 6 template chính (**Spa**, **Nha khoa**, **Phòng khám**, **Trung tâm Tiếng Anh**, **Thiết kế nội thất**, và **Luật sư**).

---

## 1. Mẫu cấu hình Spa đầy đủ (`spa`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80"
  ],
  "about_image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
  "hero.eyebrow": "TRỊ LIỆU THẢO MỘC TỰ NHIÊN",
  "hero.title": "Đánh Thức Giác Quan & Tái Tạo Năng Lượng",
  "hero.subtitle": "Nơi tâm hồn tìm lại sự an yên giữa lòng thành phố nhộn nhịp.",
  "hero.primaryAction.label": "Đặt Lịch Ngay",
  "hero.primaryAction.href": "tel:0337367643",
  "hero.secondaryAction.label": "Chat Facebook",
  "hero.secondaryAction.href": "https://facebook.com/lumina_spa",
  "trust.rating": 4.9,
  "trust.reviewCount": 185,
  "trust.followers": 8500,
  "about.title": "Hành Trình Chăm Sóc Độc Bản",
  "about.body": "Lumina Spa tự hào mang đến các phương pháp massage trị liệu Đông y cổ truyền kết hợp dòng mỹ phẩm hữu cơ cao cấp nhập khẩu Pháp.",
  "about.highlights": [
    "Không gian yên tĩnh: Tách biệt hoàn toàn với tiếng ồn đô thị, mang lại sự bình yên tuyệt đối.",
    "Kỹ thuật viên tận tâm: Đội ngũ được đào tạo bài bản, thấu hiểu từng nhu cầu của khách hàng.",
    "Sản phẩm cao cấp: Cam kết sử dụng các dòng mỹ phẩm hữu cơ và công nghệ hàng đầu thế giới."
  ],
  "services": [
    {
      "id": "spa-sv-1",
      "name": "Trị liệu đá nóng cổ truyền",
      "category": "Therapy",
      "description": "Sử dụng đá núi lửa tự nhiên giúp đả thông kinh lạc, giảm đau mỏi cơ vai gáy.",
      "image": {
        "src": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500",
        "alt": "Massage đá nóng"
      }
    },
    {
      "id": "spa-sv-2",
      "name": "Chăm sóc da mặt chuyên sâu",
      "category": "Aesthetics",
      "description": "Làm sạch sâu, hút chì điện di vitamin C giúp trẻ hóa da tức thì.",
      "image": {
        "src": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500",
        "alt": "Chăm sóc da"
      }
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600",
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600"
  ],
  "reviews": [
    {
      "id": "spa-rv-1",
      "rating": 5,
      "text": "Không gian trang nhã, phục vụ tận tình và chu đáo cực kỳ. Rất đáng trải nghiệm!",
      "author": "Khánh Linh",
      "role": "Khách hàng thân thiết"
    },
    {
      "id": "spa-rv-2",
      "rating": 5,
      "text": "Liệu trình đá nóng rất dễ chịu, giảm hẳn đau vai gáy sau một buổi đầu tiên.",
      "author": "Minh Tuấn",
      "role": "Hội viên Gold"
    }
  ],
  "contact.address": "123 Đường Ba Tháng Hai, Quận 10, TP. Hồ Chí Minh",
  "contact.phone": "0337.367.643",
  "contact.email": "contact@luminaspa.vn",
  "contact.MessageCircle": "https://zalo.me/0337367643"
}
```

---

## 2. Mẫu cấu hình Nha khoa đầy đủ (`nha_khoa`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    "/assets/nha_khoa_hero.png"
  ],
  "about_image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
  "hero.badge": "HỆ THỐNG NHA KHOA QUỐC TẾ",
  "hero.title": "Nụ Cười Rạng Rỡ - Kiến Tạo Tương Lai",
  "hero.subtitle": "Dịch vụ bọc răng sứ, niềng răng Invisalign chuẩn Đức với đội ngũ bác sĩ chuyên khoa cấp I.",
  "hero.primaryAction.label": "Tư vấn miễn phí",
  "hero.primaryAction.href": "tel:0337367643",
  "hero.secondaryAction.label": "Địa chỉ phòng khám",
  "hero.secondaryAction.href": "#contact",
  "trust.rating": 4.8,
  "trust.reviewCount": 250,
  "about.title": "Nha Khoa Thẩm Mỹ Quốc Tế Minh Châu",
  "about.subtitle": "Kiến tạo nụ cười hoàn mỹ bằng sự tận tâm và công nghệ tối tân.",
  "about.description": "Chúng tôi tự hào là đơn vị tiên phong áp dụng công nghệ chụp phim CT Cone Beam 3D thế hệ mới, đảm bảo độ chuẩn xác và an toàn tuyệt đối.",
  "about.highlights": [
    "Tư vấn rõ ràng: Mọi thắc mắc về lộ trình điều trị, chi phí hay chính sách bảo hành đều được tư vấn chi tiết, minh bạch ngay từ đầu.",
    "Không gian sạch: Phòng điều trị vô trùng khép kín nghiêm ngặt, sử dụng dụng cụ riêng biệt cho từng khách hàng để chống lây nhiễm chéo.",
    "Dễ đặt lịch: Hệ thống tổng đài và đặt hẹn trực tuyến sẵn sàng 24/7, giúp bạn chủ động sắp xếp thời gian khám nhanh gọn, không chờ đợi."
  ],
  "services": [
    {
      "id": "dental-sv-1",
      "title": "Bọc răng sứ thẩm mỹ",
      "description": "Chất liệu răng toàn sứ Cercon bền bỉ, màu sắc tự nhiên tựa răng thật.",
      "iconName": "Sparkles"
    },
    {
      "id": "dental-sv-2",
      "title": "Cấy ghép răng Implant",
      "description": "Giải pháp phục hình răng đã mất tối ưu nhất hiện nay, bảo hành trọn đời.",
      "iconName": "ShieldAlert"
    },
    {
      "id": "dental-sv-3",
      "title": "Niềng răng Invisalign",
      "description": "Công nghệ khay niềng trong suốt ôm sát chân răng, đạt hiệu quả thẩm mỹ cao.",
      "iconName": "CheckCircle"
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
  ],
  "reviews": [
    {
      "id": "dental-rv-1",
      "author": "Trần Hải Nam",
      "source": "Google",
      "rating": 5,
      "text": "Bác sĩ rất mát tay, bọc răng sứ xong ăn nhai thoải mái không ê buốt gì."
    },
    {
      "id": "dental-rv-2",
      "author": "Nguyễn Hồng Hạnh",
      "source": "Clinic",
      "rating": 5,
      "text": "Trải nghiệm dịch vụ 5 sao, phòng khám sạch sẽ và tư vấn lộ trình niềng răng rõ ràng."
    }
  ],
  "contact.title": "NHA KHOA QUỐC TẾ MINH CHÂU",
  "contact.subtitle": "Liên hệ ngay để được đặt lịch thăm khám miễn phí cùng chuyên gia.",
  "contact.phone": "0337.367.643",
  "contact.email": "contact@minhchaudental.vn",
  "contact.address": "456 Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội"
}
```

---

## 3. Mẫu cấu hình Phòng khám đầy đủ (`phong_kham`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1400&q=80"
  ],
  "about_image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
  "hero.badge": "CHẤT LƯỢNG Y KHOA TIÊN PHONG",
  "hero.title": "Tận Tâm Chăm Sóc - Sức Khỏe Vững Bền",
  "hero.subtitle": "Phòng khám đa khoa chất lượng cao, phục vụ nhanh chóng, không chờ đợi.",
  "hero.primaryAction.label": "Đăng ký khám",
  "hero.primaryAction.href": "tel:0337367643",
  "hero.secondaryAction.label": "Xem bản đồ",
  "hero.secondaryAction.href": "#contact",
  "trust.rating": 4.8,
  "trust.reviewCount": 320,
  "about.title": "Nơi Gửi Gắm Niềm Tin Sức Khỏe",
  "about.description": "Đội ngũ y bác sĩ từng công tác tại các bệnh viện lớn (Bạch Mai, Chợ Rẫy) trực tiếp thăm khám, chuẩn đoán lâm sàng chính xác và tư vấn điều trị.",
  "about.highlights": [
    "Công Nghệ Mới: Trang thiết bị chẩn đoán hình ảnh và xét nghiệm đạt chuẩn quốc tế.",
    "Bác Sĩ Đầu Ngành: Đội ngũ y bác sĩ có trình độ chuyên môn cao, nhiều năm tu nghiệp nước ngoài.",
    "Thân Thiện: Môi trường phòng khám ấm cúng, phù hợp cho cả trẻ nhỏ và người cao tuổi."
  ],
  "services": [
    {
      "id": "clinic-sv-1",
      "title": "Khám Nội Tổng Quát",
      "description": "Tầm soát các bệnh lý mãn tính về tim mạch, huyết áp, tiểu đường.",
      "icon": "Users"
    },
    {
      "id": "clinic-sv-2",
      "title": "Xét Nghiệm Nhanh",
      "description": "Hệ thống máy xét nghiệm máu, nước tiểu tự động cho kết quả chuẩn xác.",
      "icon": "Cpu"
    },
    {
      "id": "clinic-sv-3",
      "title": "Chẩn Đoán Hình Ảnh",
      "description": "Hệ thống siêu âm 4D thế hệ mới và X-Quang kỹ thuật số liều thấp.",
      "icon": "Heart"
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600"
  ],
  "reviews": [
    {
      "id": "clinic-rv-1",
      "author": "Bác Hoàng Văn Đạt",
      "rating": 5,
      "text": "Bác sĩ giải thích rất kỹ lưỡng và dễ hiểu, thủ tục nhanh gọn không rườm rà như bệnh viện công."
    }
  ],
  "contact.title": "PHÒNG KHÁM ĐA KHOA QUỐC TẾ",
  "contact.phone": "0337.367.643",
  "contact.address": "789 Đường Lê Duẩn, Quận Hải Châu, Đà Nẵng",
  "contact.workingHours": "Thứ 2 - Thứ 7: 7:30 - 17:30 | Chủ nhật: 8:00 - 12:00"
}
```

---

## 4. Mẫu cấu hình Trung tâm Tiếng Anh đầy đủ (`trung_tam_tieng_anh`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
  ],
  "about_image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600",
  "hero.badge": "CAM KẾT ĐẦU RA IELTS BẰNG VĂN BẢN",
  "hero.title": "Bứt Phá Tiếng Anh - Vươn Ra Thế Giới",
  "hero.subtitle": "Chương trình học chuẩn hóa quốc tế với 100% giáo viên có bằng cử nhân và chứng chỉ TESOL/CELTA.",
  "hero.primaryAction.label": "Kiểm tra trình độ miễn phí",
  "hero.primaryAction.href": "#contact",
  "hero.secondaryAction.label": "Liên hệ ngay",
  "hero.secondaryAction.href": "tel:0337367643",
  "trust.studentsCount": "10,000+",
  "trust.rating": 4.9,
  "trust.followers": 45000,
  "about.title": "Kiến Tạo Thế Hệ Học Viên Toàn Cầu",
  "about.description": "Không chỉ giảng dạy ngôn ngữ, Apex Academy trang bị cho học viên kỹ năng tư duy biện luận, thuyết trình trước đám đông và làm việc nhóm đạt chuẩn quốc tế.",
  "about.highlights": [
    "Lộ trình rõ ràng: Hệ thống bài giảng được thiết kế khoa học, bám sát năng lực thực tế và mục tiêu cụ thể của từng học viên.",
    "Giáo viên tận tâm: Đội ngũ giảng viên 8.0+ IELTS, có bề dày sư phạm quốc tế và luôn sẵn sàng hỗ trợ, truyền lửa nhiệt huyết.",
    "Cộng đồng năng động: Các hoạt động dã ngoại dồi dào, câu lạc bộ Debate hàng tuần, nâng cao kỹ năng mềm toàn diện."
  ],
  "services": [
    {
      "id": "course-1",
      "title": "Luyện thi IELTS cam kết 6.5+",
      "description": "Chương trình chuyên biệt giúp bứt phá 4 kỹ năng trong 6 tháng, cam kết học lại miễn phí.",
      "icon": "Target"
    },
    {
      "id": "course-2",
      "title": "Tiếng Anh Giao Tiếp Cho Người Đi Làm",
      "description": "Tập trung thực hành phản xạ nghe nói trôi chảy trong môi trường văn phòng thực tế.",
      "icon": "Heart"
    },
    {
      "id": "course-3",
      "title": "Tiếng Anh Trẻ Em (6-12 tuổi)",
      "description": "Học qua dự án và trò chơi, giúp bé phát âm chuẩn bản ngữ ngay từ nhỏ.",
      "icon": "Sparkles"
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600"
  ],
  "reviews": [
    {
      "id": "english-rv-1",
      "author": "Lê Hoài Nam (Học viên đạt IELTS 7.5)",
      "rating": 5,
      "text": "Phương pháp dạy học ở đây rất thực tế, giáo viên nhiệt tình sửa từng lỗi phát âm và viết bài luận."
    }
  ],
  "contact.phone": "0337.367.643",
  "contact.email": "info@apexacademy.edu.vn",
  "contact.address": "12 Đường Kim Mã, Quận Ba Đình, Hà Nội"
}
```

---

## 5. Mẫu cấu hình Thiết kế nội thất đầy đủ (`noi_that`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
  ],
  "about_image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
  "hero.badge": "STUDIO KIẾN TRÚC & NỘI THẤT",
  "hero.title": "Không Gian Sống Nghệ Thuật & Độc Bản",
  "hero.subtitle": "Thiết kế thi công trọi gói biệt thự, penthouse cao cấp tối giản.",
  "hero.primaryAction.label": "Đăng ký tư vấn",
  "hero.primaryAction.href": "#contact",
  "about.badge": "CHẤT LƯỢNG ĐẶT LÊN HÀNG ĐẦU",
  "about.title": "Tinh Hoa Thiết Kế Từ Sự Tinh Tế",
  "about.description": "Chúng tôi tin rằng ngôi nhà là tác phẩm nghệ thuật phản chiếu phong cách sống cá nhân của gia chủ.",
  "about.highlights": [
    "Độc bản: Thiết kế may đo theo cá tính gia chủ.",
    "Cao cấp: Vật liệu nhập khẩu đạt tiêu chuẩn châu Âu.",
    "Tỉ mỉ: Giám sát thi công chặt chẽ đến từng chi tiết nhỏ."
  ],
  "services": [
    {
      "title": "Thiết kế nội thất biệt thự",
      "description": "Bản vẽ 3D chi tiết phối cảnh sang trọng, tối ưu công năng.",
      "icon": "Home"
    },
    {
      "title": "Thi công hoàn thiện trọn gói",
      "description": "Cam kết tiến độ và chất lượng thực tế giống 99% bản vẽ thiết kế.",
      "icon": "Hammer"
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600"
  ],
  "reviews": [
    {
      "author": "Chị Hoàng Lan (Vinhomes Green Bay)",
      "quote": "Vô cùng hài lòng với thiết kế phòng khách mở rộng rãi và ấm cúng.",
      "role": "Gia chủ"
    }
  ],
  "contact.title": "KẾT NỐI VỚI CHÚNG TÔI",
  "contact.phone": "0337.367.643",
  "contact.address": "15 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh"
}
```

---

## 6. Mẫu cấu hình Luật sư đầy đủ (`luat_su`)

```json
{
  "logo_url": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120",
  "hero_images": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
  ],
  "about_image": "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600",
  "hero.badge": "CÔNG TY LUẬT UY TÍN HÀNG ĐẦU",
  "hero.title": "Bảo Vệ Quyền Lợi & Lợi Ích Hợp Pháp",
  "hero.subtitle": "Tư vấn luật doanh nghiệp, sở hữu trí tuệ, tranh tụng hình sự chuyên nghiệp.",
  "hero.primaryAction.label": "Đặt lịch tư vấn",
  "hero.primaryAction.href": "#contact",
  "about.badge": "VỀ CÔNG TY LUẬT APEX",
  "about.title": "Đối Tác Pháp Lý Tin Cậy Của Doanh Nghiệp",
  "about.description": "Với đội ngũ luật sư trên 15 năm kinh nghiệm, chúng tôi cung cấp giải pháp pháp lý thực tiễn, nhanh chóng và bảo mật.",
  "about.highlights": [
    "Kinh nghiệm: 15+ năm đồng hành cùng 500+ doanh nghiệp lớn nhỏ.",
    "Bảo mật: Cam kết bảo mật tuyệt đối mọi thông tin của khách hàng.",
    "Hiệu quả: Giải quyết tranh chấp nhanh chóng, đúng quy trình pháp luật."
  ],
  "services": [
    {
      "title": "Tư vấn Luật Doanh Nghiệp",
      "description": "Hỗ trợ thành lập, sáp nhập, soạn thảo hợp đồng thương mại chuyên sâu.",
      "icon": "Briefcase"
    },
    {
      "title": "Tranh Tụng Hình Sự",
      "description": "Bảo chữa, bảo vệ quyền lợi hợp pháp tại tòa án các cấp.",
      "icon": "Shield"
    }
  ],
  "gallery_urls": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600"
  ],
  "reviews": [
    {
      "author": "Ông Nguyễn Minh Đạt (CEO Apex Corp)",
      "text": "Sự tư vấn cẩn trọng của các luật sư đã giúp chúng tôi tránh được nhiều rủi ro hợp đồng lớn.",
      "role": "Khách hàng thường niên"
    }
  ],
  "contact.title": "LIÊN HỆ PHÁP LÝ",
  "contact.phone": "0337.367.643",
  "contact.address": "88 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội"
}
```
