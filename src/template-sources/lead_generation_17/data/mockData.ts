import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HuyTrongCurriculumItem {
  id: string;
  number: string;
  highlightTitle: string;
  description: string;
  metricsTag: string;
}

export interface HuyTrongFeatureBar {
  id: string;
  title: string;
  description: string;
  badgeIcon: "compass" | "trophy";
}

export interface LeadGeneration17Data extends ClonedTemplateBaseData {
  masBrand: {
    shortName: string;
    tagline: string;
    videoBadge: string;
    topLeadSubtitle: string;
    orangeBannerTitle: string;
    orangeBannerBullets: string[];
    mentorName: string;
    mentorTitle: string;
    mentorImage: string;
    experienceHighlight: string;
    revenueHighlight: string;
    videoPreviewTitle: string;
    videoPreviewImage: string;
  };
  blueFeatureBars: HuyTrongFeatureBar[];
  numberedTakeaways: HuyTrongCurriculumItem[];
  rightStickyCard: {
    headerTitle: string;
    headerSubtitle: string;
    securityText: string;
    subHeaderDarkBar: string;
    buttonText: string;
    incomeGoals: string[];
  };
  caseStudies: Array<{
    id: string;
    studentName: string;
    niche: string;
    monthlyCommission: string;
    story: string;
    avatar: string;
  }>;
}

