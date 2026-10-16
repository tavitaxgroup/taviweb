export interface ProductVariant {
  name: string;
  price?: number;
}

export interface StoreProduct {
  id: string;
  tenant_id: string;
  name: string;
  slug: string;
  sku?: string;
  category: string;
  description?: string;
  price: number;
  compare_price?: number;
  stock: number;
  images: string[];
  variants: ProductVariant[];
  is_featured: boolean;
  status: 'active' | 'draft' | 'out_of_stock';
  created_at: string;
  updated_at?: string;
}

export interface OrderItem {
  product_id?: string;
  name: string;
  sku?: string;
  price: number;
  quantity: number;
  variant?: string;
  image?: string;
}

export interface StoreOrder {
  id: string;
  tenant_id: string;
  order_code: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  customer_address?: string;
  items: OrderItem[];
  subtotal_amount: number;
  shipping_fee: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'shipping' | 'completed' | 'cancelled';
  payment_method: 'cod' | 'bank_transfer';
  payment_status: 'unpaid' | 'paid' | 'refunded';
  crm_contact_id?: string | null;
  crm_deal_id?: string | null;
  notes?: string;
  created_at: string;
  updated_at?: string;
}

export interface StoreSettings {
  bank_bin: string;
  bank_name: string;
  bank_account: string;
  bank_owner: string;
  shipping_fee: number;
  free_shipping_threshold: number;
  store_notice?: string;
  auto_sync_crm?: boolean;
}
