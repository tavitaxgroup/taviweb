export const mockData = {
  business: {
    code: 'GMA',
    name: 'GOLD MARINE CLUB',
    subtitle: 'AQUATIC, SWIMMING & FITNESS CENTER',
    phone: ['(+84 28) 7300 2888', '0909 286 818'],
    email: ['info@goldmarineclub.vn', 'aquatics@goldmarineclub.vn'],
    address: 'Số 88 Đại Lộ Mai Chí Thọ, Khu Đô Thị Thủ Thiêm, TP. Thủ Đức, TP.HCM',
    hours: 'T2 - CN: 05:30 - 21:30',
    copyright: '© 2026 GOLD MARINE CLUB (GMA) — Trung Tâm Thể Thao Dưới Nước, Bơi Lội & Thể Hình Quốc Tế.'
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#top' },
    { label: 'GIỚI THIỆU', href: '#about' },
    { label: 'ĐĂNG KÝ LỘ TRÌNH', href: '#registration-form' },
    { label: 'DỊCH VỤ BƠI & AQUA GYM', href: '#programs' },
    { label: 'HỒ BƠI OLYMPIC & GYM', href: '#facilities' },
    { label: 'LIÊN HỆ', href: '#contact' }
  ],
  hero: {
    purpleRibbon: 'ĐÀO TẠO & HUẤN LUYỆN THÀNH CÔNG',
    pinkRibbon: '28.680+ HỌC VIÊN BƠI LỘI & THỂ HÌNH',
    englishTitle: 'INTERNATIONAL AQUATIC & FITNESS',
    vietnameseTitle: 'TRUNG TÂM THỂ THAO DƯỚI NƯỚC, BƠI LỘI & THỂ HÌNH QUỐC TẾ GOLD MARINE',
    subtitle: 'Tổ hợp hồ bơi muối khoáng 50m chuẩn Olympic kết hợp phòng tập Gym - Thủy trị liệu hiện đại bậc nhất.',
    backgroundImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1800&q=85'
  },
  registrationSection: {
    greetingLine1: 'Kính gửi Quý hội viên & Phụ huynh,',
    greetingLine2:
      'Vui lòng điền thông tin vào biểu mẫu dưới đây để Hội đồng Huấn luyện viên Gold Marine Club đánh giá thể trạng và gửi phác đồ Bơi lội - Thể hình tối ưu nhất:',
    servicePills: [
      {
        id: 'olympic-swim',
        code: 'BƠI LỘI OLYMPIC',
        title: 'Bơi Sải, Bơi Ếch, Bơi Bướm & Kèm 1-1 Xóa Sợ Nước',
        schedule: 'Lộ trình cam kết biết bơi chuẩn kỹ thuật sau 10 - 12 buổi'
      },
      {
        id: 'aqua-fitness',
        code: 'AQUA FITNESS',
        title: 'Thể Dục Dưới Nước & Thủy Trị Liệu Xương Khớp',
        schedule: 'Đốt 650 kcal/giờ • Giảm 85% áp lực lên khớp gối & cột sống'
      },
      {
        id: 'marine-gym',
        code: 'GYM & THỂ LỰC',
        title: 'Huấn Luyện Thể Hình, Tăng Cơ Giảm Mỡ & Sức Bền Tim Mạch',
        schedule: 'Kết hợp tập tạ kháng lực trên cạn và phục hồi cơ dưới nước'
      },
      {
        id: 'freedive-waterpolo',
        code: 'LẶN BIỂN FREEDIVE',
        title: 'Lặn Tự Do Nín Thở, Bóng Nước & Thể Thao Biển Chuyên Sâu',
        schedule: 'Huấn luyện dung tích phổi ở hồ lặn sâu 5m tiêu chuẩn quốc tế'
      }
    ]
  },
  aquaticPrograms: [
    {
      id: 'gma-01',
      badge: 'HỒ BƠI MUỐI KHOÁNG 50M',
      title: 'Khóa Học Bơi Chuẩn Olympic 1 Kèm 1 (Trẻ Em & Người Lớn)',
      price: '3.500.000₫ / khóa',
      duration: '12 Buổi (Linh hoạt giờ tập 05:30 - 21:00)',
      desc: 'Cam kết 100% biết bơi và đứng nước sâu sau khóa học. Nước hồ điện phân muối khoáng ấm 30°C không mùi clo, bảo vệ da và mắt tuyệt đối.',
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'gma-02',
      badge: 'ĐỐT MỠ KHÔNG ĐAU KHỚP',
      title: 'Aqua HIIT & Đạp Xe Dưới Nước (Aqua Cycling Studio)',
      price: '2.200.000₫ / tháng',
      duration: 'Không giới hạn số buổi lớp nhóm & Hồ bơi',
      desc: 'Sử dụng lực cản tự nhiên của nước gấp 12 lần không khí giúp săn chắc đùi, mông, bụng thần tốc mà hoàn toàn không gây chấn động khớp gối.',
      image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'gma-03',
      badge: 'COMBO BƠI + GYM VIP',
      title: 'Thẻ Hội Viên Toàn Năng Gold Marine (Gym + Hồ Bơi + Sauna)',
      price: '1.650.000₫ / tháng',
      duration: 'Sử dụng toàn bộ khu Gym Technogym, Hồ bơi 50m & Jacuzzi',
      desc: 'Tập thể hình tăng cơ tại khu Gym view toàn cảnh hồ bơi, sau đó bơi thư giãn giãn cơ và xông hơi đá muối Himalaya phục hồi thể lực.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'gma-04',
      badge: 'THỂ THAO BIỂN CHUYÊN SÂU',
      title: 'Đào Tạo Lặn Tự Do Freediving & Sức Bền Triathlon (Bơi - Đạp - Chạy)',
      price: '4.800.000₫ / khóa',
      duration: '10 Buổi lý thuyết + Thực hành hồ sâu & Biển mở',
      desc: 'Chuẩn bị thể lực toàn diện cho vận động viên thi đấu Ironman 70.3, Oceanman và cấp chứng chỉ lặn tự do quốc tế.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80'
    }
  ],
  facilities: [
    {
      metric: '50M × 25M',
      title: 'Hồ Bơi Muối Khoáng Điện Phân 10 Làn Chuẩn FINA',
      detail: 'Hệ thống gia nhiệt tự động duy trì 29.5°C - 31°C suốt 4 mùa trong năm.'
    },
    {
      metric: '2.500 M²',
      title: 'Khu Gym & Strength Conditioning Nhập Khẩu Châu Âu',
      detail: 'Trang bị đầy đủ máy tập kháng lực, khu Free Weights và máy chèo thuyền Concept2.'
    },
    {
      metric: '28.680+',
      title: 'Hội Viên & Vận Động Viên Tốt Nghiệp Xuất Sắc',
      detail: 'Hơn 12 năm đồng hành nâng cao thể lực, chiều cao và kỹ năng sinh tồn dưới nước.'
    },
    {
      metric: '100% HLV',
      title: 'Kiện Tướng Quốc Gia & Chứng Chỉ Cứu Hộ Quốc Tế',
      detail: 'Đội ngũ HLV bơi lội và PT thể hình theo sát từng nhịp thở và động tác.'
    }
  ]
};
