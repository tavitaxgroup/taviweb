export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  sector: 'logistics' | 'governance' | 'capital' | 'private-wealth' | 'energy';
  sectorLabel: string;
  region: string;
  year: string;
  scale: string;
  imageUrl: string;
  heroImage?: boolean;
  archivalCode: string;
  challenge: string;
  intervention: string;
  quantitativeImpact: string;
  auditSignOff: string;
  methodology: string[];
  keyLeadership: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  jurisdiction: 'zurich' | 'tokyo' | 'hanoi';
  practice: 'advisory' | 'operations' | 'capital' | 'governance';
  briefScope: string;
  requiresNda: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof InquiryFormData, string>>;
}

/**
 * Filter projects by selected sector or return all
 */
export function filterProjectsBySector(
  projects: ProjectItem[],
  sector: string
): ProjectItem[] {
  if (!sector || sector === 'all') {
    return projects;
  }
  return projects.filter((p) => p.sector === sector);
}

/**
 * Validates the executive confidential inquiry submission
 */
export function validateInquiryForm(form: InquiryFormData): ValidationResult {
  const errors: Partial<Record<keyof InquiryFormData, string>> = {};

  if (!form.fullName || form.fullName.trim().length < 2) {
    errors.fullName = 'Vui lòng cung cấp họ tên người đại diện.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email.trim())) {
    errors.email = 'Vui lòng cung cấp thư điện tử công vụ hợp lệ.';
  }

  if (!form.organization || form.organization.trim().length < 2) {
    errors.organization = 'Vui lòng ghi rõ tên tập đoàn hoặc thể chế.';
  }

  if (!form.briefScope || form.briefScope.trim().length < 10) {
    errors.briefScope = 'Nội dung khái quát cần tối thiểu 10 ký tự.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an archival reference code for confidential advisory correspondence
 */
export function generateAdvisoryRef(
  jurisdiction: string,
  practice: string,
  timestamp: number = Date.now()
): string {
  const jurMap: Record<string, string> = {
    zurich: 'ZH',
    tokyo: 'TYO',
    hanoi: 'HAN',
  };
  const pracMap: Record<string, string> = {
    advisory: 'ADV',
    operations: 'OPS',
    capital: 'CAP',
    governance: 'GOV',
  };

  const jurCode = jurMap[jurisdiction.toLowerCase()] || 'GEN';
  const pracCode = pracMap[practice.toLowerCase()] || 'SEC';
  const serial = String(timestamp).slice(-4);

  return `MGR-${jurCode}-${pracCode}-${serial}`;
}

/**
 * Verifies confidential executive vault credentials
 */
export function verifyClientPasscode(passcode: string): boolean {
  if (!passcode) return false;
  const normalized = passcode.trim().toUpperCase();
  return normalized === 'MGR-2025' || normalized === 'MONOGRAM' || normalized === 'SWISS-2025';
}

/**
 * Formats advisory metrics string for publication display
 */
export function formatMetricDelta(value: number, unit: string = '%'): string {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}${unit}`;
}
