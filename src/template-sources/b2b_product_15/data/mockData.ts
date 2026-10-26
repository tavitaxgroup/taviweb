import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2B15ProductItem {
  id: string;
  categoryLabel: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  image: string;
  specs: string;
}

export interface B2B15CategorySection {
  id: string;
  headerTitle: string;
  headerColor: string;
  subLinks: string[];
  brands: string[];
  banner: {
    topTitle: string;
    subTitle: string;
    highlightText: string;
    ctaText?: string;
    image: string;
  };
  products: B2B15ProductItem[];
}

export interface B2B15Data extends ClonedTemplateBaseData {
  sidebarCategories: string[];
  promoTicker: string;
  heroNewsTeasers: Array<{
    id: string;
    title: string;
    date: string;
    image: string;
  }>;
  categorySections: B2B15CategorySection[];
}

export const b2bProduct15DefaultData: B2B15Data = {
  business: {
    name: "MONA STORE",
    phone: ["0126 922 0162", "0909 922 162"],
    email: ["demonhunter@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 18:30",
    rating: 4.9,
    reviewCount: 1850,
    aboutTitle: "CÔNG TY TNHH MONA MEDIA - Tổng kho Thiết Bị Công Nghiệp & Cơ Khí",
    aboutText: [
      "Tổng kho nhập khẩu và phân phối sỉ & lẻ thiết bị sửa chữa ô tô xe máy, máy nén khí công nghiệp, máy xịt rửa áp lực cao, máy khoan cắt cơ khí, máy hút bụi nhà xưởng và thang nhôm dân dụng chính hãng."
    ],
    highlights: [
      "Nhập khẩu trực tiếp chính hãng Bosch, Makita, Hitachi, Total, Karcher, Pegasus",
      "Bảo hành tận nơi 12-24 tháng, đầy đủ linh kiện thay thế chính hãng",
      "Giao hàng và lắp đặt cầu nâng, máy nén khí tận xưởng trên toàn quốc"
    ]
  },
  hero: {
    eyebrow: "ƯU ĐÃI THÁNG 3",
    subtitle: "NHẬN NGAY QUÀ TẶNG CAO CẤP KHI MUA THIẾT BỊ CÔNG NGHIỆP & DÂN DỤNG",
    title: "Tổng Kho Công Cụ Cơ Khí & Thiết Bị Công Nghiệp Chính Hãng",
    description:
      "Chuyên cung cấp máy cắt sắt inox, máy nén khí, máy khoan cầm tay, máy hút bụi nhà xưởng và thiết bị garage ô tô xe máy.",
    ctaText: "MUA NGAY",
    ctaLink: "#cat-section-1",
    secondaryCtaText: "Báo giá đại lý",
    secondaryCtaLink: "#footer-info",
    backgroundImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85"
  },
  sidebarCategories: [
    "Chăm Sóc Ô Tô, Xe Máy",
    "Thiết Bị Sửa Chữa Xe Máy",
    "Máy xịt rửa áp lực cao",
    "Thiết bị dân dụng",
    "Sửa Chữa Ô Tô, Xe Tải",
    "Dụng cụ cầm tay",
    "Dụng Cụ Khí Nén",
    "Máy Nén Khí",
    "Máy tháo vỏ",
    "Súng bắn ốc – Súng vặn vít",
    "Thiết bị công nghiệp",
    "Thiết bị điện cầm tay",
    "Mô tơ điện – Máy phát điện"
  ],
  promoTicker:
    "Tổng kho phân phối sỉ & lẻ máy cơ khí, thiết bị sửa chữa ô tô xe máy, máy rửa xe công nghiệp chiết khấu đến 30%...",
  heroNewsTeasers: [
    {
      id: "hn-1",
      title: "Kinh nghiệm chọn mua máy nén khí công nghiệp bền bỉ cho garage",
      date: "8 Tháng Ba, 2025",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "hn-2",
      title: "Hướng dẫn bảo dưỡng định kỳ máy xịt rửa áp lực cao công suất lớn",
      date: "8 Tháng Ba, 2025",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "hn-3",
      title: "Bảng giá cầu nâng 1 trụ rửa xe ô tô và máy tháo vỏ mới nhất",
      date: "8 Tháng Ba, 2025",
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=300&q=80"
    }
  ],
  categorySections: [
    {
      id: "cat-section-1",
      headerTitle: "Chăm Sóc Ô Tô và Xe Máy",
      headerColor: "#2997d6",
      subLinks: [
        "Hóa Chất Bảo Dưỡng",
        "Thiết Bị Chăm Sóc Xe",
        "Thiết Bị Phụ Trợ",
        "Máy hút nhớt thải",
        "Thiết bị phụ trợ khác"
      ],
      brands: ["GARMIN", "Electrolux", "LS Daewon", "BOSCH"],
      banner: {
        topTitle: "MÁY CẮT SẮT, INOX, NHÔM",
        subTitle: "Hàng chính hãng - Giảm tới",
        highlightText: "20%",
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
      },
      products: [
        {
          id: "c1-p1",
          categoryLabel: "MÁY BƠM HƠI KHÍ NÉN",
          title: "Máy nén khí Jucai 10HP 2 cấp AW80012 – Dung tích 500L",
          price: "35,000,000 ₫",
          specs: "Công suất 10HP, điện 3 pha 380V, bình chứa 500 lít chuyên dụng cho trạm dịch vụ",
          image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c1-p2",
          categoryLabel: "HÓA CHẤT BẢO DƯỠNG",
          title: "Hóa chất súc béc xăng LIQUI-MOLY Injection Cleaner 300ml",
          price: "160,000 ₫",
          oldPrice: "195,000 ₫",
          discountBadge: "-18%",
          specs: "Làm sạch kim phun nhiên liệu và buồng đốt động cơ xăng nhập khẩu Đức",
          image:
            "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c1-p3",
          categoryLabel: "THIẾT BỊ CHĂM SÓC Ô TÔ",
          title: "Súng dọn nội thất ô tô – Công nghệ Tornado lốc xoáy",
          price: "1,800,000 ₫",
          specs: "Áp lực khí nén 6-9 bar, làm sạch trần nỉ, ghế da và khe cửa xe nhanh chóng",
          image:
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c1-p4",
          categoryLabel: "BÌNH BỌT TUYẾT",
          title: "Máy rửa xe bọt tuyết Pallas dung tích 18 lít Inox 304",
          price: "1,800,000 ₫",
          specs: "Thân bình Inox 304 chống gỉ sét, vòi phun bọt mịn tiết kiệm dung dịch",
          image:
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c1-p5",
          categoryLabel: "CẦU NÂNG 1 TRỤ",
          title: "Cầu nâng 1 trụ dạng âm nền NV4000-A rửa xe ô tô 4 tấn",
          price: "50,000,000 ₫",
          specs: "Ty nâng mạ crom chống gỉ, sức nâng 4 tấn, bàn nâng xoay 360 độ",
          image:
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "cat-section-2",
      headerTitle: "Sửa Chữa Xe Máy",
      headerColor: "#68b828",
      subLinks: [
        "Hóa Chất Bảo Dưỡng",
        "Thiết Bị Chăm Sóc Xe",
        "Thiết Bị Phụ Trợ",
        "Máy hút nhớt thải",
        "Thiết bị phụ trợ khác"
      ],
      brands: ["GARMIN", "Electrolux", "LS Daewon", "BOSCH"],
      banner: {
        topTitle: "TOP MÁY KHOAN CHÍNH HÃNG",
        subTitle: "BOSCH, MAKITA, HITACHI, TOTAL • Giảm tới",
        highlightText: "30%",
        ctaText: "Mua ngay >",
        image:
          "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80"
      },
      products: [
        {
          id: "c2-p1",
          categoryLabel: "BÀN ÉP",
          title: "Khung ép chín vỏ ruột chức năng điện có hệ thống tự ngắt",
          price: "1,300,000 ₫",
          specs: "Bàn ép vá chín lốp xe máy, xe tải nhẹ tự động kiểm soát nhiệt độ",
          image:
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c2-p2",
          categoryLabel: "MÁY BƠM HƠI - DỤNG CỤ K...",
          title: "Máy bơm hơi 3HP PEGASUS TM-V-0.25/8-120L dây đồng",
          price: "7,300,000 ₫",
          specs: "Lưu lượng 250 lít/phút, bình chứa 120L, motor dây đồng 100% bền bỉ",
          image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c2-p3",
          categoryLabel: "THIẾT BỊ SỬA CHỮA XE MÁY",
          title: "Tủ kéo đựng dụng cụ 5 ngăn TKSN-NP có khóa an toàn",
          price: "5,500,000 ₫",
          specs: "Thép sơn tĩnh điện dày 1.2mm, bánh xe chịu tải có khóa hãm",
          image:
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c2-p4",
          categoryLabel: "BÀN NÂNG XE MÁY",
          title: "Bàn nâng điện và đạp chân T250E, sức nâng 200kg",
          price: "6,800,000 ₫",
          specs: "Kết hợp mô tơ thủy lực điện 220V và bàn đạp chân cơ dự phòng",
          image:
            "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c2-p5",
          categoryLabel: "MÁY THÁO VỎ XE MÁY",
          title: "Máy tháo vỏ ô tô và xe tay ga Bright LC-810E chính hãng",
          price: "15,500,000 ₫",
          specs: "Đường kính kẹp 10-22 inch, chấu kẹp hợp kim siêu cứng chống trầy mâm",
          image:
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "cat-section-3",
      headerTitle: "Máy Xịt Rửa Áp Lực Cao",
      headerColor: "#d9251d",
      subLinks: [
        "Hóa Chất Bảo Dưỡng",
        "Thiết Bị Chăm Sóc Xe",
        "Thiết Bị Phụ Trợ",
        "Máy hút nhớt thải",
        "Thiết bị phụ trợ khác"
      ],
      brands: ["GARMIN", "Electrolux", "LS Daewon", "BOSCH"],
      banner: {
        topTitle: "MÁY HÚT BỤI CÔNG NGHIỆP, NHÀ XƯỞNG",
        subTitle: "Thương hiệu: Karcher, HiClean, Lavor, Camry",
        highlightText: "Giá từ: 1.650.000₫",
        ctaText: "MUA NGAY",
        image:
          "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=80"
      },
      products: [
        {
          id: "c3-p1",
          categoryLabel: "MÁY RỬA XE GIA ĐÌNH",
          title: "Máy rửa xe gia đình Bosch Aquatak-33-11 1300W",
          price: "2,390,000 ₫",
          specs: "Áp lực 110 bar, lưu lượng 330 lít/giờ, tự ngắt khi nhả cò súng",
          image:
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c3-p2",
          categoryLabel: "ĐẦU BƠM CAO ÁP",
          title: "Đầu bơm cao áp AR – Italy RC14.16N – Kiểu đầu liền",
          price: "6,200,000 ₫",
          specs: "Piston sứ cao cấp nhập khẩu Ý, áp lực làm việc 160 bar",
          image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c3-p3",
          categoryLabel: "MÁY XỊT RỬA ÁP LỰC CAO",
          title: "Máy phun xịt rửa áp lực cao Projet P3400A – 150 bar",
          price: "14,000,000 ₫",
          specs: "Công suất 3.0kW, chuyên dụng cho trạm rửa xe ô tô tải và nhà xưởng",
          image:
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c3-p4",
          categoryLabel: "MÁY RỬA XE",
          title: "Máy rửa xe cao áp Projet P30-1510B2 – Công suất 3kW",
          price: "12,500,000 ₫",
          specs: "Áp lực tối đa 100 bar, lưu lượng nước 15 lít/phút kèm dây bố thép 15m",
          image:
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c3-p5",
          categoryLabel: "MÁY RỬA XE GIA ĐÌNH",
          title: "Máy rửa xe gia đình, phun xịt rửa mini Projet P1100",
          price: "3,200,000 ₫",
          specs: "Mô tơ cảm ứng từ êm ái, tự hút nước từ xô chậu tiện lợi",
          image:
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "cat-section-4",
      headerTitle: "Thiết Bị Dân Dụng",
      headerColor: "#f5a623",
      subLinks: [
        "Hóa Chất Bảo Dưỡng",
        "Thiết Bị Chăm Sóc Xe",
        "Thiết Bị Phụ Trợ",
        "Máy hút nhớt thải",
        "Thiết bị phụ trợ khác"
      ],
      brands: ["GARMIN", "Electrolux", "LS Daewon", "BOSCH"],
      banner: {
        topTitle: "THANG NHÔM",
        subTitle: "Siêu nhẹ - Giá rẻ",
        highlightText: "Giá từ: 550.000₫",
        image:
          "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
      },
      products: [
        {
          id: "c4-p1",
          categoryLabel: "MÁY HÚT BỤI",
          title: "Máy hút bụi cầm tay Bosch GAS 18V-LI – Bảo hành 12 tháng",
          price: "3,500,000 ₫",
          specs: "Dùng pin Lithium-Ion 18V mạnh mẽ, gọn nhẹ cho gia đình và ô tô",
          image:
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c4-p2",
          categoryLabel: "MÁY HÚT BỤI",
          title: "Máy hút bụi Công nghiệp HICLEAN HC-15 (01 motor 1200W)",
          price: "2,400,000 ₫",
          specs: "Dung tích thùng chứa Inox 15L, hút khô và hút nước đa năng",
          image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c4-p3",
          categoryLabel: "THANG NHÔM",
          title: "Thang nhôm rút gọn chữ A 2x9 bậc NIKAWA NK-56AI",
          price: "4,150,000 ₫",
          oldPrice: "4,600,000 ₫",
          discountBadge: "-10%",
          specs: "Hợp kim nhôm T6063 dày 1.5mm, tải trọng 150kg đạt chuẩn EN131",
          image:
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c4-p4",
          categoryLabel: "THANG NHÔM",
          title: "Thang nhôm rút gọn đơn 10 bậc NIKAWA NK-32 chính hãng",
          price: "2,197,000 ₫",
          oldPrice: "2,650,000 ₫",
          discountBadge: "-17%",
          specs: "Chiều cao tối đa 3.2m, thu gọn chỉ 0.81m dễ dàng chở bằng xe máy",
          image:
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "c4-p5",
          categoryLabel: "THANG NHÔM",
          title: "Thang nhôm xếp đơn SINOYON HR-5002E cao cấp",
          price: "1,400,000 ₫",
          specs: "Chân đế cao su chống trượt, chốt khóa tự động an toàn tuyệt đối",
          image:
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ]
};
