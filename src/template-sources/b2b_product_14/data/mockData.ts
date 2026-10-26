import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2B14ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  category: string;
  image: string;
  sku: string;
}

export interface B2B14Data extends ClonedTemplateBaseData {
  topPromoStrip: {
    leftText: string;
    voucherCode: string;
    ctaText: string;
  };
  flashSale: {
    title: string;
    countdown: {
      days: string;
      hours: string;
      mins: string;
      secs: string;
    };
    items: B2B14ProductItem[];
  };
  newestProducts: B2B14ProductItem[];
  bestSellingProducts: B2B14ProductItem[];
  popularProducts: B2B14ProductItem[];
  promoTabs: string[];
  promoProducts: B2B14ProductItem[];
  recommendedProducts: B2B14ProductItem[];
  topRatedProducts: B2B14ProductItem[];
  serviceCommitments: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
}

export const b2bProduct14DefaultData: B2B14Data = {
  business: {
    name: "Mona Shop",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "b2b@monashop.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 – Thứ 7: 9:00-20:00 | Chủ nhật: 9:00-18:00",
    rating: 4.9,
    reviewCount: 1450,
    aboutTitle: "GIẢI PHÁP VĂN PHÒNG PHẨM DOANH NGHIỆP TOÀN DIỆN",
    aboutText: [
      "Tổng kho phân phối sỉ & lẻ văn phòng phẩm, giấy in, bìa hồ sơ, máy tính văn phòng, dụng cụ học tập và thiết bị trường học chính hãng cho doanh nghiệp, ngân hàng, trường học trên toàn quốc."
    ],
    highlights: [
      "CHẤT LƯỢNG & ƯU ĐÃI",
      "GIÁ TỐT TRỌN GÓI",
      "QUÀ TẶNG HẤP DẪN"
    ]
  },
  topPromoStrip: {
    leftText: "KHÁM PHÁ AKOOLAND VÙNG ĐẤT THẦN KỲ",
    voucherCode: "Nhập mã 0824SALE100 mở ra ưu đãi nhiệm màu",
    ctaText: "MUA NGAY >"
  },
  hero: {
    eyebrow: "ĐÓN HÈ SANG - DEAL RỘN RÀNG",
    subtitle: "DEAL HỜI RA MẮT - LỜI QUÀ THẬT TO (GIẢM ĐẾN 65% | MUA 1 TẶNG 2)",
    title: "GIẢI PHÁP VĂN PHÒNG PHẨM DOANH NGHIỆP",
    description:
      "Cung ứng trọn gói văn phòng phẩm định kỳ cho doanh nghiệp, cơ quan và trường học với chiết khấu B2B lên đến 35%, xuất hóa đơn VAT đầy đủ và giao hàng tận nơi.",
    ctaText: "MUA NGAY",
    ctaLink: "#newest-products",
    secondaryCtaText: "Báo giá doanh nghiệp",
    secondaryCtaLink: "#footer-b2b",
    backgroundImage:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=1200&q=85"
  },
  flashSale: {
    title: "Giờ vàng giá sốc",
    countdown: {
      days: "156",
      hours: "22",
      mins: "15",
      secs: "20"
    },
    items: [
      {
        id: "fs-1",
        title: "Ba lô học sinh hình chim cánh cụt Điểm 10 TP-BP09",
        price: "160,000₫",
        oldPrice: "200,000₫",
        discountBadge: "-20%",
        category: "Balo học sinh",
        sku: "TP-BP09",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fs-2",
        title: "Bút gel xóa được TP-GELB02 hộp 12 cây",
        price: "190,000₫",
        oldPrice: "240,000₫",
        discountBadge: "-21%",
        category: "Bút viết",
        sku: "TP-GELB02",
        image:
          "https://images.unsplash.com/photo-1585336261026-6a06e2e6f1fd?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fs-3",
        title: "Bìa còng Flexoffice 70A4 FO-B0015 lưu trữ hồ sơ",
        price: "570,000₫",
        oldPrice: "780,000₫",
        discountBadge: "-27%",
        category: "Hồ sơ văn phòng",
        sku: "FO-B0015",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fs-4",
        title: "Bút mực gel khô nhanh – nét viết êm mượt Flexgel GEL-042",
        price: "190,000₫",
        oldPrice: "350,000₫",
        discountBadge: "-46%",
        category: "Bút viết",
        sku: "GEL-042",
        image:
          "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  newestProducts: [
    {
      id: "np-1",
      title: "Bộ ngòi bút máy Iridium Điểm 10 TP-FPN08/KIT",
      price: "75,000₫",
      category: "Bút viết",
      sku: "TP-FPN08",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-2",
      title: "Bút chì gỗ Neon Colokit GP-C01",
      price: "5,000₫",
      category: "Bút viết",
      sku: "GP-C01",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-3",
      title: "Máy tính khoa học Flexio FX680VN tự thiết kế theo cá tính",
      price: "35,000₫",
      category: "Máy tính cầm tay",
      sku: "FX680VN",
      image:
        "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-4",
      title: "Máy tính khoa học Flexoffice FLEXIO Fx590VN",
      price: "45,000₫",
      category: "Máy tính cầm tay",
      sku: "FX590VN",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-5",
      title: "Ba lô học sinh hình chim cánh cụt Điểm 10 TP-BP011",
      price: "75,000₫",
      category: "Balo học sinh",
      sku: "TP-BP011",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-6",
      title: "Cặp chống gù Akooland BP-022/AK – Đệm mút dày dặn",
      price: "35,000₫",
      category: "Balo học sinh",
      sku: "BP-022/AK",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-7",
      title: "Cặp chống gù Nature Quest TP-BP043/MI",
      price: "5,000₫",
      category: "Balo học sinh",
      sku: "TP-BP043",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-8",
      title: "Cặp chống gù Nature Quest TP-BP042/MI",
      price: "70,000₫",
      category: "Balo học sinh",
      sku: "TP-BP042",
      image:
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-9",
      title: "Ba lô mầm non hình chuột Mickey TP-BP050/MI",
      price: "72,000₫",
      category: "Balo học sinh",
      sku: "TP-BP050",
      image:
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-10",
      title: "Máy tính Flexoffice FLEXIO CAL-02S văn phòng",
      price: "100,000₫",
      category: "Máy tính cầm tay",
      sku: "CAL-02S",
      image:
        "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-11",
      title: "Ba lô học sinh hình con cừu Điểm 10 TP-BP08",
      price: "75,000₫",
      category: "Balo học sinh",
      sku: "TP-BP08",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "np-12",
      title: "Cặp chống gù – Đệm mút dày dặn hơn TP-BP025",
      price: "72,000₫",
      category: "Balo học sinh",
      sku: "TP-BP025",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    }
  ],
  bestSellingProducts: [
    {
      id: "bs-1",
      title: "Ba lô học sinh hình chim cánh cụt Điểm 10 TP-BP09",
      price: "160,000₫",
      oldPrice: "200,000₫",
      discountBadge: "-20%",
      category: "Balo học sinh",
      sku: "TP-BP09",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "bs-2",
      title: "Cặp chống gù BP-017 cao cấp",
      price: "480,000₫",
      category: "Balo học sinh",
      sku: "BP-017",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "bs-3",
      title: "Cặp chống gù Nature Quest TP-BP043/MI",
      price: "5,000₫",
      category: "Balo học sinh",
      sku: "TP-BP043",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "bs-4",
      title: "Cặp chống gù Akooland BP-022/AK – Đệm mút dày dặn hơn",
      price: "35,000₫",
      category: "Balo học sinh",
      sku: "BP-022/AK",
      image:
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "bs-5",
      title: "Cặp chống gù Nature Quest TP-BP045/FR",
      price: "95,000₫",
      category: "Balo học sinh",
      sku: "TP-BP045",
      image:
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "bs-6",
      title: "Ba lô học sinh Playful TP-BP053/MI",
      price: "150,000₫",
      category: "Balo học sinh",
      sku: "TP-BP053",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    }
  ],
  popularProducts: [
    {
      id: "pop-1",
      title: "Cặp chống gù BP-017",
      price: "480,000₫",
      category: "Balo học sinh",
      sku: "BP-017",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-2",
      title: "Cặp chống gù – Đệm mút dày dặn hơn",
      price: "72,000₫",
      category: "Balo học sinh",
      sku: "BP-025",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-3",
      title: "Compa C-017 kỹ thuật chính xác",
      price: "5,000₫",
      category: "Thước - Compa - Phấn",
      sku: "C-017",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-4",
      title: "Cặp chống gù Akooland BP-022/AK – Đệm mút dày",
      price: "35,000₫",
      category: "Balo học sinh",
      sku: "BP-022/AK",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-5",
      title: "Bộ ngòi bút máy Iridium Điểm 10 TP-FPN08/KIT",
      price: "75,000₫",
      category: "Bút viết",
      sku: "TP-FPN08",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-6",
      title: "Cặp chống gù Nature Quest TP-BP043/MI",
      price: "5,000₫",
      category: "Balo học sinh",
      sku: "TP-BP043",
      image:
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-7",
      title: "Cặp chống gù Nature Quest TP-BP044/MI",
      price: "22,000₫",
      category: "Balo học sinh",
      sku: "TP-BP044",
      image:
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-8",
      title: "Bộ compa Điểm 10 MTEN TP-C019",
      price: "480,000₫",
      category: "Thước - Compa - Phấn",
      sku: "TP-C019",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-9",
      title: "Bút Gel Papermate OS UPC InkJoy 0.5 mm",
      price: "1,700,000₫",
      oldPrice: "2,500,000₫",
      discountBadge: "-32%",
      category: "Bút viết",
      sku: "INKJOY-05",
      image:
        "https://images.unsplash.com/photo-1585336261026-6a06e2e6f1fd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-10",
      title: "Máy tính văn phòng Flexio CAL-010",
      price: "35,000₫",
      category: "Máy tính cầm tay",
      sku: "CAL-010",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-11",
      title: "Bút chì gỗ HB Điểm 10 TP-GP05",
      price: "2,480,000₫",
      category: "Bút viết",
      sku: "TP-GP05",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pop-12",
      title: "Bút chì bấm Neon Colokit PC-C002",
      price: "35,000₫",
      category: "Bút viết",
      sku: "PC-C002",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80"
    }
  ],
  promoTabs: ["Balo học sinh", "Bút viết", "Máy tính cầm tay", "Thước - Compa - Phấn"],
  promoProducts: [
    {
      id: "prm-1",
      title: "Ba lô học sinh hình chim cánh cụt Điểm 10 TP-BP09",
      price: "160,000₫",
      oldPrice: "200,000₫",
      discountBadge: "-20%",
      category: "Balo học sinh",
      sku: "TP-BP09",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "prm-2",
      title: "Ba lô học sinh hình chim cánh cụt Điểm 10 TP-BP011",
      price: "75,000₫",
      category: "Balo học sinh",
      sku: "TP-BP011",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "prm-3",
      title: "Cặp chống gù Akooland BP-022/AK – Đệm mút dày",
      price: "35,000₫",
      category: "Balo học sinh",
      sku: "BP-022",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "prm-4",
      title: "Cặp chống gù – Đệm mút dày dặn hơn",
      price: "72,000₫",
      category: "Balo học sinh",
      sku: "BP-025",
      image:
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "prm-5",
      title: "Cặp chống gù BP-017",
      price: "480,000₫",
      category: "Balo học sinh",
      sku: "BP-017",
      image:
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "prm-6",
      title: "Ba lô mầm non hình chuột Mickey TP-BP050/MI",
      price: "72,000₫",
      category: "Balo học sinh",
      sku: "TP-BP050",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80"
    }
  ],
  recommendedProducts: [
    {
      id: "rec-1",
      title: "Máy tính văn phòng Flexio CAL-010",
      price: "35,000₫",
      category: "Máy tính cầm tay",
      sku: "CAL-010",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rec-2",
      title: "Máy tính khoa học Flexio Fx680VN Plus",
      price: "40,000₫",
      category: "Máy tính cầm tay",
      sku: "FX680-PLUS",
      image:
        "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rec-3",
      title: "Máy tính khoa học Flexio FX680VN tự thiết kế theo cá tính",
      price: "35,000₫",
      category: "Máy tính cầm tay",
      sku: "FX680-CUSTOM",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rec-4",
      title: "Máy tính khoa học Flexoffice FLEXIO Fx590VN",
      price: "45,000₫",
      category: "Máy tính cầm tay",
      sku: "FX590VN",
      image:
        "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=300&q=80"
    }
  ],
  topRatedProducts: [
    {
      id: "trp-1",
      title: "Bột nặn Clever Dough Colokit MD-C008",
      price: "280,000₫",
      category: "Mỹ thuật",
      sku: "MD-C008",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "trp-2",
      title: "Bộ sáp nặn và khuôn Colokit MCT-C02",
      price: "280,000₫",
      category: "Mỹ thuật",
      sku: "MCT-C02",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "trp-3",
      title: "Bộ sáp nặn và khuôn Colokit Doraemon MCT-C03/DO",
      price: "280,000₫",
      category: "Mỹ thuật",
      sku: "MCT-C03",
      image:
        "https://images.unsplash.com/photo-1585336261026-6a06e2e6f1fd?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "trp-4",
      title: "Sáp nặn Colokit MC-C04 12 màu an toàn",
      price: "280,000₫",
      category: "Mỹ thuật",
      sku: "MC-C04",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Sắm ngay văn phòng phẩm chất lượng",
      date: "21/09/2024",
      category: "KINH NGHIỆM, XU HƯỚNG",
      excerpt:
        "Khám phá bộ sưu tập đa dạng các sản phẩm văn phòng phẩm từ bút, giấy, sổ tay đến bìa hồ sơ lưu trữ chuẩn doanh nghiệp...",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Bí quyết làm việc hiệu quả với văn phòng phẩm đỉnh cao",
      date: "21/09/2024",
      category: "KINH NGHIỆM, SỰ KIỆN",
      excerpt:
        "Khám phá bộ sưu tập đa dạng các sản phẩm văn phòng phẩm từ bút, giấy, sổ tay đến giải pháp sắp xếp bàn làm việc...",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Văn phòng phẩm – Đối tác tin cậy của doanh nghiệp...",
      date: "21/09/2024",
      category: "ƯU ĐÃI",
      excerpt:
        "Khám phá bộ sưu tập đa dạng các sản phẩm văn phòng phẩm từ bút, giấy, sổ tay đến hợp đồng cung ứng B2B trọn gói...",
      image:
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Văn phòng phẩm sáng tạo – Khám phá cùng chúng...",
      date: "21/09/2024",
      category: "KINH NGHIỆM, SỰ KIỆN",
      excerpt:
        "Khám phá bộ sưu tập đa dạng các sản phẩm văn phòng phẩm từ bút, giấy, sổ tay đến dụng cụ mỹ thuật hiện đại...",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
    }
  ],
  serviceCommitments: [
    {
      id: "sc-1",
      title: "Miễn phí vận chuyển",
      subtitle: "Cho đơn hàng trên 5tr"
    },
    {
      id: "sc-2",
      title: "Thanh toán an toàn",
      subtitle: "100% bảo mật thanh toán"
    },
    {
      id: "sc-3",
      title: "Quà khuyến mãi",
      subtitle: "Cho đơn hàng trên 7tr"
    },
    {
      id: "sc-4",
      title: "Hỗ trợ 24/7",
      subtitle: "Sẵn sàng tận tâm"
    }
  ]
};
