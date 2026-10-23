import React from "react";
import type { DemoTemplateProps } from "@/types/demo";
import { StudioTemplateRenderer } from "./StudioTemplateRenderer";
import XayDung2Renderer from "@/template-sources/xay_dung_2/components/demo/DemoTemplateRenderer";
import XayDung3Renderer from "@/template-sources/xay_dung_3/components/demo/DemoTemplateRenderer";

export function DemoTemplateRenderer({ data }: DemoTemplateProps) {
  const templateKey = data?.template?.key as string | undefined;
  if (templateKey === "xay_dung_2" || templateKey === "XD002") {
    return <XayDung2Renderer data={data} />;
  }
  if (templateKey === "xay_dung_3" || templateKey === "XD003" || templateKey === "NT003") {
    return <XayDung3Renderer data={data} />;
  }
  return <StudioTemplateRenderer data={data} />;
}
