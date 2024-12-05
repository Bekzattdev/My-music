import LayoutSite from "@/src/appPages/layout/LayoutSite";
import React, { FC, ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
