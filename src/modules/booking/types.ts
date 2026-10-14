export interface BookingResource {
  id: string;
  tenant_id: string;
  name: string;
  type: string;
  role_or_capacity: string;
  status: string;
  created_at: string;
}

export interface BookingServiceItem {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  duration_minutes: number;
  price: number;
  created_at: string;
}

export interface BookingAppointment {
  id: string;
  tenant_id: string;
  resource_id: string;
  customer_name: string;
  customer_phone?: string;
  service_id?: string;
  service_name?: string;
  start_time: string;
  end_time: string;
  status: string;
  notes?: string;
  created_at: string;
}
