export interface CRMRole {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  created_at: string;
}

export interface CRMUser {
  id: string;
  name: string;
  email: string;
  role: string; // legacy
  role_id?: string;
  role_data?: CRMRole;
  created_at: string;
}

export interface CRMPipeline {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface CRMStage {
  id: string;
  tenant_id: string;
  pipeline_id: string;
  name: string;
  order: number;
  color?: string;
  created_at: string;
  updated_at: string;
}

export interface CRMContact {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  facebook_url?: string;
  source?: string;
  created_at: string;
}

export interface CRMDeal {
  id: string;
  contact_id: string;
  stage_id: string;
  assignee_id?: string;
  title: string;
  value: number;
  created_at: string;
  custom_data?: Record<string, any>;
  contact?: CRMContact;
  assignee?: CRMUser;
}

export interface CRMActivity {
  id: string;
  deal_id: string;
  user_id?: string;
  type: 'note' | 'email' | 'call';
  content: string;
  created_at: string;
  user?: CRMUser;
}

export interface CRMProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  created_at: string;
}

export interface CRMQuoteItem {
  id: string;
  quote_id: string;
  product_id?: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface CRMQuote {
  id: string;
  deal_id: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  total_amount: number;
  created_at: string;
  items?: CRMQuoteItem[];
}

export interface CRMKpi {
  id: string;
  user_id: string;
  target_deals: number;
  target_revenue: number;
  period: 'month' | 'quarter' | 'year';
  start_date: string;
  end_date: string;
  created_at: string;
  user?: CRMUser;
}

export interface CRMCustomField {
  id: string;
  tenant_id: string;
  entity_type: 'deal' | 'contact';
  name: string;      // machine-readable key, e.g. 'ngay_kham'
  label: string;     // human-readable label, e.g. 'Ngày khám'
  type: 'text' | 'number' | 'date' | 'select' | 'boolean';
  options?: string[]; // For 'select' type
  required?: boolean;
  order_index?: number;
}

// LMS Types
export type { CRMCourse, CRMClass, CRMEnrollment, CRMMaterial } from '../../edu/types';
