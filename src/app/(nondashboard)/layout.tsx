import NondashboardNavbar from "@/components/NondashboardNavbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NondashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