export const leadGeneration17DefaultData: LeadGeneration17Data = {
  business: {
    name: "MAS — Huy Trọng Academy",
    phone: ["0988 779 668", "1900 636 648"],
    email: ["support@huytrongacademy.vn", "mas@affiliate.vn"],
    address: "Tầng 12, Tòa nhà Viettel Complex, Quận 10, TP. Hồ Chí Minh",
    workingHours: "Hỗ trợ học viên MMO & Affiliate 24/7",
    rating: 4.97,
    reviewCount: 3890,
    aboutTitle: "Chinh Phục Thị Trường MMO Với Nguồn Thu Nhập Thụ Động Bền Vững",
    aboutText: [
      "Huy Trọng Academy (MAS - Make Money & Freedom) là hệ thống đào tạo Affiliate Marketing thực chiến giúp hơn 12.000 học viên xây dựng cỗ máy tạo thu nhập thụ động từ các chiến dịch Global & Việt Nam.",
      "Tất cả kiến thức và kinh nghiệm thực chiến tạo ra hơn 100 TỶ+ doanh số đã được đóng gói thành quy trình cầm tay chỉ việc từ A-Z."
    ],
    experienceYears: "6+"
  },
  hero: {
    eyebrow: "MAS • MAKE MONEY & FREEDOM",
    title: "KHÓA HỌC ĐÀO TẠO KIẾM TIỀN ONLINE AFFILIATE MARKETING",
    subtitle:
      "Chinh phục thị trường MMO với nguồn thu nhập thụ động bền vững — không cần vốn nhập hàng, không cần kho bãi, tự động hóa dòng tiền 24/7.",
    ctaText: "Đăng ký học miễn phí ngay",
    ctaLink: "#dang-ky-mas",
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
  },
  masBrand: {
    shortName: "MAS",
    tagline: "MAKE MONEY & FREEDOM",
    videoBadge: "160+ VIDEOS",
    topLeadSubtitle:
      "Hướng dẫn chi tiết từ cơ bản đến nâng cao giúp bạn chinh phục thị trường Affiliate với nguồn thu nhập cao",
    orangeBannerTitle:
      "XÂY DỰNG HỆ THỐNG BÁN HÀNG TỰ ĐỘNG - KIẾM TIỀN VỚI NGÁCH AFFILIATE TIỀM NĂNG",
    orangeBannerBullets: [
      "Đạt mục tiêu 1.000$ – 3.000$/tháng ngay tại nhà",
      "Chinh phục các dự án Affiliate Quốc Tế & Đông Nam Á hoa hồng tới 40% - 70%",
      "Quy trình triển khai đơn giản, bài bản cho cả người mới bắt đầu"
    ],
    mentorName: "Mentor Huy Trọng",
    mentorTitle: "Founder MAS • Chuyên gia Affiliate Marketing & Tăng Trưởng Doanh Số",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    experienceHighlight: "5+ NĂM KINH NGHIỆM",
    revenueHighlight: "100 TỶ+ doanh số",
    videoPreviewTitle: "TẤT CẢ KIẾN THỨC VÀ KINH NGHIỆM ĐÃ ĐƯỢC GÓI GỌN TRONG KHÓA HỌC NÀY",
    videoPreviewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
  },
  blueFeatureBars: [
    {
      id: "bfb-1",
      title: "Hướng dẫn chi tiết từ A-Z",
      description:
        "Huy Trọng sẽ đồng hành hướng dẫn bạn từng bước từ cách mở tài khoản Network, chọn ngách ít cạnh tranh đến khi phát sinh hoa hồng đầu tiên.",
      badgeIcon: "compass"
    },
    {
      id: "bfb-2",
      title: "Phương pháp tối ưu thông minh hiệu quả",
      description:
        "Đúc kết công thức chạy quảng cáo chuyển đổi & xây dựng hệ thống Free Traffic giúp tiết kiệm 70% thời gian thử sai.",
      badgeIcon: "trophy"
    }
  ],
  numberedTakeaways: [
    {
      id: "nt-01",
      number: "01.",
      highlightTitle:
        "Tiết lộ tiêu chí lựa chọn ngách sản phẩm (Niche) hoa hồng cao và cách thức xây dựng hệ thống bán hàng tự động",
      description:
        "Giúp bạn tránh xa các sản phẩm bão hòa, tập trung vào các ngách phần mềm SaaS, tài chính, sức khỏe & thương mại điện tử có tỷ lệ lặp lại trọn đời.",
      metricsTag: "Hoa hồng 30% - 70%"
    },
    {
      id: "nt-02",
      number: "02.",
      highlightTitle:
        "Cách nghiên cứu từ khóa và phân tích đối thủ cạnh tranh để chiếm lĩnh nguồn khách hàng sẵn sàng mua",
      description:
        "Sử dụng bộ công cụ Spy chuyên sâu để biết chính xác đối thủ đang chạy chiến dịch nào có lãi và nhân bản ngay lập tức.",
      metricsTag: "Tỷ lệ chuyển đổi x3.2"
    },
    {
      id: "nt-03",
      number: "03.",
      highlightTitle:
        "Quy trình tối ưu chiến dịch quảng cáo Google Ads & TikTok Ads với chi phí thấp nhưng mang lại lợi nhuận đột phá",
      description:
        "Cấu trúc tài khoản bền vững, cách viết mẫu quảng cáo thu hút nhấp chuột (CTR cao) và kỹ thuật tránh khóa tài khoản.",
      metricsTag: "ROAS 400% - 800%"
    },
    {
      id: "nt-04",
      number: "04.",
      highlightTitle:
        "Hướng dẫn triển khai đa kênh Free Traffic & xây dựng Landing Page chuyển đổi cao không cần biết lập trình",
      description:
        "Tặng sẵn kho 50+ mẫu Pre-lander & Landing Page chuẩn tâm lý học hành vi giúp giữ chân khách hàng và kích thích thanh toán.",
      metricsTag: "50+ Template tặng kèm"
    },
    {
      id: "nt-05",
      number: "05.",
      highlightTitle:
        "Tư duy quản lý tài chính, đọc chỉ số đo lường (Tracking) và nhân bản hệ thống tạo dòng tiền thụ động 24/7",
      description:
        "Làm chủ quy trình Scale ngân sách an toàn từ 10$/ngày lên 500$/ngày mà vẫn giữ vững biên lợi nhuận ròng.",
      metricsTag: "Thu nhập thụ động 24/7"
    }
  ],
  rightStickyCard: {
    headerTitle: "KHÓA HỌC XÂY DỰNG HỆ THỐNG KIẾM TIỀN VỚI AFFILIATE MIỄN PHÍ",
    headerSubtitle: "Hướng dẫn chi tiết - Cầm tay chỉ việc - Ai cũng làm được!",
    securityText: "100% BẢO MẬT THÔNG TIN HỌC VIÊN",
    subHeaderDarkBar: "ĐĂNG KÝ NHẬN KHOÁ HỌC 160+ VIDEOS MIỄN PHÍ",
    buttonText: "ĐĂNG KÝ HỌC MIỄN PHÍ NGAY",
    incomeGoals: [
      "Mục tiêu 500$ - 1.000$ / tháng (Làm thêm 2h/ngày)",
      "Mục tiêu 1.500$ - 3.000$ / tháng (Chuyên tâm MMO)",
      "Mục tiêu 5.000$+ / tháng (Xây dựng Team Affiliate)",
      "Người mới hoàn toàn muốn tìm hiểu từ con số 0"
    ]
  },
  caseStudies: [
    {
      id: "cs-1",
      studentName: "Anh Đỗ Minh Tuấn",
      niche: "Affiliate Phần Mềm Quốc Tế (Global SaaS)",
      monthlyCommission: "3.450 USD / tháng",
      story:
        "Mình là kỹ sư cơ khí làm giờ hành chính, buổi tối dành 2 tiếng học theo 160+ video của Huy Trọng. Tháng thứ 3 hệ thống Google Ads + Landing Page bắt đầu tự chạy và mang về hơn 85 triệu tiền hoa hồng.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cs-2",
      studentName: "Chị Phạm Thanh Trúc",
      niche: "Affiliate Mỹ Phẩm & Chăm Sóc Sức Khỏe",
      monthlyCommission: "48.500.000đ / tháng",
      story:
        "Điểm mình thích nhất ở MAS Huy Trọng Academy là bài giảng cực kỳ rõ ràng, không lý thuyết suông. Bộ tiêu chí chọn ngách số 01 đã giúp mình tìm đúng sản phẩm win ngay tuần đầu tiên.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cs-3",
      studentName: "Bạn Nguyễn Quốc Bảo",
      niche: "Sinh viên năm 4 • Free Traffic + TikTok Affiliate",
      monthlyCommission: "1.820 USD / tháng",
      story:
        "Xuất phát điểm vốn gần như bằng 0, mình áp dụng học phần số 04 về Free Traffic và Pre-lander mẫu của anh Huy Trọng. Hiện tại mỗi ngày mở dashboard đều thấy đơn nổ đều đặn.",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    }
  ]
};

export default leadGeneration17DefaultData;
