import { requireRole } from "@/lib/core/session/getSession";
import { ReactNode } from "react";

interface BuyerLayoutProps {
  children: ReactNode;
}

const BuyerLayout = async ({ children }: BuyerLayoutProps) => {
  await requireRole("buyer");

  return <>{children}</>;
};

export default BuyerLayout;