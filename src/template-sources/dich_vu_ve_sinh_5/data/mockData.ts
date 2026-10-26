import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ShowcaseCategoryBlock {
  id: string;
  title: string;
  headerColor: string;
  subcategories: string[];
  posterTitle: string;
  posterSubtitle: string;
  posterImage: string;
  items: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
  }>;
}

export interface DichVuVeSinh5Data extends ClonedTemplateBaseData {
  sidebarCategories: Array<{
    id: string;
    label: string;
    isNew?: boolean;
  }>;
  promoBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  categoryBlocks: ShowcaseCategoryBlock[];
}

export const dichVuVeSinh5DefaultData: DichVuVeSinh5Data = {
  business: {
    name: "PARTYLAND & CLEAN",
    phone: ["0126 922 0162", "0909 333 162"],
    email: ["cskh@partyland-clean.vn", "info@mona.media"],
    address: "151 Hồ Bá Kiện, Phường 15, Quận 10, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 342,
    aboutTitle: "Hệ Thống Dịch Vụ Trang Trí, Vệ Sinh Sự Kiện & Chăm Sóc Không Gian Trọn Gói",
    aboutText: [
      "CÔNG TY TNHH MONA MEDIA cung cấp giải pháp trọn gói từ trang trí không gian lễ hội, sự kiện đến tổng vệ sinh hoàn trả mặt bằng, khử khuẩn tòa nhà và cung cấp thiết bị vệ sinh chuyên dụng.",
      "Với đội ngũ nhân sự tận tâm, máy móc hiện đại và quy trình chuẩn hóa, chúng tôi giúp mọi buổi tiệc, văn phòng và căn hộ luôn rực rỡ, sạch tinh tươm và an toàn tuyệt đối."
    ],
    highlights: [
      "Trọn gói chuẩn bị không gian sự kiện & tổng vệ sinh sau tiệc nhanh gọn",
      "Cung cấp đầy đủ phụ kiện trang trí, bảng chỉ dẫn & hóa chất làm sạch an toàn",
      "Báo giá minh bạch theo từng gói dịch vụ, giao nhận tận nơi trong 2 giờ",
      "Hỗ trợ xuất hóa đơn VAT cho doanh nghiệp, trường học và tòa nhà"
    ]
  },
  hero: {
    eyebrow: "IT'S THE SEASON • COME TO",
    title: "JENNY PARTY & CLEAN",
    subtitle: "Trang trí lễ hội & Tổng vệ sinh không gian đón mùa lễ hội rực rỡ",
    ctaText: "XEM BẢNG GIÁ",
    ctaLink: "#danh-muc-1",
    backgroundImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=85"
  },
  sidebarCategories: [
    { id: "sc-1", label: "Khuyến mại mới", isNew: true },
    { id: "sc-2", label: "Gói vệ sinh & Trang trí sinh nhật" },
    { id: "sc-3", label: "Chăm sóc & Setup bàn tiệc" },
    { id: "sc-4", label: "Vệ sinh định kỳ văn phòng" },
    { id: "sc-5", label: "Khử khuẩn & Tinh dầu thơm" },
    { id: "sc-6", label: "Chalkboard & Bảng chỉ dẫn" },
    { id: "sc-7", label: "Giặt thảm, rèm & Sofa cao cấp" },
    { id: "sc-8", label: "Thiết bị làm sạch thông minh" },
    { id: "sc-9", label: "Phụ kiện chăm sóc nhà cửa" },
    { id: "sc-10", label: "Backdrop & Hoàn trả mặt bằng" }
  ],
  promoBanners: [
    {
      id: "pb-1",
      title: "MERRY CHRISTMAS!",
      subtitle: "Ưu Đãi Tổng Vệ Sinh & Trang Trí Giáng Sinh",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "pb-2",
      title: "2026 Happy New Year!",
      subtitle: "Gói Làm Sạch Đón Tết Đoàn Viên",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=900&q=80"
    }
  ],
  categoryBlocks: [
    {
      id: "block-1",
      title: "Gói vệ sinh & Setup sự kiện",
      headerColor: "#f9c623",
      subcategories: [
        "Vệ sinh trước tiệc",
        "Dọn dẹp sau tiệc",
        "Khử mùi không gian",
        "Trang trí bàn tiệc",
        "Thu gom rác sự kiện"
      ],
      posterTitle: "Happy Clean Space!!!",
      posterSubtitle: "Không gian sạch đẹp cho mọi bữa tiệc hoàn hảo",
      posterImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80",
      items: [
        {
          id: "b1-1",
          name: "Gói Setup & Vệ Sinh Phòng Tiệc Minnie",
          price: "350,000 đ",
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b1-2",
          name: "Gói Chăm Sóc Sự Kiện Gia Đình (Dòng E)",
          price: "360,000 đ",
          image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b1-3",
          name: "Gói Vệ Sinh Sân Vườn Ngoại Cảnh Nông Trại",
          price: "320,000 đ",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b1-4",
          name: "Combo Làm Sạch Nhanh Hội Trường Sự Kiện",
          price: "320,000 đ",
          image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b1-5",
          name: "Gói Khử Khuẩn & Chăm Sóc Phòng Khách Luxury",
          price: "420,000 đ",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b1-6",
          name: "Gói Dọn Dẹp & Trang Trí Phòng Trẻ Em",
          price: "420,000 đ",
          image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      id: "block-2",
      title: "Vệ sinh nhà cửa & Văn phòng",
      headerColor: "#8cc63f",
      subcategories: [
        "Căn hộ chung cư",
        "Nhà phố biệt thự",
        "Giặt sofa & Nệm",
        "Đánh bóng sàn",
        "Phụ kiện khử mùi"
      ],
      posterTitle: "Hi Fresh Home!",
      posterSubtitle: "Chuẩn mực không gian sống xanh sạch khuẩn",
      posterImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
      items: [
        {
          id: "b2-1",
          name: "Vệ Sinh Theo Giờ Tiêu Chuẩn (Gói 2 Giờ)",
          price: "180,000 đ",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b2-2",
          name: "Tinh Dầu Khử Khuẩn Lavender Tím Nhũ",
          price: "124,000 đ",
          image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b2-3",
          name: "Bình Xịt Khử Trùng Bề Mặt Đa Năng 500ml",
          price: "120,000 đ",
          image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b2-4",
          name: "Gói Giặt Thảm Trang Trí Phòng Khách",
          price: "270,000 đ",
          image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b2-5",
          name: "Gói Hấp Khử Khuẩn Rèm Cửa Cao Cấp Gold",
          price: "220,000 đ",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b2-6",
          name: "Vệ Sinh Máy Lạnh & Lọc Không Khí Tại Nhà",
          price: "160,000 đ",
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      id: "block-3",
      title: "Thiết bị & Hóa chất làm sạch",
      headerColor: "#00a8e8",
      subcategories: [
        "Nước lau sàn hữu cơ",
        "Dung dịch lau kính",
        "Khăn Microfiber",
        "Cây lau nhà thông minh",
        "Máy hút bụi mini"
      ],
      posterTitle: "I Believe In Clean...",
      posterSubtitle: "Công nghệ làm sạch sinh học an toàn cho trẻ nhỏ",
      posterImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80",
      items: [
        {
          id: "b3-1",
          name: "Bộ Khăn Lau Microfiber Xanh Mint Kháng Khuẩn",
          price: "120,000 đ",
          image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b3-2",
          name: "Nước Tẩy Rửa Sinh Học Đa Năng 1000ml",
          price: "100,000 đ",
          image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b3-3",
          name: "Sáp Đánh Bóng Đồ Gỗ & Nội Thất Gold Lớn",
          price: "165,000 đ",
          image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b3-4",
          name: "Combo Chổi & Cây Lau Sàn Black White Gold",
          price: "150,000 đ",
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b3-5",
          name: "Bộ Dụng Cụ Lau Kính Chuyên Nghiệp",
          price: "150,000 đ",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b3-6",
          name: "Viên Tẩy Lồng Giặt Sinh Học Khử Khuẩn",
          price: "75,000 đ",
          image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      id: "block-4",
      title: "Chalkboard & Bảng chỉ dẫn",
      headerColor: "#f04e77",
      subcategories: [
        "Bảng Chalkboard",
        "Biển báo sàn ướt",
        "Cây Welcome sảnh",
        "Mô hình chỉ dẫn"
      ],
      posterTitle: "BEST SERVICE!!!",
      posterSubtitle: "Tận tâm trong từng chi tiết đón tiếp & vệ sinh",
      posterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
      items: [
        {
          id: "b4-1",
          name: "Biển Báo Khu Vực Đang Làm Sạch Chuyên Dụng",
          price: "90,000 đ",
          image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b4-2",
          name: "Bảng Chỉ Dẫn Khu Vực Khử Khuẩn An Toàn",
          price: "90,000 đ",
          image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b4-3",
          name: "Bảng Chalkboard Trang Trí Sảnh Sự Kiện",
          price: "700,000 đ",
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b4-4",
          name: "Bảng Chalkboard Store Đón Khách Cao Cấp",
          price: "700,000 đ",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b4-5",
          name: "Cây Welcome Sảnh Tòa Nhà & Showroom",
          price: "350,000 đ",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: "b4-6",
          name: "Standee Chỉ Dẫn Tiêu Chuẩn Vệ Sinh 5S",
          price: "250,000 đ",
          image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  ],
  news: [
    {
      id: "news-1",
      title: "\"Thành phố sắc màu\", thắp sáng không gian sạch đẹp mùa lễ hội",
      date: "15/12/2025",
      category: "Mẹo chăm sóc nhà",
      excerpt: "Ngày hội trăng rằm và mùa lễ hội cuối năm trọn vẹn hơn với không gian được vệ sinh và trang trí...",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-2",
      title: "Bí quyết vệ sinh nhà bếp sạch bóng dầu mỡ chỉ trong 15 phút",
      date: "18/12/2025",
      category: "Cẩm nang vệ sinh",
      excerpt: "Thực sự, từ ngày áp dụng quy trình tẩy rửa sinh học kết hợp hơi nước nóng, căn bếp luôn...",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-3",
      title: "Hỏi đáp các tiêu chuẩn khử khuẩn phòng ốc để mẹ bầu khỏe đẹp",
      date: "22/12/2025",
      category: "Sức khỏe gia đình",
      excerpt: "Làm thế nào để không gian phòng ngủ luôn sạch bụi mịn, an toàn cho phụ nữ mang thai và trẻ...",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-4",
      title: "Giữ phòng ngủ của con luôn ngăn nắp cùng tuổi dậy thì",
      date: "26/12/2025",
      category: "Không gian sống",
      excerpt: "Nuôi con là cả một hành trình dài, việc rèn luyện thói quen giữ gìn phòng ốc gọn gàng...",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
