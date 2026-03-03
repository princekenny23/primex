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
  title: "PrimeX Ltd - Enterprise ERP Solutions",
  description: "Integrated enterprise software solutions designed for modern businesses. Streamline your operations with our comprehensive ERP ecosystem.",
  keywords: ["ERP", "Enterprise Software", "Business Solutions", "POS", "Fleet Management", "HR", "Payroll", "Accounting"],
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
