import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonaCakeProduct {
  id: string;
  name: string;
  weight: string;
  price: string;
  image: string;
}

export interface MonaCakeValueBlock {
  id: string;
  title: string;
  description: string;
  fullStory: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface LeadGeneration5Data extends ClonedTemplateBaseData {
  heroPoem: string[];
  poeticBanner: {
    leftTitle: string;
    leftLines: string[];
    rightTitle: string;
    rightLines: string[];
  };
  collectionSection: {
    eyebrow: string;
    subtitle: string;
    title: string;
    products: MonaCakeProduct[];
  };
  videoHighlights: {
    videoTitle: string;
    videoThumbnail: string;
    badges: Array<{ id: string; title: string; icon: "new" | "shield" | "chef" | "phone" }>;
  };
  traditionalShowcases: {
    bakedTitle: string;
    bakedSubtitle: string;
    bakedDesc: string[];
    bakedImages: string[];
    snowSkinTitle: string;
    snowSkinSubtitle: string;
    snowSkinDesc: string[];
    snowSkinImages: string[];
  };
  artisanStory: {
    title: string;
    paragraphs: string[];
  };
  philosophyBlocks: {
    title: string;
    subtitle: string;
    pillarsLabel: string;
    items: MonaCakeValueBlock[];
  };
  commitments: string[];
  policies: {
    title: string;
    subtitle: string;
    items: string[];
  };
}

export const leadGeneration5DefaultData: LeadGeneration5Data = {
  business: {
    name: "MONA CAKE",
    phone: ["076 922 0162", "0909 888 162"],
    email: ["cskh@monacake.vn", "quatang@monacake.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 21:30",
    rating: 4.9,
    reviewCount: 950,
    aboutTitle: "CÓ MỘT CÂU CHUYỆN KỂ RẰNG",
    aboutText: [
      "Có một người con gái Huế, học chuyên ngành khách sạn nhưng lại đam mê nấu nướng đặc biệt là những loại bánh mang đậm hồn cốt truyền thống Việt.",
      "Sau nhiều năm trau dồi kỹ nghệ làm bánh thủ công, từng mẻ bánh nướng vàng ươm và bánh dẻo thơm lừng hương hoa bưởi đã ra đời với tâm nguyện nhân đôi niềm vui sum vầy đến mọi gia đình và doanh nghiệp."
    ],
    highlights: [
      "100% nguyên liệu tự nhiên tuyển chọn, tuyệt đối không chất bảo quản",
      "Làm mới thủ công từng mẻ theo đơn đặt hàng mỗi ngày",
      "Thiết kế hộp quà Phú Quý sang trọng, in logo doanh nghiệp theo yêu cầu"
    ]
  },
  hero: {
    eyebrow: "TINH HOA QUÀ TẶNG ĐOÀN VIÊN",
    subtitle: "Đồng hành gắn kết triệu triệu gia đình",
    title: "BÁNH TRUNG THU MONA CAKE",
    description:
      "Đêm mùa trăng sáng chẳng quên – Trung thu là lúc về bên gia đình. Thiên Lương đồng hành cùng bạn chia sẻ tình thân gia đình.",
    ctaText: "ĐẶT HÀNG NGAY",
    ctaLink: "#order-section",
    secondaryCtaText: "XEM BỘ SƯU TẬP",
    secondaryCtaLink: "#collection",
    backgroundImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=85"
  },
  heroPoem: [
    "“Đêm mùa trăng sáng chẳng quên – Trung thu là lúc về bên gia đình",
    "Thiên Lương đồng hành cùng bạn chia sẻ tình thân gia đình”"
  ],
  poeticBanner: {
    leftTitle: "Tết đoàn viên gia đình sung túc",
    leftLines: [
      "Về nhà đi con",
      "Nhớ trăng đêm nào – Cả nhà bên nhau rộn rã tiếng cười",
      "Về nhà đi con",
      "Mẹ ngồi trông con – Mong chuyến xe đừng muộn",
      "Về nhà đi con , về nhà đi con"
    ],
    rightTitle: "Tết giàu có",
    rightLines: [
      "Giàu có tình thân",
      "Giàu có tiếng cười",
      "Giàu có không khí sum vầy",
      "Giàu có kỉ niệm tuổi thơ"
    ]
  },
  collectionSection: {
    eyebrow: "Đón mùa trăng đoàn viên MONA CAKE cho ra mắt bộ sưu tập",
    subtitle: "PHÚ QUÝ ĐOÀN VIÊN DUY NHẤT CHỈ CÓ MÙA NÀY",
    title: "BỘ SƯU TẬP",
    products: [
      {
        id: "mc-1",
        name: "Thập cẩm yến sào, gà quay 2 trứng, 230g",
        weight: "230g • 2 Trứng muối",
        price: "200,000 ₫",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "mc-2",
        name: "Bánh dẻo nhân trà xanh 200g",
        weight: "200g • Matcha Nhật",
        price: "100,000 ₫",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "mc-3",
        name: "Khoai môn hạt sen 2 trứng, 230g",
        weight: "230g • Sen Huế thượng hạng",
        price: "200,000 ₫",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "mc-4",
        name: "Bánh dẻo đậu xanh ít đường, 200g",
        weight: "200g • Hương hoa bưởi",
        price: "100,000 ₫",
        image:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  videoHighlights: {
    videoTitle: "Bánh Trung Thu Thiên Lương - Đồng hành gắn kết triệu triệu gia đình",
    videoThumbnail:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    badges: [
      { id: "bg-1", title: "Hàng mới mỗi ngày", icon: "new" },
      { id: "bg-2", title: "Sạch không chất bảo quản", icon: "shield" },
      { id: "bg-3", title: "100% hoàn toàn nhà làm", icon: "chef" },
      { id: "bg-4", title: "HOTLINE : 076 922 0162", icon: "phone" }
    ]
  },
  traditionalShowcases: {
    bakedTitle: "Bánh nướng truyền thống",
    bakedSubtitle: "Hòa quyện đất trời – Hương vị truyền thống – Tuổi thơ ùa về – Gia đình sung túc",
    bakedDesc: [
      "Cầu kỳ từ khâu chọn loại bột mì mịn nhất để có lớp vỏ vàng ươm thơm lừng.",
      "Cầu kỳ đến việc chọn loại trứng trên đầu muối vừa quả nhỏ mới, thấm muối vừa vặn, sắc sảo mặn mà mà không làm át vị giác người ăn."
    ],
    bakedImages: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
    ],
    snowSkinTitle: "Bánh dẻo truyền thống",
    snowSkinSubtitle: "Dịu thơm hương bưởi – Bùi bùi nhân đậu – Deo dẻo vỏ nếp – Hạnh phúc tràn đầy",
    snowSkinDesc: [
      "Bánh dẻo đậu xanh thoạt nhìn không cầu kỳ nhưng có một cái gì đó rất đỗi thân quen nhưng thấm đượm trong đó là tình cảm “đoàn viên gia đình” và nhất là tình yêu khăng khít chia sẻ ngọt bùi cùng nhau.",
      "Quý lắm giữa chốn đô thành, giữa bộn bề ngoài ngưỡng cửa nhà mở ra một cái gì đó gợi lại hương vị gia đình ấm áp biết bao."
    ],
    snowSkinImages: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    ]
  },
  artisanStory: {
    title: "CÓ MỘT CÂU CHUYỆN KỂ RẰNG",
    paragraphs: [
      "Có một người con gái Huế, học chuyên ngành khách sạn nhưng lại đam mê nấu nướng đặc biệt là những loại bánh mang đậm truyền thống.",
      "Cũng đi làm như bao người khác nhưng tối về cô gieo mình vào đam mê nấu nướng, từ lớp học nấu ăn này đến khóa học làm bánh khác và cuối cùng cô cũng tìm được hướng đi trên chính niềm đam mê, trên loại bánh mà mỗi năm chỉ xuất hiện đúng một dịp, loại bánh “đoàn viên sum vầy – bánh trung thu”.",
      "Những ngày đầu không có người giúp đỡ cô phải tự mình đi khắp các ngõ ngách chợ quê tìm từng quả trứng làm nhân bánh đến lựa từng quả chanh, miếng thơm để cô đọng nước đường sao cho thơm và sạch.",
      "Sau nhiều lần thử nghiệm, cô cũng có được chiếc bánh như ý để chia sẻ cùng gia đình, cô nhớ rõ như in không khí của ngày hôm đó, nó thật ấm áp, gia đình tất thảy quây quần bên mâm bánh cười cười nói nói.",
      "Chính vì niềm vui khó lòng mua được đó mà Mona Cake ra đời với tâm nguyện nhân đôi niềm vui sum vầy đến nhà nhà người người!"
    ]
  },
  philosophyBlocks: {
    title: "Cái tên Mona Cake chúng tôi đặt hết tấm lòng mình vào đấy",
    subtitle:
      "Thiên là trời, lương trong lương thiện, thiên lương nhằm hướng đến giá trị cao nhất trong cuộc sống",
    pillarsLabel: "CHÂN – THIỆN – MỸ",
    items: [
      {
        id: "val-1",
        title: "Chân thành mang tết yêu thương",
        description:
          "Hơn ai hết xuất thân từ vùng quê, từ nhỏ tôi đã yêu đã hiểu đã quý trọng cái không khí tết trung thu, đã biết nó không phải chỉ là một dịp lễ hội một năm có 1 lần mà là dịp người ta nhận được gì và cho đi những gì...",
        fullStory:
          "Mỗi chiếc bánh được nắn nót bằng tất cả sự chân thành, gửi gắm lời chúc bình an và đoàn viên trọn vẹn đến cha mẹ, người thân và đối tác trân quý.",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        imagePosition: "left"
      },
      {
        id: "val-2",
        title: "Thiện tâm thiện ý sức khỏe người dùng",
        description:
          "Làm trong ngành nhà hàng khách sạn nên từ lâu tôi đã rất kĩ tính với chất lượng món ăn, khi tới học nấu ăn tôi cũng đòi hỏi rất khắt khe ở mình, có thể tạm chấp nhận nấu chưa ngon nhưng tuyệt nhiên không cho mình cẩu thả về chất lượng...",
        fullStory:
          "Tuyệt đối không dùng chất bảo quản, không dùng nước tro tàu công nghiệp, giảm ngọt tinh tế với đường phèn và mật ong tự nhiên tốt cho sức khỏe.",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        imagePosition: "right"
      },
      {
        id: "val-3",
        title: "Mỹ miều hộp bánh đài trang trong ngoài",
        description:
          "Tôi chủ bánh MonaCake với kinh nghiệm 5 năm trong ngành nhà hàng khách sạn tự tin rằng mình luôn đưa ra những sản phẩm hoàn hảo từ nội dung đến hình thức...",
        fullStory:
          "Hộp bánh Phú Quý ép kim vàng sang trọng trên nền giấy mỹ thuật đỏ trầm, xứng tầm món quà biếu tặng ngoại giao đẳng cấp cho doanh nghiệp.",
        image:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
        imagePosition: "left"
      }
    ]
  },
  commitments: [
    "Bánh được làm 100% không hóa chất bảo quản",
    "Độ mềm dẻo của vỏ bánh hoàn toàn không dùng nước tro",
    "Sử dụng máy hút chân không nhằm tăng thời gian sử dụng bánh",
    "Bánh được làm theo từng mẻ đặt hàng, tuyệt đối không có bánh cũ, bánh qua ngày",
    "Hoàn tiền 100% nếu phát hiện bánh lỗi khi mua về"
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Chị Lan Anh ( Nhân viên kinh doanh – Quận 3, TP.HCM )",
      content:
        "Nhà mình thì ai cũng thích ăn bánh trung thu nhưng giờ thấy báo đài nói thật cái này đến cái khác về vệ sinh thực phẩm cũng ngán lắm. Hôm được chị trong công ty đem cái bánh lên cho ăn, chị nói bánh Mona Cake này gần nhà chị làm nên sạch sẽ lắm, làm bằng tay từ sơ chế đến chế biến. Vậy là từ đó mình cũng đặt mua tại Mona Cake luôn vừa ngon vừa đảm bảo vệ sinh."
    }
  ],
  policies: {
    title: "Chính sách mới dành cho khách hàng",
    subtitle: "Mona Cake mùa Đoàn Viên",
    items: [
      "Đặt hàng tối thiểu trước 1 ngày",
      "Đặt 10 hộp và trước 10 ngày Tặng 1 hộp dùng thử",
      "Hoàn tiền 100% nếu phát hiện hóa chất trong sản phẩm Bánh trung thu sạch",
      "Miễn phí giao hàng trong khu vực nội thành Hồ Chí Minh"
    ]
  }
};
