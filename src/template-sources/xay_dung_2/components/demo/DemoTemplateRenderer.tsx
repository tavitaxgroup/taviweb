"use client";

import React from "react";
import { XayDung2Template } from "./templates/XayDung2Template";
import { XayDung2Data } from "@/template-sources/xay_dung_2/types/demo";
import { xayDung2DefaultData } from "@/template-sources/xay_dung_2/lib/demo/data";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  // If data is provided in standard DemoPageData format from the system
  if (data && (data.business || data.hero || data.template)) {
    const rawBusiness = data.business;
    const rawContact = data.contact;

    const companyName = rawBusiness?.name?.trim() || xayDung2DefaultData.business.name;
    const rawPhone = rawBusiness?.phone || rawContact?.phone;
    const rawEmail = rawBusiness?.email || rawContact?.email;
    const address = rawBusiness?.address || rawContact?.address || xayDung2DefaultData.business.address;

    const phones = rawPhone
      ? [rawPhone, ...(xayDung2DefaultData.business.phone.slice(1))]
      : xayDung2DefaultData.business.phone;

    const emails = rawEmail
      ? [rawEmail, ...(xayDung2DefaultData.business.email.slice(1))]
      : xayDung2DefaultData.business.email;

    const skypes = rawPhone
      ? [`Zalo: ${rawPhone}`, "Tư vấn thiết kế 24/7"]
      : xayDung2DefaultData.business.skype;

    const aboutText = [
      `${companyName} đảm nhiệm trọn vẹn quy trình xây dựng, từ ý tưởng ban đầu, nghiên cứu concept kiến trúc đến thi công hoàn thiện trên thực địa. Chúng tôi trân trọng các giá trị bền vững và dung hòa tinh tế cùng xu hướng kiến trúc đương đại.`,
      `Mỗi khách hàng và chủ đầu tư chính là linh hồn của dự án. Sứ mệnh của chúng tôi là khắc họa trọn vẹn phong cách sống, đẳng cấp và cá tính riêng biệt qua từng đường nét không gian.`
    ];

    const adaptedData: Partial<XayDung2Data> = {
      business: {
        name: companyName,
        logo: rawBusiness?.logo || xayDung2DefaultData.business.logo,
        phone: phones,
        email: emails,
        skype: skypes,
        address: address,
        aboutText: aboutText,
      },
      hero: {
        subtitle: xayDung2DefaultData.hero.subtitle,
        title: xayDung2DefaultData.hero.title,
        ctaText: xayDung2DefaultData.hero.ctaText,
        ctaLink: xayDung2DefaultData.hero.ctaLink,
        backgroundImage: xayDung2DefaultData.hero.backgroundImage,
      },
      stats: xayDung2DefaultData.stats,
      projects: xayDung2DefaultData.projects,
      services: xayDung2DefaultData.services,
      team: xayDung2DefaultData.team,
      awards: xayDung2DefaultData.awards,
      clients: xayDung2DefaultData.clients,
      testimonials: xayDung2DefaultData.testimonials,
    };

    return <XayDung2Template customData={adaptedData} />;
  }

  // Otherwise, use as standard XayDung2Data or defaults
  return <XayDung2Template customData={data} />;
}

export default DemoTemplateRenderer;
