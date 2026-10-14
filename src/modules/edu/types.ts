import { CRMContact, CRMUser } from '../crm/types';
export type { CRMContact, CRMUser };

export interface CRMCourse {
  id: string;
  tenant_id: string;
  name: string;
  description?: string;
  price: number;
  status: 'active' | 'draft' | 'archived';
  created_at: string;
  updated_at: string;
  classes?: { count: number }[];
}

export interface CRMClass {
  id: string;
  tenant_id: string;
  course_id: string;
  teacher_id?: string;
  name: string;
  schedule_desc?: string;
  google_meet_link?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
  course?: CRMCourse;
  teacher?: CRMUser;
  enrollments?: { count: number }[];
}

export interface CRMEnrollment {
  id: string;
  tenant_id: string;
  contact_id: string;
  class_id: string;
  deal_id?: string;
  payment_status: 'pending' | 'partial' | 'paid';
  amount_paid: number;
  status: 'active' | 'dropped' | 'completed';
  created_at: string;
  contact?: CRMContact;
  class?: CRMClass;
}

export interface CRMMaterial {
  id: string;
  tenant_id: string;
  class_id: string;
  course_id: string;
  title: string;
  file_url: string;
  file_type?: string;
  is_ai_embedded: boolean;
  created_at: string;
}

export interface CRMClassSession {
  id: string;
  tenant_id: string;
  class_id: string;
  title: string;
  date: string;
  status: string;
  created_at: string;
}

export interface CRMAttendance {
  id: string;
  tenant_id: string;
  session_id: string;
  contact_id: string;
  status: 'present' | 'absent' | 'late';
  notes?: string;
  created_at?: string;
  contact?: CRMContact;
}
