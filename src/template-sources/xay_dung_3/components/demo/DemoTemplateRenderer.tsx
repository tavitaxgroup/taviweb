"use client";

import React from "react";
import { XayDung3Template } from "./templates/XayDung3Template";
import { XayDung3Data } from "../../types/demo";
import { xayDung3DefaultData } from "../../lib/demo/data";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  // If data is provided in standard DemoPageData format from the system (Supabase / Lead pipeline)
  if (data && (data.business || data.hero || data.template)) {
    const rawBusiness = data.business;
    const rawContact = data.contact;

    const companyName = rawBusiness?.name?.trim() || xayDung3DefaultData.business.name;
    const rawPhone = rawBusiness?.phone || rawContact?.phone || xayDung3DefaultData.business.phone;
    const rawEmail = rawBusiness?.email || rawContact?.email || xayDung3DefaultData.business.email;
    const address = rawBusiness?.address || rawContact?.address || xayDung3DefaultData.business.address;
    const customerLogo: string | undefined = rawBusiness?.logo || undefined;

    const adaptedData: Partial<XayDung3Data> = {
      business: {
        ...xayDung3DefaultData.business,
        name: companyName,
        tagline:
          rawBusiness?.description ||
          `${companyName} – giải pháp kiến trúc, xây dựng và hoàn thiện nội thất trọn gói, tận tâm trên từng công trình.`,
        phone: rawPhone,
        email: rawEmail,
        address: address,
        // Never show the demo "BIM." logo for a real business: customer logo or text logo (company name)
        logo: customerLogo,
        logoWhite: customerLogo,
      },
      hero: {
        ...xayDung3DefaultData.hero,
        titlePrefix: "Kiến tạo",
        titleOutline: "Đẳng cấp",
        titleHighlight: "Không gian",
        description: data.hero?.subtitle || `${companyName} cam kết chuẩn mực kiến trúc bền vững, tối ưu công năng và hoàn thiện nội thất tinh tế cho từng gia chủ.`,
      },
      about: {
        ...xayDung3DefaultData.about,
        paragraphs: [
          `${companyName} tự hào mang đến các giải pháp kiến trúc và hoàn thiện nội thất cao cấp theo tiêu chuẩn quốc tế.`,
          `Mỗi công trình là một tác phẩm nghệ thuật độc bản, được nghiên cứu tỉ mỉ từ phong thủy, công năng sử dụng đến từng chi tiết hoàn thiện nhỏ nhất.`
        ]
      },
      services: xayDung3DefaultData.services,
      portfolioStrip: xayDung3DefaultData.portfolioStrip,
      team: xayDung3DefaultData.team,
      beforeAfter: xayDung3DefaultData.beforeAfter,
      stats: xayDung3DefaultData.stats,
      articles: xayDung3DefaultData.articles,
      contact: {
        ...xayDung3DefaultData.contact,
        cards: {
          call: {
            title: "Hotline Tư vấn",
            lines: [rawPhone, "Tư vấn thiết kế 24/7"]
          },
          email: {
            title: "Email Dự án",
            lines: [rawEmail]
          },
          address: {
            title: "Văn phòng Làm việc",
            lines: [address]
          }
        }
      }
    };

    return <XayDung3Template customData={adaptedData} />;
  }

  // Otherwise, use as standard XayDung3Data or defaults
  return <XayDung3Template customData={data} />;
}

export default DemoTemplateRenderer;
