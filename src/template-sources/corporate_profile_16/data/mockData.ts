import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile16Data extends ClonedTemplateBaseData {
  headerHighlights: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
  }>;
  aboutBullets: string[];
  aboutVisual: string;
  trustedSites: string[];
  orderSteps: Array<{
    step: string;
    title: string;
    icon: string;
  }>;
  reasons: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const corporateProfile16DefaultData: CorporateProfile16Data = {
  business: {
    name: "GlobalImport",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["order@globalimport.vn", "cskh@globalimport.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 590,
    aboutTitle: "Mua Hàng Châu Âu – Ship Về Việt Nam",
    aboutText: [
      "Với kinh nghiệm nhiều năm trong lĩnh vực vận chuyển hàng hóa quốc tế, GlobalImport đã được hàng chục nghìn khách hàng và doanh nghiệp lựa chọn để mua hộ hàng trên Amazon, Ebay cũng như hầu hết website bán hàng uy tín tại Đức và Châu Âu.",
      "Chúng tôi mong muốn kết nối trực tiếp nhà cung cấp tại Đức và người mua hàng tại Việt Nam, giúp bạn giải quyết những khó khăn khi thanh toán quốc tế cũng như thủ tục thông quan vận chuyển hàng từ Châu Âu về Việt Nam."
    ],
  },
  hero: {
    eyebrow: "MUA SẮM CHÂU ÂU",
    title: "GIÁ VIỆT NAM",
    subtitle: "DỊCH VỤ MUA HỘ VÀ VẬN CHUYỂN VỀ VIỆT NAM",
    ctaText: "DỊCH VỤ",
    ctaLink: "#dich-vu",
    secondaryCtaText: "SẢN PHẨM",
    secondaryCtaLink: "#huong-dan",
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
  },
  headerHighlights: [
    {
      id: "hh-1",
      title: "Vận chuyển nhanh chóng",
      subtitle: "Thời gian vận chuyển từ 5 - 10 ngày",
      icon: "plane",
    },
    {
      id: "hh-2",
      title: "Bảo hiểm hàng hóa",
      subtitle: "Bảo hiểm 100% giá trị hàng hóa",
      icon: "thumbsup",
    },
    {
      id: "hh-3",
      title: "Hỗ trợ tối đa",
      subtitle: "Hỗ trợ bảo hành, đổi trả hàng lỗi, tư vấn seller uy tín",
      icon: "user",
    },
  ],
  aboutBullets: [
    "Thời gian vận chuyển nhanh chóng chỉ trong vòng 10 - 20 ngày.",
    "Quy trình vận chuyển nghiêm ngặt giúp hạn chế tối đa tình trạng hư hỏng, thất lạc hàng hóa.",
    "Chính sách chiết khấu, giảm giá cước hấp dẫn cho Quý khách hàng có nhu cầu nhập hàng thường xuyên.",
    "Thanh toán bằng nhiều hình thức linh hoạt: Chuyển khoản, đặt cọc tại văn phòng hoặc tại nhà.",
  ],
  aboutVisual:
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=85",
  services: [
    {
      id: "sv-1",
      title: "Dịch vụ ship hàng Đức",
      description:
        "Vận chuyển đường hàng không chuyên tuyến Frankfurt – TP.HCM / Hà Nội an toàn, lịch bay cố định mỗi tuần.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sv-2",
      title: "Dịch vụ mua hộ hàng Đức",
      description:
        "Đặt mua hộ chính hãng từ các sàn thương mại điện tử lớn nhất CHLB Đức với phí dịch vụ cạnh tranh nhất.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sv-3",
      title: "Mua hàng trên Amazon Đức",
      description:
        "Tư vấn săn sale, đấu giá và kiểm định độ uy tín của Seller trên Amazon.de trước khi thanh toán đơn hàng.",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    },
  ],
  trustedSites: [
    "https://www.amazon.de/",
    "https://www.otto.de/",
    "https://www.dm.de/",
    "https://www.medpex.de/",
    "https://www.ebay.de/",
  ],
  orderSteps: [
    { step: "1", title: "Gửi yêu cầu báo giá", icon: "mail" },
    { step: "2", title: "Xác nhận đơn hàng và đặt cọc", icon: "card" },
    { step: "3", title: "Mua hàng, chuyển hàng về Việt Nam", icon: "plane" },
    { step: "4", title: "Nhận hàng và thanh toán tại nhà", icon: "box" },
  ],
  reasons: [
    {
      id: "rs-1",
      title: "Bảo hiểm hàng hóa",
      description:
        "Mức phí bảo hiểm chỉ 5% giá trị lô hàng. Giúp bạn yên tâm, tiết kiệm hơn khi gửi hàng tại Mua sắm Châu Âu.",
      icon: "gift",
    },
    {
      id: "rs-2",
      title: "Bồi thường 100%",
      description:
        "Khi đặt cọc, nếu hàng hóa không đến tay bạn. Chúng tôi hoàn trả 100% tiền cọc & món quà thay lời xin lỗi.",
      icon: "refresh",
    },
    {
      id: "rs-3",
      title: "Giá cước tiết kiệm",
      description:
        "Chúng tôi luôn cố gắng loại bỏ những khâu trung gian để mang đến sản phẩm có chi phí hợp lý nhất.",
      icon: "dollar",
    },
    {
      id: "rs-4",
      title: "Hỗ trợ bảo hành",
      description:
        "Miễn phí công bid, make offer tại Ebay, Audiogon. Bạn tiết kiệm chi phí để sở hữu sản phẩm ưng ý.",
      icon: "wrench",
    },
    {
      id: "rs-5",
      title: "Giao hàng tận nơi",
      description:
        "Chúng tôi cung cấp các dịch vụ giao hàng tận nhà trong ngày. Giúp bạn tiết kiệm thời gian hơn.",
      icon: "truck",
    },
    {
      id: "rs-6",
      title: "Theo dõi xuyên suốt",
      description:
        "Bạn luôn chủ động cập nhật toàn bộ thông tin, lịch sử, của đơn hàng từ lúc đặt cọc đến khi bạn nhận hàng.",
      icon: "map",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "Kinh nghiệm khi mua máy hút sữa trên Amazon.de chính hãng",
      date: "26 Tháng Mười Một, 2026",
      excerpt:
        "Kinh nghiệm khi mua máy hút sữa trên Amazon.de: Amazon.de được biết đến như là kho hàng mẹ và bé đạt chuẩn Châu Âu...",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Mua hàng trên Amazon: kinh nghiệm “vàng” cho các tín đồ shopping!",
      date: "26 Tháng Mười Một, 2026",
      excerpt:
        "Mua hàng trên Amazon.de: kinh nghiệm “vàng” cho các tín đồ shopping! Amazon.de là một trong những sàn TMĐT uy tín nhất...",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Mẹo phân biệt nước hoa thật và Fake khi đặt hàng quốc tế",
      date: "26 Tháng Mười Một, 2026",
      excerpt:
        "Nhu cầu mua nước hoa chính hãng Châu Âu của khách hàng Việt Nam hiện nay là khá cao, cùng tìm hiểu cách kiểm tra mã vạch...",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = corporateProfile16DefaultData;
export default corporateProfile16DefaultData;
