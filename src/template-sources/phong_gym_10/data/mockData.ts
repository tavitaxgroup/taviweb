import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym10EditorialBlock {
  id: string;
  title: string;
  subtitle: string;
  leftLinkLabel: string;
  rightLinkLabel: string;
  leftCollageImage: string;
  rightCollageImage: string;
}

export interface PhongGym10SneakerModel {
  id: string;
  codeName: string;
  subtitle: string;
  price: string;
  image: string;
}

export interface PhongGym10Data extends ClonedTemplateBaseData {
  promoTickerText: string;
  heroLeftShoeImage: string;
  heroRightShoeImage: string;
  editorialBlocks: PhongGym10EditorialBlock[];
  splitBannerLeftShoe: string;
  splitBannerRightShoe: string;
  sneakerModels: PhongGym10SneakerModel[];
  newsletterHeading: string;
  newsletterSubtext: string;
  newsletterCta: string;
}

export const phongGym10DefaultData: PhongGym10Data = {
  business: {
    name: "PROSPORT MONA",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["support@prosportmona.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:30 - 22:00 mỗi ngày",
    rating: 5.0,
    reviewCount: 615,
    aboutTitle: "Trung Tâm Thể Thao & Trang Phục Tập Luyện ProSport",
    aboutText: [
      "ProSport Mona tiên phong phân phối giày chạy bộ đệm khí công nghệ cao, trang phục tập luyện Gym & Running chuyên nghiệp và phụ kiện thể thao chính hãng."
    ]
  },
  promoTickerText: "MIỄN PHÍ GIAO HÀNG TOÀN QUỐC CHO TẤT CẢ ĐƠN HÀNG HỘI VIÊN",
  hero: {
    eyebrow: "PRO SPORT AIR SERIES",
    title: "AIR MAX 270",
    subtitle:
      "Sở hữu bộ đệm khí gót chân lớn nhất từ trước đến nay, mang lại cảm giác êm ái như đang bước đi trên không trung.",
    ctaText: "Mua Đồ Nam",
    ctaLink: "#bo-suu-tap",
    secondaryCtaText: "Mua Đồ Nữ",
    secondaryCtaLink: "#bo-suu-tap",
    backgroundImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85"
  },
  heroLeftShoeImage:
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=85",
  heroRightShoeImage:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  editorialBlocks: [
    {
      id: "ed-1",
      title: "AIR MAX 270",
      subtitle:
        "Sở hữu bộ đệm khí gót chân lớn nhất từ trước đến nay, mang lại cảm giác êm ái như đang lướt đi trên không trung trong mỗi buổi tập.",
      leftLinkLabel: "Mua Đồ Nam",
      rightLinkLabel: "Mua Đồ Nữ",
      leftCollageImage:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      rightCollageImage:
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "ed-2",
      title: "AIR VAPORMAX FLYKNIT 2",
      subtitle:
        "Bước đột phá công nghệ chạy bộ sau 7 năm nghiên cứu với thân giày sợi dệt Flyknit ôm sát và đế khí hoàn trả năng lượng tối đa.",
      leftLinkLabel: "Mua Đồ Nam",
      rightLinkLabel: "Mua Đồ Nữ",
      leftCollageImage:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
      rightCollageImage:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "ed-3",
      title: "AIR MAX CHO VẬN ĐỘNG VIÊN TRẺ",
      subtitle:
        "Những kiểu dáng thể thao năng động được giới trẻ yêu thích — từ nguyên bản cổ điển '87 đến thế hệ đệm khí Air Max 270 hoàn toàn mới.",
      leftLinkLabel: "Mua Cho Nữ Trẻ",
      rightLinkLabel: "Mua Cho Nam Trẻ",
      leftCollageImage:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
      rightCollageImage:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=85"
    }
  ],
  splitBannerLeftShoe:
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",
  splitBannerRightShoe:
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
  sneakerModels: [
    {
      id: "sm-1",
      codeName: "AIR MAX 1",
      subtitle: "Giày chạy bộ đệm khí cổ điển",
      price: "3,890,000 ₫",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-2",
      codeName: "AIR MAX 10",
      subtitle: "Phiên bản không dây năng động",
      price: "4,290,000 ₫",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-3",
      codeName: "AIR MAX 90",
      subtitle: "Sợi dệt Flyknit thoáng khí",
      price: "4,590,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-4",
      codeName: "AIR MAX 180",
      subtitle: "Đệm khí 180 độ bảo vệ khớp",
      price: "4,190,000 ₫",
      image:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-5",
      codeName: "AIR MAX 43",
      subtitle: "Thiết kế khí động học đường đua",
      price: "4,490,000 ₫",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-6",
      codeName: "AIR MAX 27",
      subtitle: "Hỗ trợ tập Gym & Cardio cường độ cao",
      price: "3,690,000 ₫",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-7",
      codeName: "AIR MAX 50",
      subtitle: "Phối màu Retro thể thao",
      price: "3,990,000 ₫",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-8",
      codeName: "AIR MAX 15",
      subtitle: "Đế cao su chống trượt bền bỉ",
      price: "3,790,000 ₫",
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newsletterHeading: "ĐĂNG KÝ NHẬN EMAIL TỪ PROSPORT",
  newsletterSubtext:
    "Hãy là người đầu tiên cập nhật các sản phẩm thể thao mới nhất, bộ sưu tập giới hạn và ưu đãi đặc quyền từ hệ thống của chúng tôi",
  newsletterCta: "ĐĂNG KÝ NGAY"
};

export const defaultData = phongGym10DefaultData;
export default phongGym10DefaultData;
