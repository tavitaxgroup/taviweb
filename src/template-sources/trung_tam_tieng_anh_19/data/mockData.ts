import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SingaporeArticleCard {
  id: string;
  title: string;
  excerpt: string;
  badge?: string;
  date?: string;
  image: string;
}

export interface TrungTamTiengAnh19Data extends ClonedTemplateBaseData {
  hexFeatures: Array<{
    id: string;
    title: string;
    description: string;
    icon: "cap" | "plane" | "award";
    color: "blue" | "slate";
  }>;
  featuredNewsMainImage: string;
  featuredNewsRight: SingaporeArticleCard[];
  seminarCards: SingaporeArticleCard[];
  scholarshipCards: SingaporeArticleCard[];
  sharingBanner: {
    studentPhoto: string;
    avatar: string;
    role: string;
    quote: string;
    name: string;
  };
  advisoryCards: SingaporeArticleCard[];
  experienceCards: SingaporeArticleCard[];
  summerCampCards: SingaporeArticleCard[];
}

export const trungTamTiengAnh19DefaultData = {
  business: {
    name: "Du Học & Anh Ngữ Mona Singapore",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["mon@mona.media", "duhocsingapore@mona.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 780,
    aboutTitle: "CÔNG TY CHUYÊN DU HỌC & ANH NGỮ SINGAPORE",
    aboutText: [
      "Mona Media là đơn vị chuyên Tư vấn Du học và Đào tạo Anh ngữ Học thuật Singapore với hơn 15 năm kinh nghiệm, tư vấn miễn phí tại nhà hoặc văn phòng, miễn phí dịch vụ hồ sơ, tặng vé máy bay và nhiều học bổng giá trị."
    ],
    highlights: [
      "Đối tác tuyển sinh chiến lược của Kaplan, SIM, JCU, Curtin, PSB và MDIS Singapore",
      "Miễn 100% phí dịch vụ tư vấn, dịch thuật hồ sơ và hỗ trợ săn học bổng đến 100%",
      "Tặng vé máy bay chiều đi và hỗ trợ sắp xếp ký túc xá, đón sân bay Changi"
    ]
  },
  hero: {
    eyebrow: "Chương trình du học",
    subtitle:
      "Du học hè & học bổng Singapore 2026. Chương trình ưu đãi đặc biệt dành cho những học sinh đăng ký sớm.",
    title: "SINGAPORE",
    description:
      "Chắp cánh ước mơ công dân toàn cầu với lộ trình du học chuyển tiếp và trại hè Anh ngữ quốc tế tại đảo quốc Sư Tử.",
    ctaText: "Tìm hiểu ngay",
    ctaLink: "#scholarships",
    backgroundImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=85"
  },
  hexFeatures: [
    {
      id: "hx-1",
      title: "GIỚI THIỆU MONA MEDIA",
      description:
        "Đơn vị chuyên Du Học Singapore 15 năm kinh nghiệm, tư vấn miễn phí tại nhà hoặc công ty, miễn phí dịch vụ, tặng vé máy bay và nhiều ưu đãi khác.",
      icon: "cap",
      color: "blue"
    },
    {
      id: "hx-2",
      title: "TƯ VẤN DU HỌC SINGAPORE",
      description:
        "Thông tin trực tiếp do chuyên gia Nguyễn Đăng Hiển – hơn 15 năm kinh nghiệm – tư vấn chi tiết về ngành học, trường học, tài chính và điều kiện du học.",
      icon: "plane",
      color: "slate"
    },
    {
      id: "hx-3",
      title: "KINH NGHIỆM DU HỌC",
      description:
        "Chia sẻ thực tế từ cựu du học sinh và cố vấn học thuật về bí quyết phỏng vấn học bổng, luyện IELTS cấp tốc và hòa nhập tại Singapore.",
      icon: "award",
      color: "blue"
    }
  ],
  featuredNewsMainImage:
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
  featuredNewsRight: [
    {
      id: "fn-1",
      title: "Tuần lễ tư vấn “Sức hút các nhóm ngành Kỹ thuật & AI tại Singapore”",
      excerpt:
        "Du học Singapore khối ngành Công nghệ và Kỹ thuật những năm gần đây đang dẫn đầu nhu cầu tuyển dụng toàn cầu...",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fn-2",
      title: "Học viện Kaplan Singapore miễn phí ghi danh nộp hồ sơ kỳ nhập học mới",
      excerpt:
        "Học viện Kaplan Singapore thông báo chương trình tặng phí ghi danh lên tới 8,5 triệu đồng cho học sinh Việt Nam...",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fn-3",
      title: "Triển lãm Du học tại Học viện SIM Singapore lớn nhất trong năm",
      excerpt:
        "Triển lãm Du học tại Học viện Quản lý Singapore (SIM) quy tụ các đại học đối tác danh tiếng Anh, Úc, Mỹ...",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"
    }
  ],
  seminarCards: [
    {
      id: "sem-1",
      title: "Livestream: Tư vấn trực tuyến Học viện PSB Singapore",
      excerpt:
        "Trường PSB Singapore là một trong các cơ sở giáo dục đại học hàng đầu được cấp chứng nhận EduTrust 4 năm...",
      badge: "HỌC VIỆN PSB SINGAPORE",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sem-2",
      title: "Đại học Curtin Singapore: Tìm hiểu những nhóm ngành hot hiện nay",
      excerpt:
        "Chọn Curtin Singapore là điểm khởi đầu của chuyến hành trình nhận bằng Đại học công lập Úc ngay tại châu Á...",
      badge: "Curtin Singapore",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sem-3",
      title: "Gặp gỡ Hiệu trưởng Học viện Quản lý NIM Singapore",
      excerpt:
        "Gặp gỡ trực tiếp Ban Giám hiệu trường Học viện Quản lý Nanyang Singapore (NIM) trao đổi về thực tập hưởng lương...",
      badge: "NIM SINGAPORE",
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sem-4",
      title: "Hội thảo “Kiến tạo tương lai cùng Học viện MDIS Singapore”",
      excerpt:
        "Việc định hướng nghề nghiệp tương lai là vô cùng quan trọng với khu ký túc xá nội trú hiện đại ngay trong khuôn viên...",
      badge: "MDIS CAMPUS",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=80"
    }
  ],
  scholarshipCards: [
    {
      id: "sch-1",
      title: "Học bổng 40% khóa Thạc sĩ Quản lý Dự án – Trường Auston Singapore",
      excerpt:
        "Chương trình học bổng 40% học phí áp dụng cho học viên Việt Nam có GPA khá giỏi và phỏng vấn sớm...",
      badge: "HỌC BỔNG 40%",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sch-2",
      title: "35 suất học bổng trị giá 100% học phí nhập học tại SIM Singapore",
      excerpt:
        "Chương trình học bổng trị giá 100% học phí trị giá gần 380 triệu VNĐ dành cho học sinh THPT xuất sắc...",
      badge: "HỌC BỔNG 100% SIM GE",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sch-3",
      title: "Thông báo lịch thi Học bổng toàn phần 1 năm học phí tại JCU Singapore",
      excerpt:
        "Đại học James Cook Singapore (JCUS) đã chính thức thông báo kỳ thi xét học bổng Merit Scholarship...",
      badge: "JCU SINGAPORE",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sch-4",
      title: "Học bổng 50% khóa MBA – Học viện Amity Singapore",
      excerpt:
        "Chương trình học bổng trường Amity trị giá lên tới 50% học phí dành cho sinh viên đăng ký bậc Cử nhân & MBA...",
      badge: "50% HỌC PHÍ MBA",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
    }
  ],
  sharingBanner: {
    studentPhoto:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    role: "Du học sinh Đại học Curtin Singapore",
    quote:
      "“Nhờ sự hướng dẫn tận tình của các anh chị tư vấn tại trung tâm, mình đã hoàn tất hồ sơ visa Student Pass chỉ trong 3 tuần và chinh phục học bổng 50% ngành Logistics tại Đại học Curtin Singapore.”",
    name: "Nguyễn Minh Anh"
  },
  advisoryCards: [
    {
      id: "adv-1",
      title: "Hệ thống giáo dục Singapore chuẩn Bộ Giáo Dục MOE",
      excerpt:
        "Hệ thống giáo dục tại Singapore được kế thừa nền tảng chuẩn Anh Quốc và phát triển linh hoạt cho sinh viên quốc tế...",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "adv-2",
      title: "Top 3 trường đào tạo Thạc sỹ kinh doanh quốc tế tốt nhất Singapore",
      excerpt:
        "Singapore được mệnh danh là 1 trong 4 trung tâm kinh tế, tài chính lớn nhất châu Á với bằng cấp giá trị toàn cầu...",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "adv-3",
      title: "Top 5 trường đào tạo Khách sạn, Du lịch thực tập hưởng lương tốt nhất",
      excerpt:
        "Với tiềm năng của ngành du lịch khách sạn, sinh viên được thực tập hưởng lương từ 1.000 - 1.500 SGD/tháng...",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "adv-4",
      title: "Du học Singapore bậc phổ thông từ lớp 9, 10 có những hướng đi nào?",
      excerpt:
        "Lộ trình học Dự bị Đại học Foundation giúp học sinh hoàn tất bằng Cử nhân đại học sớm ở tuổi 19 - 20...",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80"
    }
  ],
  experienceCards: [
    {
      id: "exp-1",
      title: "Học sinh Kaplan chia sẻ cách học giúp đạt GPA xuất sắc",
      excerpt:
        "Cung cấp một chương trình đào tạo linh hoạt, sáng tạo và tối đa hóa kỹ năng thuyết trình nhóm...",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-2",
      title: "Chuẩn bị hành lý trước khi lên đường du học Singapore",
      excerpt:
        "Nên mang những gì khi lên đường du học Singapore? Danh sách giấy tờ IPA, hộ chiếu và vật dụng cần thiết...",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-3",
      title: "Những điều nên biết về văn hóa và giao thông MRT khi đi du học Singapore",
      excerpt:
        "Singapore được biết đến là một trong những quốc gia an toàn, xanh sạch và có hệ thống tàu điện hiện đại nhất...",
      image:
        "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "exp-4",
      title: "Tại sao lựa chọn du học Singapore làm bước đệm chuyển tiếp Úc, Anh?",
      excerpt:
        "Trong một thế giới hội nhập toàn cầu như hiện nay, cơ hội chuyển tiếp sang cơ sở chính tại Úc, Anh vô cùng dễ dàng...",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80"
    }
  ],
  summerCampCards: [
    {
      id: "sum-1",
      title: "Du học hè Singapore tại trường MDIS: Học nhiều, đi chơi ít",
      excerpt:
        "Chương trình được thiết kế với 6 giờ học tiếng Anh phản xạ mỗi ngày kết hợp khám phá khoa học...",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sum-2",
      title: "Ưu đãi đặc biệt đăng ký sớm du học hè Singapore",
      excerpt:
        "Chương trình ưu đãi tặng lệ phí ghi danh và đồng phục trại hè dành cho những học sinh đăng ký sớm...",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sum-3",
      title: "Du học hè Singapore – An toàn, mới lạ, hấp dẫn, bổ ích",
      excerpt:
        "Với những thành công trong việc tổ chức các chương trình du học hè Singapore suốt 10 năm qua...",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sum-4",
      title: "Trại hè Anh ngữ Quốc tế Singapore – Món quà ý nghĩa dành cho con",
      excerpt:
        "Rèn luyện tính tự lập, tự tin giao tiếp tiếng Anh 100% và khám phá Universal Studios, Gardens by the Bay...",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
