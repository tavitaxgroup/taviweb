"use client";

import dynamic from "next/dynamic";
import React from "react";

// Using dynamic imports to keep the main bundle small across all templates
const templates: Record<string, React.ComponentType<any>> = {
  nha_khoa: dynamic(() => import("@/template-sources/nha_khoa/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa: dynamic(() => import("@/template-sources/spa/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien: dynamic(() => import("@/template-sources/tham_my_vien/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham: dynamic(() => import("@/template-sources/phong_kham/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc: dynamic(() => import("@/template-sources/salon_toc/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su: dynamic(() => import("@/template-sources/luat_su/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh: dynamic(() => import("@/template-sources/trung_tam_tieng_anh/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh: dynamic(() => import("@/template-sources/dich_vu_ve_sinh/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that: dynamic(() => import("@/template-sources/noi_that/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that" đang được cập nhật.</div>; };
  }), { ssr: true }),
  cong_ty_xay_dung: dynamic(() => import("@/template-sources/cong_ty_xay_dung/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "cong_ty_xay_dung" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_2: dynamic(() => import("@/template-sources/xay_dung_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_3: dynamic(() => import("@/template-sources/xay_dung_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang: dynamic(() => import("@/template-sources/nha_hang/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe: dynamic(() => import("@/template-sources/quan_cafe/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh: dynamic(() => import("@/template-sources/studio_chup_anh/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym: dynamic(() => import("@/template-sources/phong_gym/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto: dynamic(() => import("@/template-sources/garage_oto/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile: dynamic(() => import("@/template-sources/corporate_profile/components/demo/templates/CorporateProfileTemplate").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product: dynamic(() => import("@/template-sources/b2b_product/components/demo/templates/B2BProductTemplate").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation: dynamic(() => import("@/template-sources/lead_generation/components/demo/templates/LeadGenerationTemplate").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_fixera: dynamic(() => import("@/template-sources/xay_dung_fixera/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_fixera" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_4: dynamic(() => import("@/template-sources/xay_dung_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_5: dynamic(() => import("@/template-sources/xay_dung_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_6: dynamic(() => import("@/template-sources/xay_dung_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_7: dynamic(() => import("@/template-sources/xay_dung_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_8: dynamic(() => import("@/template-sources/xay_dung_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_9: dynamic(() => import("@/template-sources/xay_dung_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_10: dynamic(() => import("@/template-sources/xay_dung_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_11: dynamic(() => import("@/template-sources/xay_dung_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_12: dynamic(() => import("@/template-sources/xay_dung_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_13: dynamic(() => import("@/template-sources/xay_dung_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_14: dynamic(() => import("@/template-sources/xay_dung_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_15: dynamic(() => import("@/template-sources/xay_dung_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_16: dynamic(() => import("@/template-sources/xay_dung_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_2: dynamic(() => import("@/template-sources/noi_that_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_3: dynamic(() => import("@/template-sources/noi_that_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_4: dynamic(() => import("@/template-sources/noi_that_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_5: dynamic(() => import("@/template-sources/noi_that_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_6: dynamic(() => import("@/template-sources/noi_that_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_2: dynamic(() => import("@/template-sources/nha_khoa_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_3: dynamic(() => import("@/template-sources/nha_khoa_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_2: dynamic(() => import("@/template-sources/spa_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_3: dynamic(() => import("@/template-sources/spa_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_2: dynamic(() => import("@/template-sources/tham_my_vien_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_3: dynamic(() => import("@/template-sources/tham_my_vien_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_2: dynamic(() => import("@/template-sources/phong_kham_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_3: dynamic(() => import("@/template-sources/phong_kham_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_2: dynamic(() => import("@/template-sources/salon_toc_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_2: dynamic(() => import("@/template-sources/studio_chup_anh_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_2: dynamic(() => import("@/template-sources/nha_hang_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_3: dynamic(() => import("@/template-sources/nha_hang_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_2: dynamic(() => import("@/template-sources/quan_cafe_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_3: dynamic(() => import("@/template-sources/quan_cafe_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_2: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_3: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_2: dynamic(() => import("@/template-sources/luat_su_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_3: dynamic(() => import("@/template-sources/luat_su_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_2: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_3: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_2: dynamic(() => import("@/template-sources/phong_gym_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_3: dynamic(() => import("@/template-sources/phong_gym_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_2: dynamic(() => import("@/template-sources/garage_oto_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_3: dynamic(() => import("@/template-sources/garage_oto_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_2: dynamic(() => import("@/template-sources/corporate_profile_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_2: dynamic(() => import("@/template-sources/b2b_product_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_3: dynamic(() => import("@/template-sources/b2b_product_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_2: dynamic(() => import("@/template-sources/lead_generation_2/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_2" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_7: dynamic(() => import("@/template-sources/noi_that_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_8: dynamic(() => import("@/template-sources/noi_that_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_9: dynamic(() => import("@/template-sources/noi_that_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_10: dynamic(() => import("@/template-sources/noi_that_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_4: dynamic(() => import("@/template-sources/spa_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_5: dynamic(() => import("@/template-sources/spa_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_6: dynamic(() => import("@/template-sources/spa_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_4: dynamic(() => import("@/template-sources/tham_my_vien_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_5: dynamic(() => import("@/template-sources/tham_my_vien_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_6: dynamic(() => import("@/template-sources/tham_my_vien_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_4: dynamic(() => import("@/template-sources/luat_su_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_5: dynamic(() => import("@/template-sources/luat_su_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_6: dynamic(() => import("@/template-sources/luat_su_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_7: dynamic(() => import("@/template-sources/luat_su_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_4: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_5: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_6: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_4: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_4: dynamic(() => import("@/template-sources/garage_oto_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_5: dynamic(() => import("@/template-sources/garage_oto_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_4: dynamic(() => import("@/template-sources/phong_gym_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_4: dynamic(() => import("@/template-sources/nha_hang_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_3: dynamic(() => import("@/template-sources/corporate_profile_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_4: dynamic(() => import("@/template-sources/corporate_profile_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_5: dynamic(() => import("@/template-sources/corporate_profile_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_6: dynamic(() => import("@/template-sources/corporate_profile_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_7: dynamic(() => import("@/template-sources/corporate_profile_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_8: dynamic(() => import("@/template-sources/corporate_profile_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_4: dynamic(() => import("@/template-sources/b2b_product_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_5: dynamic(() => import("@/template-sources/b2b_product_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_6: dynamic(() => import("@/template-sources/b2b_product_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_7: dynamic(() => import("@/template-sources/b2b_product_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_3: dynamic(() => import("@/template-sources/lead_generation_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_4: dynamic(() => import("@/template-sources/lead_generation_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_5: dynamic(() => import("@/template-sources/lead_generation_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_6: dynamic(() => import("@/template-sources/lead_generation_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_3: dynamic(() => import("@/template-sources/studio_chup_anh_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_4: dynamic(() => import("@/template-sources/studio_chup_anh_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_3: dynamic(() => import("@/template-sources/salon_toc_3/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_3" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_4: dynamic(() => import("@/template-sources/salon_toc_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_5: dynamic(() => import("@/template-sources/phong_gym_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_6: dynamic(() => import("@/template-sources/phong_gym_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_6: dynamic(() => import("@/template-sources/garage_oto_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_7: dynamic(() => import("@/template-sources/garage_oto_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_7: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_8: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_9: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_10: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_11: dynamic(() => import("@/template-sources/noi_that_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_12: dynamic(() => import("@/template-sources/noi_that_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_17: dynamic(() => import("@/template-sources/xay_dung_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_18: dynamic(() => import("@/template-sources/xay_dung_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_9: dynamic(() => import("@/template-sources/corporate_profile_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_10: dynamic(() => import("@/template-sources/corporate_profile_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_11: dynamic(() => import("@/template-sources/corporate_profile_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_12: dynamic(() => import("@/template-sources/corporate_profile_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_8: dynamic(() => import("@/template-sources/b2b_product_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_9: dynamic(() => import("@/template-sources/b2b_product_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_10: dynamic(() => import("@/template-sources/b2b_product_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_11: dynamic(() => import("@/template-sources/b2b_product_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_5: dynamic(() => import("@/template-sources/nha_hang_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_4: dynamic(() => import("@/template-sources/quan_cafe_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_5: dynamic(() => import("@/template-sources/studio_chup_anh_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_5: dynamic(() => import("@/template-sources/salon_toc_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_19: dynamic(() => import("@/template-sources/xay_dung_19/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_19" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_20: dynamic(() => import("@/template-sources/xay_dung_20/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_20" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_13: dynamic(() => import("@/template-sources/noi_that_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_14: dynamic(() => import("@/template-sources/noi_that_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_4: dynamic(() => import("@/template-sources/nha_khoa_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_4: dynamic(() => import("@/template-sources/phong_kham_4/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_4" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_5: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_5: dynamic(() => import("@/template-sources/quan_cafe_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_11: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_12: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_13: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_14: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_15: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_16: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_17: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_18: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_15: dynamic(() => import("@/template-sources/noi_that_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_16: dynamic(() => import("@/template-sources/noi_that_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_17: dynamic(() => import("@/template-sources/noi_that_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_18: dynamic(() => import("@/template-sources/noi_that_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_19: dynamic(() => import("@/template-sources/noi_that_19/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_19" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_20: dynamic(() => import("@/template-sources/noi_that_20/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_20" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_21: dynamic(() => import("@/template-sources/noi_that_21/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_21" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_22: dynamic(() => import("@/template-sources/noi_that_22/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_22" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_21: dynamic(() => import("@/template-sources/xay_dung_21/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_21" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_22: dynamic(() => import("@/template-sources/xay_dung_22/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_22" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_23: dynamic(() => import("@/template-sources/xay_dung_23/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_23" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_24: dynamic(() => import("@/template-sources/xay_dung_24/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_24" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_25: dynamic(() => import("@/template-sources/xay_dung_25/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_25" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_26: dynamic(() => import("@/template-sources/xay_dung_26/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_26" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_27: dynamic(() => import("@/template-sources/xay_dung_27/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_27" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_28: dynamic(() => import("@/template-sources/xay_dung_28/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_28" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_7: dynamic(() => import("@/template-sources/spa_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_8: dynamic(() => import("@/template-sources/spa_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_7: dynamic(() => import("@/template-sources/tham_my_vien_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_8: dynamic(() => import("@/template-sources/tham_my_vien_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_5: dynamic(() => import("@/template-sources/phong_kham_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_6: dynamic(() => import("@/template-sources/phong_kham_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_5: dynamic(() => import("@/template-sources/nha_khoa_5/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_5" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_9: dynamic(() => import("@/template-sources/tham_my_vien_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_6: dynamic(() => import("@/template-sources/nha_hang_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_7: dynamic(() => import("@/template-sources/nha_hang_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_6: dynamic(() => import("@/template-sources/quan_cafe_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_7: dynamic(() => import("@/template-sources/quan_cafe_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_6: dynamic(() => import("@/template-sources/studio_chup_anh_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_7: dynamic(() => import("@/template-sources/studio_chup_anh_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_8: dynamic(() => import("@/template-sources/studio_chup_anh_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_9: dynamic(() => import("@/template-sources/studio_chup_anh_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_6: dynamic(() => import("@/template-sources/salon_toc_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_7: dynamic(() => import("@/template-sources/salon_toc_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_8: dynamic(() => import("@/template-sources/salon_toc_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_9: dynamic(() => import("@/template-sources/salon_toc_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_7: dynamic(() => import("@/template-sources/phong_gym_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_8: dynamic(() => import("@/template-sources/phong_gym_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_9: dynamic(() => import("@/template-sources/phong_gym_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_10: dynamic(() => import("@/template-sources/phong_gym_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_8: dynamic(() => import("@/template-sources/garage_oto_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_9: dynamic(() => import("@/template-sources/garage_oto_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_10: dynamic(() => import("@/template-sources/garage_oto_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_11: dynamic(() => import("@/template-sources/garage_oto_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_8: dynamic(() => import("@/template-sources/luat_su_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_9: dynamic(() => import("@/template-sources/luat_su_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_6: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_7: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_13: dynamic(() => import("@/template-sources/corporate_profile_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_14: dynamic(() => import("@/template-sources/corporate_profile_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_15: dynamic(() => import("@/template-sources/corporate_profile_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_16: dynamic(() => import("@/template-sources/corporate_profile_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_12: dynamic(() => import("@/template-sources/b2b_product_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_13: dynamic(() => import("@/template-sources/b2b_product_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_14: dynamic(() => import("@/template-sources/b2b_product_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_15: dynamic(() => import("@/template-sources/b2b_product_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_16: dynamic(() => import("@/template-sources/b2b_product_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_17: dynamic(() => import("@/template-sources/b2b_product_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_18: dynamic(() => import("@/template-sources/b2b_product_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_19: dynamic(() => import("@/template-sources/b2b_product_19/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_19" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_7: dynamic(() => import("@/template-sources/lead_generation_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_8: dynamic(() => import("@/template-sources/lead_generation_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_9: dynamic(() => import("@/template-sources/lead_generation_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_10: dynamic(() => import("@/template-sources/lead_generation_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_29: dynamic(() => import("@/template-sources/xay_dung_29/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_29" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_30: dynamic(() => import("@/template-sources/xay_dung_30/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_30" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_31: dynamic(() => import("@/template-sources/xay_dung_31/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_31" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_32: dynamic(() => import("@/template-sources/xay_dung_32/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_32" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_23: dynamic(() => import("@/template-sources/noi_that_23/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_23" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_24: dynamic(() => import("@/template-sources/noi_that_24/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_24" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_25: dynamic(() => import("@/template-sources/noi_that_25/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_25" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_26: dynamic(() => import("@/template-sources/noi_that_26/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_26" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_19: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_19/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_19" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_20: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_20/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_20" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_21: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_21/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_21" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_22: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_22/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_22" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_6: dynamic(() => import("@/template-sources/nha_khoa_6/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_6" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_7: dynamic(() => import("@/template-sources/nha_khoa_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_8: dynamic(() => import("@/template-sources/nha_khoa_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_9: dynamic(() => import("@/template-sources/nha_khoa_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_9: dynamic(() => import("@/template-sources/spa_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_10: dynamic(() => import("@/template-sources/spa_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_11: dynamic(() => import("@/template-sources/spa_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_12: dynamic(() => import("@/template-sources/spa_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_10: dynamic(() => import("@/template-sources/tham_my_vien_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_11: dynamic(() => import("@/template-sources/tham_my_vien_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_12: dynamic(() => import("@/template-sources/tham_my_vien_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_13: dynamic(() => import("@/template-sources/tham_my_vien_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_7: dynamic(() => import("@/template-sources/phong_kham_7/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_7" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_8: dynamic(() => import("@/template-sources/phong_kham_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_9: dynamic(() => import("@/template-sources/phong_kham_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_10: dynamic(() => import("@/template-sources/phong_kham_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_10: dynamic(() => import("@/template-sources/salon_toc_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_11: dynamic(() => import("@/template-sources/salon_toc_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_12: dynamic(() => import("@/template-sources/salon_toc_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_13: dynamic(() => import("@/template-sources/salon_toc_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_10: dynamic(() => import("@/template-sources/studio_chup_anh_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_11: dynamic(() => import("@/template-sources/studio_chup_anh_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_12: dynamic(() => import("@/template-sources/studio_chup_anh_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_13: dynamic(() => import("@/template-sources/studio_chup_anh_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_8: dynamic(() => import("@/template-sources/nha_hang_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_9: dynamic(() => import("@/template-sources/nha_hang_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_10: dynamic(() => import("@/template-sources/nha_hang_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_11: dynamic(() => import("@/template-sources/nha_hang_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_8: dynamic(() => import("@/template-sources/quan_cafe_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_9: dynamic(() => import("@/template-sources/quan_cafe_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_10: dynamic(() => import("@/template-sources/quan_cafe_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_11: dynamic(() => import("@/template-sources/quan_cafe_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_8: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_8/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_8" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_9: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_9/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_9" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_10: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_11: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_10: dynamic(() => import("@/template-sources/luat_su_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_11: dynamic(() => import("@/template-sources/luat_su_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_12: dynamic(() => import("@/template-sources/luat_su_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_13: dynamic(() => import("@/template-sources/luat_su_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_11: dynamic(() => import("@/template-sources/phong_gym_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_12: dynamic(() => import("@/template-sources/phong_gym_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_13: dynamic(() => import("@/template-sources/phong_gym_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_14: dynamic(() => import("@/template-sources/phong_gym_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_12: dynamic(() => import("@/template-sources/garage_oto_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_13: dynamic(() => import("@/template-sources/garage_oto_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_14: dynamic(() => import("@/template-sources/garage_oto_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_15: dynamic(() => import("@/template-sources/garage_oto_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_17: dynamic(() => import("@/template-sources/corporate_profile_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_18: dynamic(() => import("@/template-sources/corporate_profile_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_19: dynamic(() => import("@/template-sources/corporate_profile_19/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_19" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_20: dynamic(() => import("@/template-sources/corporate_profile_20/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_20" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_20: dynamic(() => import("@/template-sources/b2b_product_20/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_20" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_21: dynamic(() => import("@/template-sources/b2b_product_21/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_21" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_22: dynamic(() => import("@/template-sources/b2b_product_22/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_22" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_23: dynamic(() => import("@/template-sources/b2b_product_23/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_23" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_11: dynamic(() => import("@/template-sources/lead_generation_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_12: dynamic(() => import("@/template-sources/lead_generation_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_13: dynamic(() => import("@/template-sources/lead_generation_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_14: dynamic(() => import("@/template-sources/lead_generation_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_33: dynamic(() => import("@/template-sources/xay_dung_33/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_33" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_34: dynamic(() => import("@/template-sources/xay_dung_34/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_34" đang được cập nhật.</div>; };
  }), { ssr: true }),
  xay_dung_35: dynamic(() => import("@/template-sources/xay_dung_35/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "xay_dung_35" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_27: dynamic(() => import("@/template-sources/noi_that_27/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_27" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_28: dynamic(() => import("@/template-sources/noi_that_28/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_28" đang được cập nhật.</div>; };
  }), { ssr: true }),
  noi_that_29: dynamic(() => import("@/template-sources/noi_that_29/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "noi_that_29" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_23: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_23/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_23" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_24: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_24/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_24" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_25: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_25/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_25" đang được cập nhật.</div>; };
  }), { ssr: true }),
  trung_tam_tieng_anh_26: dynamic(() => import("@/template-sources/trung_tam_tieng_anh_26/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "trung_tam_tieng_anh_26" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_10: dynamic(() => import("@/template-sources/nha_khoa_10/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_10" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_11: dynamic(() => import("@/template-sources/nha_khoa_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_12: dynamic(() => import("@/template-sources/nha_khoa_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_khoa_13: dynamic(() => import("@/template-sources/nha_khoa_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_khoa_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_13: dynamic(() => import("@/template-sources/spa_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_14: dynamic(() => import("@/template-sources/spa_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_15: dynamic(() => import("@/template-sources/spa_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  spa_16: dynamic(() => import("@/template-sources/spa_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "spa_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_14: dynamic(() => import("@/template-sources/tham_my_vien_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_15: dynamic(() => import("@/template-sources/tham_my_vien_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_16: dynamic(() => import("@/template-sources/tham_my_vien_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  tham_my_vien_17: dynamic(() => import("@/template-sources/tham_my_vien_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "tham_my_vien_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_11: dynamic(() => import("@/template-sources/phong_kham_11/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_11" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_12: dynamic(() => import("@/template-sources/phong_kham_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_kham_13: dynamic(() => import("@/template-sources/phong_kham_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_kham_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_14: dynamic(() => import("@/template-sources/salon_toc_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  salon_toc_15: dynamic(() => import("@/template-sources/salon_toc_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "salon_toc_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_14: dynamic(() => import("@/template-sources/studio_chup_anh_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_15: dynamic(() => import("@/template-sources/studio_chup_anh_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_16: dynamic(() => import("@/template-sources/studio_chup_anh_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  studio_chup_anh_17: dynamic(() => import("@/template-sources/studio_chup_anh_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "studio_chup_anh_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_12: dynamic(() => import("@/template-sources/nha_hang_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_13: dynamic(() => import("@/template-sources/nha_hang_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_14: dynamic(() => import("@/template-sources/nha_hang_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  nha_hang_15: dynamic(() => import("@/template-sources/nha_hang_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "nha_hang_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_12: dynamic(() => import("@/template-sources/quan_cafe_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_13: dynamic(() => import("@/template-sources/quan_cafe_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_14: dynamic(() => import("@/template-sources/quan_cafe_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  quan_cafe_15: dynamic(() => import("@/template-sources/quan_cafe_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "quan_cafe_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_12: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_12/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_12" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_13: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_13/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_13" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_14: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  dich_vu_ve_sinh_15: dynamic(() => import("@/template-sources/dich_vu_ve_sinh_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "dich_vu_ve_sinh_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_14: dynamic(() => import("@/template-sources/luat_su_14/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_14" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_15: dynamic(() => import("@/template-sources/luat_su_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  luat_su_16: dynamic(() => import("@/template-sources/luat_su_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "luat_su_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_15: dynamic(() => import("@/template-sources/phong_gym_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_16: dynamic(() => import("@/template-sources/phong_gym_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_17: dynamic(() => import("@/template-sources/phong_gym_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  phong_gym_18: dynamic(() => import("@/template-sources/phong_gym_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "phong_gym_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_16: dynamic(() => import("@/template-sources/garage_oto_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_17: dynamic(() => import("@/template-sources/garage_oto_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  garage_oto_18: dynamic(() => import("@/template-sources/garage_oto_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "garage_oto_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_21: dynamic(() => import("@/template-sources/corporate_profile_21/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_21" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_22: dynamic(() => import("@/template-sources/corporate_profile_22/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_22" đang được cập nhật.</div>; };
  }), { ssr: true }),
  corporate_profile_23: dynamic(() => import("@/template-sources/corporate_profile_23/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "corporate_profile_23" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_24: dynamic(() => import("@/template-sources/b2b_product_24/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_24" đang được cập nhật.</div>; };
  }), { ssr: true }),
  b2b_product_25: dynamic(() => import("@/template-sources/b2b_product_25/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "b2b_product_25" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_15: dynamic(() => import("@/template-sources/lead_generation_15/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_15" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_16: dynamic(() => import("@/template-sources/lead_generation_16/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_16" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_17: dynamic(() => import("@/template-sources/lead_generation_17/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_17" đang được cập nhật.</div>; };
  }), { ssr: true }),
  lead_generation_18: dynamic(() => import("@/template-sources/lead_generation_18/components/demo/DemoTemplateRenderer").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {
    return function Fallback() { return <div className="p-8 text-center">Template "lead_generation_18" đang được cập nhật.</div>; };
  }), { ssr: true }),
};

export function getTemplateComponent(templateKey: string): React.ComponentType<any> | null {
  return templates[templateKey] || null;
}
