export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  sector: 'logistics' | 'governance' | 'capital' | 'private-wealth' | 'energy';
  sectorLabel: string;
  location: string;
  year: string;
  scale: string;
  imageUrl: string;
  archivalRecord: string;
  categoryTag: string;
  challenge: string;
  intervention: string;
  quantitativeImpact: string;
  auditSignOff: string;
  overview: string;
  keyDeliverables: string[];
  timelineMonths: number;
  leadPartner: string;
}

export interface PracticeArea {
  id: string;
  code: string;
  sectionCode: string;
  titleVi: string;
  titleEn: string;
  description: string;
  focusAreas: string[];
  metricsHighlight: string;
  methodology: string;
  typicalMandate: string;
  samplePrecedent: string;
}

export interface ThoughtPiece {
  id: string;
  folioId: string;
  issue: string;
  date: string;
  title: string;
  subtitle: string;
  author: string;
  readTime: string;
  category: string;
  abstract: string;
  contentParagraphs: string[];
  citation: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  coordinates: string;
  address: string;
  phone: string;
  directEmail: string;
  status: string;
  localTimezone: string;
}

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Zurich',
    country: 'Thụy Sĩ',
    coordinates: "47°22'N 8°32'E",
    address: 'Bahnhofstrasse 45, 8001 Zürich',
    phone: '+41 44 214 88 00',
    directEmail: 'zurich@monogram.ch',
    status: 'Trụ sở Điều hành Thể chế & Quản trị Rủi ro',
    localTimezone: 'Europe/Zurich',
  },
  {
    city: 'Tokyo',
    country: 'Nhật Bản',
    coordinates: "35°41'N 139°45'E",
    address: 'Marunouchi 1-Chome, Chiyoda-ku, Tokyo 100-0005',
    phone: '+81 3 5220 8100',
    directEmail: 'tokyo@monogram.jp',
    status: 'Văn phòng Cố vấn Vốn Tư nhân & Chuỗi Cung ứng Bắc Á',
    localTimezone: 'Asia/Tokyo',
  },
  {
    city: 'Hà Nội',
    country: 'Việt Nam',
    coordinates: "21°01'N 105°51'E",
    address: 'Số 15 Lý Thái Tổ, Hoàn Kiếm, Hà Nội',
    phone: '+84 (0) 24 8899 0000',
    directEmail: 'hanoi@monogram.vn',
    status: 'Trung tâm Điều phối Chiến lược Châu Á - Thái Bình Dương',
    localTimezone: 'Asia/Bangkok',
  },
];

