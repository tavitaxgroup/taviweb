import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto18CategoryCircle {
  id: string;
  name: string;
  code: string;
  count: string;
}

export interface GarageOto18TireProduct {
  id: string;
  model: string;
  categoryBadge: string;
  size: "16.9-28" | "18.4-30" | "23.5-25" | "17.5-25";
  brand: "Advance" | "BKT" | "Bridgestone" | "Michelin";
  vehicleType: "Xe xúc lật" | "Xe nâng" | "Xe lu công trình" | "Xe tải nặng";
  plyRating: string;
  treadCode: string;
  price: string;
  featuredTag?: "BÁN CHẠY" | "HÀNG MỚI VỀ";
  image: string;
}

export interface GarageOto18Data extends ClonedTemplateBaseData {
  categoryCircles: GarageOto18CategoryCircle[];
  filterSizes: Array<"16.9-28" | "18.4-30" | "23.5-25" | "17.5-25">;
  filterBrands: Array<"Advance" | "BKT" | "Bridgestone" | "Michelin">;
  filterVehicles: Array<
    "Xe xúc lật" | "Xe nâng" | "Xe lu công trình" | "Xe tải nặng"
  >;
  tireProducts: GarageOto18TireProduct[];
}

export const garageOto18DefaultData: GarageOto18Data = {
  business: {
    name: "Trung Tâm Lốp Xe Đặc Chủng & Mâm Xe OTR",
    phone: ["0909 885 779", "028 3899 6688"],
    email: ["kinhdoanh@lopxedacchung.vn", "kythuat@lopxedacchung.vn"],
    address: "Số 788 Quốc Lộ 1A, Phường Bình Hưng Hòa B, Quận Bình Tân, TP.HCM",
    workingHours: "07:30 - 18:30 (Thứ 2 - Thứ 7) • Cứu hộ lốp công trình 24/7",
    rating: 4.9,
    reviewCount: 390,
    aboutTitle: "TRUNG TÂM LỐP XE ĐẶC CHỦNG, CÂN CHỈNH THƯỚC LÁI & MÂM XE HÀNG ĐẦU",
    aboutText: [
      "Chúng tôi là tổng kho nhập khẩu và phân phối trực tiếp các dòng lốp xe đặc chủng (OTR), lốp xe công trình, xe xúc lật, xe lu rung, xe nâng cảng biển và xe tải nặng từ các thương hiệu danh tiếng: Advance, BKT, Bridgestone, Michelin.",
      "Bên cạnh kho lốp quy mô lớn, trung tâm còn trang bị dây chuyền ra vào lốp thủy lực siêu trường, ép lốp đặc xe nâng, gia công mâm thép chịu tải và cân chỉnh thước lái 3D độ chính xác cao."
    ],
  },
  hero: {
    eyebrow: "TỔNG KHO LỐP CÔNG TRÌNH & CẢNG BIỂN CHÍNH HÃNG",
    title: "LỐP XE ĐẶC CHỦNG",
    subtitle: "HIỆN ĐẠI - MẠNH MẼ - CÁ TÍNH",
    ctaText: "LIÊN HỆ NGAY",
    ctaLink: "#lien-he",
    secondaryCtaText: "TRA CỨU KÍCH CỠ LỐP",
    secondaryCtaLink: "#bo-loc-san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
  },
  categoryCircles: [
    { id: "cat-1", name: "Lốp Xe Nâng", code: "FORKLIFT", count: "42 mẫu" },
    { id: "cat-2", name: "Lốp Xe Xúc Lật", code: "LOADER E3/L3", count: "56 mẫu" },
    { id: "cat-3", name: "Lốp Xe Lu Rung", code: "COMPACTOR", count: "28 mẫu" },
    { id: "cat-4", name: "Lốp Chụp Container", code: "REACH STACKER", count: "19 mẫu" },
    { id: "cat-5", name: "Lốp Xe Công Trình", code: "OTR HEAVY", count: "64 mẫu" },
    { id: "cat-6", name: "Lốp Xe Kéo Moóc", code: "TRAILER TBR", count: "35 mẫu" },
    { id: "cat-7", name: "Lốp Đặc Chủng Mỏ", code: "MINING E4/L5", count: "24 mẫu" },
    { id: "cat-8", name: "Lốp Nông Nghiệp", code: "AGRI R-1", count: "31 mẫu" },
    { id: "cat-9", name: "Lốp Xe Đào Bánh Lốp", code: "EXCAVATOR", count: "22 mẫu" },
    { id: "cat-10", name: "Lốp Xe Tải Nặng", code: "HEAVY TRUCK", count: "48 mẫu" },
    { id: "cat-11", name: "Mâm Xe Công Nghiệp", code: "STEEL RIM", count: "30 mẫu" },
    { id: "cat-12", name: "Cân Chỉnh Thước Lái", code: "3D ALIGNMENT", count: "Dịch vụ" },
  ],
  filterSizes: ["16.9-28", "18.4-30", "23.5-25", "17.5-25"],
  filterBrands: ["Advance", "BKT", "Bridgestone", "Michelin"],
  filterVehicles: ["Xe xúc lật", "Xe nâng", "Xe lu công trình", "Xe tải nặng"],
  tireProducts: [
    {
      id: "tr-1",
      model: "ADVANCE GL-1",
      categoryBadge: "Lốp Xe Lu",
      size: "23.5-25",
      brand: "Advance",
      vehicleType: "Xe lu công trình",
      plyRating: "20PR Tubeless",
      treadCode: "Gai quả trám C-1 chuyên lu rung & lu tĩnh",
      price: "14.800.000đ",
      featuredTag: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tr-2",
      model: "ADVANCE E-3/L-3 ROCK",
      categoryBadge: "Lốp Xe Xúc Lật",
      size: "23.5-25",
      brand: "Advance",
      vehicleType: "Xe xúc lật",
      plyRating: "24PR Chịu cắt chém",
      treadCode: "Gai dấu ngã E-3/L-3 chuyên mỏ đá & trạm trộn",
      price: "19.500.000đ",
      featuredTag: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tr-3",
      model: "BKT EM-936 INDUSTRIAL",
      categoryBadge: "Lốp Xe Công Trình",
      size: "16.9-28",
      brand: "BKT",
      vehicleType: "Xe xúc lật",
      plyRating: "16PR Ấn Độ",
      treadCode: "Gai R-4 chuyên xe xúc đào liên hợp Backhoe",
      price: "11.900.000đ",
      featuredTag: "HÀNG MỚI VỀ",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tr-4",
      model: "BRIDGESTONE VJT RADIAL",
      categoryBadge: "Lốp Xe Xúc Hạng Nặng",
      size: "17.5-25",
      brand: "Bridgestone",
      vehicleType: "Xe xúc lật",
      plyRating: "Bố kẽm Radial ★★",
      treadCode: "Chống rung lắc, tản nhiệt vượt trội Nhật Bản",
      price: "28.400.000đ",
      featuredTag: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tr-5",
      model: "MICHELIN XZM PORT",
      categoryBadge: "Lốp Xe Nâng & Cảng",
      size: "18.4-30",
      brand: "Michelin",
      vehicleType: "Xe nâng",
      plyRating: "Lốp đặc / Radial cảng biển",
      treadCode: "Chịu tải siêu trọng xe nâng chụp Container",
      price: "34.500.000đ",
      featuredTag: "HÀNG MỚI VỀ",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tr-6",
      model: "BKT GR-288 GRADER",
      categoryBadge: "Lốp Xe San & Tải Nặng",
      size: "17.5-25",
      brand: "BKT",
      vehicleType: "Xe tải nặng",
      plyRating: "20PR Heavy Duty",
      treadCode: "Gai G-2/L-2 tự làm sạch bùn đất công trường",
      price: "15.200.000đ",
      featuredTag: "HÀNG MỚI VỀ",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "Hướng dẫn đọc thông số kỹ thuật lốp xe xúc lật 23.5-25, 17.5-25 và chỉ số lớp bố PR",
      date: "10/05/2026",
      category: "KIẾN THỨC LỐP OTR",
      excerpt:
        "Phân biệt lốp bố vải (Bias) và lốp bố kẽm (Radial) giúp chủ máy công trình chọn đúng loại gai E-3, L-3 hay L-5 tiết kiệm 30% chi phí hao mòn...",
      image:
        "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Quy trình cân chỉnh thước lái 3D và ép lốp đặc xe nâng bằng máy thủy lực 200 tấn",
      date: "18/05/2026",
      category: "DỊCH VỤ KỸ THUẬT",
      excerpt:
        "Xử lý triệt để hiện tượng ăn mòn lốp lệch vai trên xe đầu kéo và dịch vụ ép mâm lốp đặc xe nâng tận nhà máy khu công nghiệp...",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Bảng áp suất bơm lốp tiêu chuẩn cho xe lu rung, xe xúc lật và xe chụp Container",
      date: "26/05/2026",
      category: "AN TOÀN VẬN HÀNH",
      excerpt:
        "Bơm quá căng hoặc thiếu hơi đều làm giảm tuổi thọ lốp đặc chủng. Tham khảo ngay bảng khuyến nghị từ kỹ sư Advance & Bridgestone...",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = garageOto18DefaultData;
export default garageOto18DefaultData;
