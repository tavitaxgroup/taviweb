import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa6PriceRow {
  id: string;
  name: string;
  durationNote: string;
  price: string;
  image: string;
}

export interface Spa6BenefitItem {
  id: string;
  title: string;
  description: string;
  iconType: "routine" | "blood" | "tissue" | "chronic" | "soul" | "fit";
}

export interface Spa6SpecialCareItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Spa6PackageBanner {
  id: string;
  badgeLabel: string;
  title: string;
  description: string;
  price: string;
  themeColor: "mint" | "amber";
  image: string;
}

export interface Spa6Data extends ClonedTemplateBaseData {
  scriptBrand: string;
  priceList: Spa6PriceRow[];
  benefits: Spa6BenefitItem[];
  specialCare: Spa6SpecialCareItem[];
  packageBanners: Spa6PackageBanner[];
  staffOptions: string[];
  hotlineNumber: string;
}

export const spa6DefaultData: Spa6Data = {
  business: {
    name: "Helen Spa",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["cskh@helenspa.vn", "booking@helenspa.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "09:00 - 21:00 (Mỗi ngày)",
    rating: 4.9,
    reviewCount: 890,
    experienceYears: "15 Năm",
    aboutTitle: "Hãy cho bản thân bạn, và làm trẻ hóa tâm trí & tâm hồn của bạn",
    aboutText: [
      "Hãy chăm sóc cơ thể của bạn, nơi duy nhất bạn phải sống! Đó là một ngôi đền sống. Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó... Helen Spa chỉ giúp bạn làm điều đó!"
    ],
    highlights: [
      "Liệu pháp dưỡng sinh Hoàng gia kết hợp thảo mộc tự nhiên",
      "Không gian tĩnh lặng, thanh khiết giúp cân bằng Thân - Tâm - Trí",
      "Chuyên viên trị liệu tay nghề cao, tận tâm phục vụ"
    ]
  },
  scriptBrand: "Helen Spa",
  hotlineNumber: "1900 636 648",
  hero: {
    eyebrow: "Helen Spa",
    title: "KHÁM PHÁ THẾ GIỚI SPA",
    subtitle:
      "Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác, khách hàng trở về nhà sẽ là một người hoàn toàn mới với phong cách sang trọng, làn da sáng khỏe mạnh, bàn tay đẹp đẽ, một tâm trí và cơ thể trẻ hóa!",
    ctaText: "ĐẶT DỊCH VỤ",
    ctaLink: "#lien-he-dat-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85"
  },
  priceList: [
    {
      id: "pr-1",
      name: "Massage Đá Nóng Thảo Dược",
      durationNote: "20 phút Phục hồi da mặt",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pr-2",
      name: "Chăm Sóc Da Tay Phương Đông",
      durationNote: "20 phút Phục hồi da mặt",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pr-3",
      name: "Liệu Pháp Tinh Dầu Hoàng Gia",
      durationNote: "20 phút Phục hồi da mặt",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "1. Liệu Pháp Massage",
      category: "Massage Therapy",
      description:
        "Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác.",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-2",
      title: "2. Chăm Sóc Da Mặt",
      category: "Skin Care",
      description:
        "Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác.",
      price: "450.000đ",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-3",
      title: "3. Trị Liệu Toàn Thân",
      category: "Body Treatments",
      description:
        "Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác.",
      price: "550.000đ",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  benefits: [
    {
      id: "ben-1",
      title: "Giải Tỏa Căng Thẳng",
      description: "Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.",
      iconType: "routine"
    },
    {
      id: "ben-2",
      title: "Tăng Tuần Hoàn Máu",
      description: "Cung cấp thêm oxy & chất dinh dưỡng cho các tế bào.",
      iconType: "blood"
    },
    {
      id: "ben-3",
      title: "Massage Mô Sâu",
      description: "Chuyên gia trị liệu làm giảm căng thẳng cơ bắp và chuột rút.",
      iconType: "tissue"
    },
    {
      id: "ben-4",
      title: "Giảm Đau Nhức Mạn Tính",
      description: "Liệu pháp xoa bóp mang lại lợi ích vượt trội cho việc kiểm soát cơn đau.",
      iconType: "chronic"
    },
    {
      id: "ben-5",
      title: "Cân Bằng Thân - Tâm - Trí",
      description: "Spa cải thiện cảm giác tốt và mang lại sự hài hòa cho cơ thể, tâm trí và tâm hồn.",
      iconType: "soul"
    },
    {
      id: "ben-6",
      title: "Giữ Dáng & Sức Khỏe",
      description: "Spa giảm cân thêm để giữ cho cơ thể của bạn trong hình dạng cân đối.",
      iconType: "fit"
    }
  ],
  staffOptions: [
    "Chuyên viên Minh Thư (Trưởng nhóm Trị liệu)",
    "Chuyên viên Lan Anh (Chăm sóc da Hoàng gia)",
    "Chuyên viên Ngọc Bích (Massage Đá nóng & Ấn huyệt)",
    "Sắp xếp chuyên viên phù hợp nhất"
  ],
  specialCare: [
    {
      id: "sc-1",
      number: "01",
      title: "Massage Thụy Điển",
      description:
        "Sử dụng các nét dài mượt mà ngoài việc nhào, chuyển động tròn với các kỹ thuật ma sát thường xuyên.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "sc-2",
      number: "02",
      title: "Massage Thái Cổ Truyền",
      description:
        "Nó tổ chức các năng lượng của cơ thể trong sự liên kết. Các nhà trị liệu làm việc trên các cơ, khớp và cơ thể.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
    }
  ],
  packageBanners: [
    {
      id: "pkg-b-1",
      badgeLabel: "WELLNESS",
      title: "Foot Spa Thảo Dược",
      description: "Một ngày ở Spa là những gì tôi gọi là Thiên đường trên Trái đất",
      price: "390.000đ",
      themeColor: "mint",
      image:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pkg-b-2",
      badgeLabel: "HERBAL CARE",
      title: "Chăm Sóc Thảo Mộc",
      description: "Gửi hành tinh và đến Spa để thư giãn và trẻ hóa làn da",
      price: "590.000đ",
      themeColor: "amber",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
  ],
  news: [
    {
      id: "blog-1",
      title: "5 tiêu chí lựa chọn liệu trình dưỡng sinh Spa hiệu quả",
      date: "18/05/2025",
      category: "Cẩm nang Spa",
      excerpt:
        "Hiện nay trên thị trường có rất nhiều liệu trình chăm sóc da và dưỡng sinh, cùng tìm hiểu cách chọn phác đồ phù hợp nhất...",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "2 lý do bạn nên chọn cho Spa của mình không gian thiết kế tĩnh lặng",
      date: "12/05/2025",
      category: "Không gian",
      excerpt:
        "Hiện nay, lĩnh vực chăm sóc sức khỏe và sắc đẹp đòi hỏi sự kết hợp hài hòa giữa âm nhạc, hương thơm và kiến trúc...",
      image:
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "Trị liệu dưỡng sinh Hoàng gia – Thách thức và cơ hội chăm sóc sức khỏe",
      date: "05/05/2025",
      category: "Dưỡng sinh",
      excerpt:
        "Tại Việt Nam, càng ngày xu hướng dưỡng sinh thông kinh lạc bằng thảo mộc tự nhiên càng được khách hàng yêu thích...",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
