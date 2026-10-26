import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VeSinh7CatalogItem {
  id: string;
  name: string;
  categoryKey: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeType?: "dark" | "coral";
  image: string;
}

export interface VeSinh7Data extends ClonedTemplateBaseData {
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroTitleSuffix: string;
  signatureText: string;
  categories: Array<{ key: string; label: string }>;
  catalogItems: VeSinh7CatalogItem[];
  videoSectionImage: string;
  videoTitlePrefix: string;
  videoTitleHighlight: string;
  videoTitleSecondLine: string;
  videoDescription: string;
  videoBullets: string[];
  newsletterBannerTitle: string;
  newsletterBannerImage: string;
  instagramStripImages: string[];
}

export const dichVuVeSinh7DefaultData: VeSinh7Data = {
  business: {
    name: "Fiorello Clean",
    phone: ["076 922 0162", "0908 556 889"],
    email: ["cskh@fiorelloclean.vn", "booking@fiorelloclean.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 720,
    experienceYears: "10 Năm",
    aboutTitle: "Kiến Tạo Không Gian Xanh Sạch!",
    aboutText: [
      "Từ dịch vụ tổng vệ sinh tòa nhà, văn phòng chuyên sâu đến thiết kế và bảo dưỡng cây cảnh nội thất định kỳ, Fiorello Clean mang lại không gian sống và làm việc trong lành, tràn ngập cảm hứng mỗi ngày."
    ],
    highlights: [
      "Tuyển chọn cây cảnh lọc không khí & hóa chất vệ sinh hữu cơ an toàn",
      "Chăm sóc cảnh quan, tiểu cảnh văn phòng và biệt thự trọn gói",
      "Cam kết hài lòng 100% với quy trình kiểm soát chất lượng 5 sao"
    ]
  },
  heroTitlePrefix: "Không gian ",
  heroTitleHighlight: "xanh sạch",
  heroTitleSuffix: " nâng tầm cuộc sống.",
  signatureText: "Fiorello",
  hero: {
    eyebrow: "Dịch Vụ Vệ Sinh & Chăm Sóc Cảnh Quan Tòa Nhà",
    title: "Không gian xanh sạch nâng tầm cuộc sống.",
    subtitle:
      "Nơi mảng xanh thiên nhiên hòa quyện cùng chuẩn mực vệ sinh tinh tế. Dù là văn phòng doanh nghiệp, sảnh tòa nhà hay biệt thự gia đình, Fiorello Clean luôn chăm chút tỉ mỉ từng góc nhỏ.",
    ctaText: "Đặt Dịch Vụ Ngay",
    ctaLink: "#cua-hang",
    backgroundImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=85"
  },
  categories: [
    { key: "ALL", label: "TẤT CẢ" },
    { key: "POPULAR", label: "PHỔ BIẾN" },
    { key: "OFFICE", label: "VỆ SINH VĂN PHÒNG" },
    { key: "PLANTS", label: "CÂY NỘI THẤT" },
    { key: "LANDSCAPE", label: "CẢNH QUAN SÂN VƯỜN" },
    { key: "GREENS", label: "CÂY LỌC KHÔNG KHÍ" },
    { key: "CACTUSES", label: "TIỂU CẢNH ĐỂ BÀN" }
  ],
  catalogItems: [
    {
      id: "cat-1",
      name: "Bình Hoa Tươi Trang Trí Sảnh Lễ Tân",
      categoryKey: "POPULAR",
      price: "259,000 ₫",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-2",
      name: "Chậu Tiểu Cảnh Xương Rồng Bàn Làm Việc",
      categoryKey: "CACTUSES",
      oldPrice: "359,000 ₫",
      price: "159,000 ₫",
      badgeText: "-39%",
      badgeType: "dark",
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-3",
      name: "Cây Cau Tiểu Trâm Thanh Lọc Không Khí",
      categoryKey: "GREENS",
      price: "259,000 ₫",
      image:
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-4",
      name: "Chậu Nha Đam & Sen Đá Khử Tia Điện Tử",
      categoryKey: "PLANTS",
      price: "259,000 ₫",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-5",
      name: "Gói Thay Hoa Tươi Phòng Họp Định Kỳ",
      categoryKey: "OFFICE",
      price: "170,000 ₫",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-6",
      name: "Giỏ Cây Thường Xuân Treo Ban Công Xanh",
      categoryKey: "LANDSCAPE",
      price: "259,000 ₫",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-7",
      name: "Gói Vệ Sinh & Chăm Sóc Sảnh Tòa Nhà",
      categoryKey: "OFFICE",
      price: "180,000 ₫ – 350,000 ₫",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-8",
      name: "Chậu Tiểu Cảnh Đồng Cổ Bàn Giám Đốc",
      categoryKey: "CACTUSES",
      price: "259,000 ₫",
      badgeText: "New",
      badgeType: "coral",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
    }
  ],
  videoSectionImage:
    "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1000&q=80",
  videoTitlePrefix: "Làm Mới Không Gian ",
  videoTitleHighlight: "Sống & Làm Việc!",
  videoTitleSecondLine: "Hãy để chúng tôi chăm sóc cảnh quan của bạn.",
  videoDescription:
    "Từ dịch vụ tổng vệ sinh tòa nhà định kỳ đến thiết kế mảng xanh văn phòng, Fiorello Clean mang lại bầu không khí trong lành và nguồn năng lượng tích cực mỗi ngày.",
  videoBullets: [
    "Tuyển chọn cây xanh & vật liệu làm sạch an toàn riêng cho bạn.",
    "Thiết kế cảnh quan & bố trí mảng xanh độc đáo, thẩm mỹ cao.",
    "Giải pháp hoàn hảo nhất để giữ gìn không gian luôn sạch đẹp."
  ],
  team: [
    {
      id: "exp-1",
      name: "NGUYỄN MINH THƯ",
      position: "CHUYÊN GIA CẢNH QUAN",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-2",
      name: "TRẦN HOÀNG YẾN",
      position: "QUẢN LÝ VẬN HÀNH",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-3",
      name: "LÊ BẢO NGỌC",
      position: "CHUYÊN VIÊN CHĂM SÓC CÂY",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-4",
      name: "PHẠM THANH HÀ",
      position: "GIÁM SÁT VỆ SINH TÒA NHÀ",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    }
  ],
  newsletterBannerTitle: "Đồng Hành Cùng Không Gian Xanh!",
  newsletterBannerImage:
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80",
  news: [
    {
      id: "blog-1",
      title: "Bí quyết bố trí cây xanh văn phòng giúp thanh lọc không khí hiệu quả",
      date: "06 Th5",
      category: "Cảnh quan văn phòng",
      excerpt:
        "Lựa chọn các dòng cây nội thất chịu bóng bán phần kết hợp lịch vệ sinh lá định kỳ giúp không gian làm việc luôn tươi mới...",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "Quy trình chăm sóc tiểu cảnh sảnh tòa nhà và vệ sinh kính mặt dựng chuẩn 5 sao",
      date: "06 Th5",
      category: "Vệ sinh tòa nhà",
      excerpt:
        "Sự kết hợp giữa bề mặt sảnh đá sáng bóng và thảm thực vật xanh mát tạo ấn tượng sang trọng ngay từ cái nhìn đầu tiên...",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "5 loại hoa và cây cảnh mang lại vượng khí cho bàn làm việc năm nay",
      date: "06 Th5",
      category: "Phong thủy xanh",
      excerpt:
        "Không chỉ giúp giảm bức xạ máy tính, những chậu cây nhỏ xinh còn giúp giải tỏa căng thẳng và kích thích sự sáng tạo...",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "PHẠM THANH HÀ",
      role: "Chuyên gia Cảnh quan",
      content:
        "Một không gian làm việc sạch tinh tươm và điểm xuyết sắc xanh của cây cỏ chính là chìa khóa đánh thức cảm hứng sáng tạo và bảo vệ sức khỏe bền vững mỗi ngày.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "test-2",
      author: "NGUYỄN MINH THƯ",
      role: "Kiến trúc sư Cảnh quan",
      content:
        "Đội ngũ Fiorello Clean luôn chăm chút từng chiếc lá, từng góc sảnh tòa nhà với sự tận tâm cao nhất để khách hàng luôn tự hào về không gian của mình.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],
  instagramStripImages: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80"
  ]
};
