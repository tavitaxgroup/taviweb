import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat3ServiceTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isFengShui?: boolean;
}

export interface NoiThat3FeaturedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  concept: string;
  image: string;
}

export interface NoiThat3FengShuiPillar {
  id: string;
  element: string;
  title: string;
  description: string;
}

export interface NoiThat3TemplateData extends ClonedTemplateBaseData {
  serviceTiles: NoiThat3ServiceTile[];
  signatureProjects: NoiThat3FeaturedProject[];
  fengShuiPillars: NoiThat3FengShuiPillar[];
}

export const noiThat3DefaultData: NoiThat3TemplateData = {
  business: {
    name: "MONA DESIGN STUDIO",
    logo: "",
    phone: ["0902 777 999", "028 3899 7799"],
    email: ["studio@monadesign.vn", "phongthuy@monadesign.vn"],
    address: "42 Thảo Điền, TP. Thủ Đức, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 4.95,
    reviewCount: 218,
    experienceYears: "14+",
    aboutTitle: "DỰ ÁN TIÊU BIỂU",
    aboutText: [
      "Người Tây Ban Nha có câu “Nhà của tôi cũng là nhà của bạn”, còn với MONA DESIGN STUDIO, mọi dự án mà chúng tôi thực hiện đều dựa trên nguyên tắc làm hài lòng mọi mong muốn sâu sắc nhất của gia chủ — dù là biệt thự nghỉ dưỡng, penthouse hay văn phòng, nhà hàng kinh doanh, mọi người đều cảm nhận được sự gần gũi, tinh tế như đang ở chính tổ ấm của mình.",
      "Sự kết hợp hài hòa giữa ngôn ngữ thiết kế đương đại, vật liệu thủ công tuyển chọn và khoa học Phong Thủy Huyền Không giúp mỗi không gian luôn tràn đầy sinh khí, thịnh vượng và bình an."
    ]
  },
  hero: {
    eyebrow: "CONTEMPORARY INTERIOR & FENG SHUI STUDIO",
    title: "Kiến Tạo Không Gian Sống Đương Đại & Phong Thủy Hài Hòa",
    subtitle:
      "Nơi nghệ thuật sắp đặt ánh sáng, chất liệu gỗ tự nhiên ấm áp và chuẩn mực phong thủy phương Đông hội tụ trong từng đường nét kiến trúc.",
    ctaText: "KHÁM PHÁ DỰ ÁN",
    ctaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
  },
  serviceTiles: [
    {
      id: "tile-1",
      title: "DỊCH VỤ TƯ VẤN THIẾT KẾ",
      subtitle: "ARCHITECTURAL & INTERIOR CONSULTING",
      description:
        "Định hình phong cách cá nhân hóa, quy hoạch mặt bằng tối ưu công năng và hoàn thiện bộ hồ sơ phối cảnh 3D chuyên sâu.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "tile-2",
      title: "DỊCH VỤ THI CÔNG NỘI THẤT",
      subtitle: "BESPOKE CRAFTSMANSHIP & FIT-OUT",
      description:
        "Chế tác đồ nội thất may đo tại xưởng riêng với độ hoàn thiện tinh xảo, cam kết tiến độ và chất lượng vật liệu chuẩn quốc tế.",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "tile-3",
      title: "DỊCH VỤ THIẾT KẾ VÀ THI CÔNG NỘI THẤT",
      subtitle: "TURNKEY DESIGN & BUILD SOLUTION",
      description:
        "Giải pháp chìa khóa trao tay đồng bộ từ ý tưởng kiến trúc ban đầu đến thi công hoàn thiện trọn gói không phát sinh chi phí.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "tile-4",
      title: "TƯ VẤN PHONG THỦY KIẾN TRÚC",
      subtitle: "FENG SHUI HARMONY & ENERGY FLOW",
      description:
        "Ứng dụng khoa học phong thủy bát trạch và huyền không vào bố cục cổng, cửa chính, phòng khách, bếp và phòng ngủ theo bản mệnh gia chủ.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      isFengShui: true
    }
  ],
  signatureProjects: [
    {
      id: "sig-1",
      title: "Biệt Thự Hồ Bơi Trong Nhà Thảo Điền",
      category: "BIỆT THỰ NGHỈ DƯỠNG",
      location: "42 Thảo Điền, TP. Thủ Đức, TP.HCM",
      area: "850 m²",
      year: "2025",
      concept:
        "Thiết kế không gian thông tầng khoáng đạt với hồ bơi nước mặn trong nhà, cầu thang gỗ treo kết hợp đá tự nhiên ốp vách tạo dòng chảy thủy khí vượng tài.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "sig-2",
      title: "Penthouse Sky Villa Landmark",
      category: "PENTHOUSE THÔNG TẦNG",
      location: "Quận Bình Thạnh, TP.HCM",
      area: "540 m²",
      year: "2025",
      concept:
        "Bản giao hưởng của gỗ óc chó Bắc Mỹ, da bò thuộc thủ công và hệ đèn thả đồng nguyên chất mang lại cảm giác tĩnh tại giữa tầng không.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "sig-3",
      title: "Indochine Fine Lounge & Tea House",
      category: "NHÀ HÀNG & LOUNGE",
      location: "Quận 1, TP.HCM",
      area: "620 m²",
      year: "2024",
      concept:
        "Không gian thưởng trà và ẩm thực mang âm hưởng Đông Dương đương đại với lồng đèn lụa thủ công, gạch bông cổ điển và gỗ lim trầm mặc.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "sig-4",
      title: "Dinh Thự Ven Sông Saigon Pearl",
      category: "DINH THỰ ĐƠN LẬP",
      location: "Quận Bình Thạnh, TP.HCM",
      area: "1.100 m²",
      year: "2025",
      concept:
        "Quy hoạch tổng thể sân vườn cá Koi, sảnh đón minh đường rộng mở và phòng khách đại sảnh chuẩn tỷ lệ phong thủy vượng khí.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "sig-5",
      title: "Không Gian Điều Hành Zen Executive Office",
      category: "VĂN PHÒNG HẠNG A",
      location: "Khu Đô Thị Thủ Thiêm, TP.HCM",
      area: "720 m²",
      year: "2024",
      concept:
        "Thiết kế văn phòng chủ tịch và phòng họp chiến lược theo triết lý Thiền (Zen) kết hợp bố cục tọa sơn hướng thủy vững chãi.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "sig-6",
      title: "Villa Nghỉ Dưỡng Đồi Thông Sanctuary",
      category: "RESORT VILLA",
      location: "Đà Lạt, Lâm Đồng",
      area: "900 m²",
      year: "2025",
      concept:
        "Biệt thự nghỉ dưỡng sử dụng đá chẻ tự nhiên, gỗ thông đỏ và lò sưởi trung tâm mang lại hơi ấm sum vầy cho ba thế hệ.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
    }
  ],
  fengShuiPillars: [
    {
      id: "fs-1",
      element: "MINH ĐƯỜNG & KHÍ ĐẠO",
      title: "Tư vấn phong thủy theo mệnh gia chủ",
      description:
        "Tính toán hướng nạp khí, vị trí cửa chính, bàn thờ, bếp nấu và giường ngủ Master hợp cung mệnh, kích hoạt tài lộc và sức khỏe."
    },
    {
      id: "fs-2",
      element: "NGŨ HÀNH VẬT LIỆU",
      title: "Tuyển chọn chất liệu & Bảng màu bản mệnh",
      description:
        "Cân bằng Kim – Mộc – Thủy – Hỏa – Thổ thông qua tỷ lệ gỗ tự nhiên, đá cẩm thạch, kim loại đồng và ánh sáng tự nhiên."
    },
    {
      id: "fs-3",
      element: "CHÌA KHÓA TRAO TAY",
      title: "Thi công chuẩn xác từng kích thước Lỗ Ban",
      description:
        "Mọi kích thước thông thủy cửa, bàn đảo bếp, bàn làm việc và tủ thờ đều được kiểm soát nghiêm ngặt theo thước Lỗ Ban chuẩn."
    }
  ],
  clients: [
    { id: "c-1", name: "TOYOTA VIETNAM" },
    { id: "c-2", name: "ACC CORPORATION" },
    { id: "c-3", name: "KIMBERLY-CLARK" },
    { id: "c-4", name: "CARLSBERG GROUP" },
    { id: "c-5", name: "FPT CORPORATION" },
    { id: "c-6", name: "ROCKWELL AUTOMATION" },
    { id: "c-7", name: "ICONIC DESIGN" },
    { id: "c-8", name: "GOODYEAR LUXURY" },
    { id: "c-9", name: "CANON ASIA" },
    { id: "c-10", name: "PRUDENTIAL" },
    { id: "c-11", name: "DRAGON CAPITAL" },
    { id: "c-12", name: "NOVALAND GROUP" }
  ],
  testimonials: [
    {
      id: "t-1",
      author: "Ông Trần Minh Đức",
      role: "Chủ đầu tư Biệt thự Thảo Điền",
      rating: 5,
      content:
        "“Điều tôi tâm đắc nhất ở MONA DESIGN STUDIO là sự kết hợp nhuần nhuyễn giữa thẩm mỹ đương đại sang trọng và bố cục phong thủy cực kỳ khoa học, không hề nặng nề mà vô cùng tinh tế.”"
    },
    {
      id: "t-2",
      author: "Bà Nguyễn Lan Phương",
      role: "Chủ sở hữu Penthouse Landmark",
      rating: 5,
      content:
        "“Từ khâu chọn vân gỗ óc chó đến hệ thống ánh sáng chiều tối đều được các kiến trúc sư chăm chút tỉ mỉ. Bước vào nhà là cảm nhận ngay sự ấm cúng và thư thái.”"
    },
    {
      id: "t-3",
      author: "Ông Hoàng Quốc Việt",
      role: "CEO Dragon Capital Lounge",
      rating: 5,
      content:
        "“Tiến độ thi công chuẩn xác, đồ gỗ may đo sắc sảo đến từng góc cạnh. Đối tác quốc tế đến văn phòng đều ấn tượng mạnh với không gian tiếp đón của chúng tôi.”"
    }
  ]
};

export default noiThat3DefaultData;