export const PRACTICES: PracticeArea[] = [
  {
    id: 'advisory',
    code: '01',
    sectionCode: 'SEC. A',
    titleVi: 'Cố vấn chiến lược cấp cao',
    titleEn: 'Executive Strategy Advisory',
    description:
      'Đồng hành cùng Chủ tịch HĐQT và Tổng Giám đốc điều hành trong việc định vị chiến lược dài hạn, hoạch định kịch bản ứng phó biến động vĩ mô và tái cấu trúc mô hình kinh doanh cốt lõi.',
    focusAreas: [
      'Chiến lược tăng trưởng thể chế & Định vị cạnh tranh dài hạn',
      'Đánh giá hiệu lực HĐQT và phân bổ thẩm quyền điều hành',
      'Hoạch định kịch bản rủi ro địa chính trị và tái cấu trúc địa bàn',
      'Kế hoạch chuyển giao thế hệ lãnh đạo và chuẩn bị kế nhiệm',
    ],
    metricsHighlight: 'Bảo toàn trung bình +22% giá trị vốn hóa sau tái định vị chiến lược',
    methodology: 'Khung phân tích động lực cạnh tranh Swiss Grid Strategy Framework',
    typicalMandate: 'Nhiệm kỳ 12 – 36 tháng, báo cáo trực tiếp Hội đồng Quản trị',
    samplePrecedent: 'Tái định vị chiến lược Tập đoàn Công nghiệp Nặng quy mô 850M USD',
  },
  {
    id: 'operations',
    code: '02',
    sectionCode: 'SEC. B',
    titleVi: 'Chuyển đổi số & Vận hành',
    titleEn: 'Institutional Operations & Tech',
    description:
      'Tái thiết kế quy trình kinh doanh, xây dựng kiến trúc dữ liệu thời gian thực và tự động hóa chuỗi cung ứng nhằm triệt tiêu độ trễ điều hành và tối ưu hóa biên lợi nhuận.',
    focusAreas: [
      'Kiến trúc tổ chức tinh gọn và phân quyền vận hành vi mô',
      'Tự động hóa chuỗi cung ứng, kho vận thông minh và logistics cầu cảng',
      'Hệ thống điều hành dữ liệu số hóa thời gian thực (Executive Real-time Cockpit)',
      'Kiểm toán và tái cấu trúc chi phí vận hành OpEx/CapEx',
    ],
    metricsHighlight: 'Giảm 25 – 35% độ trễ ra quyết định và tăng 14.2% biên lợi nhuận hoạt động',
    methodology: 'Lean Institutional Operations Protocol (LIOP-v3)',
    typicalMandate: 'Dự án thực thi 6 – 18 tháng kèm giám sát chuyển giao',
    samplePrecedent: 'Tự động hóa cụm hạ tầng cảng biển & kho trung chuyển quốc tế Hải Phòng',
  },
  {
    id: 'capital',
    code: '03',
    sectionCode: 'SEC. C',
    titleVi: 'Tái cấu trúc vốn & Đầu tư',
    titleEn: 'Capital & M&A Strategy',
    description:
      'Cấu trúc các thương vụ sáp nhập, thoái vốn, liên doanh xuyên biên giới và tối ưu hóa bảng cân đối kế toán thể chế với tính bảo mật và chuẩn mực thẩm định cao nhất.',
    focusAreas: [
      'Thẩm định chiến lược thương vụ M&A và cố vấn độc lập bên mua/bên bán',
      'Cấu trúc vốn tối ưu, phát hành trái phiếu quốc tế và đàm phán nợ thể chế',
      'Tích hợp sau sáp nhập (Post-Merger Integration) và đồng bộ văn hóa quản trị',
      'Cơ cấu lại danh mục tài sản tài chính và thanh lý tài sản thứ yếu',
    ],
    metricsHighlight: 'Đã hoàn tất tư vấn các thương vụ tích lũy trên 4.8 tỷ USD giá trị giao dịch',
    methodology: 'Bảo mật kép Swiss Dual-Blind Valuation & Deal Architecture',
    typicalMandate: 'Theo chu kỳ giao dịch thương vụ hoặc tái cấp vốn 6 – 24 tháng',
    samplePrecedent: 'Cấu trúc thương vụ M&A năng lượng tái tạo xuyên biên giới 1.2 Tỷ USD',
  },
  {
    id: 'governance',
    code: '04',
    sectionCode: 'SEC. D',
    titleVi: 'Quản trị rủi ro & Tuân thủ',
    titleEn: 'Enterprise Governance & Compliance',
    description:
      'Thiết lập khung quản trị thể chế theo chuẩn mực minh bạch Thụy Sĩ, phòng ngừa xung đột lợi ích nội bộ, quản trị rủi ro pháp lý và bảo vệ uy tín thương hiệu lâu dài.',
    focusAreas: [
      'Hiến pháp gia tộc và quy chế vận hành Văn phòng Gia tộc (Family Office)',
      'Hệ thống kiểm soát nội bộ 3 tuyến phòng thủ và phòng chống gian lận',
      'Tuân thủ pháp lý tài phán chéo (Thụy Sĩ, Nhật Bản, Singapore, Việt Nam)',
      'Quản trị rủi ro an ninh mạng và dữ liệu bảo mật cấp Hội đồng',
    ],
    metricsHighlight: 'Triệt tiêu 100% rủi ro xung đột thẩm quyền và đạt kiểm toán Big 4 không ngoại trừ',
    methodology: 'Swiss Code of Best Practice for Corporate Governance (SCBP-2024)',
    typicalMandate: 'Thiết lập khung thể chế vĩnh viễn và cố vấn giám sát độc lập',
    samplePrecedent: 'Tái cơ cấu mô hình quản trị gia tộc đa thế hệ quy mô 2.4 Tỷ CHF tại Zurich',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-04',
    number: '04',
    title: 'Tái thiết lập hệ thống quyết sách trong thời gian thực.',
    subtitle: 'Giải pháp kiến trúc tổ chức tinh gọn và chuyển đổi hệ quản trị phân tán đa thẩm quyền',
    sector: 'energy',
    sectorLabel: 'Năng Lượng & Tài Chính',
    location: 'Châu Á - Thái Bình Dương',
    year: '2024-2025',
    scale: '> 1.2 Tỷ USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaHOZIkXK50_R8DSwirRxaHxUpkUkdfetkLKZq0nmtr6tzYS920WU07829uAU5bYBPVuabdlHYQADFs02kYsmQfcT0v6EXjqasbwj86WGQHAF2-3VS_HEKeicDgjkgGlr84fLzDycCSnlQqvvdm3dP5etMerFHf9YdGSi7RbNq0414ka9jLw7pMcTjFBWpXywjkC422_0pYp8ku3Mz_x12pK_Q7x8PIXiScEKJEq5ftgBIoAvRji9hqw',
    archivalRecord: 'CASE STUDY NO. 04 // 2024-25',
    categoryTag: 'CỐ VẤN CHUYỂN ĐỔI VẬN HÀNH ĐA QUỐC GIA',
    challenge:
      'Tối ưu hoá mô hình vận hành đa quốc gia và phân cấp rủi ro trong bối cảnh tái cấu trúc chuỗi cung ứng khu vực Đông Nam Á, nơi mạng lưới chi nhánh phân tán gây độ trễ thông tin từ 14 đến 21 ngày.',
    intervention:
      'Định hình kiến trúc tổ chức tinh gọn, tích hợp hệ thống kiểm soát tuân thủ và trao quyền ra quyết định dữ liệu thời gian thực thông qua Executive War Room độc lập chuẩn Thụy Sĩ.',
    quantitativeImpact: 'Giảm 28% độ trễ điều hành · Tăng trưởng biên lợi nhuận +14.2%',
    auditSignOff: 'Kiểm toán độc lập EY & Biên bản nghiệm thu Q4/2024',
    overview:
      'Dự án can thiệp thể chế sâu rộng nhằm tái lập quyền kiểm soát trung tâm đối với 14 thực thể thành viên tại 6 quốc gia Châu Á. Monogram đóng vai trò Cố vấn Chiến lược Độc lập kiêm Trọng tài Kiến trúc Vận hành.',
    keyDeliverables: [
      'Bản đồ phân rã thẩm quyền Ma trận Quyết định (Delegation of Authority Matrix)',
      'Hệ thống điều hành chỉ số tài chính - vận hành tập trung độ trễ < 60 giây',
      'Bộ quy tắc xử lý khủng hoảng thanh khoản và rủi ro chuỗi cung ứng địa chính trị',
      'Đào tạo chuyển giao toàn bộ 48 cán bộ quản lý cấp cao và hội đồng điều hành',
    ],
    timelineMonths: 14,
    leadPartner: 'Dr. Henrik von Bern (Zurich) & Hoàng Đăng Trình (Hà Nội)',
  },
  {
    id: 'case-01',
    number: '01',
    title: 'Tự động hóa vận hành cảng & kho trung chuyển',
    subtitle: 'Số hóa toàn diện hạ tầng cầu bến & tối ưu hóa luân chuyển hàng hóa',
    sector: 'logistics',
    sectorLabel: 'Logistics & Chuỗi Cung Ứng',
    location: 'Hải Phòng',
    year: '2024',
    scale: '450 Triệu USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4umnLPOBdkHLV9rGF4wMrnghocYjfjSgoccQZXn5GQ6kA0balVlMwySf9kcQznGcPHAe-XpCPlFQCkoTcnQuk1m9ikW0M2kbe-uaDMZk90ABBm3hvN9J5K_0n46UAlbeaN2-XhGGPKxFMw0u6M-zQQFIderI2VfE9Ix675U6if9twSuDz9rhL_umX9rprlyFe_sPqvRO69EeuCHxAIaWVSIZtbOlLHcGT1ex0lOqQ4B3ISQx7VA9Jfg',
    archivalRecord: 'CASE STUDY NO. 01 // 2024',
    categoryTag: 'LOGISTICS & CHUỖI CUNG ỨNG',
    challenge:
      'Hạ tầng cầu bến tại Hải Phòng gặp tình trạng nút cổ chai vận hành khi lưu lượng TEU tăng 42% trong 18 tháng, thời gian tàu neo đậu chờ giải phóng hàng kéo dài làm tăng phí demurrage hàng triệu USD.',
    intervention:
      'Ứng dụng mô hình Digital Twin cảng biển, tái thiết kế luồng di chuyển của xe nâng tự hành AGV và thiết lập hệ thống xếp dỡ tự động đồng bộ theo thuật toán luân chuyển container.',
    quantitativeImpact: 'Tăng 34.6% thông lượng cảng bến · Tiết giảm 31% chi phí nhiên liệu & nhân công',
    auditSignOff: 'Tổ chức Giám định Hàng hải Quốc tế & KPMG Vietnam 2024',
    overview:
      'Chương trình số hóa cảng biển hiện đại nhất khu vực phía Bắc, kết nối trực tiếp hải quan cảng và trung tâm logistics nội địa 24/7.',
    keyDeliverables: [
      'Bản thiết kế kỹ thuật vận hành tự động bến bãi (Port Operations Blueprint)',
      'Hệ thống điều phối xe nâng AGV không người lái và cẩu trục STS thông minh',
      'Giao thức tích hợp dữ liệu thời gian thực giữa tàu hàng, kho bãi và hải quan điện tử',
    ],
    timelineMonths: 11,
    leadPartner: 'Markus Keller & Nguyễn Quang Huy',
  },
  {
    id: 'case-02',
    number: '02',
    title: 'Tái cơ cấu mô hình quản trị doanh nghiệp gia đình',
    subtitle: 'Thiết lập hội đồng gia tộc và cơ chế kiểm soát minh bạch đa thế hệ',
    sector: 'governance',
    sectorLabel: 'Tổ Chức Thể Chế',
    location: 'Zurich & Geneva',
    year: '2024',
    scale: '2.4 Tỷ CHF',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1U39mV2EUwJfENcuR-Y5cBTHyoLjHee2wptpwvPpgIATz5dWNS7aRGTn2Q4lRnpjHVE0g1tvob40AYNRp6Z1I5g8vszodKf-PBZxsgIOdlRA6l50zXicNwEGy-5e1i8O5J3TuMCF4XYDhTWu2cJCvBogONX-mjEKn5CpwAt4BUdWTSprbGH7XxW6Mu0Rcc2MyiRg1MuO7Y4nWEEPl0hemcW6THyK6eLjSbS1E-mUoBZGOM5zfeuMnWUWjKn',
    archivalRecord: 'CASE STUDY NO. 02 // 2024',
    categoryTag: 'TỔ CHỨC THỂ CHẾ GIA TỘC',
    challenge:
      'Giai đoạn chuyển giao quyền lực từ thế hệ thứ hai sang thế hệ thứ ba gặp bế tắc về phân bổ cổ phần biểu quyết và sự thiếu rạch ròi giữa quyền sở hữu tài sản gia tộc và quyền điều hành tập đoàn.',
    intervention:
      'Xây dựng Hiến chương Gia tộc Thụy Sĩ (Swiss Family Charter), tách biệt hoàn toàn Hội đồng Gia tộc và Ban Tổng Giám đốc Chuyên nghiệp, thành lập quỹ tín thác bất khả thu hồi.',
    quantitativeImpact: 'Minh bạch 100% cấu trúc sở hữu · Bảo toàn 100% tài sản không bị chia cắt',
    auditSignOff: 'Tòa án Thương mại Zurich & PwC Swiss Private Client 2024',
    overview:
      'Dự án kéo dài 18 tháng mang tính biểu tượng về sự hài hòa giữa tình cảm gia tộc và kỷ luật doanh nghiệp khắt khe nhất Châu Âu.',
    keyDeliverables: [
      'Hiến chương Gia tộc Monogram Family Governance Constitution (120 điều khoản)',
      'Cấu trúc Hội đồng Quản trị độc lập với 3 thành viên ngoài gia tộc',
      'Chính sách phân phối cổ tức và quỹ đầu tư mạo hiểm nội bộ thế hệ trẻ (Gen 3 Fund)',
    ],
    timelineMonths: 18,
    leadPartner: 'Dr. Beatrix Meier & Jean-Claude Favre',
  },
  {
    id: 'case-03',
    number: '03',
    title: 'Chiến lược quản trị tài sản và chuyển giao thế hệ',
    subtitle: 'Cấu trúc ủy thác tài phán chéo bảo toàn giá trị vốn dài hạn',
    sector: 'private-wealth',
    sectorLabel: 'Tài Chính Tư Nhân',
    location: 'Tokyo',
    year: '2025',
    scale: '850 Triệu USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1W-oLRyUt_jih4vtsx9Ce5jHcR4R9pKoRcjosX52qYMabIAbuNktOiKID_UWyZIoVheKtOEIO2PBFcfHLhlSGa9UbEFATXy-S7xdLdpVfV7qy3WtcejWDFr4AYPdF47BPcwv_aN5ettbNp__R4KQwYbRc24mqrdroJkeSIMTkjwvvIzgoqoSc1fKjRGQ2H-2pDdcmRJUnPiBhn8yGe2cq5hQHGd7I7B0S4rw2zDU_jVi7V5D1qcXf7291KV',
    archivalRecord: 'CASE STUDY NO. 03 // 2025',
    categoryTag: 'TÀI CHÍNH TƯ NHÂN & BẢO TOÀN VỐN',
    challenge:
      'Khách hàng sở hữu khối tài sản phức tạp gồm bất động sản tại Ginza/Shinjuku, danh mục cổ phiếu niêm yết tại Mỹ và các khoản đầu tư vốn cổ phần chưa niêm yết chịu rủi ro thuế thừa kế lên tới 55% tại Nhật.',
    intervention:
      'Thiết kế cấu trúc ủy thác đa tầng tài phán chéo kết hợp giữa Tokyo, Singapore và Zurich, phân bổ lại dòng tiền cổ tức và thành lập quỹ đầu tư từ thiện bảo tồn di sản văn hóa nghệ thuật.',
    quantitativeImpact: 'Tối ưu 38% nghĩa vụ thuế hợp pháp · Tăng tỷ suất sinh lời danh mục ròng lên 8.4%/năm',
    auditSignOff: 'Mori Hamada & Matsumoto và Deloitte Tokyo 2025',
    overview:
      'Giải pháp quản trị gia sản tinh vi cho gia tộc công nghiệp hàng đầu Tokyo, tuân thủ tuyệt đối các chuẩn mực chống trốn thuế quốc tế CRS và FATCA.',
    keyDeliverables: [
      'Khung phân bổ tài sản chiến lược Strategic Asset Allocation (SAA)',
      'Hồ sơ pháp lý ủy thác đa tài phán (Multi-jurisdictional Trust Dossier)',
      'Cơ chế giám sát độc lập bảo toàn tài sản cho 4 đời thừa kế tiếp nối',
    ],
    timelineMonths: 9,
    leadPartner: 'Kenji Sato & Dr. Henrik von Bern',
  },
  {
    id: 'case-05',
    number: '05',
    title: 'Tái định vị thể chế tập đoàn bất động sản nghỉ dưỡng sinh thái',
    subtitle: 'Tái cấu trúc 600 triệu USD nợ trái phiếu và kiến tạo chuẩn mực phát triển bền vững',
    sector: 'capital',
    sectorLabel: 'Tái Cấu Trúc Vốn & M&A',
    location: 'Đà Nẵng & Singapore',
    year: '2024-2025',
    scale: '620 Triệu USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl73rKkloXxr9hY5KzH2VMSRpMLsoNGSPLrvTJPfY26mbaV_gj4r3789YAh3DqNokio_kKr0sbzn82hvWHl5i_bGdjQraNBxscce8be6KN8zJRHMEkqE8wZAZZKI64KFb4dEUXtL1JbdvhcwivTSkjwSG5bXtoHy5IyOAjdf3MBh8DVUc3SHjWdK-wBL2orPc9IDDamWQ1oLQ8tUcCK1pO-ElDK0int5y6Ff7UAvlxdNZFjQRAoocqkQ',
    archivalRecord: 'CASE STUDY NO. 05 // 2024-25',
    categoryTag: 'TÁI CẤU TRÚC VỐN THỂ CHẾ',
    challenge:
      'Tập đoàn đối mặt áp lực đáo hạn trái phiếu trong bối cảnh thị trường đóng băng và cấu trúc sở hữu chéo phức tạp với 22 công ty con.',
    intervention:
      'Monogram dẫn dắt đàm phán gia hạn kỳ hạn nợ với 18 tổ chức tín dụng, tái cấu trúc bảng cân đối, thoái vốn khỏi 5 dự án không trọng điểm và thu hút dòng vốn cổ phần chiến lược 150 triệu USD từ Singapore.',
    quantitativeImpact: 'Kéo dài kỳ hạn nợ thêm 4.5 năm · Giảm 240 điểm cơ bản chi phí lãi vay bình quân',
    auditSignOff: 'Hội đồng Chủ nợ & Ernst & Young Singapore Q1/2025',
    overview:
      'Một trong những thương vụ tái cấu trúc nợ thể chế thành công nhất khu vực Đông Nam Á trong chu kỳ thanh khoản thắt chặt.',
    keyDeliverables: [
      'Kế hoạch phục hồi tài chính toàn diện (Comprehensive Restructuring Plan)',
      'Mô hình dòng tiền dự báo động 36 tháng có kiểm định độ nhạy',
      'Thỏa thuận tái cơ cấu nợ tập thể Inter-creditor Agreement (ICA)',
    ],
    timelineMonths: 15,
    leadPartner: 'Hoàng Đăng Trình & Beatrix Meier',
  },
];

