import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto16FleetItem {
  id: string;
  name: string;
  category: "xe-nho" | "xe-trung" | "xe-nang";
  capacity: string;
  dimensions: string;
  maintenanceSpec: string;
  price: string;
  image: string;
}

export interface GarageOto16Data extends ClonedTemplateBaseData {
  heroCollage: string[];
  corePillars: Array<{
    id: string;
    title: string;
    description: string;
    metric: string;
    icon: string;
  }>;
  fleetItems: GarageOto16FleetItem[];
  maintenanceSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

export const garageOto16DefaultData: GarageOto16Data = {
  business: {
    name: "Thuận Thành Tín Auto",
    phone: ["0903 728 397", "1900 636 648"],
    email: ["dieuphoi@thuanthanhtin.vn", "xuongdichvu@thuanthanhtin.vn"],
    address: "Khu Công Nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP.HCM",
    workingHours: "06:00 - 22:00 (Trực kỹ thuật & điều vận 24/7)",
    rating: 4.9,
    reviewCount: 420,
    aboutTitle: "GIẢI PHÁP TỐI ƯU HÓA QUẢN LÝ KHO VẬN & BẢO DƯỠNG ĐỘI XE",
    aboutText: [
      "Thuận Thành Tín Auto là đơn vị tiên phong kết hợp hệ thống đội xe vận tải hàng hóa chuyên nghiệp với trung tâm bảo dưỡng, đại tu và chăm sóc kỹ thuật xe tải thương mại chuẩn hãng Isuzu, Hino, Hyundai.",
      "Sở hữu bãi xe quy mô lớn cùng đội ngũ thợ máy, kỹ sư ô tô và lái xe giàu kinh nghiệm, chúng tôi giúp doanh nghiệp tối ưu hóa chi phí vận hành, đảm bảo 100% đầu xe luôn trong trạng thái kỹ thuật hoàn hảo trên mọi tuyến đường."
    ],
  },
  hero: {
    eyebrow: "GIẢI PHÁP TỐI ƯU HÓA QUẢN LÝ KHO VẬN",
    title: "THUẬN THÀNH TÍN DẪN ĐẦU\nLĨNH VỰC LOGISTICS VÀ VẬN TẢI",
    subtitle:
      "Hệ thống hơn 150 đầu xe tải thùng kín, xe đông lạnh, bán tải cùng xưởng bảo dưỡng kỹ thuật đội xe công suất cao hoạt động 24/7 tại TP.HCM và các tỉnh phía Nam.",
    ctaText: "BÁO GIÁ VẬN TẢI & BẢO DƯỠNG",
    ctaLink: "#doi-xe",
    secondaryCtaText: "LIÊN HỆ ĐIỀU PHỐI",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
  },
  heroCollage: [
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  ],
  stats: [
    { id: "st-1", number: "150+", title: "ĐẦU XE TẢI ISUZU & HINO" },
    { id: "st-2", number: "15.000m²", title: "HỆ THỐNG KHO BÃI & XƯỞNG" },
    { id: "st-3", number: "99.8%", title: "ĐÚNG TIẾN ĐỘ GIAO NHẬN" },
    { id: "st-4", number: "24/7", title: "CỨU HỘ & KỸ THUẬT LƯU ĐỘNG" },
  ],
  corePillars: [
    {
      id: "cp-1",
      title: "Bảo Dưỡng & Đại Tu Đội Xe Tải",
      description:
        "Xưởng dịch vụ trang bị cầu nâng tải trọng lớn, máy chẩn đoán lỗi ECU chuyên dụng cho xe tải Isuzu, Hino, Hyundai và xe đầu kéo.",
      metric: "Tiêu chuẩn Euro 4/5",
      icon: "wrench",
    },
    {
      id: "cp-2",
      title: "Vận Tải Hàng Hóa Chuyên Tuyến",
      description:
        "Đội xe tải thùng kín, mui bạt từ 1.9 tấn đến 15 tấn gắn định vị GPS thời gian thực, vận chuyển an toàn khắp 63 tỉnh thành.",
      metric: "100% Bảo hiểm hàng hóa",
      icon: "truck",
    },
    {
      id: "cp-3",
      title: "Giải Pháp Tối Ưu Quản Lý Kho Vận",
      description:
        "Hệ thống kho trung chuyển hiện đại tích hợp phần mềm quản lý tồn kho WMS, bốc xếp cơ giới hóa và phân phối chuỗi siêu thị.",
      metric: "Tiết kiệm 25% chi phí",
      icon: "warehouse",
    },
    {
      id: "cp-4",
      title: "Cứu Hộ & Sửa Chữa Lưu Động 24/7",
      description:
        "Đội xe bán tải kỹ thuật cơ động hỗ trợ kích bình, thay lốp tải, xử lý sự cố hệ thống phanh hơi và nhiên liệu ngay trên đường.",
      metric: "Có mặt sau 30 phút",
      icon: "shield",
    },
  ],
  fleetItems: [
    {
      id: "fl-1",
      name: "Đội Xe Tải Isuzu QKR 1.9 Tấn - 2.4 Tấn Thùng Kín",
      category: "xe-nho",
      capacity: "1.900 kg - 2.490 kg",
      dimensions: "4.380 x 1.870 x 1.870 mm",
      maintenanceSpec: "Bảo dưỡng định kỳ mỗi 5.000 km tại xưởng Thuận Thành Tín",
      price: "Từ 650.000đ / chuyến nội thành",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fl-2",
      name: "Đội Xe Tải Hino XZU 3.5 Tấn - 5 Tấn Thùng Tiêu Chuẩn",
      category: "xe-trung",
      capacity: "3.490 kg - 4.950 kg",
      dimensions: "5.700 x 2.050 x 1.950 mm",
      maintenanceSpec: "Kiểm định phanh khí nén & cầu truyền động trước mỗi chuyến",
      price: "Từ 1.250.000đ / chuyến liên tỉnh",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fl-3",
      name: "Đội Xe Tải Nặng Isuzu FVM & Hino FG 8 Tấn - 15 Tấn",
      category: "xe-nang",
      capacity: "8.000 kg - 15.000 kg",
      dimensions: "9.300 x 2.350 x 2.300 mm",
      maintenanceSpec: "Động cơ Common Rail tiết kiệm nhiên liệu, giám sát hành trình 24/7",
      price: "Báo giá theo hợp đồng tuyến",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fl-4",
      name: "Xe Bán Tải Ford Ranger Điều Phối & Cứu Hộ Kỹ Thuật",
      category: "xe-nho",
      capacity: "950 kg • Cơ động cao",
      dimensions: "Phục vụ giao hàng nhanh & cứu hộ lưu động",
      maintenanceSpec: "Trang bị đầy đủ máy kích bình, súng mở ốc khí nén & thiết bị chẩn đoán",
      price: "Hỗ trợ kỹ thuật 24/7",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fl-5",
      name: "Gói Bảo Dưỡng Tổng Quát Đội Xe Tải Doanh Nghiệp",
      category: "xe-trung",
      capacity: "Áp dụng từ 5 đầu xe trở lên",
      dimensions: "Thay dầu nhớt, lọc nhiên liệu, bảo dưỡng phanh & hệ thống điện",
      maintenanceSpec: "Phụ tùng chính hãng Isuzu / Hino • Bảo hành kỹ thuật 6 tháng",
      price: "Ưu đãi 20% hợp đồng năm",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fl-6",
      name: "Xe Tải Đông Lạnh Chuyên Dụng Bảo Quản Thực Phẩm & Dược Phẩm",
      category: "xe-nang",
      capacity: "2.5 Tấn - 8 Tấn (Nhiệt độ -18°C)",
      dimensions: "Thùng Composite cách nhiệt chuẩn GSP",
      maintenanceSpec: "Bảo dưỡng máy lạnh Thermo King định kỳ nghiêm ngặt",
      price: "Từ 1.500.000đ / chuyến",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    },
  ],
  maintenanceSteps: [
    {
      step: "01",
      title: "Tiếp nhận & Chẩn đoán điện tử ECU",
      description:
        "Kiểm tra toàn bộ thông số kim phun điện tử, áp suất buồng đốt và mã lỗi động cơ bằng máy chẩn đoán chuyên hãng.",
    },
    {
      step: "02",
      title: "Bảo dưỡng Hệ thống Phanh & Gầm cầu",
      description:
        "Rà soát tang trống, má phanh, bầu phanh lốc-kê, bơm mỡ cầu chữ thập và cân chỉnh độ chụm bánh xe tải.",
    },
    {
      step: "03",
      title: "Thay Nhớt Động Cơ & Lọc Chính Hãng",
      description:
        "Sử dụng dầu nhờn chịu tải nặng tiêu chuẩn API CI-4/CK-4 cùng lọc nhớt, lọc dầu nhiên liệu tách nước chính hãng.",
    },
    {
      step: "04",
      title: "Kiểm định Thùng xe & Bàn nâng thủy lực",
      description:
        "Bảo trì hệ thống ty ben bửng nâng, ron cao su chống thấm thùng xe và hệ thống chiếu sáng an toàn trước khi xuất bãi.",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "Giải pháp tối ưu hóa chi phí nhiên liệu và bảo dưỡng cho đội xe tải 50 chiếc",
      date: "12/05/2026",
      category: "QUẢN TRỊ ĐỘI XE",
      excerpt:
        "Kinh nghiệm lập lịch bảo dưỡng dự đoán (Predictive Maintenance) giúp giảm 40% thời gian xe nằm xưởng đột xuất...",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Quy trình kiểm tra 12 hạng mục an toàn bắt buộc trước khi xe tải chạy đường đèo",
      date: "19/05/2026",
      category: "KỸ THUẬT Ô TÔ TẢI",
      excerpt:
        "Hướng dẫn từ kỹ sư trưởng Thuận Thành Tín về kiểm tra áp suất hơi phanh, lốp chịu tải và hệ thống làm mát...",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Thuận Thành Tín đưa vào vận hành thêm 20 xe tải Isuzu Euro 5 mới năm 2026",
      date: "27/05/2026",
      category: "TIN CÔNG TY",
      excerpt:
        "Nâng tổng quy mô đội xe lên hơn 150 chiếc, đáp ứng nhu cầu phân phối hàng hóa xanh và bền vững cho các đối tác...",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = garageOto16DefaultData;
export default garageOto16DefaultData;
