import React from "react";

export type SubpageData = Record<string, any>;

export interface SubpageLayoutProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function SubpageLayout({ children }: SubpageLayoutProps) {
  return <>{children}</>;
}

export default SubpageLayout;
