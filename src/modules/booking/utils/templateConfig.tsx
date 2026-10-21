import React from 'react';
import {
  Scissors,
  Utensils,
  Stethoscope,
  Dumbbell,
  Camera,
  SprayCan,
  Wrench,
  Briefcase,
  Coffee,
  Building,
  Paintbrush,
  Calendar,
  Sparkles,
} from 'lucide-react';

export function getBookingConfig(templateKey: string) {
  switch (templateKey) {
    case 'nha_khoa':
    case 'phong_kham':
      return {
        resourceLabel: 'bác sĩ / phòng khám',
        resourceTitle: 'Bác sĩ & Phòng khám',
        resourceNameColumn: 'Bác sĩ / Phòng chức năng',
        resourceRoleColumn: 'Chuyên khoa / Quy mô',
        resourceDescription: 'Quản lý danh sách bác sĩ, phụ tá và phòng điều trị nhận lịch hẹn',
        resourcePlaceholder: 'BS. Minh Quân (hoặc Phòng VIP 01)',
        resourceRolePlaceholder: 'Trưởng khoa Răng Hàm Mặt (hoặc 2 ghế máy)',
        serviceLabel: 'dịch vụ khám & điều trị',
        serviceDescription: 'Danh mục các gói khám, tư vấn và thủ thuật y khoa',
        servicePlaceholder: 'Khám & Tư vấn chuyên sâu',
        icon: <Stethoscope className="w-5 h-5" />,
        smallIcon: <Stethoscope className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'spa':
    case 'tham_my_vien':
      return {
        resourceLabel: 'chuyên viên / phòng VIP',
        resourceTitle: 'Chuyên viên & Phòng trị liệu',
        resourceNameColumn: 'Chuyên viên / Phòng dịch vụ',
        resourceRoleColumn: 'Chức danh / Số giường',
        resourceDescription: 'Quản lý kỹ thuật viên, bác sĩ da liễu và phòng trị liệu',
        resourcePlaceholder: 'Chuyên viên Thảo (hoặc Phòng VIP 01)',
        resourceRolePlaceholder: 'Master Therapist (hoặc 2 giường VIP)',
        serviceLabel: 'liệu trình & dịch vụ',
        serviceDescription: 'Danh mục các liệu trình chăm sóc da và thẩm mỹ',
        servicePlaceholder: 'Liệu trình Trẻ hóa chuyên sâu',
        icon: <Sparkles className="w-5 h-5" />,
        smallIcon: <Sparkles className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'salon_toc':
      return {
        resourceLabel: 'stylist / phòng dịch vụ',
        resourceTitle: 'Stylist & Khu vực dịch vụ',
        resourceNameColumn: 'Chuyên viên / Phòng dịch vụ',
        resourceRoleColumn: 'Cấp bậc / Quy mô',
        resourceDescription: 'Quản lý đội ngũ Stylist, kỹ thuật viên và phòng VIP phục vụ khách',
        resourcePlaceholder: 'Chuyên viên Tư vấn 01 (hoặc Phòng VIP 01)',
        resourceRolePlaceholder: 'Senior Stylist (hoặc Phòng 2 giường)',
        serviceLabel: 'dịch vụ & liệu trình',
        serviceDescription: 'Danh mục các dịch vụ làm đẹp, tạo mẫu và chăm sóc',
        servicePlaceholder: 'Tạo mẫu & Phục hồi Keratin',
        icon: <Scissors className="w-5 h-5" />,
        smallIcon: <Scissors className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'phong_gym':
      return {
        resourceLabel: 'PT / khu vực tập',
        resourceTitle: 'Huấn luyện viên & Khu vực tập',
        resourceNameColumn: 'Huấn luyện viên / Phòng tập',
        resourceRoleColumn: 'Chuyên môn / Sức chứa',
        resourceDescription: 'Danh sách Huấn luyện viên cá nhân (PT) hoặc phòng tập chuyên biệt',
        resourcePlaceholder: 'HLV Minh Tuấn',
        resourceRolePlaceholder: 'Master Trainer (hoặc 10 học viên)',
        serviceLabel: 'gói tập & lớp học',
        serviceDescription: 'Danh mục các gói PT 1-1 và lớp tập theo khung giờ',
        servicePlaceholder: 'Buổi tập PT 1 kèm 1',
        icon: <Dumbbell className="w-5 h-5" />,
        smallIcon: <Dumbbell className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'studio_chup_anh':
      return {
        resourceLabel: 'nhiếp ảnh gia / studio',
        resourceTitle: 'Nhiếp ảnh gia & Phòng Studio',
        resourceNameColumn: 'Nhiếp ảnh gia / Phòng chụp',
        resourceRoleColumn: 'Vai trò / Quy mô phòng',
        resourceDescription: 'Danh sách nhiếp ảnh gia, ekip hoặc phòng chụp theo concept',
        resourcePlaceholder: 'Photographer Minh (hoặc Studio Concept A)',
        resourceRolePlaceholder: 'Senior Photographer (hoặc Diện tích 80m²)',
        serviceLabel: 'gói chụp & quay',
        serviceDescription: 'Danh mục các gói chụp hình và quay dựng',
        servicePlaceholder: 'Gói Lookbook Thương hiệu',
        icon: <Camera className="w-5 h-5" />,
        smallIcon: <Camera className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'dich_vu_ve_sinh':
      return {
        resourceLabel: 'đội ngũ kỹ thuật',
        resourceTitle: 'Đội ngũ & Kỹ thuật viên',
        resourceNameColumn: 'Đội / Nhân sự phụ trách',
        resourceRoleColumn: 'Chuyên môn / Nhân lực',
        resourceDescription: 'Danh sách các tổ đội hoặc kỹ thuật viên thực hiện dịch vụ',
        resourcePlaceholder: 'Đội Vệ sinh Công nghiệp 01',
        resourceRolePlaceholder: 'Đội trưởng (hoặc Nhóm 4 nhân sự)',
        serviceLabel: 'gói dịch vụ vệ sinh',
        serviceDescription: 'Danh mục các gói tổng vệ sinh và bảo dưỡng định kỳ',
        servicePlaceholder: 'Tổng vệ sinh Biệt thự / Văn phòng',
        icon: <SprayCan className="w-5 h-5" />,
        smallIcon: <SprayCan className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'garage_oto':
      return {
        resourceLabel: 'khoang dịch vụ / kỹ thuật viên',
        resourceTitle: 'Khoang dịch vụ & Kỹ thuật viên',
        resourceNameColumn: 'Khoang sửa chữa / Kỹ thuật viên',
        resourceRoleColumn: 'Hạng mục / Cấp bậc',
        resourceDescription: 'Danh sách khoang cầu nâng, phòng sơn hoặc kỹ thuật viên trưởng',
        resourcePlaceholder: 'Khoang Bảo dưỡng Nhanh 01',
        resourceRolePlaceholder: 'Kỹ thuật viên bậc cao (hoặc Cầu nâng 4 tấn)',
        serviceLabel: 'hạng mục bảo dưỡng',
        serviceDescription: 'Danh mục các gói bảo dưỡng, chăm sóc và đồng sơn ô tô',
        servicePlaceholder: 'Bảo dưỡng định kỳ cấp 20.000km',
        icon: <Wrench className="w-5 h-5" />,
        smallIcon: <Wrench className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'nha_hang':
    case 'quan_cafe': {
      const isRestaurant = templateKey === 'nha_hang';
      return {
        resourceLabel: 'bàn / phòng VIP',
        resourceTitle: 'Sơ đồ Bàn & Phòng VIP',
        resourceNameColumn: 'Tên Bàn / Phòng riêng',
        resourceRoleColumn: 'Sức chứa / Vị trí',
        resourceDescription: 'Quản lý danh sách bàn tiêu chuẩn, khu vực sân vườn và phòng VIP',
        resourcePlaceholder: 'Phòng VIP 01 (hoặc Bàn Cảnh Quan A2)',
        resourceRolePlaceholder: '8 - 10 thực khách (Tầng 2)',
        serviceLabel: 'set menu / khung đặt bàn',
        serviceDescription: 'Danh sách các gói thực đơn đặt trước hoặc yêu cầu phục vụ',
        servicePlaceholder: isRestaurant ? 'Thực đơn Tiệc Doanh nhân' : 'Bàn làm việc & Trà chiều',
        icon: isRestaurant ? <Utensils className="w-5 h-5" /> : <Coffee className="w-5 h-5" />,
        smallIcon: isRestaurant ? <Utensils className="w-4 h-4" /> : <Coffee className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    }
    case 'luat_su':
      return {
        resourceLabel: 'luật sư / cố vấn',
        resourceTitle: 'Luật sư & Chuyên gia Tư vấn',
        resourceNameColumn: 'Luật sư / Phòng họp',
        resourceRoleColumn: 'Lĩnh vực chuyên môn',
        resourceDescription: 'Danh sách luật sư thành viên và chuyên gia pháp lý tiếp nhận lịch hẹn',
        resourcePlaceholder: 'LS. Trần Minh Đức',
        resourceRolePlaceholder: 'Luật sư Thành viên · Pháp lý Doanh nghiệp',
        serviceLabel: 'hạng mục tư vấn',
        serviceDescription: 'Danh mục các phiên tư vấn pháp lý và rà soát hồ sơ',
        servicePlaceholder: 'Phiên tư vấn M&A & Hợp đồng thương mại',
        icon: <Briefcase className="w-5 h-5" />,
        smallIcon: <Briefcase className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    case 'noi_that':
    case 'cong_ty_xay_dung': {
      const isInterior = templateKey === 'noi_that';
      return {
        resourceLabel: 'kiến trúc sư / kỹ sư',
        resourceTitle: 'Kiến trúc sư & Chuyên gia Tư vấn',
        resourceNameColumn: 'Kiến trúc sư / Phòng mẫu',
        resourceRoleColumn: 'Chức danh / Chuyên môn',
        resourceDescription: 'Danh sách kiến trúc sư chủ trì và kỹ sư tư vấn dự án',
        resourcePlaceholder: 'KTS. Hoàng Nam',
        resourceRolePlaceholder: 'Kiến trúc sư Chủ trì',
        serviceLabel: 'gói tư vấn & khảo sát',
        serviceDescription: 'Danh mục các buổi tư vấn mặt bằng, phong cách và dự toán',
        servicePlaceholder: isInterior ? 'Tư vấn Thiết kế Nội thất 1-1' : 'Tư vấn Giải pháp Thi công',
        icon: isInterior ? <Paintbrush className="w-5 h-5" /> : <Building className="w-5 h-5" />,
        smallIcon: isInterior ? <Paintbrush className="w-4 h-4" /> : <Building className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
    }
    default:
      return {
        resourceLabel: 'nhân sự / khu vực',
        resourceTitle: 'Nhân sự & Khu vực phục vụ',
        resourceNameColumn: 'Nhân sự / Phòng / Bàn',
        resourceRoleColumn: 'Chức danh / Quy mô',
        resourceDescription: 'Danh sách chuyên viên, bác sĩ hoặc phòng/bàn tiếp nhận lịch hẹn',
        resourcePlaceholder: 'Chuyên viên Tư vấn 01 (hoặc Phòng VIP 01)',
        resourceRolePlaceholder: 'Chuyên viên cao cấp (hoặc Sức chứa 4 khách)',
        serviceLabel: 'dịch vụ',
        serviceDescription: 'Danh mục dịch vụ cung cấp cho khách đặt lịch',
        servicePlaceholder: 'Tên dịch vụ',
        icon: <Calendar className="w-5 h-5" />,
        smallIcon: <Calendar className="w-4 h-4" />,
        color: 'bg-slate-100 border-slate-200 text-slate-800',
        avatarBg: 'bg-slate-900',
        iconColor: 'text-slate-700',
      };
  }
}
