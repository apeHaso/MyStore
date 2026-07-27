import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MyStore",
  description: "Products and services, built privacy-first."
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return <html lang="en"><body><Header /><main className="container py-10">{children}</main><Footer /></body></html>;
}