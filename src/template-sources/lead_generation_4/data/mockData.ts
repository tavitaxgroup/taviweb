import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HerbalgyProductItem {
  id: string;
  name: string;
  volume: string;
  price: string;
  image: string;
}

export interface HerbalgyIngredient {
  id: string;
  name: string;
  scientificName: string;
  benefit: string;
  image: string;
}

export interface HerbalgyPainZone {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HerbalgyBranch {
  id: string;
  city: string;
  address: string;
  phone?: string;
}

export interface LeadGeneration4Data extends ClonedTemplateBaseData {
  storySection: {
    title: string;
    originParagraph: string;
    productHeroImage: string;
    distributorTitle: string;
    distributorParagraphs: string[];
    missionTitle: string;
    missionParagraphs: string[];
  };
  productSection: {
    title: string;
    variants: HerbalgyProductItem[];
    flatlayImage: string;
    problemParagraphs: string[];
    ingredients: HerbalgyIngredient[];
    ingredientSummary: string;
  };
  usageSection: {
    benefits: string[];
    painZones: HerbalgyPainZone[];
    instructions: string[];
    cautions: string[];
  };
  videoBanner: {
    title: string;
    subtitle: string;
    badge: string;
    thumbnail: string;
  };
  branches: HerbalgyBranch[];
}

export const leadGeneration4DefaultData: LeadGeneration4Data = {
  business: {
    name: "HERBALGY",
    phone: ["076 922 0162", "0909 888 162"],
    email: ["cskh@herbalgy.vn", "info@vietbeauty.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 820,
    aboutTitle: "TẠI SAO LẠI LÀ HERBALGY?",
    aboutText: [
      "Được sáng lập bởi bác sĩ Đông y Luo Tong Jia – Hong Kong, người đã dành hơn nhiều năm để nghiên cứu y học cổ truyền và trải nghiệm các thảo dược quý để chăm sóc sức khỏe xương khớp cho con người. Mục tiêu của ông là cho ra những sản phẩm chất lượng và tiện lợi với phương châm “Cuộc sống không cơn đau” cho mọi gia đình.",
      "Các sản phẩm của ông đều mong muốn mang đến sự tích cực và giảm bớt những áp lực đau mỏi cơ xương khớp trong cuộc sống đô thị hóa ngày nay. Herbalgy đã được phân phối rộng rãi ở các quốc gia và vùng lãnh thổ như Hong Kong, Macau, Singapore, Hoa Kỳ và Việt Nam."
    ],
    highlights: [
      "Chiết xuất thảo dược thiên nhiên lành tính chuẩn Hong Kong",
      "Thiết kế đầu lăn thông minh kết hợp cây lăn massage huyệt đạo",
      "Thẩm thấu nhanh, hương thảo mộc thư giãn dễ chịu cho dân văn phòng"
    ]
  },
  hero: {
    eyebrow: "Một ngày làm việc đầy",
    subtitle: "cùng HERBALGY",
    title: "SẢNG KHOÁI",
    description:
      "Giải pháp dầu thảo dược thiên nhiên giúp xua tan đau mỏi cổ vai gáy, lưng khớp và mang lại tinh thần sảng khoái tức thì.",
    ctaText: "ĐẶT MUA NGAY",
    ctaLink: "#order-form",
    secondaryCtaText: "TÌM HIỂU CÔNG DỤNG",
    secondaryCtaLink: "#usage",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85"
  },
  storySection: {
    title: "TẠI SAO LẠI LÀ HERBALGY?",
    originParagraph:
      "Được sáng lập bởi ông Luo Tong Jia – Hong Kong, người đã dành nhiều năm nghiên cứu y học và trải nghiệm các thảo dược để chăm sóc sức khỏe con người. Mục tiêu của ông là cho ra những sản phẩm chất lượng và tiện lợi với phương châm “cuộc sống không cơn đau” cho mọi gia đình. Herbalgy là một trong những sản phẩm tiên phong trong quá trình nghiên cứu đó, đã được phân phối rộng rãi tại Hong Kong, Macau, Singapore, Hoa Kỳ và Việt Nam.",
    productHeroImage:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
    distributorTitle: "Giới thiệu Viet Beauty",
    distributorParagraphs: [
      "Nhà phân phối được uỷ quyền chính thức tại Việt Nam – Viet Beauty.",
      "Viet Beauty là đơn vị nhập khẩu chuyên phân phối các dòng sản phẩm chăm sóc sức khỏe và sắc đẹp uy tín. Hiện nay Viet Beauty mở rộng phạm vi hoạt động hướng đến các dòng thảo dược thiên nhiên tốt cho sức khỏe người tiêu dùng.",
      "Câu chuyện chia sẻ và phân phối nhãn dầu thảo dược Herbalgy bắt nguồn từ việc chúng tôi tìm kiếm những mẫu dầu thảo mộc lành tính để gửi tặng người thân. Herbalgy đã đáp ứng trọn vẹn cả về thiết kế kiểu dáng, mùi hương thanh mát và công dụng hữu hiệu."
    ],
    missionTitle: "Sứ mệnh",
    missionParagraphs: [
      "Mong muốn cuộc sống không còn những cơn đau mỏi cản trở, truyền cảm hứng sảng khoái tươi mới cho từng ngày trọn vẹn, từ đó nâng cao sức khỏe và chất lượng cuộc sống cho người tiêu dùng Việt.",
      "Thay đổi thói quen tiêu dùng hướng về các sản phẩm thảo dược chính ngạch, rõ nguồn gốc xuất xứ và an toàn lâu dài cho sức khỏe."
    ]
  },
  productSection: {
    title: "DẦU THẢO DƯỢC GIẢM ĐAU KHÁNG VIÊM",
    variants: [
      {
        id: "var-1",
        name: "Dầu thảo dược Herbalgy Touch - Cool 5ml",
        volume: "Chai bỏ túi 5ml tiện lợi",
        price: "90.000 VNĐ",
        image:
          "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "var-2",
        name: "Dầu thảo dược Herbalgy Touch - Cool 25ml",
        volume: "Chai tiêu chuẩn 25ml dùng gia đình",
        price: "368.000 VNĐ",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "var-3",
        name: "Cây lăn massage huyệt đạo",
        volume: "Dụng cụ lăn bấm huyệt chuyên dụng",
        price: "69.000 VNĐ",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
      }
    ],
    flatlayImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
    problemParagraphs: [
      "Trong cuộc sống hằng ngày chỉ vì một lúc bất cẩn bạn có thể bị chấn thương do vận động quá mức, bị bầm tím, bong gân, căng cơ, trẹo khớp hoặc ngồi máy tính văn phòng nhiều giờ gây đau mỏi cổ vai gáy.",
      "Thấu hiểu nhu cầu đó, Herbalgy mang đến dòng dầu xoa bóp thảo dược trị đau nhức xương khớp được người tiêu dùng tại Hong Kong tin cậy và sử dụng rộng rãi hiện nay — Dầu thảo dược Herbalgy Touch - Cool."
    ],
    ingredients: [
      {
        id: "ing-1",
        name: "Tinh chất Bạc Hà (L-Menthol)",
        scientificName: "Mentha Arvensis Leaf Extract",
        benefit: "Làm mát dịu tức thì vùng cơ căng cứng, thông mũi và mang lại cảm giác sảng khoái",
        image:
          "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "ing-2",
        name: "Tinh dầu Lộc Đề Xanh (Methyl Salicylate)",
        scientificName: "Gaultheria Procumbens",
        benefit: "Hỗ trợ kháng viêm tự nhiên, giảm đau sâu tại các vùng khớp, vai gáy và thắt lưng",
        image:
          "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "ing-3",
        name: "Thảo mộc Thông Đỏ & Khuynh Diệp",
        scientificName: "Pinus & Eucalyptus Herb",
        benefit: "Lưu thông khí huyết, làm ấm kinh lạc và tan nhanh vết bầm tím dưới da",
        image:
          "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    ingredientSummary:
      "Dầu thảo dược Herbalgy Touch - Cool có nguồn gốc xuất xứ từ Hong Kong, sản phẩm chủ yếu gồm 2 thành phần chính là Methyl Salicylate và L-Menthol có tác dụng làm giảm những cơn đau nhức, hỗ trợ xương khớp, trị đau khớp, lưu thông khí huyết, thư giãn hiệu quả. Ngoài ra sản phẩm còn rất hiệu quả đối với người hay bị say tàu xe, đau bụng, nhức đầu... đem lại cảm giác mát lạnh, dễ chịu cho người cao tuổi, người chơi thể thao và nhân viên văn phòng."
  },
  usageSection: {
    benefits: [
      "Giúp thông mũi, sảng khoái tinh thần nhanh chóng cho người mệt mỏi, đau đầu.",
      "Hỗ trợ làm dịu cơ và giảm đau nhanh các cơn đau cổ, đau vai, đau khớp, đau lưng thông thường và chứng đau nhức mãn tính.",
      "Giảm cảm giác buồn nôn, chóng mặt khi say tàu xe.",
      "Làm dịu nhanh vết ngứa, sưng đỏ do côn trùng hoặc muỗi cắn."
    ],
    painZones: [
      {
        id: "pz-1",
        title: "Cổ tay & Khớp ngón",
        description: "Mỏi cổ tay do gõ máy tính, cầm nắm",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "pz-2",
        title: "Cổ chân & Bong gân",
        description: "Trẹo chân, căng cơ khi chơi thể thao",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "pz-3",
        title: "Đầu gối & Cơ đùi",
        description: "Đau mỏi khớp gối ở người lớn tuổi",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "pz-4",
        title: "Đau mỏi Vai Gáy",
        description: "Căng cứng cơ cổ vai gáy dân văn phòng",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "pz-5",
        title: "Đau mỏi Thắt lưng",
        description: "Đau lưng do ngồi lâu hoặc mang vác",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80"
      }
    ],
    instructions: [
      "Dùng ngón tay cái ấn nhẹ xung quanh vùng bị tổn thương để tìm điểm bị đau nhức.",
      "Thoa dầu Herbalgy vào chỗ đau, nhấn và massage bằng đầu lăn từ 1-3 phút, thực hiện 2-3 lần / ngày.",
      "Thoa nhẹ dầu vào lòng bàn tay, chà xát cho ấm và hít sâu sẽ mang lại cảm giác sảng khoái giảm căng thẳng mệt mỏi tức thì."
    ],
    cautions: [
      "Chỉ sử dụng ngoài da.",
      "Tham khảo ý kiến bác sĩ hoặc dược sĩ trước khi dùng sản phẩm này cho trẻ em dưới 2 tuổi, phụ nữ mang thai và đang cho con bú.",
      "Tránh tiếp xúc trực tiếp với mắt, niêm mạc và các vết thương hở.",
      "Không được uống trực tiếp. Bảo quản nơi khô ráo, thoáng mát."
    ]
  },
  videoBanner: {
    title: "Herbalgy",
    subtitle: "Dầu thảo dược thiên nhiên",
    badge: "ECO 100%",
    thumbnail:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85"
  },
  branches: [
    {
      id: "br-1",
      city: "Hồ Chí Minh",
      address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM"
    },
    {
      id: "br-2",
      city: "Vũng Tàu",
      address: "128 Trương Công Định, Phường 3, TP. Vũng Tàu"
    },
    {
      id: "br-3",
      city: "Bến Tre",
      address: "45 Đại lộ Đồng Khởi, Phường Phú Khương, TP. Bến Tre"
    },
    {
      id: "br-4",
      city: "Sóc Trăng",
      address: "89 Trần Hưng Đạo, Phường 3, TP. Sóc Trăng"
    }
  ]
};
