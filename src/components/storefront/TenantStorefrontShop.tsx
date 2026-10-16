"use client";

import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  QrCode,
  Search,
  Sparkles,
  ArrowRight,
  PackageCheck,
} from 'lucide-react';
import { StoreProduct, OrderItem, StoreSettings } from '@/modules/ecommerce/types';

interface Props {
  tenantId: string;
  tenantName: string;
  tenantSlug: string;
  products: StoreProduct[];
  storeSettings?: Partial<StoreSettings>;
}

export default function TenantStorefrontShop({
  tenantId,
  tenantName,
  tenantSlug,
  products,
  storeSettings = {},
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');

  // Checkout Form
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank_transfer'>('bank_transfer');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<any>(null);
  const [storeBank, setStoreBank] = useState<any>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const storageKey = `tavi_cart_${tenantSlug}`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setCart(JSON.parse(saved));
    } catch {}
  }, [storageKey]);

  const saveCart = (next: OrderItem[]) => {
    setCart(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  };

  const showNotice = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2800);
  };

  const addToCart = (product: StoreProduct, openDrawer = false) => {
    const currentProductQtyInCart = cart
      .filter(item => item.product_id === product.id)
      .reduce((sum, item) => sum + item.quantity, 0);

    if (currentProductQtyInCart + 1 > product.stock) {
      showNotice(
        product.stock <= 0
          ? `Sản phẩm "${product.name}" đã hết hàng!`
          : `Kho chỉ còn tối đa ${product.stock} sản phẩm "${product.name}" (bạn đã có ${currentProductQtyInCart} trong giỏ)!`
      );
      return;
    }

    const chosenVariant =
      selectedVariants[product.id] ||
      (product.variants && product.variants.length > 0 ? product.variants[0].name : '');

    const existingIdx = cart.findIndex(
      item => item.product_id === product.id && (item.variant || '') === chosenVariant
    );

    let next: OrderItem[];
    if (existingIdx > -1) {
      next = cart.map((item, idx) =>
        idx === existingIdx ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      next = [
        ...cart,
        {
          product_id: product.id,
          name: product.name,
          sku: product.sku || '',
          price: Number(product.price),
          quantity: 1,
          variant: chosenVariant,
          image: product.images?.[0] || '',
        },
      ];
    }

    saveCart(next);
    if (openDrawer) {
      setCheckoutStep('form');
      setIsCartOpen(true);
    } else {
      showNotice(`Đã thêm "${product.name}" vào giỏ hàng!`);
    }
  };

  const updateQty = (idx: number, delta: number) => {
    const targetItem = cart[idx];
    if (!targetItem) return;

    if (delta > 0 && targetItem.product_id) {
      const prod = products.find(p => p.id === targetItem.product_id);
      const totalInCartForProd = cart
        .filter(item => item.product_id === targetItem.product_id)
        .reduce((sum, item) => sum + item.quantity, 0);

      if (prod && totalInCartForProd + delta > prod.stock) {
        showNotice(`Kho chỉ còn tối đa ${prod.stock} sản phẩm "${prod.name}"!`);
        return;
      }
    }

    const next = cart
      .map((item, i) => (i === idx ? { ...item, quantity: item.quantity + delta } : item))
      .filter(item => item.quantity > 0);
    saveCart(next);
  };

  const removeItem = (idx: number) => {
    saveCart(cart.filter((_, i) => i !== idx));
  };

  const subtotal = cart.reduce((s, item) => s + item.price * item.quantity, 0);
  const defaultShipping = Number(storeSettings.shipping_fee ?? 30000);
  const freeThreshold = Number(storeSettings.free_shipping_threshold ?? 500000);
  const shippingFee = cart.length === 0 ? 0 : freeThreshold > 0 && subtotal >= freeThreshold ? 0 : defaultShipping;
  const totalAmount = subtotal + shippingFee;
  const totalItems = cart.reduce((s, item) => s + item.quantity, 0);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/store/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenant_id: tenantId,
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
          customer_address: customerAddress,
          payment_method: paymentMethod,
          notes,
          items: cart,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        // Handle Race Condition / Out of stock (HTTP 409)
        if (res.status === 409 && data.product_id) {
          const avail = Number(data.available_stock ?? 0);
          if (avail <= 0) {
            saveCart(cart.filter(i => i.product_id !== data.product_id));
          } else {
            saveCart(
              cart.map(i => (i.product_id === data.product_id ? { ...i, quantity: avail } : i))
            );
          }
          setCheckoutStep('cart');
        }
        throw new Error(data.error || 'Đặt hàng thất bại');
      }

      setCreatedOrder(data.order);
      setStoreBank(data.store_bank);
      saveCart([]);
      setCheckoutStep('success');
    } catch (err: any) {
      alert(err?.message || 'Có lỗi xảy ra khi đặt hàng');
    } finally {
      setSubmitting(false);
    }
  };

  const formatVND = (val: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);

  const activeProducts = products.filter(p => p.status === 'active');
  const categories = Array.from(new Set(activeProducts.map(p => p.category).filter(Boolean)));

  const filteredProducts = activeProducts.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (!searchQuery) return true;
    return p.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (activeProducts.length === 0) return null;

  return (
    <>
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-sm font-bold animate-in fade-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* STOREFRONT PRODUCT CATALOG SECTION */}
      <section id="cua-hang" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cửa Hàng Chính Hãng • {tenantName}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                Đặt hàng trực tuyến nhanh chóng • Hỗ trợ thanh toán VietQR & Giao hàng tận nơi (COD).
              </p>
            </div>

            {/* Search & Cart Trigger */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Tìm sản phẩm..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                />
              </div>

              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  setIsCartOpen(true);
                }}
                className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold shadow-md transition-colors shrink-0 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Giỏ hàng</span>
                <span className="px-2 py-0.5 text-xs rounded-full bg-amber-400 text-slate-950 font-black">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>

          {/* Category Pills */}
          {categories.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Tất cả ({activeProducts.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => {
              const discountPercent =
                product.compare_price && product.compare_price > product.price
                  ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
                  : 0;
              const currentVariant =
                selectedVariants[product.id] ||
                (product.variants && product.variants.length > 0 ? product.variants[0].name : '');

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    {product.images?.[0] ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <ShoppingBag className="w-12 h-12" />
                      </div>
                    )}

                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {discountPercent > 0 && (
                        <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-black shadow">
                          -{discountPercent}%
                        </span>
                      )}
                      {product.is_featured && (
                        <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-black shadow">
                          BÁN CHẠY
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/75 backdrop-blur-md text-white text-[11px] font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 line-clamp-1">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                          {product.description}
                        </p>
                      )}

                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-xl font-black text-indigo-600">
                          {formatVND(product.price)}
                        </span>
                        {product.compare_price && product.compare_price > product.price ? (
                          <span className="text-xs text-slate-400 line-through font-semibold">
                            {formatVND(product.compare_price)}
                          </span>
                        ) : null}
                      </div>

                      {/* Variants Selector */}
                      {product.variants && product.variants.length > 0 && (
                        <div className="mt-3">
                          <span className="block text-[11px] font-bold text-slate-400 uppercase mb-1.5">
                            Chọn phân loại:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {product.variants.map((v, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() =>
                                  setSelectedVariants(prev => ({ ...prev, [product.id]: v.name }))
                                }
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                                  currentVariant === v.name
                                    ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                }`}
                              >
                                {v.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        disabled={product.stock <= 0}
                        onClick={() => addToCart(product, false)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-600 text-slate-800 hover:text-indigo-600 text-xs font-extrabold transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Thêm giỏ</span>
                      </button>

                      <button
                        type="button"
                        disabled={product.stock <= 0}
                        onClick={() => addToCart(product, true)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <span>{product.stock > 0 ? 'Mua ngay' : 'Hết hàng'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLOATING CART PILL (BOTTOM LEFT) */}
      {totalItems > 0 && !isCartOpen && (
        <button
          onClick={() => {
            setCheckoutStep('cart');
            setIsCartOpen(true);
          }}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-3 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 transition-all cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">
              Giỏ hàng của bạn
            </div>
            <div className="text-sm font-black">{formatVND(subtotal)}</div>
          </div>
        </button>
      )}

      {/* SLIDE-OVER CART & CHECKOUT DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm font-sans">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  {checkoutStep === 'cart'
                    ? `Giỏ hàng (${totalItems})`
                    : checkoutStep === 'form'
                    ? 'Thông tin Đặt hàng & Thanh toán'
                    : 'Đặt hàng Thành công!'}
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* STEP 1: CART ITEMS */}
            {checkoutStep === 'cart' && (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-slate-400">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40" />
                      <p className="font-bold text-slate-600">Giỏ hàng đang trống</p>
                      <p className="text-xs mt-1">Hãy chọn sản phẩm yêu thích để đặt mua nhé!</p>
                    </div>
                  ) : (
                    <>
                      {freeThreshold > 0 && (
                        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-xs text-indigo-800 flex items-center gap-2">
                          <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
                          {subtotal >= freeThreshold ? (
                            <span className="font-bold text-emerald-700">
                              Đơn hàng của bạn đã được Miễn phí vận chuyển!
                            </span>
                          ) : (
                            <span>
                              Mua thêm <strong>{formatVND(freeThreshold - subtotal)}</strong> để được{' '}
                              <strong>Freeship</strong>!
                            </span>
                          )}
                        </div>
                      )}

                      {cart.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white"
                        >
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 rounded-lg object-cover bg-slate-100 shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-900 text-sm truncate">{item.name}</h4>
                            {item.variant && (
                              <p className="text-xs text-slate-500">Phân loại: {item.variant}</p>
                            )}
                            <p className="text-sm font-extrabold text-indigo-600 mt-1">
                              {formatVND(item.price)}
                            </p>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <button
                              onClick={() => removeItem(idx)}
                              className="text-slate-400 hover:text-rose-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => updateQty(idx, -1)}
                                className="p-1 hover:bg-slate-100 text-slate-600"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQty(idx, 1)}
                                className="p-1 hover:bg-slate-100 text-slate-600"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between text-slate-500">
                        <span>Tạm tính:</span>
                        <span>{formatVND(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Phí vận chuyển:</span>
                        <span>{shippingFee === 0 ? 'Miễn phí' : formatVND(shippingFee)}</span>
                      </div>
                      <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                        <span>Tổng cộng:</span>
                        <span className="text-indigo-600">{formatVND(totalAmount)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCheckoutStep('form')}
                      className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-200 transition-all cursor-pointer"
                    >
                      Tiến hành Đặt hàng
                    </button>
                  </div>
                )}
              </>
            )}

            {/* STEP 2: CHECKOUT FORM */}
            {checkoutStep === 'form' && (
              <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Họ và tên người nhận *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="0901234567"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Địa chỉ giao hàng chi tiết *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerAddress}
                      onChange={e => setCustomerAddress(e.target.value)}
                      placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Phương thức thanh toán
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      <label
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === 'bank_transfer'
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-900'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={() => setPaymentMethod('bank_transfer')}
                          className="text-indigo-600"
                        />
                        <QrCode className="w-5 h-5 text-indigo-600 shrink-0" />
                        <div>
                          <div className="font-bold text-xs sm:text-sm">
                            Chuyển khoản nhanh qua mã VietQR
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Tự động tạo mã QR đúng số tiền vào tài khoản Cửa hàng
                          </div>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === 'cod'
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-900'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="text-indigo-600"
                        />
                        <CreditCard className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-bold text-xs sm:text-sm">
                            Thanh toán khi nhận hàng (COD)
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Kiểm tra hàng trước khi thanh toán tiền mặt
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Ghi chú đơn hàng
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Giao giờ hành chính, gọi trước khi giao..."
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex justify-between text-base font-black text-slate-900">
                    <span>Tổng thanh toán:</span>
                    <span className="text-indigo-600">{formatVND(totalAmount)}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
                    >
                      Quay lại
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="col-span-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-200 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? 'Đang xử lý...' : 'Xác nhận Đặt hàng'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 3: ORDER SUCCESS + TENANT VIETQR */}
            {checkoutStep === 'success' && createdOrder && (
              <div className="flex-1 overflow-y-auto p-6 text-center space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <PackageCheck className="w-8 h-8" />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold">
                    Mã đơn hàng: #{createdOrder.order_code}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-2">
                    Cảm ơn {createdOrder.customer_name}!
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Đơn hàng đã được gửi tới hệ thống quản lý của <strong>{tenantName}</strong>.
                  </p>
                </div>

                {createdOrder.payment_method === 'bank_transfer' && storeBank && (
                  <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 space-y-3">
                    <div className="text-xs font-extrabold text-indigo-900 uppercase tracking-wider">
                      Quét mã VietQR để Thanh toán cho Cửa hàng
                    </div>
                    <div className="w-56 h-56 mx-auto bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                      <img
                        src={`https://img.vietqr.io/image/${storeBank.bank_bin}-${storeBank.bank_account}-compact2.png?amount=${createdOrder.total_amount}&addInfo=${encodeURIComponent(
                          createdOrder.order_code
                        )}&accountName=${encodeURIComponent(storeBank.bank_owner)}`}
                        alt="VietQR Payment"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs space-y-1 text-slate-700">
                      <div>
                        Ngân hàng: <strong>{storeBank.bank_name}</strong>
                      </div>
                      <div>
                        Chủ TK: <strong>{storeBank.bank_owner}</strong>
                      </div>
                      <div>
                        Số TK: <strong className="font-mono">{storeBank.bank_account}</strong>
                      </div>
                      <div>
                        Số tiền:{' '}
                        <strong className="text-indigo-700">
                          {formatVND(createdOrder.total_amount)}
                        </strong>
                      </div>
                      <div>
                        Nội dung CK:{' '}
                        <strong className="font-mono bg-amber-100 px-2 py-0.5 rounded text-amber-900">
                          {createdOrder.order_code}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('cart');
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  Tiếp tục mua sắm
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
