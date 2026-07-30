"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { industryCatalog } from "@/lib/templates/templateCatalog";

const phoneNumber = "0337367643";
const displayPhone = "0337.367.643";

const services = [
  {
    id: "01",
    title: "Website doanh nghiệp",
    text: "Giới thiệu công ty, năng lực, dự án và form nhận yêu cầu với bố cục tin cậy."
  },
  {
    id: "02",
    title: "Website giới thiệu sản phẩm",
    text: "Trình bày danh mục sản phẩm, hình ảnh sắc nét, thông tin chi tiết và nút gọi điện/Zalo đặt hàng nhanh."
  },
  {
    id: "03",
    title: "Landing page quảng cáo",
    text: "Trang chiến dịch có form lead, tracking, nội dung thuyết phục và tốc độ cao."
  },
  {
    id: "04",
    title: "Bảo trì và nâng cấp",
    text: "Tối ưu giao diện, bảo mật, hosting và tích hợp các công cụ tự động hóa."
  }
];

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
                src={`/template-previews/${item.key}.svg`}
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

const pricing = [
  {
    title: "Starter",
    price: "Giá: Liên hệ",
    items: ["Website giới thiệu 5-7 trang", "Responsive mobile", "Form liên hệ cơ bản"],
    cta: "Nhận tư vấn"
  },
  {
    title: "Business",
    price: "Giá: Liên hệ",
    items: ["CMS quản trị nội dung", "Tối ưu tốc độ tải trang", "Livechat, tracking, bảo mật"],
    cta: "Nhận tư vấn"
  },
  {
    title: "Growth",
    price: "Giá: Liên hệ",
    items: ["Website bán hàng hoặc booking", "Tích hợp CRM, automation", "Đo lường chuyển đổi nâng cao"],
    cta: "Nhận tư vấn"
  }
];

export function CompanyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultMessage, setConsultMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

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

        <section className="section content-section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Dịch vụ</p>
            <h2 id="services-title">Website được thiết kế để bán hàng</h2>
            <p>
              TAVIWEB không chỉ dựng giao diện đẹp. Chúng tôi thiết kế luồng chuyển đổi,
              tốc độ tải trang, nội dung CTA và công cụ quản trị để đội ngũ kinh doanh dùng được ngay.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <span className="service-icon" aria-hidden="true">
                  {service.id}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
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
          <div className="section-heading">
            <p className="eyebrow">Quy trình</p>
            <h2 id="process-title">Triển khai rõ ràng từ tư vấn đến vận hành</h2>
            <p>
              Mỗi giai đoạn đều có đầu việc rõ ràng, tiêu chí nghiệm thu cụ thể và người phụ trách
              đồng hành cùng doanh nghiệp.
            </p>
          </div>

          <ol className="process-list">
            <li>
              <strong>Tư vấn mục tiêu</strong>
              <span>Xác định khách hàng, sản phẩm, ngân sách và chỉ số chuyển đổi.</span>
            </li>
            <li>
              <strong>Thiết kế giao diện</strong>
              <span>Dựng layout, nội dung, CTA và trải nghiệm mobile-first.</span>
            </li>
            <li>
              <strong>Lập trình website</strong>
              <span>Xây dựng frontend, CMS, form lead, SEO kỹ thuật và tracking.</span>
            </li>
            <li>
              <strong>Bàn giao và tối ưu</strong>
              <span>Hướng dẫn quản trị, đo hiệu năng, sửa lỗi và bảo trì định kỳ.</span>
            </li>
          </ol>
        </section>

        <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading narrow">
            <p className="eyebrow">Bảng giá</p>
            <h2 id="pricing-title">Gói thiết kế linh hoạt</h2>
            <p>Chi phí được chốt sau khi TAVIWEB nắm rõ phạm vi, nội dung và tính năng.</p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article className="price-card" key={plan.title}>
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="button button-primary" href="#contact">
                  {plan.cta}
                </a>
              </article>
            ))}
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
        <a className="float-zalo" href="#contact" aria-label="Liên hệ Zalo">
          Zalo
        </a>
        <a className="float-phone" href={`tel:${phoneNumber}`} aria-label={`Gọi ${displayPhone}`}>
          {displayPhone}
        </a>
      </div>

      <footer className="site-footer">
        <p>TAVIWEB - Thiết kế website chuyên nghiệp cho doanh nghiệp Việt.</p>
        <a href="#main">Lên đầu trang</a>
      </footer>
    </div>
  );
}
