import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface OrganicProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  rating: number;
  available?: number;
  sold?: number;
  unit?: string;
  image: string;
}

export interface B2BProduct4Data extends ClonedTemplateBaseData {
  trustFeatures: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  promoBanners3: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    bgClass: string;
    image: string;
  }>;
  categories: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  products: OrganicProductItem[];
  bestSellers: OrganicProductItem[];
  featuredHorizontal: OrganicProductItem[];
  certifications: string[];
}

export const b2bProduct4DefaultData: B2BProduct4Data = {
  business: {
    name: "Mona Organic",
    phone: ["0908 728 397", "1900 636 648"],
    email: ["b2b@monaorganic.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 – Thứ 6: 08:00 – 17:30 | Thứ 7 – CN: 08:30 – 16:00",
    rating: 4.9,
    reviewCount: 1580,
    aboutTitle: "Nhà Sản Xuất & Phân Phối Thực Phẩm Hữu Cơ Chuẩn Quốc Tế",
    aboutText: [
      "Mona Organic chuyên canh tác, chế biến và cung ứng sỉ nông sản – thực phẩm hữu cơ đạt chứng nhận USDA Organic, EU Organic và GlobalG.A.P cho hệ thống siêu thị, chuỗi nhà hàng, khách sạn 5 sao và đối tác xuất khẩu.",
      "Mỗi lô hàng đều được kiểm soát nghiêm ngặt từ vùng trồng Đà Lạt – Đồng Bằng Sông Cửu Long đến hệ thống kho lạnh tiêu chuẩn ISO 22000."
    ]
  },
  hero: {
    eyebrow: "UP TO 25% CHIẾT KHẤU ĐẠI LÝ B2B",
    title: "THỰC PHẨM HỮU CƠ",
    subtitle: "Sự lựa chọn tự nhiên cho sức khỏe & chuỗi cung ứng xanh bền vững",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85"
  },
  trustFeatures: [
    {
      id: "tf-1",
      title: "100% Hữu Cơ",
      description: "Chứng nhận USDA & EU Organic, tốt cho sức khỏe và thân thiện môi trường."
    },
    {
      id: "tf-2",
      title: "Tiêu dùng xanh",
      description: "Sử dụng nông sản bản địa canh tác sinh thái, truy xuất QR từng nông trại."
    },
    {
      id: "tf-3",
      title: "Miễn phí vận chuyển*",
      description: "Giao hàng xe lạnh chuyên dụng tận kho siêu thị, nhà hàng & đại lý."
    },
    {
      id: "tf-4",
      title: "Chính sách đổi trả dễ dàng",
      description: "Quy trình kiểm định & đổi trả sản phẩm nhanh chóng trong 24 giờ."
    }
  ],
  promoBanners3: [
    {
      id: "pb-1",
      eyebrow: "ƯU ĐÃI 50%",
      title: "RAU CỦ TƯƠI",
      ctaText: "XEM NGAY",
      bgClass: "bg-[#c9ec9a]",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pb-2",
      eyebrow: "GIẢM NGAY 30%",
      title: "THẢO MỘC & HẢI SẢN",
      ctaText: "XEM NGAY",
      bgClass: "bg-[#e2e6ea]",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pb-3",
      eyebrow: "GIẢM NGAY 30%",
      title: "NƯỚC ÉP HỮU CƠ",
      ctaText: "XEM NGAY",
      bgClass: "bg-[#f8cbd0]",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80"
    }
  ],
  categories: [
    { id: "all", name: "Trái cây", icon: "apple" },
    { id: "meat", name: "Thịt & Cá", icon: "beef" },
    { id: "veg", name: "Rau củ", icon: "carrot" },
    { id: "butter", name: "Bơ & Trứng", icon: "egg" },
    { id: "milk", name: "Sữa & Kem", icon: "milk" }
  ],
  products: [
    {
      id: "org-1",
      name: "Nước Cam Ép Lạnh Hữu Cơ (Thùng 12 chai)",
      category: "Sữa & Kem",
      price: "240.000 ₫",
      rating: 5,
      unit: "Thùng",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-2",
      name: "Cà Rốt Baby Đà Lạt Hữu Cơ (Thùng 10kg)",
      category: "Rau củ",
      price: "560.000 ₫",
      rating: 5,
      unit: "Thùng 10kg",
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-3",
      name: "Cam Vàng Navel Hữu Cơ Xuất Khẩu",
      category: "Trái cây",
      price: "449.000 ₫",
      oldPrice: "545.000 ₫",
      badge: "-18%",
      rating: 5,
      unit: "Thùng 5kg",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-4",
      name: "Hành Tím Lý Sơn Hữu Cơ Sơ Chế",
      category: "Rau củ",
      price: "54.000 ₫",
      oldPrice: "67.000 ₫",
      badge: "-19%",
      rating: 4,
      unit: "Túi 1kg",
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-5",
      name: "Thịt Gà Thảo Mộc Thả Vườn Nguyên Con",
      category: "Thịt & Cá",
      price: "260.000 ₫",
      rating: 5,
      unit: "Con 1.6kg",
      image:
        "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-6",
      name: "Bắp Cải Tím Hữu Cơ Đà Lạt",
      category: "Rau củ",
      price: "47.000 ₫",
      rating: 5,
      unit: "Kg",
      image:
        "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-7",
      name: "Ổi Hồng Ruột Đỏ Hữu Cơ (Lô Xuất Khẩu)",
      category: "Trái cây",
      price: "689.000 ₫",
      badge: "HOT B2B",
      rating: 5,
      unit: "Thùng 15kg",
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-8",
      name: "Thịt Bò Hữu Cơ Ăn Cỏ Tự Nhiên",
      category: "Thịt & Cá",
      price: "204.500 ₫",
      oldPrice: "250.000 ₫",
      badge: "-18%",
      rating: 5,
      unit: "Khay 500g",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-9",
      name: "Chuối Laba Đà Lạt Chuẩn GlobalGAP",
      category: "Trái cây",
      price: "199.000 ₫",
      oldPrice: "239.000 ₫",
      badge: "-17%",
      rating: 5,
      unit: "Thùng 10kg",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "org-10",
      name: "Dâu Tây Mộc Châu Hái Sáng Sớm",
      category: "Trái cây",
      price: "128.000 ₫",
      rating: 5,
      unit: "Hộp 500g",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestSellers: [
    {
      id: "bs-1",
      name: "Bơ Lạt Hữu Cơ Pháp (Organic Butter)",
      category: "Bơ & Trứng",
      price: "150.000 ₫",
      rating: 5,
      available: 7,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-2",
      name: "Bắp Cải Tím Hữu Cơ Đà Lạt",
      category: "Rau củ",
      price: "47.000 ₫",
      rating: 5,
      available: 5,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-3",
      name: "Ổi Hồng Hữu Cơ Xuất Khẩu",
      category: "Trái cây",
      price: "689.000 ₫",
      badge: "BÁN CHẠY",
      rating: 5,
      available: 3,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-4",
      name: "Cà Rốt Hữu Cơ Đà Lạt",
      category: "Rau củ",
      price: "560.000 ₫",
      rating: 5,
      available: 8,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-5",
      name: "Thăn Nội Bò Hữu Cơ Úc",
      category: "Thịt & Cá",
      price: "204.500 ₫",
      badge: "-18%",
      rating: 5,
      available: 6,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=600&q=80"
    }
  ],
  featuredHorizontal: [
    {
      id: "fh-1",
      name: "Nước Cam Hữu Cơ Ép Lạnh",
      category: "Sữa & Kem",
      price: "240.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-2",
      name: "Cà Rốt Hữu Cơ Đà Lạt",
      category: "Rau củ",
      price: "560.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-3",
      name: "Cam Vàng Navel Hữu Cơ",
      category: "Trái cây",
      price: "449.000 ₫",
      oldPrice: "545.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-4",
      name: "Hành Tím Hữu Cơ",
      category: "Rau củ",
      price: "54.000 ₫",
      oldPrice: "67.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-5",
      name: "Bắp Cải Tím Hữu Cơ",
      category: "Rau củ",
      price: "47.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-6",
      name: "Ổi Hồng Ruột Đỏ Hữu Cơ",
      category: "Trái cây",
      price: "689.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-7",
      name: "Thịt Bò Hữu Cơ Ăn Cỏ",
      category: "Thịt & Cá",
      price: "204.500 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fh-8",
      name: "Chuối Hữu Cơ Xuất Khẩu",
      category: "Trái cây",
      price: "199.000 ₫",
      oldPrice: "239.000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80"
    }
  ],
  testimonials: [
    {
      id: "t-1",
      author: "NGUYỄN THỊ LAN",
      role: "Giám đốc Thu mua Chuỗi Siêu Thị",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Chúng tôi đã hợp tác phân phối nông sản của Mona Organic trong hơn 2 năm qua và hoàn toàn hài lòng. Rau củ luôn giữ được độ tươi giòn nhờ quy trình sơ chế lạnh khép kín."
    },
    {
      id: "t-2",
      author: "TRẦN VĂN HẢI",
      role: "Bếp Trưởng Điều Hành Chuỗi Nhà Hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Mona Organic cung cấp nguồn nguyên liệu hữu cơ ổn định quanh năm với chứng nhận GlobalGAP đầy đủ. Trái cây và rau mầm của họ có hương vị tự nhiên vượt trội."
    },
    {
      id: "t-3",
      author: "BS. LÊ THANH BÌNH",
      role: "Chuyên gia Dinh dưỡng Lâm sàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Là một bác sĩ dinh dưỡng, tôi luôn khuyến khích các bếp ăn trường học và bệnh viện lựa chọn thực phẩm hữu cơ kiểm định rõ ràng từ Mona Organic để bảo vệ sức khỏe."
    }
  ],
  certifications: [
    "FRESH FARM 100%",
    "NATURAL HARVEST",
    "USDA ORGANIC",
    "EU ORGANIC CERTIFIED",
    "VEGAN FOOD STANDARD",
    "RAW FOOD QUALITY"
  ],
  news: [
    {
      id: "n-1",
      title: "Quy trình canh tác rau củ hữu cơ tuần hoàn không hóa chất tại nông trại Đà Lạt",
      date: "08 TH3",
      category: "Nông trại Hữu cơ",
      excerpt:
        "Khám phá mô hình nhà kính công nghệ cao kết hợp phân bón vi sinh bản địa giúp giữ trọn hàm lượng dinh dưỡng trong từng cây rau.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "n-2",
      title: "Tiêu chuẩn kho lạnh bảo quản sau thu hoạch giúp nông sản tươi nguyên 14 ngày",
      date: "25 TH2",
      category: "Chuỗi Cung Ứng Lạnh",
      excerpt:
        "Ứng dụng công nghệ cấp mát nhanh Hydro-Cooling ngay tại vườn giúp khóa ẩm và bảo toàn vitamin tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "n-3",
      title: "Lợi ích của việc chuyển đổi sang nguyên liệu hữu cơ đối với chuỗi nhà hàng F&B",
      date: "25 TH2",
      category: "Xu Hướng B2B",
      excerpt:
        "Người tiêu dùng hiện đại sẵn sàng chi trả cao hơn cho các thực đơn minh bạch nguồn gốc nông trại và thân thiện môi trường.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "n-4",
      title: "Cách nhận biết thịt bò hữu cơ ăn cỏ tự nhiên và quy trình giết mổ nhân đạo",
      date: "25 TH2",
      category: "Kiến Thức Thực Phẩm",
      excerpt:
        "Tìm hiểu các tiêu chuẩn kiểm dịch thú y và hàm lượng Omega-3 vượt trội trong thịt bò chăn thả tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
