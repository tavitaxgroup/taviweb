import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa9Package {
  id: string;
  tier: "modern" | "luxury";
  name: string;
  image: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
  price: string;
  description: string;
}

export interface NhaKhoa9Data extends ClonedTemplateBaseData {
  highlightServices: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  packages: NhaKhoa9Package[];
  pillStats: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  statsBannerImage: string;
}

export const nhaKhoa9DefaultData: NhaKhoa9Data = {
  business: {
    name: "ROYAL SMILE DENTAL",
    phone: ["0313728397", "1900 689 397"],
    email: ["info@royalsmile.vn", "vip@royalsmile.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 702,
    aboutTitle: "VIỆN NHA KHOA THẨM MỸ HOÀNG GIA ROYAL SMILE",
    aboutText: [
      "Viện Nha Khoa Thẩm Mỹ Hoàng Gia Royal Smile mang đến không gian điều trị sang trọng chuẩn 5 sao với phòng VIP riêng biệt, công nghệ thiết kế nụ cười 3D và chế độ chăm sóc cá nhân hóa."
    ],
  },
  hero: {
    eyebrow: "MONA ROYAL SMILE",
    title: "VIỆN NHA KHOA THẨM MỸ HOÀNG GIA",
    subtitle: "Chào mừng bạn đến với Viện Nha Khoa Thẩm Mỹ Royal Smile",
    ctaText: "ĐẶT LỊCH KHÁM",
    ctaLink: "#dich-vu-hien-dai",
    backgroundImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85",
  },
  highlightServices: [
    {
      id: "hs-1",
      title: "Phòng VIP Vô Trùng",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hs-2",
      title: "Thẩm Mỹ Răng Sứ",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hs-3",
      title: "Lounge Thư Giãn",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
  ],
  packages: [
    // Section 1: PHÒNG KHÁM & GÓI SỨ HIỆN ĐẠI (3 cards)
    {
      id: "nk9-m1",
      tier: "modern",
      name: "DELUXE SMILE",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Dòng sứ", value: "Zirconia Dentsply Đức" },
        { label: "Thời gian hoàn thiện", value: "28-38 giờ" },
        { label: "Bảo hành chính hãng", value: "10 năm thẻ từ" },
        { label: "Tiêu chuẩn phòng", value: "Ghế nha VIP 1 bác sĩ : 1 khách" },
      ],
      price: "4,800,000 ₫ / răng",
      description:
        "Gói bọc răng sứ thẩm mỹ tiêu chuẩn Đức với độ bền chịu lực cao và màu sắc tự nhiên.",
    },
    {
      id: "nk9-m2",
      tier: "modern",
      name: "DELUXE VIP",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Dòng sứ", value: "Lava Esthetic 3M Mỹ" },
        { label: "Thời gian hoàn thiện", value: "28-38 giờ" },
        { label: "Bảo hành chính hãng", value: "15 năm toàn cầu" },
        { label: "Tiêu chuẩn phòng", value: "Phòng Президент VIP riêng biệt" },
      ],
      price: "8,500,000 ₫ / răng",
      description:
        "Dòng sứ huỳnh quang tự nhiên 3M Hoa Kỳ kết hợp thiết kế đường cười Digital Smile Design.",
    },
    {
      id: "nk9-m3",
      tier: "modern",
      name: "FAMILY CARE",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Gói chăm sóc", value: "Toàn diện răng miệng gia đình" },
        { label: "Diện tích Suite", value: "42-47m2 tích hợp khu nghỉ" },
        { label: "Quyền lợi", value: "Tầm soát CT 3D & Tẩy trắng" },
        { label: "Số lượng thành viên", value: "4 người/gói" },
      ],
      price: "12,900,000 ₫ / năm",
      description:
        "Thẻ chăm sóc răng miệng đặc quyền Hoàng Gia dành cho cả gia đình 4 thành viên.",
    },

    // Section 2: DỊCH VỤ NHA KHOA CAO CẤP (3 cards)
    {
      id: "nk9-l1",
      tier: "luxury",
      name: "DELUXE VENEER",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Chất liệu", value: "Mặt dán sứ Emax Press Thụy Sĩ" },
        { label: "Độ mỏng mặt sứ", value: "0.2mm - 0.3mm bảo tồn răng" },
        { label: "Thiết kế nụ cười", value: "3D Smile Preview trước khi làm" },
        { label: "Số lần hẹn", value: "2 buổi hoàn tất" },
      ],
      price: "9,500,000 ₫ / răng",
      description:
        "Mặt dán sứ siêu mỏng không mài nhỏ răng, kiến tạo nụ cười trắng trong thanh lịch.",
    },
    {
      id: "nk9-l2",
      tier: "luxury",
      name: "DELUXE VIP IMPLANT",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Trụ Implant", value: "Straumann SLActive Thụy Sĩ" },
        { label: "Tích hợp xương", value: "3 - 4 tuần nhanh gấp đôi" },
        { label: "Công nghệ cấy", value: "Máng định vị 3D không lật vạt" },
        { label: "Bảo hành", value: "Trọn đời trên toàn thế giới" },
      ],
      price: "32,000,000 ₫ / trụ",
      description:
        "Cấy ghép Implant không đau trong phòng phẫu thuật vô khuẩn áp lực dương Hoàng Gia.",
    },
    {
      id: "nk9-l3",
      tier: "luxury",
      name: "FAMILY ROYAL ORTHO",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
      specs: [
        { label: "Công nghệ", value: "Khay niềng trong suốt Invisalign" },
        { label: "Máy quét dấu răng", value: "iTero Element 5D Plus" },
        { label: "Phác đồ", value: "ClinCheck 3D chính hãng Mỹ" },
        { label: "Ưu đãi gia đình", value: "Giảm 20% từ thành viên thứ 2" },
      ],
      price: "65,000,000 ₫ / liệu trình",
      description:
        "Chỉnh nha trong suốt vô hình chuẩn quốc tế giúp dịch chuyển răng êm ái và thẩm mỹ.",
    },
  ],
  pillStats: [
    {
      id: "ps-1",
      number: "702 +",
      label: "KHÁCH HÀNG",
    },
    {
      id: "ps-2",
      number: "500 +",
      label: "ĐÁNH GIÁ 5 SAO",
    },
    {
      id: "ps-3",
      number: "200 +",
      label: "KHÁCH HÀNG QUỐC TẾ",
    },
  ],
  statsBannerImage:
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1800&q=85",
};
