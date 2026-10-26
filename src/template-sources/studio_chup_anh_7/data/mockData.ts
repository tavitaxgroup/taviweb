import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface FlowerProductCard {
  id: string;
  name: string;
  oldPrice?: string;
  price: string;
  isSale?: boolean;
  image: string;
}

export interface StudioChupAnh7Data extends ClonedTemplateBaseData {
  whyChooseUs: {
    yearsNumber: string;
    yearsLabel: string;
    image: string;
    accordions: Array<{
      id: string;
      title: string;
      content: string;
    }>;
    pillars: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  flowerProducts: FlowerProductCard[];
  gardenGallery: string[];
  footerGallery: string[];
}

export const studioChupAnh7DefaultData: StudioChupAnh7Data = {
  business: {
    name: "Mona Flower",
    phone: ["(+84) 0313-728-397", "031 3728 397"],
    email: ["info@themona.global", "booking@monaflower.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00",
    rating: 5.0,
    reviewCount: 520,
    aboutTitle: "TẠI SAO BẠN NÊN CHỌN CHÚNG TÔI?",
    aboutText: [
      "Chất lượng là ưu tiên hàng đầu tại chúng tôi. Hoa tươi được chọn lựa cẩn thận và duy trì tình trạng tươi mới lâu nhất, là điểm đặc biệt mà chúng tôi mang đến.",
      "Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn lòng hỗ trợ bạn. Sự hài lòng của khách hàng là động lực lớn nhất, và chúng tôi luôn cam kết đáp ứng mọi yêu cầu của bạn."
    ]
  },
  hero: {
    eyebrow: "THE MONA",
    title: "SHOP HOA TƯƠI",
    subtitle:
      "Nghệ thuật thiết kế hoa cưới cầm tay, cổng hoa lễ đường và nhiếp ảnh lookbook botanic thơ mộng.",
    ctaText: "XEM THÊM",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1800&q=85"
  },
  whyChooseUs: {
    yearsNumber: "2",
    yearsLabel: "NĂM KINH NGHIỆM",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
    accordions: [
      {
        id: "acc-1",
        title: "1. Chất lượng sản phẩm",
        content:
          "Chúng tôi cam kết cung cấp hoa chất lượng cao và tươi mới. Chúng tôi có thể đảm bảo rằng mỗi bó hoa đều được chọn lựa kỹ lưỡng và sắp xếp một cách tỉ mỉ để đảm bảo đẹp mắt và sống lâu. Chất lượng là ưu tiên hàng đầu của chúng tôi, và chúng tôi luôn cố gắng đáp ứng mong đợi của khách hàng."
      },
      {
        id: "acc-2",
        title: "2. Dịch vụ khách hàng xuất sắc",
        content:
          "Đội ngũ nghệ nhân cắm hoa và stylist nhiếp ảnh luôn đồng hành tư vấn concept màu sắc phù hợp với từng không gian tiệc cưới và sự kiện."
      },
      {
        id: "acc-3",
        title: "3. Sự đa dạng trong sản phẩm",
        content:
          "Hơn 200+ mẫu hoa nhập khẩu Hà Lan, Ecuador, Đà Lạt từ hoa cưới cầm tay, giỏ hoa nghệ thuật đến trang trí bàn gallery trọn gói."
      }
    ],
    pillars: [
      {
        id: "pl-1",
        title: "Tận Tâm",
        description:
          "Chúng tôi luôn lắng nghe và tìm hiểu về người mua hàng để tạo ra trải nghiệm mua sắm cá nhân hóa và đáp ứng kịp thời mọi yêu cầu."
      },
      {
        id: "pl-2",
        title: "Chăm Sóc",
        description:
          "Chất lượng sản phẩm là ưu tiên hàng đầu của chúng tôi, từ quá trình lựa chọn hoa tới quá trình bảo quản và giao hàng."
      },
      {
        id: "pl-3",
        title: "Sự Đa Dạng và Tùy Chọn",
        description:
          "Chúng tôi tự hào về sự đa dạng của danh mục sản phẩm, từ các loại hoa truyền thống đến những thiết kế độc đáo và hiện đại."
      }
    ]
  },
  flowerProducts: [
    {
      id: "fp-1",
      name: "Lan Hồ Điệp Cưới Tinh Khôi",
      oldPrice: "300,000₫",
      price: "250,000₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-2",
      name: "Bó Hoa Hồng Ohara Cầm Tay",
      price: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-3",
      name: "Giỏ Hoa Hướng Dương Nắng Mới",
      oldPrice: "300,000₫",
      price: "250,000₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-4",
      name: "Lan Hồ Điệp Vàng Hoàng Gia",
      price: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-5",
      name: "Lan Hồ Điệp Tím Nghệ Thuật",
      price: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-6",
      name: "Lan Hồ Điệp Trắng Trang Nhã",
      oldPrice: "300,000₫",
      price: "250,000₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-7",
      name: "Giỏ Hoa Đồng Nội Mùa Xuân",
      price: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-8",
      name: "Bó Hoa Cưới Mẫu Đơn Pastel",
      price: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&q=80"
    }
  ],
  stats: [
    { id: "st-1", number: "500+", title: "Khách Hàng Hài Lòng" },
    { id: "st-2", number: "160+", title: "Buổi Chụp Studio" },
    { id: "st-3", number: "65+", title: "Giải Thưởng Đạt Được" },
    { id: "st-4", number: "1,800+", title: "Dự Án Hoàn Thành" }
  ],
  gardenGallery: [
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80"
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Mai Phương",
      role: "Người mẫu, Diễn viên",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Sự chăm sóc và tận tâm trong việc làm hoa tại cửa hàng này thực sự khiến tôi ấn tượng. Bó hoa mà tôi đã mua không chỉ đẹp mắt mà còn chứa đựng sự tinh tế và sáng tạo trong từng chi tiết. Cảm giác như được đắm chìm trong một khung cảnh thơ mộng với những loại hoa độc đáo. Đây chắc chắn là một địa chỉ đáng tin cậy cho những người yêu hoa.”"
    },
    {
      id: "rv-2",
      author: "Quốc Bảo",
      role: "Nhiếp ảnh gia",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Mình đã mua một bó hoa tại đây và không thể hài lòng hơn với dịch vụ và sản phẩm. Hương thơm từ những bông hoa khiến căn phòng trở nên ấm áp và tươi mới. Mỗi cánh bông, được sắp xếp một cách tinh tế, thậm chí đẹp như một tác phẩm nghệ thuật. Chắc chắn mình sẽ quay lại lựa chọn hoa tại đây cho mọi dịp.”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Quà tết thì nên tặng các món quà và giỏ hoa ý nghĩa nào ?",
      date: "22 Tháng Ba, 2024",
      category: "THIẾT KẾ",
      excerpt:
        "Tết là thời khắc mang đến sự ấm áp, thiêng liêng. Việc trao nhau những giỏ hoa tươi thắm và hộp quà Tết ý nghĩa",
      image:
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Mùa cưới năm nay bạn đã chọn được mẫu hoa cầm tay ưng ý chưa ?",
      date: "26 Tháng Ba, 2024",
      category: "PHONG CÁCH",
      excerpt:
        "Lựa chọn bó hoa cưới phù hợp với dáng váy và tone trang điểm giúp cô dâu tỏa sáng rạng ngời trong từng khung hình",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=300&q=80"
  ]
};

export const defaultData = studioChupAnh7DefaultData;
export const mockData = studioChupAnh7DefaultData;
export default studioChupAnh7DefaultData;
