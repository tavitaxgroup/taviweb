import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface OfficeProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  badge?: string;
  rating: number;
  reviews: number;
  soldText?: string;
  vendor?: string;
  image: string;
}

export interface B2BProduct7Data extends ClonedTemplateBaseData {
  sidebarCategories: string[];
  featuredCategories12: Array<{
    id: string;
    name: string;
    image: string;
  }>;
  flashSaleProducts: OfficeProductItem[];
  trendingTags: string[];
  techShowcase: OfficeProductItem[];
  apparelShowcase: OfficeProductItem[];
  furnitureShowcase: OfficeProductItem[];
  healthGiftShowcase: OfficeProductItem[];
  recommendedProducts: OfficeProductItem[];
}

export const b2bProduct7DefaultData: B2BProduct7Data = {
  business: {
    name: "OFFICE SUP",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@officesup.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 4820,
    aboutTitle: "Nền Tảng Cung Ứng Thiết Bị, Nội Thất & Văn Phòng Phẩm Doanh Nghiệp B2B",
    aboutText: [
      "OFFICE SUP tự hào mang đến cho doanh nghiệp trải nghiệm mua sắm vật tư, thiết bị công nghệ, nội thất văn phòng và quà tặng đối tác trọn gói tại một điểm đến duy nhất.",
      "Hơn 20.000 mã sản phẩm sẵn kho, giao nhanh trong ngày và hỗ trợ hợp đồng công nợ định kỳ."
    ]
  },
  hero: {
    eyebrow: "THIẾT BỊ VĂN PHÒNG THẾ HỆ MỚI",
    title: "Phiên bản Pro Apple Magic Keyboard mỏng nhất",
    subtitle: "Floating cantilever design — Nâng tầm hiệu suất làm việc doanh nghiệp.",
    ctaText: "Mua ngay",
    ctaLink: "#thiet-bi-cong-nghe",
    backgroundImage:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85"
  },
  sidebarCategories: [
    "Thiết bị điện tử",
    "Phụ kiện văn phòng",
    "TV & Thiết bị phòng họp",
    "Sức khỏe & Làm đẹp",
    "Quà tặng & Đồ lưu niệm",
    "Đồng phục & Thời trang",
    "Nội thất & Pantry văn phòng",
    "Thể thao & Team Building",
    "Sách & Văn phòng phẩm",
    "Thực phẩm khô & Trà Cafe",
    "Cây xanh trang trí",
    "Âm thanh hội nghị"
  ],
  featuredCategories12: [
    {
      id: "fc-1",
      name: "Thiết bị điện tử",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-2",
      name: "Phụ kiện điện tử",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-3",
      name: "TV & Phòng họp",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-4",
      name: "Sức khỏe & Làm đẹp",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-5",
      name: "Quà tặng gỗ",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-6",
      name: "Ghế & Nội thất",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-7",
      name: "Thể thao & Du lịch",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-8",
      name: "Sách & Máy đọc",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-9",
      name: "Thiết bị Pantry",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-10",
      name: "Giải trí văn phòng",
      image:
        "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-11",
      name: "Dụng cụ cảnh quan",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "fc-12",
      name: "Vật tư tiêu hao",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=300&q=80"
    }
  ],
  flashSaleProducts: [
    {
      id: "fs-1",
      name: "Balo Laptop Chống Sốc Doanh Nghiệp 30L",
      price: "390,000₫",
      oldPrice: "490,000₫",
      discount: "20% off",
      rating: 5,
      reviews: 5,
      soldText: "Sold : 12/50",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fs-2",
      name: "Giày Công Sở Nữ Satin Cao Cấp",
      price: "3,990,000₫",
      oldPrice: "4,990,000₫",
      discount: "20% off",
      rating: 5,
      reviews: 3,
      soldText: "Sold : 0/60",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fs-3",
      name: "Gối Tựa Lưng Văn Phòng Cotton Cao Cấp",
      price: "990,000₫",
      oldPrice: "1,500,000₫",
      discount: "34% off",
      rating: 5,
      reviews: 3,
      soldText: "Sold : 109/199",
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fs-4",
      name: "Loa Hội Nghị Bluetooth Chống Nước Soundbo",
      price: "6,800,000₫",
      oldPrice: "7,890,000₫",
      discount: "14% off",
      badge: "Nổi bật",
      rating: 5,
      reviews: 4,
      soldText: "Sold : 15/35",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fs-5",
      name: "Tai Nghe Chụp Tai Chống Ồn Telesale Gnet99",
      price: "2,500,000₫",
      oldPrice: "3,000,000₫",
      discount: "17% off",
      rating: 5,
      reviews: 3,
      soldText: "Sold : 2/20",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    }
  ],
  trendingTags: [
    "accessories",
    "backpack",
    "best seller",
    "chair",
    "clothes rack",
    "clothing",
    "văn phòng phẩm",
    "discount",
    "máy in",
    "electronic",
    "bàn nâng hạ",
    "iPhone 15",
    "đồng phục",
    "quà tặng B2B",
    "headphone",
    "bình giữ nhiệt",
    "hydro flask",
    "ghế công thái học"
  ],
  techShowcase: [
    {
      id: "tc-1",
      name: "Bàn Phím Không Dây Kết Nối Đa Thiết Bị",
      price: "590,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-2",
      name: "Tai Nghe Không Dây Sạc MagSafe Chuẩn Hãng",
      price: "3,090,000₫",
      badge: "Nổi bật",
      rating: 5,
      reviews: 2,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-3",
      name: "Điện Thoại Doanh Nghiệp Silver 128GB",
      price: "5,790,000₫ – 5,990,000₫",
      discount: "28% off",
      badge: "Nổi bật",
      rating: 5,
      reviews: 10,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-4",
      name: "Smartphone Google Pixel 3a XL 2025 Plus",
      price: "8,500,000₫",
      oldPrice: "12,090,000₫",
      discount: "29% off",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80"
    }
  ],
  apparelShowcase: [
    {
      id: "ap-1",
      name: "Áo Sơ Mi Đồng Phục Công Sở Cao Cấp SMV12",
      price: "890,000₫ – 1,500,000₫",
      rating: 5,
      reviews: 6,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ap-2",
      name: "Bộ Khăn Quà Tặng Doanh Nghiệp Thêu Logo",
      price: "1,220,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ap-3",
      name: "Gấu Bông Linh Vật Thương Hiệu Đặt Riêng",
      price: "990,000₫",
      oldPrice: "1,500,000₫",
      discount: "34% off",
      rating: 5,
      reviews: 3,
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ap-4",
      name: "Gối Cổ Chữ U Văn Phòng Cao Su Non",
      price: "200,000₫",
      oldPrice: "290,000₫",
      discount: "31% off",
      badge: "Nổi bật",
      rating: 5,
      reviews: 5,
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80"
    }
  ],
  furnitureShowcase: [
    {
      id: "fn-1",
      name: "Bàn Trà Tiếp Khách Văn Phòng Gỗ Sồi Tự Nhiên",
      price: "890,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-2",
      name: "Sofa Băng Phòng Chờ Sảnh Lễ Tân 3 Chỗ",
      price: "2,990,000₫",
      badge: "Bán chạy",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-3",
      name: "Đèn Bàn Trang Trí Phòng Giám Đốc Cảm Ứng",
      price: "1,290,000₫",
      rating: 5,
      reviews: 2,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-4",
      name: "Ghế Gấp Thư Giãn Khu Vực Pantry & Ban Công",
      price: "2,090,000₫",
      rating: 5,
      reviews: 6,
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80"
    }
  ],
  healthGiftShowcase: [
    {
      id: "hg-1",
      name: "Giày Công Sở Nữ Satin Đế Êm",
      price: "3,990,000₫",
      oldPrice: "4,990,000₫",
      discount: "20% off",
      rating: 5,
      reviews: 3,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "hg-2",
      name: "Đồng Hồ Thông Minh Theo Dõi Sức Khỏe A1 Prime",
      price: "9,920,000₫",
      oldPrice: "10,240,000₫",
      discount: "3% off",
      badge: "Nổi bật",
      rating: 5,
      reviews: 5,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "hg-3",
      name: "Áo Thun Polo Đồng Phục Team Building",
      price: "1,080,000₫ – 1,100,000₫",
      discount: "40% off",
      rating: 5,
      reviews: 3,
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "hg-4",
      name: "Áo Khoác Cardigan Đồng Phục Thu Đông SM13",
      price: "790,000₫ – 1,090,000₫",
      discount: "52% off",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
    }
  ],
  recommendedProducts: [
    {
      id: "rc-1",
      name: "Ghế Công Thái Học Đa Năng Chống Đau Lưng",
      price: "4,500,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rc-2",
      name: "Bộ Quà Tặng Doanh Nghiệp Sổ Da & Bút Ký",
      price: "1,500,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rc-3",
      name: "Hub Chuyển Đổi Type-C 8-in-1 Quantum Vsquare",
      price: "2,090,000₫",
      rating: 5,
      reviews: 2,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rc-4",
      name: "Màn Hình Tương Tác Phòng Họp Mi LED Smart TV 4A Pro",
      price: "12,090,000₫",
      badge: "Nổi bật",
      rating: 5,
      reviews: 5,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rc-5",
      name: "Bàn Phím Không Dây Kết Nối Laptop & Tablet",
      price: "590,000₫",
      rating: 5,
      reviews: 4,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
