"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { industryCatalog } from "@/lib/templates/templateCatalog";
import { Check, CheckCircle2, Heart, Sparkles, Scissors, Activity, Scale, Home, Construction, Utensils, Brush, GraduationCap, Phone, ChevronDown, ChevronUp, X } from "lucide-react";

const phoneNumber = "0337367643";
const displayPhone = "0337.367.643";

const services = [
  {
    id: "01",
    title: "Website doanh nghiệp",
    tagline: "Hỗ trợ giới thiệu thương hiệu và dự án",
    badge: "Website giới thiệu",
    text: "Hỗ trợ doanh nghiệp trình bày hồ sơ năng lực, danh sách dự án tiêu biểu và tích hợp biểu mẫu tiếp nhận thông tin yêu cầu tự động từ đối tác.",
    metric: "Chuẩn SEO & Tải nhanh",
    deliverables: [
      "Thiết kế giao diện phù hợp với nhận diện thương hiệu",
      "Cấu trúc sơ đồ trang rõ ràng, tối ưu SEO",
      "Tích hợp biểu mẫu thu thập thông tin khách hàng",
      "Tối ưu mã nguồn giúp trang hoạt động ổn định"
    ]
  },
  {
    id: "02",
    title: "Website giới thiệu sản phẩm",
    tagline: "Trình bày danh mục sản phẩm trực quan",
    badge: "Danh mục sản phẩm",
    text: "Hỗ trợ trình bày chi tiết sản phẩm, tích hợp bộ lọc tìm kiếm sản phẩm và các nút liên hệ trực tiếp qua Zalo/Hotline hỗ trợ khách hàng nhanh.",
    metric: "Giao diện thân thiện di động",
    deliverables: [
      "Danh mục phân loại sản phẩm rõ ràng, dễ tra cứu",
      "Trang chi tiết sản phẩm hiển thị đầy đủ thông số",
      "Tích hợp các nút liên hệ nhanh (Zalo, Hotline)",
      "Hệ quản trị sản phẩm đơn giản, dễ dàng cập nhật"
    ]
  },
  {
    id: "03",
    title: "Landing page quảng cáo",
    tagline: "Tập trung giới thiệu một sản phẩm, dịch vụ",
    badge: "Landing Page",
    text: "Trang đơn tối ưu hiển thị thông tin về một sản phẩm hoặc chương trình cụ thể, tích hợp form đăng ký nhận ưu đãi và cài đặt sẵn mã đo lường quảng cáo.",
    metric: "Thời gian hoàn thành ngắn",
    deliverables: [
      "Bố cục tinh gọn, tập trung giới thiệu thông tin dịch vụ",
      "Nút kêu gọi hành động (CTA) rõ ràng, trực quan",
      "Tích hợp sẵn các công cụ đo lường chiến dịch",
      "Tương thích hiển thị tốt trên các thiết bị di động"
    ]
  },
  {
    id: "04",
    title: "Bảo trì và nâng cấp",
    tagline: "Chăm sóc và vận hành website ổn định",
    badge: "Bảo trì định kỳ",
    text: "Hỗ trợ doanh nghiệp cập nhật nội dung, kiểm tra tình trạng vận hành, sao lưu dữ liệu hệ thống định kỳ và hỗ trợ xử lý lỗi phát sinh.",
    metric: "Hỗ trợ kỹ thuật định kỳ",
    deliverables: [
      "Hỗ trợ sao lưu dữ liệu trang web định kỳ",
      "Kiểm tra tình trạng chứng chỉ bảo mật SSL",
      "Cập nhật nội dung, hình ảnh mới theo yêu cầu",
      "Hỗ trợ xử lý nhanh các lỗi hiển thị phát sinh"
    ]
  }
];

function getIndustrySymbolicImage(key: string): string {
  switch (key) {
    case "nha_khoa":
      return "/template-previews/nha_khoa_user.png";
    case "spa":
      return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80";
    case "tham_my_vien":
      return "/template-previews/tham_my_vien_user.png";
    case "phong_kham":
      return "/template-previews/phong_kham_user.png";
    case "luat_su":
      return "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80";
    case "noi_that":
      return "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80";
    case "cong_ty_xay_dung":
      return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80";
    case "nha_hang":
      return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
    case "dich_vu_ve_sinh":
      return "/template-previews/dich_vu_ve_sinh_user.png";
    case "trung_tam_tieng_anh":
      return "/template-previews/trung_tam_tieng_anh_user.png";
    case "quan_cafe":
      return "/template-previews/quan_cafe_user.jpg";
    case "salon_toc":
      return "/template-previews/salon_toc_user.jpg";
    case "phong_gym":
      return "/template-previews/phong_gym_user.png";
    case "garage_oto":
      return "/template-previews/garage_oto_user.jpg";
    case "studio_chup_anh":
      return "/template-previews/studio_chup_anh_user.jpg";
    default:
      return "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80";
  }
}

