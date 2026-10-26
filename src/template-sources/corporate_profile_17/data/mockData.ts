import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Corp17MissionItem {
  id: string;
  numberTitle: string;
  description: string;
  iconType: "ufo" | "radar" | "satellite";
}

export interface Corp17BlogItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  badgeText: string;
  image: string;
  fullContent: string;
}

export interface Corp17Data extends ClonedTemplateBaseData {
  missionsSection: {
    eyebrow: string;
    title: string;
    items: Corp17MissionItem[];
  };
  aboutDetailSection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    illustrationImage: string;
  };
  reviewsSection: {
    eyebrow: string;
    title: string;
  };
  blogSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    posts: Corp17BlogItem[];
  };
}

export const corporateProfile17DefaultData: Corp17Data = {
  business: {
    name: "Mona-web",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["demonhunter@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 5.0,
    reviewCount: 480,
    aboutTitle:
      "Chúng tôi có một đội ngũ chuyên nghiệp trên nhiều lĩnh vực như thiết kế, marketing, lập trình web và lập trình ứng dụng.",
    aboutText: [
      "Chúng tôi cung cấp giải pháp hạ tầng đám mây (Cloud Server), đăng ký tên miền quốc tế & Việt Nam, lưu trữ Hosting tốc độ cao NVMe, chứng chỉ bảo mật SSL và thiết kế – lập trình hệ thống website doanh nghiệp theo tiêu chuẩn quốc tế.",
      "Mỗi dự án số hóa đều được đội ngũ kỹ sư hệ thống, chuyên gia UI/UX và lập trình viên giàu kinh nghiệm tối ưu hóa toàn diện về tốc độ tải trang, kiến trúc bảo mật đa tầng và khả năng mở rộng linh hoạt cho doanh nghiệp."
    ],
    highlights: [
      "Hạ tầng Cloud Hosting & Server chuẩn Tier-3 Uptime 99.99%",
      "Chứng chỉ bảo mật SSL quốc tế và tường lửa chống DDoS tự động",
      "Thiết kế website & ứng dụng di động chuẩn SEO, tối ưu chuyển đổi"
    ]
  },
  hero: {
    eyebrow: "GIẢI PHÁP HẠ TẦNG CLOUD, TÊN MIỀN & THIẾT KẾ WEB",
    subtitle: "Trong từng sản phẩm",
    title: "CHUYÊN NGHIỆP",
    description:
      "Đồng hành cùng doanh nghiệp xây dựng nền tảng số vững chắc với hệ sinh thái Tên miền, Cloud Hosting tốc độ cao, Chứng chỉ bảo mật SSL và Thiết kế Website chuyên nghiệp.",
    ctaText: "VỀ CHÚNG TÔI",
    ctaLink: "#about",
    secondaryCtaText: "LIÊN HỆ",
    secondaryCtaLink: "#footer-contact",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  missionsSection: {
    eyebrow: "Nhiệm vụ",
    title: "Những công việc mà chúng tôi làm",
    items: [
      {
        id: "ms-1",
        numberTitle: "01 – Tìm hiểu thị trường",
        description:
          "Khảo sát nhu cầu chuyển đổi số, phân tích hành vi người dùng mục tiêu và đề xuất cấu trúc tên miền, hạ tầng máy chủ tối ưu cho doanh nghiệp.",
        iconType: "ufo"
      },
      {
        id: "ms-2",
        numberTitle: "02 – Phân tích tình hình",
        description:
          "Đánh giá hiệu năng hệ thống, hoạch định kiến trúc UI/UX, cơ sở dữ liệu và giải pháp bảo mật chứng chỉ SSL phù hợp với quy mô tăng trưởng.",
        iconType: "radar"
      },
      {
        id: "ms-3",
        numberTitle: "03 – Vận hành sản phẩm",
        description:
          "Triển khai hệ thống lên hạ tầng Cloud tốc độ cao, giám sát Uptime 24/7, sao lưu dữ liệu định kỳ và đồng hành kỹ thuật trọn đời.",
        iconType: "satellite"
      }
    ]
  },
  aboutDetailSection: {
    eyebrow: "Về chúng tôi",
    title:
      "Chúng tôi có một đội ngũ chuyên nghiệp trên nhiều lĩnh vực như thiết kế, marketing, lập trình web và lập trình ứng dụng.",
    paragraphs: [
      "“Với hơn 10 năm kinh nghiệm vận hành hạ tầng kỹ thuật số, chúng tôi hiểu rằng một website chuyên nghiệp không chỉ cần giao diện thẩm mỹ mà còn đòi hỏi tốc độ phản hồi tính bằng mili-giây và độ ổn định tuyệt đối trên mọi thiết bị.”",
      "“Từ khâu tư vấn đăng ký tên miền thương hiệu, cấu hình Cloud Hosting, tích hợp bảo mật SSL cho đến thiết kế bộ nhận diện logo và lập trình web app độc quyền, mọi quy trình đều được chuẩn hóa khép kín.”"
    ],
    illustrationImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
  },
  reviewsSection: {
    eyebrow: "Phản hồi",
    title: "Khách hàng nói về chúng tôi"
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Trần Minh Quân",
      role: "Giám đốc Công nghệ / Facebook",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Hệ thống Cloud Hosting và giao diện website do đội ngũ triển khai hoạt động cực kỳ mượt mà, tốc độ tải trang đạt điểm tối đa trên Google PageSpeed. Dịch vụ hỗ trợ kỹ thuật 24/7 phản hồi gần như tức thì!"
    },
    {
      id: "rev-2",
      author: "Nguyễn Hoàng Nam",
      role: "Nhà sáng lập Chuỗi Bán lẻ / Facebook",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đây là đơn vị thiết kế web và cung cấp tên miền – SSL uy tín nhất mà chúng tôi từng hợp tác. Website hỗ trợ đa ngôn ngữ, quản trị nội dung trực quan và giúp doanh số trực tuyến tăng trưởng vượt bậc."
    }
  ],
  blogSection: {
    eyebrow: "Blog",
    title: "Nơi chia sẻ những thông tin bổ ích",
    description:
      "Cập nhật kiến thức chuyên sâu về quản trị website, lựa chọn nền tảng CMS, tối ưu tốc độ máy chủ Cloud Hosting và bảo mật chứng chỉ SSL cho doanh nghiệp.",
    ctaText: "Xem thêm",
    posts: [
      {
        id: "blg-1",
        title: "Vì sao cần phải sử dụng hệ thống quản trị CMS trong thiết kế website?",
        date: "21 Tháng Tư, 2025",
        badgeText: "CONTENT MANAGEMENT SYSTEM",
        excerpt:
          "Theo ý kiến của nhiều người thì khi xây dựng website doanh nghiệp hiện đại, hệ thống CMS giúp tiết kiệm thời gian vận hành...",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        fullContent:
          "Hệ thống quản trị nội dung (CMS) cho phép doanh nghiệp chủ động cập nhật bài viết, sản phẩm, hình ảnh và tối ưu SEO on-page mà không cần can thiệp vào mã nguồn phức tạp."
      },
      {
        id: "blg-2",
        title: "Top 10 CMS thiết kế website tốt nhất hiện nay",
        date: "21 Tháng Tư, 2025",
        badgeText: "TOP 10 CMS",
        excerpt:
          "Hệ quản trị nội dung – CMS chính là một nền tảng cốt lõi giúp doanh nghiệp vận hành thương mại điện tử và портаl...",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        fullContent:
          "Tổng hợp và đánh giá chi tiết 10 nền tảng CMS phổ biến nhất hiện nay dựa trên tiêu chí bảo mật, tốc độ xử lý, kho tiện ích mở rộng và khả năng tùy biến giao diện."
      },
      {
        id: "blg-3",
        title: "Lựa chọn thiết kế website bằng CMS WordPress, Drupal hay Joomla?",
        date: "21 Tháng Tư, 2025",
        badgeText: "WP VS JOOMLA VS DRUPAL",
        excerpt:
          "Nếu bạn đang muốn xây dựng một thiết kế website chuyên nghiệp, việc so sánh giữa 3 hệ quản trị mã nguồn mở hàng đầu...",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        fullContent:
          "Phân tích ưu nhược điểm của WordPress, Joomla và Drupal để giúp doanh nghiệp lựa chọn đúng kiến trúc nền tảng phù hợp với quy mô dữ liệu và ngân sách đầu tư."
      }
    ]
  }
};
