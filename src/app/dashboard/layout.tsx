import type { Metadata } from "next";
import CustomCursor from '../../components/CustomCursor';

export const metadata: Metadata = {
  title: "Dashboard - DPRINT",
  description: "Access and manage your 3D printing projects in the DPRINT dashboard.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {/* <CustomCursor /> */}
    </>
  );
} 