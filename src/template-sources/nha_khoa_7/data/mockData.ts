import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa7Data extends ClonedTemplateBaseData {
  circleHighlights: Array<{
    id: string;
    bgColor: string;
    title: string;
  }>;
  pillars: Array<{
    id: string;
    title: string;
    description: string;
    color: string;
    image: string;
  }>;
  agePrograms: Array<{
    id: string;
    title: string;
    image: string;
    description: string;
  }>;
  aboutBento: {
    mainImage: string;
    visionTitle: string;
    visionText: string;
    subImages: [string, string];
    missionTitle: string;
    missionText: string;
    coreTitle: string;
    coreText: string;
  };
  gallery: string[];
}

export const nhaKhoa7DefaultData: NhaKhoa7Data = {
  business: {
    name: "Maitri Dental Kids",
    phone: ["0313 728 397", "1900 886 897"],
    email: ["info@maitridental.vn", "tuvan@maitridental.vn"],
    address:
      "1073/23 Cách Mạng Tháng Tám, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 980,
    aboutTitle: "Về Maitri Dental",
    aboutText: [
      "Maitri Dental là trung tâm nha khoa trẻ em và chỉnh nha tăng trưởng chuyên sâu, mang đến trải nghiệm khám răng nhẹ nhàng, vui vẻ và hoàn toàn không đau."
    ],
  },
  hero: {
    eyebrow: "Maitri Dental",
    title: "Tình yêu nụ cười trẻ thơ từ tâm",
    subtitle:
      "Chăm sóc răng sữa, dự phòng sâu răng và niềng răng tăng trưởng sớm giúp bé tự tin tỏa sáng mỗi ngày.",
    ctaText: "ĐĂNG KÝ KHÁM THỬ",
    ctaLink: "#dang-ky-kham",
    backgroundImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=85",
  },
  circleHighlights: [
    {
      id: "ch-1",
      bgColor: "#f06292",
      title: "Trung tâm Maitri Dental chuẩn nha khoa nhi quốc tế AAPD.",
    },
    {
      id: "ch-2",
      bgColor: "#ffca28",
      title: "Áp dụng 100% quy trình điều trị không đau, tâm lý thân thiện.",
    },
    {
      id: "ch-3",
      bgColor: "#81c784",
      title: "Khu vui chơi đọc sách & làm quen ghế nha trước giờ khám.",
    },
    {
      id: "ch-4",
      bgColor: "#4db6ac",
      title: "Thiết bị chụp phim X-Quang kỹ thuật số liều tia cực thấp.",
    },
    {
      id: "ch-5",
      bgColor: "#66bb6a",
      title: "Đội ngũ bác sĩ Răng Hàm Mặt thấu hiểu tâm lý trẻ nhỏ.",
    },
  ],
  pillars: [
    {
      id: "pl-1",
      title: "Khám qua trải nghiệm.",
      description:
        "Bé được làm quen với các dụng cụ nha khoa thông qua trò chơi nhập vai 'Bác sĩ nhí' thú vị. Nhờ đó xóa bỏ hoàn toàn nỗi sợ phòng khám và tiếng máy nha khoa ngay từ lần hẹn đầu tiên.",
      color: "#e91e63",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "pl-2",
      title: "Hướng đến tự giác.",
      description:
        "Bác sĩ hướng dẫn bé cách chải răng đúng chuẩn Bass và dùng chỉ nha khoa khoa học. Sự độc lập trong thói quen vệ sinh răng miệng mỗi sáng tối giúp bảo vệ men răng sữa bền vững.",
      color: "#8bc34a",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "pl-3",
      title: "Nụ cười phát triển tự nhiên.",
      description:
        "Theo dõi sát sao lịch thay răng sữa và mầm răng vĩnh viễn từ 6 – 12 tuổi. Can thiệp khí cụ tiền chỉnh nha đúng thời điểm vàng giúp xương hàm phát triển hài hòa, hạn chế nhổ răng.",
      color: "#0099cc",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "pl-4",
      title: "Bác sĩ tận tâm vì trẻ.",
      description:
        "Tại Maitri Dental, mỗi bác sĩ và phụ tá đều kiên nhẫn lắng nghe cảm xúc của bé. Không ép buộc điều trị khi trẻ chưa sẵn sàng, luôn khích lệ và trao huy chương dũng cảm sau mỗi buổi khám.",
      color: "#f26522",
      image:
        "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=400&q=80",
    },
  ],
  agePrograms: [
    {
      id: "ap-1",
      title: "Chăm sóc răng sữa ( 18 tháng – 5 Tuổi )",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
      description:
        "Bôi Vecni Fluoride ngừa sâu răng, trám bít hố rãnh sinh học và theo dõi mầm răng sữa đầu đời nhẹ nhàng.",
    },
    {
      id: "ap-2",
      title: "Tiền chỉnh nha & Thay răng ( 6 – 12 Tuổi )",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
      description:
        "Tầm soát lệch lạc khớp cắn, hàm Trainer Myobrace và nong hàm tăng trưởng không đau cho trẻ đang thay răng.",
    },
  ],
  aboutBento: {
    mainImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    visionTitle: "Tầm nhìn phát triển",
    visionText:
      "Hướng đến một thế hệ trẻ em Việt Nam sở hữu nụ cười khỏe mạnh, không sâu răng và phát triển khung xương mặt cân đối ngay từ thời thơ ấu.",
    subImages: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
    ],
    missionTitle: "Sứ mệnh",
    missionText:
      "Maitri Dental cam kết nỗ lực hết mình để xóa bỏ nỗi ám ảnh khám răng ở trẻ nhỏ – kiến tạo môi trường nha khoa nơi trẻ là trung tâm, được yêu thương, tôn trọng và bảo vệ nụ cười tự nhiên nhất.",
    coreTitle: "Giá trị cốt lõi",
    coreText:
      "Giá trị cốt lõi của Maitri Dental nằm trong chính cái tên Maitri – trong tiếng Phạn có nghĩa là tình yêu thương vô điều kiện từ tâm. Tình yêu này được thể hiện qua:\n– Nha khoa lấy tâm lý trẻ thơ làm trung tâm.",
  },
  news: [
    {
      id: "nk7-n1",
      title: "Khám răng định kỳ, không còn là nỗi sợ của bé mỗi dịp cuối tuần",
      date: "16 Tháng Năm, 2025",
      category: "TÂM LÝ TRẺ",
      excerpt:
        "Vào một chiều cuối tuần, bé Minh Anh (5 tuổi) nắm tay mẹ bước vào phòng khám và hào hứng khoe: 'Bác sĩ ơi hôm nay con tự đánh răng sạch lắm!'...",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk7-n2",
      title: "Back to school: Chào mừng năm học mới với nụ cười trắng sáng",
      date: "16 Tháng Năm, 2025",
      category: "SỰ KIỆN",
      excerpt:
        "Năm học mới là cột mốc vô cùng ý nghĩa đối với các bé tiểu học. Maitri Dental triển khai chương trình tầm soát thay răng và bôi Fluoride miễn phí...",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk7-n3",
      title: "Hello Grade 1 with Maitri Kids – Thời điểm vàng chỉnh nha sớm",
      date: "16 Tháng Năm, 2025",
      category: "CHỈNH NHA NHI",
      excerpt:
        "Khi bé bước vào lớp 1 (6 tuổi), chiếc răng hàm lớn vĩnh viễn số 6 bắt đầu mọc. Đây cũng là giai đoạn vàng để bác sĩ kiểm tra cung hàm cho con...",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=300&q=80",
  ],
};