function DraggableMarquee() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [isUserDragging, setIsUserDragging] = useState(false);

  // Duplicate catalog to create seamless loop
  const list = [...industryCatalog, ...industryCatalog, ...industryCatalog];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId = 0;
    let delayTimer = 0;
    let isPaused = false;

    const autoScroll = () => {
      if (isPaused) return;

      container.scrollLeft += 0.75; // Slow flowing speed

      const singleSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
      }

      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);

    const onMouseDown = (e: MouseEvent) => {
      isDownRef.current = true;
      isDraggingRef.current = false;
      setIsUserDragging(true);
      isPaused = true;
      if (animId) cancelAnimationFrame(animId);
      if (delayTimer) clearTimeout(delayTimer);

      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDownRef.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      isDraggingRef.current = Math.abs(walk) > 4;
      container.scrollLeft = scrollLeftRef.current - walk;

      const singleSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
        scrollLeftRef.current -= singleSetWidth;
        startXRef.current = x;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
        scrollLeftRef.current += singleSetWidth;
        startXRef.current = x;
      }
    };

    const stopDragging = () => {
      if (!isDownRef.current) return;
      isDownRef.current = false;
      setIsUserDragging(false);

      delayTimer = window.setTimeout(() => {
        isPaused = false;
        animId = requestAnimationFrame(autoScroll);
      }, 1200);
    };

    const onTouchStart = (e: TouchEvent) => {
      isDownRef.current = true;
      isDraggingRef.current = false;
      isPaused = true;
      if (animId) cancelAnimationFrame(animId);
      if (delayTimer) clearTimeout(delayTimer);

      startXRef.current = e.touches[0].pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDownRef.current) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      isDraggingRef.current = Math.abs(walk) > 4;
      container.scrollLeft = scrollLeftRef.current - walk;

      const singleSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
        scrollLeftRef.current -= singleSetWidth;
        startXRef.current = x;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
        scrollLeftRef.current += singleSetWidth;
        startXRef.current = x;
      }
    };

    const onLinkClick = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", stopDragging);
    container.addEventListener("mouseleave", stopDragging);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", stopDragging);

    const links = container.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", onLinkClick));

    // Wait until track layout completes
    const timer = setTimeout(() => {
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }, 100);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (delayTimer) clearTimeout(delayTimer);
      clearTimeout(timer);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", stopDragging);
      container.removeEventListener("mouseleave", stopDragging);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", stopDragging);
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
    };
  }, []);

  return (
    <div
      className={`marquee-scroller-wrap ${isUserDragging ? "is-dragging" : ""}`}
      ref={containerRef}
    >
      <div className="marquee-scroller-track">
        {list.map((item, idx) => (
          <Link
            className="marquee-card"
            href={`/kho-giao-dien/${item.key}`}
            key={`${item.key}-${idx}`}
            draggable={false}
          >
            <div className="marquee-card-image">
              <img
                src={getIndustrySymbolicImage(item.key)}
                alt={item.name}
                loading="lazy"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="marquee-card-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="marquee-card-link">Xem mẫu →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
const processSteps = [
  {
    number: "01",
    title: "Tư vấn & Định hướng",
    description: "Khảo sát nhu cầu thực tế, tư vấn cấu trúc trang phù hợp và thống nhất giải pháp website tối ưu theo định hướng phát triển của doanh nghiệp.",
    deliverables: [
      "Khảo sát yêu cầu chi tiết",
      "Đề xuất giải pháp & sơ đồ trang",
      "Thống nhất kế hoạch triển khai"
    ]
  },
  {
    number: "02",
    title: "Thiết kế giao diện",
    description: "Xây dựng bản vẽ cấu trúc và thiết kế giao diện trực quan, tập trung tối ưu hóa trải nghiệm người dùng thân thiện trên mọi thiết bị.",
    deliverables: [
      "Bản vẽ phác thảo cấu trúc (Wireframe)",
      "Thiết kế giao diện mỹ thuật (UI)",
      "Tối ưu luồng trải nghiệm (UX)"
    ]
  },
  {
    number: "03",
    title: "Lập trình & Hoàn thiện",
    description: "Phát triển mã nguồn tối ưu hiệu năng, tích hợp hệ quản lý nội dung (CMS) dễ sử dụng và cài đặt các tính năng theo yêu cầu.",
    deliverables: [
      "Lập trình giao diện Frontend",
      "Thiết lập hệ thống quản trị (CMS)",
      "Tối ưu kỹ thuật & bảo mật cơ bản"
    ]
  },
  {
    number: "04",
    title: "Kiểm thử & Bàn giao",
    description: "Kiểm tra toàn diện tính năng, hỗ trợ vận hành chạy thử và hướng dẫn doanh nghiệp tiếp nhận quản lý website một cách độc lập.",
    deliverables: [
      "Kiểm thử vận hành hệ thống",
      "Hướng dẫn bàn giao quản trị",
      "Kích hoạt chính sách hỗ trợ kỹ thuật"
    ]
  }
];

const designPackages = [
  {
    title: "Giao Diện Mẫu",
    englishTitle: "Quick-Launch Template",
    price: "0đ",
    priceNum: 0,
    desc: "Sử dụng kho giao diện mẫu sẵn có của hệ thống",
    items: [
      "Kho 15 mẫu giao diện chuẩn hóa",
      "Thay thế thông tin liên hệ & bảng giá thô",
      "Phù hợp triển khai nhanh, tối ưu chi phí"
    ]
  },
  {
    title: "Gói Tiêu Chuẩn",
    englishTitle: "Standard Custom",
    price: "3.000.000đ",
    priceNum: 3000000,
    desc: "Thiết kế riêng theo kho mẫu cao cấp (Khoảng 3tr - 5tr tùy trang con)",
    items: [
      "Giao diện tối ưu chuẩn SEO Google",
      "Bố cục chuẩn UX/UI tăng tỷ lệ chuyển đổi",
      "Hỗ trợ tặng tên miền riêng"
    ]
  },
  {
    title: "Gói Cao Cấp",
    englishTitle: "Premium Custom",
    price: "8.000.000đ",
    priceNum: 8000000,
    desc: "Thiết kế độc quyền & Trải nghiệm CX chuyên sâu (Khoảng 8tr - 10tr)",
    items: [
      "Thiết kế giao diện độc quyền cao cấp",
      "Hiệu ứng chuyển động (motion) mượt mà",
      "Tối ưu tốc độ tải trang cực hạn & CRO"
    ]
  },
  {
    title: "Gói Doanh Nghiệp",
    englishTitle: "Enterprise Custom",
    price: "15.000.000đ - 20.000.000đ",
    priceNum: 15000000,
    desc: "Thiết kế độc quyền & Lập trình tính năng theo yêu cầu riêng",
    items: [
      "Lập trình luồng nghiệp vụ phức tạp",
      "Tích hợp API nội bộ / bên thứ ba",
      "Đặc thù vận hành của từng doanh nghiệp"
    ]
  }
];

const domainOptions = [
  {
    title: "Đường dẫn con hệ thống",
    desc: "ten-mien-he-thong.com/ten-doanh-nghiep",
    price: "Miễn phí (0đ)",
    priceNum: 0
  },
  {
    title: "Tên miền Quốc tế riêng (Ví dụ)",
    desc: ".com, .net, .org, .info...",
    price: "400.000đ / năm",
    priceNum: 400000
  },
  {
    title: "Tên miền Quốc gia riêng (Ví dụ)",
    desc: ".vn, .com.vn...",
    price: "750.000đ / năm",
    priceNum: 750000
  },
  {
    title: "Tên miền riêng mức cao",
    desc: "Khung cao thị trường hoặc tên miền đặc biệt",
    price: "1.000.000đ / năm",
    priceNum: 1000000
  }
];

const pricing = [
  {
    title: "Basic",
    price: "Miễn phí",
    priceNum: 0,
    desc: "Trải nghiệm ban đầu",
    items: [
      "Đường dẫn con miễn phí hệ thống",
      "Sử dụng kho 15 mẫu giao diện chuẩn hóa",
      "Quản trị thô sơ, CRM liên hệ cơ bản",
      "Thử nghiệm dịch vụ hoàn toàn miễn phí"
    ],
    popular: false
  },
  {
    title: "Starter",
    price: "250k / tháng",
    priceNum: 250000,
    desc: "Tăng trưởng & Kết nối",
    items: [
      "Kết nối tên miền riêng",
      "CRM quản lý khách hàng: Tối đa 10 tài khoản",
      "CMS cập nhật bài viết: Không hỗ trợ",
      "Hệ thống đặt lịch Booking: Có hỗ trợ",
      "Dashboard báo cáo: Báo cáo cơ bản",
      "Chatbot AI: 500 cuộc / tháng (Kịch bản chuẩn)"
    ],
    popular: false
  },
  {
    title: "Pro",
    price: "550k / tháng",
    priceNum: 550000,
    desc: "Chuyên nghiệp & RAG AI",
    items: [
      "Kết nối tên miền riêng",
      "CRM quản lý khách hàng: Tối đa 100 tài khoản",
      "CMS cập nhật bài viết: Đăng bài thủ công",
      "AI Booking: Tự xếp lịch, tránh quá tải",
      "Dashboard báo cáo: Doanh số, leads, hiệu suất AI",
      "Chatbot AI: 2.000 cuộc / tháng (Train theo tài liệu DN)"
    ],
    popular: true
  },
  {
    title: "Super",
    price: "950k / tháng",
    priceNum: 950000,
    desc: "Tự động hóa toàn diện",
    items: [
      "Kết nối tên miền riêng",
      "CRM quản lý khách hàng: 1.000+ tài khoản & Tự động hóa",
      "CMS AI: AI viết & đăng bài chuẩn SEO",
      "AI Booking + Tự động gửi SMS nhắc lịch trước 2h",
      "Dashboard báo cáo: Tùy biến linh hoạt theo yêu cầu",
      "Chatbot AI: 5.000 cuộc / tháng (Train theo DB lớn)"
    ],
    popular: false
  }
];

const pricingCombos = [
  {
    name: "Phương án A: Thử nghiệm miễn phí",
    tagline: "Khởi tạo nhanh chóng, trải nghiệm không rủi ro",
    designCost: "• Thiết kế: Giao Diện Mẫu (0đ)",
    domainCost: "• Tên miền: Tên miền Phụ Hệ Thống (0đ)",
    opCost: "• Vận hành: Gói Vận hành Basic (0đ)",
    year1Total: "0đ",
    nextYearTotal: "0đ",
    target: "Doanh nghiệp muốn chạy thử nghiệm, tự quản trị thô sơ."
  },
  {
    name: "Phương án B: Website giới thiệu cơ bản",
    tagline: "Khởi nghiệp tiết kiệm, đầy đủ tính năng kết nối",
    designCost: "• Thiết kế: Giao Diện Mẫu (0đ)",
    domainCost: "• Tên miền: Tên miền Quốc tế (Ước tính 400.000đ / năm)",
    opCost: "• Vận hành: Gói Vận hành Starter (250.000đ / tháng = 3.000.000đ / năm)",
    year1Total: "3.400.000đ",
    nextYearTotal: "3.400.000đ / năm",
    target: "Shop nhỏ, cá nhân mới bắt đầu kinh doanh online."
  },
  {
    name: "Phương án C: Website Chuyên Nghiệp",
    tagline: "Giải pháp tối ưu cho Spa, Phòng khám, Dịch vụ",
    designCost: "• Thiết kế: Gói Tiêu Chuẩn (5.000.000đ - đóng 1 lần)",
    domainCost: "• Tên miền: Tên miền Quốc gia (Ước tính 750.000đ / năm)",
    opCost: "• Vận hành: Gói Vận hành Pro (550.000đ / tháng = 6.600.000đ / năm)",
    year1Total: "12.350.000đ",
    nextYearTotal: "7.350.000đ / năm",
    target: "Doanh nghiệp cần giao diện cao cấp, đặt lịch AI & train Chatbot AI.",
    popular: true
  },
  {
    name: "Phương án D: Giải pháp Tự động hóa toàn diện",
    tagline: "Super Enterprise - Đột phá quy trình bằng trí tuệ nhân tạo",
    designCost: "• Thiết kế: Gói Cao Cấp (10.000.000đ - đóng 1 lần)",
    domainCost: "• Tên miền: Tên miền Quốc gia (Ước tính 750.000đ / năm)",
    opCost: "• Vận hành: Gói Vận hành Super (950.000đ / tháng = 11.400.000đ / năm)",
    year1Total: "22.150.000đ",
    nextYearTotal: "12.150.000đ / năm",
    target: "Doanh nghiệp cần tự động hóa CRM, CMS AI & trợ lý nhắc lịch VIP."
  }
];const calcDesignOptions = [
  { title: "Giao Diện Mẫu (Quick-Launch Template)", price: "0đ", valMin: 0, valMax: 0 },
  { title: "Gói Tiêu Chuẩn (Standard Custom)", price: "3.000.000đ", valMin: 3000000, valMax: 3000000 },
  { title: "Gói Cao Cấp (Premium Custom)", price: "8.000.000đ", valMin: 8000000, valMax: 8000000 },
  { title: "Gói Doanh Nghiệp (Enterprise Custom)", price: "15.000.000đ - 20.000.000đ", valMin: 15000000, valMax: 20000000 }
];

const calcDomainOptions = [
  { title: "Đường dẫn con trên tên miền chung của hệ thống", price: "Miễn phí (0đ)", valMin: 0, valMax: 0 },
  { title: "Tên miền riêng mang thương hiệu cá nhân", price: "500.000đ - 1.000.000đ / năm", valMin: 500000, valMax: 1000000 }
];

export function CompanyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultMessage, setConsultMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState("01");

  // States for Pricing Calculator
  const [selectedDesignIdx, setSelectedDesignIdx] = useState(0);
  const [selectedDomainIdx, setSelectedDomainIdx] = useState(0);
  const [selectedOpIdx, setSelectedOpIdx] = useState(0);
  const [isYearlyCycle, setIsYearlyCycle] = useState(true);
  const [pricingViewMode, setPricingViewMode] = useState<"raw" | "custom" | "combos">("raw");

  // Active pricing details modal view state
  const [activeModal, setActiveModal] = useState<"design" | "domain" | "operation" | null>(null);

  // Controlled input for contact form's service field
  const [clientService, setClientService] = useState("");

  async function submitConsult(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsConsultSubmitting(true);
    setConsultMessage("");

    const formData = new FormData(form);
    const phone = formData.get("phone") as string;

    if (!phone || phone.trim() === "") {
      setConsultMessage("Vui lòng nhập số điện thoại hợp lệ.");
      setIsConsultSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "consult", phone })
      });

      if (res.ok) {
        setConsultMessage("TAVIWEB đã ghi nhận thông tin. Đội ngũ tư vấn sẽ liên hệ lại sớm.");
        form.reset();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setConsultMessage(errorData.error || "Gửi thông tin thất bại. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      setConsultMessage("Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setIsConsultSubmitting(false);
    }
  }

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsContactSubmitting(true);
    setContactMessage("");

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    if (!phone || phone.trim() === "") {
      setContactMessage("Vui lòng nhập số điện thoại.");
      setIsContactSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", name, phone, service })
      });

      if (res.ok) {
        setContactMessage("TAVIWEB đã ghi nhận yêu cầu. Chúng tôi sẽ phản hồi trong ngày làm việc.");
        form.reset();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setContactMessage(errorData.error || "Gửi yêu cầu thất bại. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      setContactMessage("Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setIsContactSubmitting(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <div className="company-site company-software">
      <a className="skip-link" href="#main">
        Chuyển đến nội dung chính
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Điều hướng chính">
          <Link className="brand" href="#main" aria-label="TAVIWEB" onClick={closeMenu}>
            <span className="brand-symbol" aria-hidden="true">
              T
            </span>
            <span className="brand-copy">
              <strong>TAVIWEB</strong>
              <small>Website & Automation</small>
            </span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="nav-toggle-lines" aria-hidden="true" />
            <span className="sr-only">Mở menu</span>
          </button>

          <div className={`primary-menu${menuOpen ? " is-open" : ""}`} id="primary-menu">
            <Link href="#services" onClick={closeMenu}>
              Dịch vụ
            </Link>
            <div className="nav-dropdown">
              <Link href="/kho-giao-dien/noi_that" onClick={closeMenu}>
                Kho giao diện
              </Link>
              <div className="nav-dropdown-panel" aria-label="Danh mục kho giao diện">
                {industryCatalog.map((industry) => (
                  <Link href={`/kho-giao-dien/${industry.key}`} key={industry.key} onClick={closeMenu}>
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="#projects" onClick={closeMenu}>
              Dự án
            </Link>
            <Link href="#process" onClick={closeMenu}>
              Quy trình
            </Link>
            <Link href="#pricing" onClick={closeMenu}>
              Bảng giá
            </Link>
            <Link className="nav-contact" href="#contact" onClick={closeMenu}>
              Liên hệ
            </Link>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">TAVIWEB</p>
              <h1 id="hero-title">
                <span>Thiết kế website</span> <strong>chuyên nghiệp</strong>
              </h1>
              <p className="hero-lead">Tối ưu chi phí - Đột phá doanh thu</p>
              <p className="hero-description">
                TAVIWEB đồng hành cùng doanh nghiệp xây dựng website bán hàng, website công ty
                và hệ thống landing page tốc độ cao, tối ưu chuyển đổi, dễ quản trị.
              </p>

              <ul className="benefit-list" aria-label="Ưu đãi khi đăng ký tư vấn">
                <li>Tặng tên miền quốc tế năm đầu tiên</li>
                <li>Tặng livechat và form thu lead tự động</li>
                <li>Tặng gói lưu trữ Hosting năm đầu, tối ưu tốc độ tải trang</li>
              </ul>

              <form className="consult-form" id="consult-form" onSubmit={submitConsult}>
                <p>Đăng ký nhận tư vấn miễn phí ngay hôm nay</p>
                <div className="consult-row">
                  <label className="sr-only" htmlFor="phone">
                    Số điện thoại
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="Số điện thoại" autoComplete="tel" />
                  <button className="button button-primary" type="submit" disabled={isConsultSubmitting}>
                    {isConsultSubmitting ? "Đang gửi..." : "Đăng ký tư vấn"}
                  </button>
                </div>
                <small className="form-message" role="status" aria-live="polite">
                  {consultMessage}
                </small>
              </form>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Cam kết dịch vụ">
          <div>
            <strong>7 ngày</strong>
            <span>Bản demo đầu tiên</span>
          </div>
          <div>
            <strong>90+</strong>
            <span>Điểm hiệu năng mục tiêu</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Theo dõi form và hosting</span>
          </div>
          <div>
            <strong>Bảo mật</strong>
            <span>SSL và sao lưu dữ liệu tự động</span>
          </div>
        </section>

        <section className="section content-section services-section-tabs" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Dịch vụ</p>
            <h2 id="services-title">Giải pháp website phù hợp với doanh nghiệp</h2>
            <p>
              TAVIWEB thiết kế giao diện trực quan, tối ưu tốc độ tải trang và tính năng
              để hỗ trợ vận hành hiệu quả.
            </p>
          </div>

          <div className="services-tabs-layout">
            {/* Cột trái: Danh sách các tab */}
            <div className="services-tabs-left" role="tablist" aria-label="Danh mục dịch vụ">
              {services.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    className={`services-tab-btn${isActive ? " is-active" : ""}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${service.id}`}
                    id={`service-tab-${service.id}`}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    <span className="services-tab-num">{service.id}</span>
                    <div className="services-tab-meta">
                      <h3>{service.title}</h3>
                      <p>{service.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cột phải: Chi tiết nội dung của dịch vụ đang active */}
            <div
              className="services-content-right"
              id={`service-panel-${activeService.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService.id}`}
            >
              <div className="services-content-card animate-fade-in">
                <div className="services-content-header">
                  <span className="services-content-badge">{activeService.badge}</span>
                  <h2>{activeService.title}</h2>
                  <p className="services-content-tagline">{activeService.tagline}</p>
                </div>

                <p className="services-content-desc">{activeService.text}</p>

                <div className="services-content-body">
                  <div className="services-deliverables-wrap">
                    <h4>Hạng mục bàn giao chi tiết:</h4>
                    <ul className="services-deliverables-list">
                      {activeService.deliverables.map((item, index) => (
                        <li key={index}>
                          <span className="check-icon" aria-hidden="true">
                            <CheckCircle2 size={16} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="services-sidebar-info">
                    <div className="services-metric-box">
                      <span className="metric-label">Cam kết kỹ thuật</span>
                      <span className="metric-value">{activeService.metric}</span>
                    </div>

                    {/* SVG Graphic Mockup mini for the active service */}
                    <div className="services-mini-mockup" aria-hidden="true">
                      <svg viewBox="0 0 240 140" width="100%" height="100%">
                        {/* Browser Frame */}
                        <rect x="10" y="10" width="220" height="120" rx="8" stroke="var(--software-border)" strokeWidth="1.5" fill="#f8fafc" />
                        <line x1="10" y1="34" x2="230" y2="34" stroke="var(--software-border)" strokeWidth="1.5" />
                        <circle cx="24" cy="22" r="4" fill="#ef4444" />
                        <circle cx="36" cy="22" r="4" fill="#f59e0b" />
                        <circle cx="48" cy="22" r="4" fill="#10b981" />

                        {/* Custom content depending on the service */}
                        {activeService.id === "01" && (
                          <>
                            {/* Corporate layout */}
                            <rect x="25" y="48" width="60" height="16" rx="2" fill="var(--software-blue)" opacity="0.15" />
                            <rect x="25" y="70" width="100" height="6" rx="1" fill="#64748b" opacity="0.5" />
                            <rect x="25" y="80" width="80" height="6" rx="1" fill="#64748b" opacity="0.3" />

                            <rect x="140" y="48" width="75" height="55" rx="4" fill="var(--software-red)" opacity="0.1" />
                            <circle cx="177" cy="75" r="10" stroke="var(--software-red)" strokeWidth="1.5" />
                          </>
                        )}
                        {activeService.id === "02" && (
                          <>
                            {/* Product catalog layout */}
                            <rect x="25" y="48" width="55" height="40" rx="4" fill="#cbd5e1" />
                            <rect x="90" y="48" width="55" height="40" rx="4" fill="#cbd5e1" />
                            <rect x="155" y="48" width="55" height="40" rx="4" fill="#cbd5e1" />

                            <rect x="25" y="96" width="40" height="6" rx="1" fill="#64748b" opacity="0.5" />
                            <rect x="90" y="96" width="40" height="6" rx="1" fill="#64748b" opacity="0.5" />
                            <rect x="155" y="96" width="40" height="6" rx="1" fill="#64748b" opacity="0.5" />

                            <circle cx="205" cy="115" r="12" fill="var(--software-red)" opacity="0.15" />
                            <path d="M201 115h8M205 111v8" stroke="var(--software-red)" strokeWidth="1.5" />
                          </>
                        )}
                        {activeService.id === "03" && (
                          <>
                            {/* Landing page landing focused form */}
                            <rect x="25" y="48" width="100" height="10" rx="2" fill="var(--software-blue)" opacity="0.15" />
                            <rect x="25" y="65" width="80" height="6" rx="1" fill="#64748b" opacity="0.5" />
                            <rect x="25" y="75" width="90" height="6" rx="1" fill="#64748b" opacity="0.3" />

                            <rect x="145" y="48" width="70" height="65" rx="4" fill="#ffffff" stroke="var(--software-blue)" strokeWidth="1.5" />
                            <rect x="155" y="60" width="50" height="8" rx="2" fill="#e2e8f0" />
                            <rect x="155" y="74" width="50" height="8" rx="2" fill="#e2e8f0" />
                            <rect x="155" y="90" width="50" height="12" rx="2" fill="var(--software-red)" />
                          </>
                        )}
                        {activeService.id === "04" && (
                          <>
                            {/* Dashboard maintenance health layout */}
                            <circle cx="60" cy="80" r="24" stroke="var(--software-blue)" strokeWidth="3" strokeDasharray="100 40" fill="none" />
                            <text x="60" y="84" textAnchor="middle" fontSize="11" fill="var(--software-blue)" fontWeight="bold">99.9%</text>

                            <rect x="110" y="55" width="100" height="8" rx="2" fill="#10b981" />
                            <rect x="110" y="72" width="100" height="8" rx="2" fill="#10b981" />
                            <rect x="110" y="89" width="100" height="8" rx="2" fill="#10b981" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="services-action-footer" style={{ marginTop: "32px" }}>
                  <a className="button button-primary" href="#contact">
                    Đăng ký tư vấn giải pháp này
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section project-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading narrow">
            <p className="eyebrow">Dự án mẫu</p>
            <h2 id="projects-title">Giao diện phù hợp từng ngành</h2>
            <p style={{ color: "var(--software-ink-muted)", marginTop: "8px" }}>
              Kéo chuột sang trái hoặc phải để khám phá các mẫu giao diện. Nhấp vào ngành bất kỳ để xem chi tiết.
            </p>
          </div>

          <DraggableMarquee />
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="section-heading center">
            <p className="eyebrow">Quy trình</p>
            <h2 id="process-title">Quy trình triển khai</h2>
            <p>
              Mỗi giai đoạn đều có đầu việc rõ ràng, tiêu chí nghiệm thu cụ thể và người phụ trách
              đồng hành cùng doanh nghiệp.
            </p>
          </div>

          <div className="process-timeline-stacked-wide">
            {processSteps.map((step, index) => (
              <div
                className="process-step-card-outer"
                key={step.number}
                style={{ "--stack-idx": index } as React.CSSProperties}
              >
                <div className="process-step-card-inner">
                  <div className="process-step-header">
                    <span className="process-step-number">{step.number}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="process-card-body">
                    <p>{step.description}</p>
                    <ul className="process-deliverables-list">
                      {step.deliverables.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={16} className="deliverable-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading narrow">
            <p className="eyebrow">Bảng giá</p>
            <h2 id="pricing-title">Cơ cấu chi phí linh hoạt & chuyên nghiệp</h2>
            <p>Bảng giá được tổ chức thông minh giúp bạn dễ dàng chọn cấu phần lẻ, tự tính giá hoặc chọn các phương án combo trọn gói.</p>
          </div>

          {/* TABS SWITCHER */}
          <div className="pricing-tabs-wrap">
            <button
              type="button"
              className={`pricing-tab-btn ${pricingViewMode === "raw" ? "is-active" : ""}`}
              onClick={() => setPricingViewMode("raw")}
            >
              <span className="tab-icon">🔍</span>
              <span className="tab-label">1. Bảng giá cấu phần lẻ</span>
            </button>
            <button
              type="button"
              className={`pricing-tab-btn ${pricingViewMode === "custom" ? "is-active" : ""}`}
              onClick={() => setPricingViewMode("custom")}
            >
              <span className="tab-icon">🎛</span>
              <span className="tab-label">2. Tự cấu hình & Tính giá</span>
            </button>
            <button
              type="button"
              className={`pricing-tab-btn ${pricingViewMode === "combos" ? "is-active" : ""}`}
              onClick={() => setPricingViewMode("combos")}
            >
              <span className="tab-icon">💼</span>
              <span className="tab-label">3. Các phương án trọn gói</span>
              <span className="tab-badge-text">Gợi ý</span>
            </button>
          </div>

          {/* DYNAMIC CONTENT RENDERING BASED ON TABS */}
          <div className="pricing-tab-content-wrap">
            {pricingViewMode === "raw" && (
              <div className="pricing-tab-pane animate-fade-in">
                <div className="subsection-heading">
                  <span className="step-badge">I</span>
                  <h3>Bảng giá cấu phần chi tiết</h3>
                  <p>Bấm chọn từng cột chi phí dưới đây để xem thông tin chi tiết và tính năng đi kèm.</p>
                </div>

                <div className="formula-banner">
                  <div className="formula-box">
                    <span className="formula-part">Thiết kế & Khởi tạo (1 lần)</span>
                    <span className="formula-sign">+</span>
                    <span className="formula-part">Tên miền (Hàng năm)</span>
                    <span className="formula-sign">+</span>
                    <span className="formula-part">Vận hành (Tháng / Năm)</span>
                    <span className="formula-sign">=</span>
                    <span className="formula-result">Tổng chi phí Website</span>
                  </div>
                </div>

                <div className="pricing-raw-grid">
                  {/* Cột 1: Thiết kế */}
                  <div
                    className="raw-cost-col clickable-col"
                    onClick={() => setActiveModal("design")}
                  >
                    <div className="raw-cost-header header-red">
                      <h4>CHI PHÍ THIẾT KẾ & KHỞI TẠO</h4>
                      <span className="raw-badge">Chi trả 1 lần</span>
                    </div>
                    <div className="raw-cost-body">
                      <div className="raw-item">
                        <span className="item-name">Giao Diện Mẫu (Template)</span>
                        <span className="item-price" style={{ color: "#dc2626", fontWeight: "600" }}>Miễn phí</span>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Tiêu Chuẩn (Custom)</span>
                        <span className="item-price">3.000.000đ</span>
                        <small>Dao động 3tr - 5tr tùy số trang con</small>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Cao Cấp (Premium)</span>
                        <span className="item-price">8.000.000đ</span>
                        <small>Dao động 8tr - 10tr tùy mức độ hiệu ứng</small>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Doanh Nghiệp (Enterprise)</span>
                        <span className="item-price">15.000.000đ - 20.000.000đ</span>
                        <small>Lập trình chức năng đặc thù riêng biệt</small>
                      </div>
                    </div>
                    <div className="col-click-indicator">
                      Xem chi tiết cấu phần ➔
                    </div>
                  </div>

                  {/* Cột 2: Tên miền */}
                  <div
                    className="raw-cost-col clickable-col"
                    onClick={() => setActiveModal("domain")}
                  >
                    <div className="raw-cost-header header-green">
                      <h4>CHI PHÍ TÊN MIỀN / DOMAIN</h4>
                      <span className="raw-badge">Duy trì hàng năm</span>
                    </div>
                    <div className="raw-cost-body">
                      <div className="raw-item">
                        <span className="item-name">Đường dẫn con hệ thống</span>
                        <span className="item-price" style={{ color: "#dc2626", fontWeight: "600" }}>Miễn phí</span>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Tên miền riêng thị trường</span>
                        <span className="item-price">500.000đ - 1.000.000đ / năm</span>
                        <small>Ví dụ: .com, .net, .vn, .com.vn...</small>
                      </div>
                    </div>
                    <div className="col-click-indicator">
                      Xem chi tiết cấu phần ➔
                    </div>
                  </div>

                  {/* Cột 3: Vận hành */}
                  <div
                    className="raw-cost-col clickable-col"
                    onClick={() => setActiveModal("operation")}
                  >
                    <div className="raw-cost-header header-blue">
                      <h4>CHI PHÍ DUY TRÌ & VẬN HÀNH HỆ THỐNG</h4>
                      <span className="raw-badge">Hàng tháng / Đóng theo năm</span>
                    </div>
                    <div className="raw-cost-body">
                      <div className="raw-item">
                        <span className="item-name">Gói Basic (Trải nghiệm)</span>
                        <span className="item-price" style={{ color: "#dc2626", fontWeight: "600" }}>Miễn phí</span>
                        <small>CRM cơ bản, không AI Chatbot</small>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Starter (Tăng trưởng)</span>
                        <span className="item-price">250.000đ / tháng</span>
                        <small>Tên miền riêng, Booking, 500 cuộc AI</small>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Pro (Khuyên dùng)</span>
                        <span className="item-price">550.000đ / tháng</span>
                        <small>AI Booking, train AI theo tài liệu riêng</small>
                      </div>
                      <div className="raw-item">
                        <span className="item-name">Gói Super (Tự động hóa)</span>
                        <span className="item-price">950.000đ / tháng</span>
                        <small>CMS AI tự động viết bài, SMS nhắc hẹn</small>
                      </div>
                    </div>
                    <div className="col-click-indicator">
                      Xem chi tiết cấu phần ➔
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL CHI TIẾT CHI PHÍ */}
            {activeModal && (
              <div className="pricing-modal-overlay animate-fade-in" onClick={() => setActiveModal(null)}>
                <div className="pricing-modal-container animate-slide-up" onClick={(e) => e.stopPropagation()}>
                  <button className="pricing-modal-close" onClick={() => setActiveModal(null)} aria-label="Đóng">
                    <X size={20} />
                  </button>

                  {activeModal === "design" && (
                    <div className="pricing-modal-content">
                      <div className="panel-inner-heading">
                        <span className="panel-tag tag-red">Chi tiết cấu phần</span>
                        <h3>1. CHI PHÍ THIẾT KẾ & KHỞI TẠO (Chi trả 1 lần duy nhất)</h3>
                        <p className="modal-lead-text">Đây là chi phí xây dựng bộ khung website, thiết lập cơ sở dữ liệu và bàn giao hệ thống quản trị. Quý khách chỉ thanh toán một lần duy nhất và chưa bao gồm phí tên miền.</p>
                      </div>
                      
                      <div className="pricing-comparison-table-wrap" style={{ display: "block", marginTop: "20px" }}>
                        <table className="pricing-comparison-table design-modal-table">
                          <thead>
                            <tr>
                              <th style={{ width: "25%" }}>Gói Thiết Kế</th>
                              <th style={{ width: "20%" }}>Đơn giá (VND)</th>
                              <th>Mô Tả Nghiệp Vụ Chi Tiết</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="design-pkg-cell">
                                <strong>Giao Diện Mẫu</strong>
                                <span className="sub-eng">(Quick-Launch Template)</span>
                              </td>
                              <td className="price-val">0đ</td>
                              <td>
                                Sử dụng kho giao diện mẫu sẵn có của hệ thống. Taviweb hỗ trợ thay thế thông tin cơ bản ban đầu ( thông tin liên hệ, bảng giá dịch vụ thô).
                                <br />
                                <span className="target-text">Phù hợp cho doanh nghiệp muốn triển khai nhanh, tối ưu chi phí.</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="design-pkg-cell">
                                <strong>Gói Tiêu Chuẩn</strong>
                                <span className="sub-eng">(Standard Custom)</span>
                              </td>
                              <td className="price-val">3.000.000đ</td>
                              <td>
                                Thiết kế giao diện riêng của doanh nghiệp theo kho giao diện mẫu cao cấp. Tối ưu hóa cấu trúc chuẩn SEO Google, bố cục chuẩn UX/UI giúp tăng tỷ lệ tương tác.
                                <br />
                                <span className="target-text">Phù hợp cho các cơ sở kinh doanh, phòng khám dịch vụ tầm trung. Tặng tên miền theo thương hiệu khách hàng.</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="design-pkg-cell">
                                <strong>Gói Cao Cấp</strong>
                                <span className="sub-eng">(Premium Custom)</span>
                              </td>
                              <td className="price-val">8.000.000đ</td>
                              <td>
                                Thiết kế giao diện độc quyền, xây dựng trải nghiệm khách hàng (CX) chuyên sâu. Tích hợp các hiệu ứng chuyển động mượt mà, tối ưu hóa tốc độ tải trang cực hạn và nâng cấp tỷ lệ chuyển đổi khách hàng (CRO).
                                <br />
                                <span className="target-text">Phù hợp xây dựng thương hiệu uy tín, Tặng tên miền theo thương hiệu khách hàng.</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="design-pkg-cell">
                                <strong>Gói Doanh Nghiệp</strong>
                                <span className="sub-eng">(Enterprise Custom)</span>
                              </td>
                              <td className="price-val">15.000.000đ - 20.000.000đ</td>
                              <td>
                                Thiết kế độc quyền cao cấp, phân tích và lập trình các tính năng riêng biệt. Xây dựng luồng nghiệp vụ phức tạp, tích hợp API nội bộ hoặc hệ thống bên thứ ba theo đặc thù vận hành của doanh nghiệp.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeModal === "domain" && (
                    <div className="pricing-modal-content">
                      <div className="panel-inner-heading">
                        <span className="panel-tag tag-green">Chi tiết cấu phần</span>
                        <h3>2. CHI PHÍ TÊN MIỀN / DOMAIN (Duy trì hàng năm)</h3>
                        <p className="modal-lead-text">Chi phí tên miền khi thiết kế website tại Taviweb dao động từ 0 đồng đến 1 triệu đồng một năm tuỳ vào tên miền mà khách chọn.</p>
                      </div>
                      
                      <div className="domain-modal-list">
                        <div className="domain-modal-item">
                          <div className="domain-bullet-icon green-bullet"></div>
                          <p className="domain-bullet-desc">
                            Với tên miền thuộc <strong>đường dẫn con trên tên miền chung của hệ thống</strong>, khách hàng sẽ được <strong>miễn phí giá tên miền với giá 0đ</strong>.
                          </p>
                        </div>
                        <div className="domain-modal-item">
                          <div className="domain-bullet-icon blue-bullet"></div>
                          <p className="domain-bullet-desc">
                            Với các <strong>tên miền riêng mang thương hiệu cá nhân</strong> giá tên miền sẽ dao động theo giá thị trường mà khách chọn khoảng từ <strong>500.000 đồng đến 1.000.000 đồng</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeModal === "operation" && (
                    <div className="pricing-modal-content">
                      <div className="panel-inner-heading">
                        <span className="panel-tag tag-blue">Chi tiết cấu phần</span>
                        <h3>3. CHI PHÍ DUY TRÌ & VẬN HÀNH HỆ THỐNG (Hàng tháng / Đóng theo năm)</h3>
                        <p className="modal-lead-text">Chi phí này chi trả cho nâng cấp hệ quản trị CRM, hệ thống đặt lịch tự động và hạn mức hội thoại của trợ lý ảo AI Chatbot.</p>
                      </div>

                      <div className="pricing-comparison-table-wrap" style={{ display: "block", marginTop: "20px" }}>
                        <table className="pricing-comparison-table">
                          <thead>
                            <tr>
                              <th>Hạng Mục Vận Hành</th>
                              <th>Basic<br /><span className="sub-eng">(Trải Nghiệm)</span></th>
                              <th>Starter<br /><span className="sub-eng">(Tăng Trưởng)</span></th>
                              <th className="highlight-col">Pro</th>
                              <th>Super<br /><span className="sub-eng">(Tự Động Hóa)</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Giá vận hành</strong></td>
                              <td className="price-val">Miễn phí</td>
                              <td className="price-val">250k / tháng</td>
                              <td className="price-val highlight-col">550k / tháng</td>
                              <td className="price-val">950k / tháng</td>
                            </tr>
                            <tr>
                              <td><strong>Tên miền(Domain)</strong></td>
                              <td>Đường dẫn con trên hệ thống</td>
                              <td>Hỗ trợ kết nối</td>
                              <td className="highlight-col">Hỗ trợ kết nối</td>
                              <td>Hỗ trợ kết nối</td>
                            </tr>
                            <tr>
                              <td><strong>CRM quản lý khách hàng</strong></td>
                              <td>—</td>
                              <td>Tối đa 10 tài khoản quản lý</td>
                              <td className="highlight-col">Tối đa 100 tài khoản quản lý</td>
                              <td>1.000+ tài khoản & Tự động hóa (CRM Automation)</td>
                            </tr>
                            <tr>
                              <td><strong>CMS cập nhật bài viết</strong></td>
                              <td>—</td>
                              <td>—</td>
                              <td className="highlight-col">Đăng bài thủ công</td>
                              <td>CMS AI: Trí tuệ nhân tạo tự động viết & đăng bài chuẩn SEO</td>
                            </tr>
                            <tr>
                              <td><strong>Hệ thống đặt lịch Booking</strong></td>
                              <td>—</td>
                              <td>Có hỗ trợ</td>
                              <td className="highlight-col">AI Booking: AI xếp lịch, tự động gợi ý điều phối tránh quá tải</td>
                              <td>AI Booking + nhắc lịch hẹn tự động trước 2 tiếng cho khách</td>
                            </tr>
                            <tr>
                              <td><strong>Dashboard báo cáo</strong></td>
                              <td>—</td>
                              <td>Báo cáo cơ bản</td>
                              <td className="highlight-col">Báo cáo nâng cao (doanh số, leads, hiệu suất AI)</td>
                              <td>Dashboard tùy biến linh hoạt theo yêu cầu DN</td>
                            </tr>
                            <tr>
                              <td><strong>Chatbot AI (Hội thoại/tháng)</strong></td>
                              <td>—</td>
                              <td>500 cuộc / tháng</td>
                              <td className="highlight-col">2.000 cuộc / tháng</td>
                              <td>5.000 cuộc / tháng</td>
                            </tr>
                            <tr>
                              <td><strong>Huấn luyện trí tuệ nhân tạo</strong></td>
                              <td>—</td>
                              <td>Kịch bản chuẩn AI trả lời khách hàng, không theo tài liệu/kịch bản DN</td>
                              <td className="highlight-col">Train trợ lý ảo AI theo tài liệu, kịch bản DN</td>
                              <td>Train trợ lý ảo AI cao cấp theo cơ sở dữ liệu lớn của DN</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {pricingViewMode === "custom" && (
              <div className="pricing-tab-pane animate-fade-in">
                <div className="subsection-heading">
                  <span className="step-badge">II</span>
                  <h3>Bộ tính toán chi phí Website tự chọn</h3>
                  <p>Tự thiết lập các cấu phần để xem tổng tiền động và các gợi ý tối ưu.</p>
                </div>

                <div className="pricing-calculator-wrap">
                  <div className="calculator-body">
                    <div className="calculator-options">
                      {/* Chọn Thiết Kế */}
                      <div className="calc-group">
                        <h4>1. Chọn Gói Thiết Kế & Khởi tạo (1 lần)</h4>
                        <div className="calc-buttons-grid">
                          {calcDesignOptions.map((pkg, idx) => (
                            <button
                              key={pkg.title}
                              type="button"
                              className={`calc-opt-btn ${selectedDesignIdx === idx ? "is-selected" : ""}`}
                              onClick={() => setSelectedDesignIdx(idx)}
                            >
                              <span className="calc-opt-title">{pkg.title}</span>
                              <span className="calc-opt-price">{pkg.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Chọn Tên Miền */}
                      <div className="calc-group">
                        <h4>2. Chọn Tên Miền / Domain (Hàng năm)</h4>
                        <div className="calc-buttons-grid">
                          {calcDomainOptions.map((opt, idx) => (
                            <button
                              key={opt.title}
                              type="button"
                              className={`calc-opt-btn ${selectedDomainIdx === idx ? "is-selected" : ""}`}
                              onClick={() => setSelectedDomainIdx(idx)}
                            >
                              <span className="calc-opt-title">{opt.title}</span>
                              <span className="calc-opt-price">{opt.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Chọn Gói Vận Hành */}
                      <div className="calc-group">
                        <h4>3. Chọn Gói Duy trì & Vận hành (Hàng tháng)</h4>
                        <div className="calc-buttons-grid">
                          {pricing.map((plan, idx) => (
                            <button
                              key={plan.title}
                              type="button"
                              className={`calc-opt-btn ${selectedOpIdx === idx ? "is-selected" : ""}`}
                              onClick={() => setSelectedOpIdx(idx)}
                            >
                              <span className="calc-opt-title">{plan.title}</span>
                              <span className="calc-opt-price">{plan.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Chọn Chu Kỳ Vận Hành */}
                      <div className="calc-group">
                        <h4>4. Chu kỳ thanh toán vận hành</h4>
                        <div className="calc-toggle-wrap">
                          <button
                            type="button"
                            className={`calc-toggle-btn ${isYearlyCycle ? "is-active" : ""}`}
                            onClick={() => setIsYearlyCycle(true)}
                          >
                            Đóng theo năm (Khuyên dùng - Tiết kiệm thời gian)
                          </button>
                          <button
                            type="button"
                            className={`calc-toggle-btn ${!isYearlyCycle ? "is-active" : ""}`}
                            onClick={() => setIsYearlyCycle(false)}
                          >
                            Đóng hàng tháng
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Calculator Summary */}
                    <div className="calculator-summary">
                      <div className="summary-card">
                        <h4>Ngân sách Dự kiến của bạn</h4>
                        
                        {(() => {
                          const designObj = calcDesignOptions[selectedDesignIdx] || calcDesignOptions[0];
                          const domainObj = calcDomainOptions[selectedDomainIdx] || calcDomainOptions[0];
                          const opObj = pricing[selectedOpIdx] || pricing[0];
                          
                          const designMin = designObj.valMin;
                          const designMax = designObj.valMax;
                          const domainMin = domainObj.valMin;
                          const domainMax = domainObj.valMax;
                          const opRate = opObj.priceNum;
                          
                          const year1Min = designMin + domainMin + (opRate * 12);
                          const year1Max = designMax + domainMax + (opRate * 12);
                          
                          const recurringMin = domainMin + (opRate * 12);
                          const recurringMax = domainMax + (opRate * 12);
                          
                          let recommendedOption = "";
                          let optionDesc = "";
                          if (selectedDesignIdx === 0 && selectedDomainIdx === 0 && selectedOpIdx === 0) {
                            recommendedOption = "Phương án A";
                            optionDesc = "Thử nghiệm miễn phí";
                          } else if (selectedDesignIdx === 0 && selectedDomainIdx === 1 && selectedOpIdx === 1) {
                            recommendedOption = "Phương án B";
                            optionDesc = "Website giới thiệu cơ bản";
                          } else if (selectedDesignIdx === 1 && selectedDomainIdx === 1 && selectedOpIdx === 2) {
                            recommendedOption = "Phương án C";
                            optionDesc = "Website Chuyên Nghiệp";
                          } else if (selectedDesignIdx === 2 && selectedDomainIdx === 1 && selectedOpIdx === 3) {
                            recommendedOption = "Phương án D";
                            optionDesc = "Giải pháp Tự động hóa toàn diện";
                          }

                          return (
                            <>
                              <div className="summary-details">
                                <div className="summary-line">
                                  <span>Thiết kế & Khởi tạo:</span>
                                  <strong>{designObj.price}</strong>
                                </div>
                                <div className="summary-line">
                                  <span>Chi phí Tên miền:</span>
                                  <strong>{domainObj.price}</strong>
                                </div>
                                <div className="summary-line">
                                  <span>Phí Vận hành ({isYearlyCycle ? "Hàng năm" : "Hàng tháng"}):</span>
                                  <strong>
                                    {selectedOpIdx === 0 
                                      ? "Miễn phí" 
                                      : `${(opRate * (isYearlyCycle ? 12 : 1)).toLocaleString("vi-VN")}đ`
                                    }
                                  </strong>
                                </div>
                              </div>

                              <hr className="summary-divider" />

                              <div className="summary-totals">
                                <div className="total-box">
                                  <span className="total-label">Chi phí năm đầu tiên:</span>
                                  <span className="total-value">
                                    {year1Min === 0 && year1Max === 0 
                                      ? "0đ" 
                                      : year1Min === year1Max 
                                        ? `${year1Min.toLocaleString("vi-VN")}đ` 
                                        : `${year1Min.toLocaleString("vi-VN")}đ - ${year1Max.toLocaleString("vi-VN")}đ`
                                    }
                                  </span>
                                </div>
                                <div className="total-box">
                                  <span className="total-label">Duy trì các năm tiếp theo:</span>
                                  <span className="total-value">
                                    {recurringMin === 0 && recurringMax === 0 
                                      ? "0đ" 
                                      : recurringMin === recurringMax 
                                        ? `${recurringMin.toLocaleString("vi-VN")}đ / năm` 
                                        : `${recurringMin.toLocaleString("vi-VN")}đ - ${recurringMax.toLocaleString("vi-VN")}đ / năm`
                                    }
                                  </span>
                                </div>
                              </div>

                              {recommendedOption && (
                                <div className="recommended-badge-alert animate-fade-in">
                                  <strong>✨ Khớp với {recommendedOption}</strong>
                                  <p>{optionDesc}</p>
                                </div>
                              )}

                              <button 
                                type="button" 
                                className="button button-primary calc-apply-btn"
                                onClick={() => {
                                  setClientService(`Tư vấn cấu hình tự chọn: ${designObj.title} + ${domainObj.title} + Vận hành ${opObj.title} (${isYearlyCycle ? "Đóng theo năm" : "Đóng hàng tháng"})`);
                                  const contactSec = document.getElementById("contact");
                                  if (contactSec) {
                                    contactSec.scrollIntoView({ behavior: "smooth" });
                                    const input = contactSec.querySelector("input[name='service']") as HTMLInputElement;
                                    if (input) {
                                      setTimeout(() => input.focus(), 500);
                                    }
                                  }
                                }}
                              >
                                Đăng ký tư vấn cấu hình này
                              </button>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {pricingViewMode === "combos" && (
              <div className="pricing-tab-pane animate-fade-in">
                <div className="subsection-heading">
                  <span className="step-badge">III</span>
                  <h3>Các phương án trọn gói thông dụng</h3>
                  <p>Các phương án tích hợp sẵn hạ tầng giúp website hoạt động tối ưu tức thì.</p>
                </div>

                <div className="combos-grid">
                  {pricingCombos.map((combo) => (
                    <div className={`combo-card-outer ${combo.popular ? "is-popular" : ""}`} key={combo.name}>
                      <div className="combo-card-inner">
                        {combo.popular && <span className="popular-badge">Khuyên dùng</span>}
                        <div className="combo-card-header">
                          <h4>{combo.name}</h4>
                          <p className="combo-tagline">{combo.tagline}</p>
                        </div>
                        
                        <div className="combo-components">
                          <p className="component-line">✔ {combo.designCost}</p>
                          <p className="component-line">✔ {combo.domainCost}</p>
                          <p className="component-line">✔ {combo.opCost}</p>
                        </div>

                        <hr />

                        <div className="combo-pricing">
                          <div className="pricing-box">
                            <span className="pricing-lbl">Chi phí năm đầu:</span>
                            <span className="pricing-val-big">{combo.year1Total}</span>
                          </div>
                          <div className="pricing-box">
                            <span className="pricing-lbl">Duy trì năm tiếp theo:</span>
                            <span className="pricing-val-sub">{combo.nextYearTotal}</span>
                          </div>
                        </div>

                        <p className="combo-target">
                          <strong>Đối tượng:</strong> {combo.target}
                        </p>

                        <button 
                          type="button" 
                          className="button button-primary combo-apply-btn"
                          onClick={() => {
                            setClientService(`Tư vấn trọn gói theo ${combo.name}`);
                            const contactSec = document.getElementById("contact");
                            if (contactSec) {
                              contactSec.scrollIntoView({ behavior: "smooth" });
                              const input = contactSec.querySelector("input[name='service']") as HTMLInputElement;
                              if (input) {
                                setTimeout(() => input.focus(), 500);
                              }
                            }
                          }}
                        >
                          Đăng ký tư vấn Combo này
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Liên hệ</p>
            <h2 id="contact-title">Bắt đầu website mới cho doanh nghiệp của bạn</h2>
            <p>
              Gửi nhu cầu, TAVIWEB sẽ phản hồi với hướng triển khai, thời gian và ngân sách
              phù hợp trong ngày làm việc.
            </p>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <label>
              <span>Họ và tên</span>
              <input type="text" name="name" placeholder="Nguyễn Văn A" autoComplete="name" />
            </label>
            <label>
              <span>Số điện thoại</span>
              <input type="tel" name="phone" placeholder={displayPhone} autoComplete="tel" />
            </label>
            <label>
              <span>Nhu cầu thiết kế</span>
              <input
                type="text"
                name="service"
                placeholder="Ví dụ: Website spa, landing page bất động sản..."
                autoComplete="off"
                value={clientService}
                onChange={(e) => setClientService(e.target.value)}
              />
            </label>
            <button className="button button-primary" type="submit" disabled={isContactSubmitting}>
              {isContactSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
            </button>
            <small className="form-message" role="status" aria-live="polite">
              {contactMessage}
            </small>
          </form>
        </section>
      </main>

      <div className="floating-actions" aria-label="Liên hệ nhanh">
        <a
          className="float-zalo"
          href={`https://zalo.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ Zalo"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M12 2C6.48 2 2 5.84 2 10.59c0 2.82 1.63 5.31 4.14 6.78-.14.54-.51 1.94-.65 2.48-.15.58.29 1.07.82.86.87-.34 2.37-1.04 3.12-1.4 1 .23 2.06.37 3.14.37 5.52 0 10-3.84 10-8.59S17.52 2 12 2z" fill="#ffffff" />
            <text x="12" y="14" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="900" textAnchor="middle" fill="#0068FF">Z</text>
          </svg>
        </a>
        <a
          className="float-phone"
          href={`tel:${phoneNumber}`}
          aria-label={`Gọi ${displayPhone}`}
        >
          <div className="float-phone-icon-box">
            <Phone size={22} strokeWidth={2.5} />
          </div>
          <span className="float-phone-number">{displayPhone}</span>
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">TAVIWEB</Link>
            <p className="footer-tagline">
              Nền tảng thiết kế website thông minh & demo tự động dành cho doanh nghiệp Việt.
            </p>
            <div className="footer-contact-info">
              <p>Email: contact@taviweb.vn</p>
              <p>Hotline: 0337.367.666</p>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Giải pháp</h4>
              <ul>
                <li><Link href="#services">Website Doanh nghiệp</Link></li>
                <li><Link href="#services">Website Sản phẩm</Link></li>
                <li><Link href="#services">Landing Page quảng cáo</Link></li>
                <li><Link href="#services">Bảo trì & Nâng cấp</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Quy trình & Báo giá</h4>
              <ul>
                <li><Link href="#process">Quy trình triển khai</Link></li>
                <li><Link href="#pricing">Gói thiết kế linh hoạt</Link></li>
                <li><Link href="#faq">Câu hỏi thường gặp</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Hỗ trợ & Liên hệ</h4>
              <ul>
                <li><Link href="#contact">Tư vấn thiết kế</Link></li>
                <li><Link href="/kho-giao-dien">Kho giao diện mẫu</Link></li>
                <li><a href="https://zalo.me/0337367666" target="_blank" rel="noopener noreferrer">Liên hệ qua Zalo</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TAVIWEB. Tất cả các quyền được bảo lưu.</p>
          <a href="#main" className="scroll-top-link">Lên đầu trang ↑</a>
        </div>
      </footer>
    </div>
  );
}
