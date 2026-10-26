import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HoneyProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  variant: "light" | "dark" | "comb" | "jar";
  image: string;
}

export interface QuanCafe5Data extends ClonedTemplateBaseData {
  topNotice: string;
  sidebarCategories: string[];
  vouchers: Array<{
    id: string;
    code: string;
    condition: string;
    bgColor: string;
    btnColor: string;
    textColor: string;
  }>;
  importedHoney: HoneyProductItem[];
  dailyDeals: HoneyProductItem[];
  pollenProducts: HoneyProductItem[];
  beeswaxProducts: HoneyProductItem[];
  royalJellyProducts: HoneyProductItem[];
  turmericProducts: HoneyProductItem[];
  giftPacks: HoneyProductItem[];
}

const IMG_LIGHT =
  "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80";
const IMG_DARK =
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=500&q=80";
const IMG_COMB =
  "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=500&q=80";
const IMG_TEA =
  "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80";

export const quanCafe5DefaultData: QuanCafe5Data = {
  business: {
    name: "Mona Honey",
    phone: ["0313728397", "076 922 0162"],
    email: ["info@themona.global", "cskh@monahoney.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 620,
    aboutTitle: "Về Mona Honey",
    aboutText: [
      "Mona Honey là thương hiệu mật ong rừng nguyên chất và trà thảo mộc tự nhiên chất lượng cao, với đa dạng sản phẩm phục vụ mọi nhu cầu: Mật ong hoa rừng, phấn hoa, sữa ong chúa, sáp ong, tinh bột nghệ.",
      "Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm số 1234/ATTP/BQLATTP-HCM do Ban Quản lý An toàn thực phẩm Thành phố Hồ Chí Minh cấp."
    ],
    highlights: [
      "100% mật ong nguyên chất thu hoạch tự nhiên từ cao nguyên Đà Lạt & nhập khẩu",
      "Không pha đường, không chất bảo quản, kiểm định chất lượng từng mẻ",
      "Đa dạng dòng trà mật ong thảo mộc, phấn hoa, sữa ong chúa & tinh bột nghệ",
      "Miễn phí vận chuyển cho đơn hàng từ 600.000đ trên toàn quốc"
    ]
  },
  topNotice: "Giảm 25.000đ phí ship cho đơn hàng trên 600.000đ",
  hero: {
    eyebrow: "TINH HOA MẬT ONG RỪNG & TRÀ THẢO MỘC",
    title: "Honey sale.",
    subtitle: "20% OFF ALL PRODUCTS",
    description:
      "Thưởng thức vị ngọt thanh khiết từ thiên nhiên với bộ sưu tập mật ong hoa nhãn, mật ong rừng Đà Lạt và sữa ong chúa nguyên chất.",
    ctaText: "MUA NGAY",
    ctaLink: "#mat-ong-nhap-khau",
    backgroundImage: IMG_LIGHT
  },
  sidebarCategories: [
    "Mật ong",
    "Mật ong nhập khẩu",
    "Sáp ong",
    "Sữa ong chúa",
    "Tinh bột nghệ",
    "Phấn hoa"
  ],
  vouchers: [
    {
      id: "v-1",
      code: "#ACBBANK",
      condition: "Hóa đơn trên 50.000 đ",
      bgColor: "#fff8e6",
      btnColor: "#f5a623",
      textColor: "#d98200"
    },
    {
      id: "v-2",
      code: "#SaleBig",
      condition: "Hóa đơn trên 50.000 đ",
      bgColor: "#fdece8",
      btnColor: "#d9534f",
      textColor: "#c9302c"
    },
    {
      id: "v-3",
      code: "#HDBANK",
      condition: "Hóa đơn trên 50.000 đ",
      bgColor: "#f3edea",
      btnColor: "#6d4c41",
      textColor: "#5d4037"
    },
    {
      id: "v-4",
      code: "#VIETCOMBANK",
      condition: "Hóa đơn trên 50.000 đ",
      bgColor: "#e6f4ff",
      btnColor: "#1890ff",
      textColor: "#096dd9"
    },
    {
      id: "v-5",
      code: "#CHAOBANMOI",
      condition: "Hóa đơn trên 50.000 đ",
      bgColor: "#e8f8f0",
      btnColor: "#1b7e3c",
      textColor: "#136530"
    }
  ],
  importedHoney: [
    { id: "ih-1", name: "Mật Ong Nguyên Chất 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "ih-2", name: "Mật Ong Hảo Hạng 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "dark", image: IMG_DARK },
    { id: "ih-3", name: "Mật Ong Nhập Khẩu 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "comb", image: IMG_COMB },
    { id: "ih-4", name: "Mật Ong Rừng Đà Lạt 5L", price: "65.000đ", variant: "jar", image: IMG_TEA },
    { id: "ih-5", name: "Mật Ong Hảo Hạng 5L", price: "55.000đ", variant: "dark", image: IMG_DARK },
    { id: "ih-6", name: "Mật Ong Nguyên Chất 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "light", image: IMG_LIGHT },
    { id: "ih-7", name: "Mật Ong Nhập Khẩu 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "comb", image: IMG_COMB },
    { id: "ih-8", name: "Mật Ong Hoa Nhãn 8L", price: "105.000đ", variant: "light", image: IMG_LIGHT },
    { id: "ih-9", name: "Mật Ong Rừng Đà Lạt 8L", price: "240.000đ", oldPrice: "480.000đ", variant: "jar", image: IMG_TEA },
    { id: "ih-10", name: "Mật Ong Nguyên Chất 8L", price: "80.000đ", oldPrice: "85.000đ", variant: "light", image: IMG_LIGHT }
  ],
  dailyDeals: [
    { id: "dd-1", name: "Mật Ong Hoa Nhãn 1L", price: "45.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "dd-2", name: "Mật Ong Rừng Đà Lạt 1L", price: "45.000đ", badge: "Bán chạy", variant: "jar", image: IMG_TEA },
    { id: "dd-3", name: "Mật Ong Nguyên Chất 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "dd-4", name: "Mật Ong Hảo Hạng 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "dark", image: IMG_DARK },
    { id: "dd-5", name: "Mật Ong Nhập Khẩu 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "comb", image: IMG_COMB }
  ],
  pollenProducts: [
    { id: "pl-1", name: "Mật Ong Rừng Đà Lạt 1L", price: "45.000đ", badge: "Bán chạy", variant: "jar", image: IMG_TEA },
    { id: "pl-2", name: "Mật Ong Nguyên Chất 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "pl-3", name: "Mật Ong Hảo Hạng 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "dark", image: IMG_DARK },
    { id: "pl-4", name: "Mật Ong Nhập Khẩu 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "comb", image: IMG_COMB },
    { id: "pl-5", name: "Mật Ong Hảo Hạng 4L", price: "65.000đ", variant: "dark", image: IMG_DARK },
    { id: "pl-6", name: "Mật Ong Nhập Khẩu 4L", price: "65.000đ", variant: "comb", image: IMG_COMB },
    { id: "pl-7", name: "Mật Ong Rừng Đà Lạt 5L", price: "65.000đ", variant: "light", image: IMG_LIGHT },
    { id: "pl-8", name: "Mật Ong Nguyên Chất 5L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "pl-9", name: "Mật Ong Hảo Hạng 6L", price: "55.000đ", variant: "dark", image: IMG_DARK },
    { id: "pl-10", name: "Mật Ong Hảo Hạng 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "dark", image: IMG_DARK }
  ],
  beeswaxProducts: [
    { id: "bw-1", name: "Mật Ong Hoa Nhãn 1L", price: "45.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "bw-2", name: "Mật Ong Rừng Đà Lạt 1L", price: "45.000đ", badge: "Bán chạy", variant: "jar", image: IMG_TEA },
    { id: "bw-3", name: "Mật Ong Nguyên Chất 5L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "bw-4", name: "Mật Ong Nhập Khẩu 5L", price: "105.000đ", variant: "comb", image: IMG_COMB },
    { id: "bw-5", name: "Mật Ong Nguyên Chất 6L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "bw-6", name: "Mật Ong Hảo Hạng 6L", price: "55.000đ", variant: "dark", image: IMG_DARK },
    { id: "bw-7", name: "Mật Ong Nhập Khẩu 6L", price: "105.000đ", variant: "comb", image: IMG_COMB },
    { id: "bw-8", name: "Mật Ong Hoa Nhãn 7L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "bw-9", name: "Mật Ong Hảo Hạng 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "dark", image: IMG_DARK },
    { id: "bw-10", name: "Mật Ong Hảo Hạng 8L", price: "45.000đ", variant: "dark", image: IMG_DARK }
  ],
  royalJellyProducts: [
    { id: "rj-1", name: "Mật Ong Hoa Nhãn 1L", price: "45.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "rj-2", name: "Mật Ong Nguyên Chất 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "rj-3", name: "Mật Ong Hảo Hạng 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "dark", image: IMG_DARK },
    { id: "rj-4", name: "Mật Ong Nhập Khẩu 1L", price: "80.000đ", oldPrice: "85.000đ", badge: "Bán chạy", variant: "comb", image: IMG_COMB },
    { id: "rj-5", name: "Mật Ong Hảo Hạng 4L", price: "65.000đ", variant: "dark", image: IMG_DARK },
    { id: "rj-6", name: "Mật Ong Rừng Đà Lạt 6L", price: "55.000đ", variant: "jar", image: IMG_TEA },
    { id: "rj-7", name: "Mật Ong Nguyên Chất 6L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "rj-8", name: "Mật Ong Hảo Hạng 6L", price: "55.000đ", variant: "dark", image: IMG_DARK },
    { id: "rj-9", name: "Mật Ong Rừng Đà Lạt 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "jar", image: IMG_TEA },
    { id: "rj-10", name: "Mật Ong Hảo Hạng 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "dark", image: IMG_DARK }
  ],
  turmericProducts: [
    { id: "tm-1", name: "Mật Ong Nhập Khẩu 4L", price: "65.000đ", variant: "comb", image: IMG_COMB },
    { id: "tm-2", name: "Mật Ong Hoa Nhãn 5L", price: "65.000đ", variant: "light", image: IMG_LIGHT },
    { id: "tm-3", name: "Mật Ong Rừng Đà Lạt 5L", price: "65.000đ", variant: "jar", image: IMG_TEA },
    { id: "tm-4", name: "Mật Ong Nguyên Chất 5L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "tm-5", name: "Mật Ong Hoa Nhãn 6L", price: "240.000đ", oldPrice: "480.000đ", variant: "light", image: IMG_LIGHT },
    { id: "tm-6", name: "Mật Ong Hảo Hạng 7L", price: "80.000đ", oldPrice: "85.000đ", variant: "dark", image: IMG_DARK },
    { id: "tm-7", name: "Mật Ong Hoa Nhãn 8L", price: "105.000đ", variant: "light", image: IMG_LIGHT },
    { id: "tm-8", name: "Mật Ong Rừng Đà Lạt 8L", price: "240.000đ", oldPrice: "480.000đ", variant: "jar", image: IMG_TEA },
    { id: "tm-9", name: "Mật Ong Nguyên Chất 8L", price: "80.000đ", oldPrice: "85.000đ", variant: "light", image: IMG_LIGHT },
    { id: "tm-10", name: "Mật Ong Hảo Hạng 8L", price: "45.000đ", variant: "dark", image: IMG_DARK }
  ],
  giftPacks: [
    { id: "gp-1", name: "Mật Ong Hoa Nhãn 2L", price: "254.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "gp-2", name: "Mật Ong Rừng Đà Lạt 2L", price: "254.000đ", badge: "Bán chạy", variant: "jar", image: IMG_TEA },
    { id: "gp-3", name: "Mật Ong Nguyên Chất 2L", price: "254.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "gp-4", name: "Mật Ong Hảo Hạng 2L", price: "254.000đ", badge: "Bán chạy", variant: "dark", image: IMG_DARK },
    { id: "gp-5", name: "Mật Ong Nhập Khẩu 2L", price: "254.000đ", badge: "Bán chạy", variant: "comb", image: IMG_COMB },
    { id: "gp-6", name: "Mật Ong Hoa Nhãn 3L", price: "456.000đ", oldPrice: "769.000đ", badge: "Bán chạy", variant: "light", image: IMG_LIGHT },
    { id: "gp-7", name: "Mật Ong Nguyên Chất 3L", price: "340.000đ", variant: "light", image: IMG_LIGHT },
    { id: "gp-8", name: "Mật Ong Hảo Hạng 3L", price: "213.000đ", oldPrice: "340.000đ", variant: "dark", image: IMG_DARK },
    { id: "gp-9", name: "Mật Ong Nhập Khẩu 3L", price: "123.000đ", oldPrice: "390.000đ", variant: "comb", image: IMG_COMB },
    { id: "gp-10", name: "Mật Ong Hoa Nhãn 4L", price: "340.000đ", variant: "light", image: IMG_LIGHT },
    { id: "gp-11", name: "Mật Ong Rừng Đà Lạt 4L", price: "213.000đ", variant: "jar", image: IMG_TEA },
    { id: "gp-12", name: "Mật Ong Nguyên Chất 4L", price: "213.000đ", variant: "light", image: IMG_LIGHT }
  ]
};