export const THOUGHT_PIECES: ThoughtPiece[] = [
  {
    id: 'thought-01',
    folioId: 'FOLIO-2025-01',
    issue: 'Ấn bản Quý I / 2025',
    date: 'Tháng 1, 2025',
    title: 'Vị thế của tính độc lập trong thời đại tái định hình chuỗi cung ứng toàn cầu',
    subtitle: 'Vì sao những quyết sách sinh tử của Hội đồng Quản trị cần một trọng tài chiến lược ngoài hệ thống',
    author: 'Dr. Henrik von Bern — Đối tác Sáng lập Monogram Zurich',
    readTime: '8 phút đọc',
    category: 'Thể Chế & Địa Chính Trị',
    abstract:
      'Khi chuỗi cung ứng toàn cầu chuyển dịch từ hiệu quả chi phí sang khả năng chống chịu địa chính trị, các tập đoàn đa quốc gia đứng trước áp lực phải đưa ra các quyết định tái định vị có tính chất không thể đảo nghịch.',
    contentParagraphs: [
      'Trong lịch sử hơn hai thế kỷ của ngành tư vấn thể chế Thụy Sĩ, bài học lớn nhất luôn là: sự thiên vị nội bộ (internal bias) và áp lực báo cáo ngắn hạn từ cổ đông là hai tác nhân phổ biến nhất hủy hoại tầm nhìn dài hạn của một tổ chức.',
      'Khi một tập đoàn quyết định dịch chuyển một chuỗi nhà máy sản xuất trị giá hàng tỷ USD từ một quốc gia sang một địa bàn mới, đó không đơn thuần là bài toán logistics hay ưu đãi thuế. Đó là bài toán về cam kết thể chế, sự ổn định tư pháp và năng lực bảo tồn bí quyết công nghệ.',
      'Một trọng tài tư vấn độc lập không tìm kiếm hợp đồng triển khai phần mềm tiếp nối. Sứ mệnh duy nhất của chúng tôi là đặt ra những câu hỏi khó chịu nhất mà không thành viên HĐQT nào dám lên tiếng, từ đó bảo vệ giá trị vĩnh cửu của thể chế.',
    ],
    citation: 'Monogram Strategic Folio, Vol. 14, pp. 12-29 (Zurich & Hanoi)',
  },
  {
    id: 'thought-02',
    folioId: 'FOLIO-2025-02',
    issue: 'Ấn bản Quý II / 2025',
    date: 'Tháng 4, 2025',
    title: 'Hạ tầng dữ liệu thời gian thực: Khi độ trễ điều hành tiệm cận bằng không',
    subtitle: 'Nghịch lý dư thừa báo cáo và sự tê liệt ra quyết định ở cấp C-Suite',
    author: 'Hoàng Đăng Trình — Giám đốc Điều hành Monogram Hanoi',
    readTime: '6 phút đọc',
    category: 'Vận Hành & Chuyển Đổi Số',
    abstract:
      'Hầu hết các tập đoàn lớn hiện nay không thiếu dữ liệu — họ chết chìm trong các báo cáo Excel 200 trang được chuẩn bị chậm 3 tuần. Làm thế nào để xây dựng một Executive War Room chuẩn xác như phòng điều khiển vệ tinh?',
    contentParagraphs: [
      'Nếu dữ liệu đưa lên bàn họp Hội đồng Quản trị là dữ liệu của 30 ngày trước, thì trên thực tế, ban điều hành đang lái một con tàu khổng lồ bằng cách nhìn vào gương chiếu hậu.',
      'Sự chuyển dịch mang tính đột phá của Monogram tại các tập đoàn năng lượng và logistics không nằm ở việc mua thêm các gói phần mềm ERP đắt đỏ, mà nằm ở việc tinh gọn các chỉ số đo lường: chỉ giữ lại 7 chỉ số sống còn phản ánh sức khỏe dòng tiền, an toàn vận hành và biên lợi nhuận ròng.',
      'Khi độ trễ thông tin giảm từ 14 ngày xuống dưới 60 giây, năng lực phòng ngừa rủi ro của doanh nghiệp tăng lên theo cấp số nhân.',
    ],
    citation: 'Monogram Strategic Folio, Vol. 15, pp. 45-58',
  },
  {
    id: 'thought-03',
    folioId: 'FOLIO-2025-03',
    issue: 'Ấn bản Chuyên đề Quản trị Gia tộc',
    date: 'Tháng 8, 2025',
    title: 'Hiến pháp Gia tộc: Lá chắn bảo vệ tài sản qua ba thế hệ',
    subtitle: 'Bài học từ các triều đại công nghiệp Thụy Sĩ và Nhật Bản trong duy trì tính toàn vẹn của đế chế kinh doanh',
    author: 'Kenji Sato & Beatrix Meier',
    readTime: '10 phút đọc',
    category: 'Quản Trị Thể Chế & Vốn',
    abstract:
      'Quy luật "không ai giàu ba họ" không phải là định mệnh siêu nhiên; đó là hậu quả toán học của việc thiếu vắng một thể chế phân quyền minh bạch và cơ chế giải quyết mâu thuẫn thế hệ trước khi chúng bùng phát.',
    contentParagraphs: [
      'Các gia tộc thương nghiệp tồn tại qua hàng trăm năm tại Basel hay Kyoto đều có một điểm chung: họ coi gia đình là người gìn giữ di sản, nhưng giao quyền vận hành cho một cỗ máy chuyên nghiệp độc lập.',
      'Hiến chương gia tộc không phải là một văn bản di chúc; đó là một đạo luật sống, quy định rõ ai được quyền tham gia HĐQT, tiêu chuẩn năng lực của con cháu thế hệ F3, và cơ chế mua lại cổ phần bắt buộc nếu có thành viên muốn thoái lui.',
      'Sự minh bạch này loại bỏ tận gốc sự nghi kỵ và bảo toàn khối tài sản khổng lồ trước những biến thiên chính trị và kinh tế.',
    ],
    citation: 'Swiss Family Governance Review, Autumn Edition',
  },
];

