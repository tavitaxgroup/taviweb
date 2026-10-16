/**
 * Core business logic and calculations for Origin Studio architectural atelier.
 */

export type ProjectTypology = 'office' | 'showroom' | 'residence';
export type ServiceTier = 'consultation' | 'concept_design' | 'turnkey_construction';

export interface QuotationParams {
  areaM2: number;
  typology: ProjectTypology;
  tier: ServiceTier;
  expedited?: boolean;
}

export interface QuotationResult {
  baseCostVND: number;
  perM2CostVND: number;
  estimatedDays: number;
  formattedCost: string;
  summaryTitle: string;
}

export const TYPOLOGY_RATES: Record<ProjectTypology, { label: string; multiplier: number }> = {
  office: { label: 'Văn phòng trụ sở tập đoàn & Sáng tạo', multiplier: 1.0 },
  showroom: { label: 'Showroom / Flagship Store / Gallery', multiplier: 1.25 },
  residence: { label: 'Biệt thự & Penthouse Độc bản', multiplier: 1.4 },
};

export const TIER_RATES: Record<ServiceTier, { label: string; basePerM2: number; baseDays: number }> = {
  consultation: {
    label: 'Tư Vấn & Hoạch Định Chiến Lược Không Gian',
    basePerM2: 250_000, // 250k VND / m2
    baseDays: 14,
  },
  concept_design: {
    label: 'Thiết Kế Trải Nghiệm Thương Hiệu & 3D Bản Sắc',
    basePerM2: 650_000, // 650k VND / m2
    baseDays: 25,
  },
  turnkey_construction: {
    label: 'Thi Công Trọn Gói & Giám Sát Vận Hành',
    basePerM2: 5_500_000, // 5.5M VND / m2
    baseDays: 45,
  },
};

/**
 * Calculates estimated cost and delivery timeline.
 */
export function calculateQuotation(params: QuotationParams): QuotationResult {
  const safeArea = Math.max(20, Math.min(params.areaM2 || 100, 5000));
  const typo = TYPOLOGY_RATES[params.typology] || TYPOLOGY_RATES.office;
  const tier = TIER_RATES[params.tier] || TIER_RATES.concept_design;

  const perM2CostVND = Math.round(tier.basePerM2 * typo.multiplier);
  let totalCost = Math.round(perM2CostVND * safeArea);

  let estimatedDays = tier.baseDays;
  if (safeArea > 200) {
    estimatedDays += Math.round((safeArea - 200) / 50) * 3;
  }
  if (params.expedited) {
    totalCost = Math.round(totalCost * 1.15);
    estimatedDays = Math.max(14, Math.round(estimatedDays * 0.75));
  }

  const formattedCost = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(totalCost);

  return {
    baseCostVND: totalCost,
    perM2CostVND,
    estimatedDays,
    formattedCost,
    summaryTitle: `${tier.label} (${typo.label})`,
  };
}

/**
 * Validates Vietnamese phone numbers (10 digits starting with 03, 05, 07, 08, 09)
 */
export function validateVietnamesePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\.]/g, '');
  const vnPhoneRegex = /^(03|05|07|08|09)\d{8}$/;
  return vnPhoneRegex.test(cleaned);
}

/**
 * Validates consultation form inputs
 */
export function validateConsultationForm(data: {
  fullName: string;
  phone: string;
  service: string;
}): { isValid: boolean; errors: { fullName?: string; phone?: string; service?: string } } {
  const errors: { fullName?: string; phone?: string; service?: string } = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Vui lòng nhập họ và tên khách hàng (tối thiểu 2 ký tự).';
  }

  if (!data.phone || !validateVietnamesePhone(data.phone)) {
    errors.phone = 'Vui lòng nhập số điện thoại Việt Nam hợp lệ (ví dụ: 090 123 4567).';
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Vui lòng chọn nhu cầu dịch vụ.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
