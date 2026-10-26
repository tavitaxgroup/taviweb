import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat21Product {
  id: string;
  section: "sofa" | "tvstand" | "dining";
  category: string;
  name: string;
  price: string;
  hasBagBadge?: boolean;
  image: string;
  description: string;
}

export interface NoiThat21Data extends ClonedTemplateBaseData {
  products: NoiThat21Product[];
  perks: Array<{
    id: string;
    icon: "truck" | "gift" | "piggy";
    title: string;
    subtitle: string;
  }>;
}

export const noiThat21DefaultData: NoiThat21Data = {
  business: {
    name: "Mona Chair & Sofa",
    phone: ["0126 922 0162", "0909 666 162"],
    email: ["contact@monachair.vn", "showroom@monachair.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 1180,
    aboutTitle: "Showroom Bàn Ghế & Sofa Nghệ Thuật",
    aboutText: [
      "Mona Chair & Sofa tự hào mang đến bộ sưu tập ghế sofa da Ý, kệ tivi gỗ quý và bàn ghế phòng ăn chế tác thủ công tinh xảo cho không gian sống sang trọng."
    ],
  },
  hero: {
    eyebrow: "BỘ SƯU TẬP PHÒNG KHÁCH ĐƯƠNG ĐẠI",
    title: "SOFA SET WITH LOUNGER",
    subtitle: "Khẳng định phong cách sống tinh tế qua từng lựa chọn nội thất của bạn",
    ctaText: "MUA NGAY",
    ctaLink: "#ban-ghe-sofa",
    backgroundImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85",
  },
  products: [
    // BÀN GHẾ SOFA (8 items)
    {
      id: "nt21-sf1",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa da bò Ý SF108",
      price: "13,574,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80",
      description:
        "Sofa văng 3 chỗ bọc da bò thật màu đen sang trọng, đệm mút D40 đàn hồi cao.",
    },
    {
      id: "nt21-sf2",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa góc L kem sáng SF32",
      price: "15,240,000 ₫",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế góc L rộng rãi bọc vải nỉ Bỉ chống bám bụi và thấm nước.",
    },
    {
      id: "nt21-sf3",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa tay ốp gỗ óc chó SF33",
      price: "16,752,000 ₫",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
      description:
        "Sự kết hợp hoàn hảo giữa nệm da kem và tay vịn gỗ tự nhiên.",
    },
    {
      id: "nt21-sf4",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa tân cổ điển SF80",
      price: "14,250,000 ₫",
      hasBagBadge: true,
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
      description:
        "Tay cuộn mềm mại kèm bộ gối tựa họa tiết trang nhã.",
    },
    {
      id: "nt21-sf5",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa băng đôi nhỏ gọn SF31",
      price: "6,528,000 ₫",
      image:
        "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=600&q=80",
      description:
        "Kích thước 1m6 lý tưởng cho phòng khách căn hộ Studio hoặc phòng đọc sách.",
    },
    {
      id: "nt21-sf6",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa hoàng gia kem sữa SF23",
      price: "16,587,000 ₫",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80",
      description:
        "Khung gỗ sồi Nga tẩm sấy chắc chắn, bảo hành khung sườn 10 năm.",
    },
    {
      id: "nt21-sf7",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa đôi hiện đại SF02",
      price: "15,968,000 ₫",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      description:
        "Tựa lưng gật gù điều chỉnh 5 cấp độ nâng đỡ cổ vai gáy.",
    },
    {
      id: "nt21-sf8",
      section: "sofa",
      category: "BÀN GHẾ SOFA",
      name: "Ghế sofa nhung xanh Navy SF01",
      price: "20,896,000 ₫",
      hasBagBadge: true,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80",
      description:
        "Điểm nhấn sang trọng nổi bật cho phòng khách biệtự và Penthouse.",
    },

    // KỆ TIVI (6 items)
    {
      id: "nt21-tv1",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ tivi phòng khách liền giá sách KTV96",
      price: "4,759,000 ₫",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
      description: "Kệ tivi kết hợp kệ trang trí đa năng tiết kiệm diện tích.",
    },
    {
      id: "nt21-tv2",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ tivi gỗ tự nhiên KTV91",
      price: "5,050,000 ₫",
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
      description: "Màu gỗ sồi sáng tự nhiên hài hòa với mọi không gian phòng khách.",
    },
    {
      id: "nt21-tv3",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ tivi rút thông minh cao cấp",
      price: "4,550,000 ₫",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      description: "Thay đổi chiều dài linh hoạt từ 1m8 đến 2m4 theo diện tích tường.",
    },
    {
      id: "nt21-tv4",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ Tivi Gỗ Xoan Đào nguyên tấm",
      price: "5,624,000 ₫",
      image:
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80",
      description: "Gỗ xoan đào tự nhiên chạm khắc tinh tế, độ bền vượt thời gian.",
    },
    {
      id: "nt21-tv5",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ Tivi Gỗ Đinh Hương cao cấp",
      price: "8,952,300 ₫",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
      description: "Vân gỗ đinh hương sắc nét tỏa hương thơm tự nhiên nhẹ nhàng.",
    },
    {
      id: "nt21-tv6",
      section: "tvstand",
      category: "KỆ TIVI",
      name: "Kệ Tivi Gỗ Cẩm Lai chạm tứ quý",
      price: "7,569,000 ₫",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
      description: "Chế tác mộng gỗ truyền thống bởi nghệ nhân lành nghề.",
    },

    // BÀN GHẾ ĂN (8 items)
    {
      id: "nt21-dn1",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế mẫu 2 tầng 1m6 – BAS215",
      price: "7,568,000 ₫",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
      description: "Thiết kế 2 tầng mặt kính cường lực tiện lợi để đồ dưới gầm bàn.",
    },
    {
      id: "nt21-dn2",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn tròn xoay gỗ Xoan Đào 6 ghế chân cao 1m2 – BAX208",
      price: "8,672,000 ₫",
      image:
        "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=600&q=80",
      description: "Bàn tròn mâm xoay gỗ xoan đào đỏ ấm cúng.",
    },
    {
      id: "nt21-dn3",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Xoan Đào 6 ghế",
      price: "6,923,800 ₫",
      image:
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80",
      description: "Kiểu dáng chữ nhật truyền thống lịch sự cho phòng ăn gia đình.",
    },
    {
      id: "nt21-dn4",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Sồi Nga Oval",
      price: "7,856,900 ₫",
      hasBagBadge: true,
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
      description: "Mặt bàn bo tròn Oval mềm mại an toàn cho gia đình có trẻ nhỏ.",
    },
    {
      id: "nt21-dn5",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế vát góc bọc nệm",
      price: "7,459,000 ₫",
      image:
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",
      description: "Tặng kèm 2 đôn gỗ nhỏ tiện dụng khi nhà có thêm khách.",
    },
    {
      id: "nt21-dn6",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Sồi trắng tự nhiên",
      price: "6,582,000 ₫",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
      description: "Màu gỗ sồi nguyên bản trẻ trung, hiện đại.",
    },
    {
      id: "nt21-dn7",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Cao Su xuất khẩu",
      price: "5,471,000 ₫",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
      description: "Mặt ghế bọc da Simili cao cấp dễ dàng lau chùi.",
    },
    {
      id: "nt21-dn8",
      section: "dining",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế phun màu mẫu Oval 1m6 – BAS531",
      price: "8,642,200 ₫",
      image:
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80",
      description: "Sơn màu giả óc chó trầm sang trọng, chống trầy xước.",
    },
  ],
  perks: [
    {
      id: "pk-1",
      icon: "truck",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Vận chuyển & lắp đặt tận nơi miễn phí nội thành",
    },
    {
      id: "pk-2",
      icon: "gift",
      title: "Quà Tặng Đặc Biệt",
      subtitle: "Tặng bàn trà hoặc bộ gối tựa lưng cao cấp",
    },
    {
      id: "pk-3",
      icon: "piggy",
      title: "Tiết Kiệm Khi Mua Ở Mona",
      subtitle: "Cam kết giá xưởng cạnh tranh nhất thị trường",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "CÁCH PHỐI MÀU GHẾ SOFA VÀ THẢM TRẢI SÀN CHO PHÒNG KHÁCH ẤM CÚNG",
      date: "08 Th3",
      category: "PHÒNG KHÁCH",
      excerpt:
        "Sự đồng điệu giữa chất liệu da hoặc nỉ của bộ ghế sofa cùng ánh sáng vàng ấm giúp phòng khách luôn sang trọng và gần gũi [...]",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-2",
      title: "XU HƯỚNG SOFA GÓC CHỮ L TỐI GIẢN CHO CĂN HỘ CHUNG CƯ HIỆN ĐẠI",
      date: "08 Th3",
      category: "XU HƯỚNG",
      excerpt:
        "Khám phá các mẫu sofa góc L kích thước 2m6 x 1m6 giúp tận dụng tối đa góc phòng khách và tạo chỗ nằm thư giãn êm ái [...]",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-3",
      title: "BÍ QUYẾT BẢO DƯỠNG KỆ TIVI VÀ BÀN GHẾ GỖ TỰ NHIÊN LUÔN BÓNG ĐẸP",
      date: "08 Th3",
      category: "MẸO HAY",
      excerpt:
        "Hướng dẫn vệ sinh bề mặt gỗ sồi, gỗ xoan đào và da thật đúng cách để nội thất giữ được vẻ đẹp nguyên bản hàng chục năm [...]",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