export const CONFIDENTIAL_VAULT_DOCUMENTS = [
  {
    id: 'DOC-CONF-001',
    code: 'SEC-A // MGR-EY-2024',
    title: 'Biên bản Thẩm định Độc lập Hiệu quả Can thiệp Thể chế Mạng lưới Năng lượng',
    classification: 'MẬT CẤP ĐỘ I (STRICTLY CONFIDENTIAL)',
    date: '15/12/2024',
    auditor: 'Ernst & Young Advisory AG',
    scope: 'Kiểm định độc lập chỉ số EBITDA và độ trễ ra quyết định Ban Điều hành',
    status: 'ĐÃ XÁC THỰC CHỮ KÝ SỐ QUỐC TẾ',
    keyFindings: [
      'Xác nhận tiết giảm thực tế 28.3% thời gian xử lý phê duyệt dự án liên biên giới',
      'Biên lợi nhuận ròng toàn tập đoàn tăng 14.2% so với cùng kỳ năm 2023',
      'Không phát hiện bất kỳ xung đột thẩm quyền nào theo ma trận RACI mới',
    ],
  },
  {
    id: 'DOC-CONF-002',
    code: 'SEC-B // CH-REG-020',
    title: 'Chứng thư Cấp phép Cố vấn Thể chế & Quản trị Rủi ro Độc lập CH-020.3.033-CH',
    classification: 'LƯU HÀNH NỘI BỘ HỘI ĐỒNG',
    date: '02/01/2025',
    auditor: 'Eidgenössisches Handelsregisteramt (Zurich)',
    scope: 'Thẩm quyền tư vấn chiến lược cấp cao và giải quyết tranh chấp thể chế',
    status: 'HIỆU LỰC TOÀN CẦU 2025–2030',
    keyFindings: [
      'Đạt đầy đủ tiêu chuẩn độc lập tư pháp theo luật thương mại Thụy Sĩ',
      'Bảo hiểm trách nhiệm nghề nghiệp chuyên môn mức 100M CHF',
      'Được phép tổ chức các phiên điều trần và đàm phán M&A kín',
    ],
  },
  {
    id: 'DOC-CONF-003',
    code: 'SEC-C // TOKYO-TRUST-09',
    title: 'Hồ sơ Cấu trúc Ủy thác Đa Tài phán & Bảo toàn Di sản Vốn Đa Thế Hệ',
    classification: 'ĐẶC QUYỀN KHÁCH HÀNG CAO CẤP',
    date: '18/03/2025',
    auditor: 'Mori Hamada & Matsumoto (Tokyo)',
    scope: 'Cấu trúc tài chính tư nhân xuyên biên giới Tokyo – Zurich – Singapore',
    status: 'ĐÃ ĐƯỢC CHẤP THUẬN TƯ PHÁP',
    keyFindings: [
      'Hoàn tất cấu trúc phòng vệ tài sản trước rủi ro biến động tỷ giá Yên',
      'Cơ chế chuyển giao quyền lợi sở hữu kinh tế tự động cho các thế hệ kế cận',
      'Được bảo vệ bởi điều khoản bí mật ngân hàng Thụy Sĩ và luật ủy thác Singapore',
    ],
  },
];
