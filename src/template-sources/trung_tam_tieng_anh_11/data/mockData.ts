import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTam11CountryItem {
  id: string;
  name: string;
  flagColors: string[];
  flagSymbol?: string;
  schoolsCount: string;
  topUniversities: string[];
  tuitionRange: string;
}

export interface TrungTam11RegionTab {
  id: string;
  tabLabel: string;
  countries: TrungTam11CountryItem[];
}

export interface TrungTam11ServiceTile {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  iconType: "school" | "visa" | "scholarship" | "faq";
}

export interface TrungTam11TemplateData extends ClonedTemplateBaseData {
  heroFlags: Array<{ id: string; name: string; code: string }>;
  regionTabs: TrungTam11RegionTab[];
  serviceTiles: TrungTam11ServiceTile[];
}

export const trungTam11DefaultData: TrungTam11TemplateData = {
  business: {
    name: "Du Học Quốc Anh",
    logo: "",
    phone: ["0908 922 016", "028 3922 0162"],
    email: ["tuvan@duhocquocanh.edu.vn", "hocbong@duhocquocanh.edu.vn"],
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6 (08:30 - 18:00) & Thứ 7 (08:30 - 12:00)",
    rating: 4.95,
    reviewCount: 412,
    experienceYears: "20",
    aboutTitle: "VÀI NÉT VỀ CHÚNG TÔI",
    aboutText: [
      "Thành lập từ năm 2005, Trung tâm Tư vấn Du học & Anh ngữ Quốc Anh trong suốt hơn 20 năm qua đã trở thành điểm đến tin cậy và uy tín hàng đầu của học sinh, sinh viên và quý phụ huynh trên toàn quốc. Chúng tôi là cầu nối vững chắc giữa thế hệ trẻ Việt Nam và hệ thống giáo dục quốc tế.",
      "Đội ngũ chuyên viên tư vấn của Du Học Quốc Anh am hiểu sâu sắc lộ trình học thuật và thủ tục pháp lý, tự hào mang đến cho học sinh những lựa chọn trường và học bổng tối ưu nhất từ hơn 30 quốc gia phát triển. Ngoài ra, chúng tôi còn đồng hành trọn gói từ luyện thi IELTS, xin cấp thị thực (Visa), dịch thuật hồ sơ đến sắp xếp nhà ở và đón sân bay."
    ]
  },
  hero: {
    eyebrow: "Công ty tư vấn du học & Anh ngữ quốc tế",
    title: "DU HỌC QUỐC ANH",
    subtitle: "Thành công của tương lai bắt đầu từ hôm nay",
    ctaText: "TÌM HIỂU NGAY",
    ctaLink: "#tim-truong",
    backgroundImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=85"
  },
  heroFlags: [
    { id: "hf-1", name: "CANADA", code: "CA" },
    { id: "hf-2", name: "AUSTRALIA", code: "AU" },
    { id: "hf-3", name: "NEW ZEALAND", code: "NZ" },
    { id: "hf-4", name: "UK", code: "GB" },
    { id: "hf-5", name: "USA", code: "US" },
    { id: "hf-6", name: "EUROPE", code: "EU" }
  ],
  regionTabs: [
    {
      id: "reg-asia",
      tabLabel: "CHÂU Á",
      countries: [
        {
          id: "c-sg",
          name: "Singapore",
          flagColors: ["#ef3340", "#ffffff"],
          flagSymbol: "★",
          schoolsCount: "28 trường đối tác",
          topUniversities: [
            "Đại học Quốc gia Singapore (NUS)",
            "Học viện Quản lý Singapore (SIM)",
            "Đại học James Cook Singapore"
          ],
          tuitionRange: "Từ 280 - 450 triệu VNĐ/năm"
        },
        {
          id: "c-th",
          name: "Thái Lan",
          flagColors: ["#ef3340", "#00247d", "#ef3340"],
          schoolsCount: "16 trường đối tác",
          topUniversities: [
            "Đại học Quốc tế Chulalongkorn",
            "Đại học Mahidol (MUIC)",
            "Đại học Quốc tế Stamford"
          ],
          tuitionRange: "Từ 95 - 180 triệu VNĐ/năm"
        },
        {
          id: "c-my",
          name: "Malaysia",
          flagColors: ["#010066", "#cc0001", "#ffcc00"],
          flagSymbol: "☪",
          schoolsCount: "22 trường đối tác",
          topUniversities: [
            "Đại học Taylor's Malaysia",
            "Đại học Sunway (Chuyển tiếp Úc/Anh)",
            "Đại học Monash Malaysia"
          ],
          tuitionRange: "Từ 120 - 220 triệu VNĐ/năm"
        },
        {
          id: "c-kr",
          name: "Hàn Quốc",
          flagColors: ["#ffffff", "#cd2e3a", "#0047a0"],
          flagSymbol: "☯",
          schoolsCount: "35 trường đối tác",
          topUniversities: [
            "Đại học Quốc gia Seoul (SNU)",
            "Đại học Yonsei & Korea University",
            "Đại học Hanyang & Kyung Hee"
          ],
          tuitionRange: "Từ 110 - 190 triệu VNĐ/năm"
        }
      ]
    },
    {
      id: "reg-namerica",
      tabLabel: "BẮC MỸ",
      countries: [
        {
          id: "c-us",
          name: "Hoa Kỳ (USA)",
          flagColors: ["#b22234", "#3c3b6e", "#ffffff"],
          flagSymbol: "★",
          schoolsCount: "45 trường đối tác",
          topUniversities: [
            "University of California (Hệ thống UC)",
            "Arizona State University",
            "Oregon State University"
          ],
          tuitionRange: "Học bổng lên đến 50% - 100%"
        },
        {
          id: "c-ca",
          name: "Canada",
          flagColors: ["#ff0000", "#ffffff", "#ff0000"],
          flagSymbol: "🍁",
          schoolsCount: "38 trường đối tác",
          topUniversities: [
            "University of Toronto",
            "University of British Columbia (UBC)",
            "Humber College & Seneca Polytechnic"
          ],
          tuitionRange: "Cơ hội ở lại làm việc 3 năm (PGWP)"
        },
        {
          id: "c-us-hs",
          name: "THPT Nội trú Mỹ",
          flagColors: ["#3c3b6e", "#ffffff", "#b22234"],
          schoolsCount: "25 trường nội trú",
          topUniversities: [
            "CATS Academy Boston",
            "EF Academy New York",
            "Amerigo Education"
          ],
          tuitionRange: "Hỗ trợ tài chính 30% - 70%"
        },
        {
          id: "c-ca-coop",
          name: "Cao đẳng Co-op Canada",
          flagColors: ["#d80621", "#ffffff"],
          schoolsCount: "20 trường Co-op",
          topUniversities: [
            "George Brown College",
            "Douglas College Vancouver",
            "Centennial College"
          ],
          tuitionRange: "Thực tập hưởng lương 100%"
        }
      ]
    },
    {
      id: "reg-europe",
      tabLabel: "CHÂU ÂU",
      countries: [
        {
          id: "c-uk",
          name: "Vương Quốc Anh",
          flagColors: ["#012169", "#c8102e", "#ffffff"],
          schoolsCount: "32 trường đối tác",
          topUniversities: [
            "University of Manchester",
            "University of Bristol",
            "University of Birmingham"
          ],
          tuitionRange: "Thạc sĩ 1 năm - Học bổng Chevening/Trường"
        },
        {
          id: "c-ch",
          name: "Thụy Sĩ",
          flagColors: ["#da291c", "#ffffff"],
          flagSymbol: "✚",
          schoolsCount: "12 học viện QTKS",
          topUniversities: [
            "Học viện Les Roches",
            "Glion Institute of Higher Education",
            "SHMS Swiss Hotel Management School"
          ],
          tuitionRange: "Thực tập hưởng lương 2.300 CHF/tháng"
        },
        {
          id: "c-nl",
          name: "Hà Lan",
          flagColors: ["#ae1c28", "#ffffff", "#21468b"],
          schoolsCount: "18 trường đại học",
          topUniversities: [
            "University of Amsterdam",
            "Erasmus University Rotterdam",
            "The Hague University of Applied Sciences"
          ],
          tuitionRange: "Học bổng Holland Scholarship 5.000 EUR"
        },
        {
          id: "c-de",
          name: "CHLB Đức",
          flagColors: ["#000000", "#dd0000", "#ffce00"],
          schoolsCount: "15 trường công lập",
          topUniversities: [
            "TU Munich",
            "Heidelberg University",
            "Chương trình Du học nghề Kép hưởng lương"
          ],
          tuitionRange: "Miễn 100% học phí đại học công lập"
        }
      ]
    }
  ],
  stats: [
    { id: "st-1", number: "20", title: "Năm kinh nghiệm" },
    { id: "st-2", number: "10", title: "Quốc gia" },
    { id: "st-3", number: "100", title: "Trường liên kết" }
  ],
  serviceTiles: [
    {
      id: "tile-1",
      title: "Tư vấn chọn trường",
      description:
        "Đánh giá năng lực học tập, định hướng ngành nghề xu hướng và chọn trường phù hợp ngân sách gia đình.",
      bgColor: "bg-[#008a00]",
      iconType: "school"
    },
    {
      id: "tile-2",
      title: "Thủ tục Visa",
      description:
        "Hướng dẫn chứng minh tài chính, hoàn thiện hồ sơ pháp lý và luyện phỏng vấn Visa tỷ lệ đậu 99%.",
      bgColor: "bg-[#f0b429]",
      iconType: "visa"
    },
    {
      id: "tile-3",
      title: "Học bổng du học",
      description:
        "Săn học bổng từ 30% đến 100% học phí tại các trường Đại học danh tiếng Anh, Úc, Mỹ, Canada và Châu Á.",
      bgColor: "bg-[#2b7de9]",
      iconType: "scholarship"
    },
    {
      id: "tile-4",
      title: "Tư vấn & hỏi đáp",
      description:
        "Giải đáp toàn diện về chi phí sinh hoạt, ký túc xá, việc làm thêm và cơ hội định cư sau tốt nghiệp.",
      bgColor: "bg-[#e53935]",
      iconType: "faq"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Diệp Trọng Tín",
      role: "Du học sinh Úc • Chuyên ngành Quản trị Khách sạn",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tín chân thành cảm ơn sự hỗ trợ tận tình của chị Tuyết – Chuyên viên tư vấn tại Du Học Quốc Anh đã đồng hành và giúp đỡ Tín thực hiện được chặng đường du học đầy ý nghĩa. Trong tương lai, Tín sẽ tận dụng những kiến thức học được tại trường Les Roches cũng như Kendall, kết hợp với kinh nghiệm thực tiễn từ các kỳ thực tập hưởng lương để phát triển sự nghiệp.”"
    },
    {
      id: "rv-2",
      author: "Nguyễn Hoàng Bảo Ngọc",
      role: "Du học sinh Canada • Học bổng 50% Đại học Toronto",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Nhờ lộ trình luyện thi IELTS cấp tốc và hướng dẫn viết bài luận Personal Statement cực kỳ sắc bén từ đội ngũ Du Học Quốc Anh, mình đã xuất sắc giành được học bổng 50% ngay trong kỳ nhập học mùa Thu.”"
    }
  ],
  clients: [
    { id: "p-1", name: "CAMBRIDGE EDUCATION GROUP" },
    { id: "p-2", name: "SHORELIGHT EDUCATION" },
    { id: "p-3", name: "UTP HIGH SCHOOLS" },
    { id: "p-4", name: "NORD ANGLIA EDUCATION" },
    { id: "p-5", name: "NAVITAS HIGHER EDUCATION" },
    { id: "p-6", name: "SWISS EDUCATION GROUP" }
  ]
};

export default trungTam11DefaultData;
