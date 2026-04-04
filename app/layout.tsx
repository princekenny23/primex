import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PrimeX Ltd - Business Solutions for Modern Companies",
  description: "PrimeX Ltd provides ERP systems, Website as a Service (WaaS), SaaS-ready platforms, and website management services for modern businesses.",
  keywords: ["ERP", "Enterprise Resource Planning", "Business Solutions", "WaaS", "Website as a Service", "SaaS", "Software as a Service", "Website Management", "POS", "Fleet Management", "HR", "Payroll", "Accounting"],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
