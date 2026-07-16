import { requireRole } from "@/lib/core/session/getSession";
import { ReactNode } from "react";

interface SellerLayoutProps {
  children: ReactNode;
}

const SellerLayout = async ({ children }: SellerLayoutProps) => {
  await requireRole("seller");

  return <>{children}</>;
};

export default SellerLayout;