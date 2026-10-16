import { supabase } from '@/lib/supabase';
import { StoreProduct, StoreOrder, StoreSettings } from '../types';

const DEFAULT_STORE_SETTINGS: StoreSettings = {
  bank_bin: 'MB',
  bank_name: 'MBBank (Ngân hàng Quân Đội)',
  bank_account: '0901234567',
  bank_owner: 'CHU CUA HANG DEMO',
  shipping_fee: 30000,
  free_shipping_threshold: 500000,
  store_notice: 'Miễn phí vận chuyển cho đơn hàng từ 500.000đ',
  auto_sync_crm: true,
};

export const EcommerceService = {
  async getProducts(tenantId: string): Promise<StoreProduct[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map((p: any) => ({
      ...p,
      price: Number(p.price || 0),
      compare_price: Number(p.compare_price || 0),
      stock: Number(p.stock || 0),
      images: Array.isArray(p.images) ? p.images : [],
      variants: Array.isArray(p.variants) ? p.variants : [],
    }));
  },

  async saveProduct(tenantId: string, product: Partial<StoreProduct>): Promise<StoreProduct> {
    const slug =
      product.slug ||
      (product.name || 'san-pham')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') +
        '-' +
        Math.floor(100 + Math.random() * 900);

    const payload: any = {
      tenant_id: tenantId,
      name: product.name,
      slug,
      sku: product.sku || '',
      category: product.category || 'Sản phẩm nổi bật',
      description: product.description || '',
      price: Number(product.price || 0),
      compare_price: Number(product.compare_price || 0),
      stock: Number(product.stock ?? 0),
      images: product.images || [],
      variants: product.variants || [],
      is_featured: Boolean(product.is_featured),
      status: product.status || 'active',
      updated_at: new Date().toISOString(),
    };

    if (product.id) {
      const { data, error } = await supabase
        .from('products')
        .update(payload)
        .eq('id', product.id)
        .eq('tenant_id', tenantId)
        .select()
        .single();
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('products')
        .insert([payload])
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  },

  async deleteProduct(tenantId: string, id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
      .eq('tenant_id', tenantId);
    if (error) throw error;
  },

  async getOrders(tenantId: string): Promise<StoreOrder[]> {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map((o: any) => ({
      ...o,
      subtotal_amount: Number(o.subtotal_amount || o.total_amount || 0),
      shipping_fee: Number(o.shipping_fee || 0),
      total_amount: Number(o.total_amount || 0),
      items: Array.isArray(o.items) ? o.items : [],
    }));
  },

  async updateOrder(
    tenantId: string,
    orderId: string,
    updates: Partial<Pick<StoreOrder, 'status' | 'payment_status' | 'notes'>>
  ): Promise<StoreOrder> {
    const res = await fetch('/api/store/orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tenant_id: tenantId,
        order_id: orderId,
        ...updates,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Lỗi cập nhật đơn hàng');
    }
    return data.order;
  },

  async getStoreSettings(tenantId: string): Promise<StoreSettings> {
    const { data, error } = await supabase
      .from('tenants')
      .select('theme_config')
      .eq('id', tenantId)
      .single();

    if (error || !data) return DEFAULT_STORE_SETTINGS;
    return {
      ...DEFAULT_STORE_SETTINGS,
      ...(data.theme_config?.store_settings || {}),
    };
  },

  async updateStoreSettings(tenantId: string, settings: StoreSettings): Promise<void> {
    const { data: tenant } = await supabase
      .from('tenants')
      .select('theme_config')
      .eq('id', tenantId)
      .single();

    const nextThemeConfig = {
      ...(tenant?.theme_config || {}),
      store_settings: settings,
    };

    const { error } = await supabase
      .from('tenants')
      .update({ theme_config: nextThemeConfig })
      .eq('id', tenantId);

    if (error) throw error;
  },

  async syncProductsToChatbotKnowledge(tenantId: string): Promise<number> {
    const products = await this.getProducts(tenantId);
    const activeProducts = products.filter(p => p.status === 'active');

    // Remove previous ecommerce_catalog chunks for this tenant
    await supabase
      .from('knowledge_chunks')
      .delete()
      .eq('tenant_id', tenantId)
      .eq('source_type', 'ecommerce_catalog');

    if (activeProducts.length === 0) return 0;

    const chunks = activeProducts.map(p => {
      const variantsText =
        p.variants && p.variants.length > 0
          ? `Phân loại: ${p.variants.map(v => v.name).join(', ')}.`
          : '';
      const stockText = p.stock > 0 ? `Còn ${p.stock} sản phẩm trong kho.` : 'Tạm hết hàng.';
      const priceText = `${p.price.toLocaleString('vi-VN')} VNĐ`;
      const compareText =
        p.compare_price && p.compare_price > p.price
          ? ` (Giá gốc: ${p.compare_price.toLocaleString('vi-VN')} VNĐ)`
          : '';

      return {
        tenant_id: tenantId,
        source_type: 'ecommerce_catalog',
        content: `[SẢN PHẨM CỬA HÀNG] Tên: ${p.name} (Mã SKU: ${p.sku || 'N/A'}) | Danh mục: ${p.category} | Giá bán: ${priceText}${compareText} | ${stockText} ${variantsText} Mô tả: ${p.description || ''}`,
      };
    });

    const { error } = await supabase.from('knowledge_chunks').insert(chunks);
    if (error) throw error;
    return chunks.length;
  },
};
