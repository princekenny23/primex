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
  title: {
    default: "Primex Technologies | Software for better business",
    template: "%s | Primex Technologies",
  },
  description: "Primex Technologies builds practical software and business automation solutions, tailored to the way your business works.",
  keywords: ["Primex Technologies", "business software", "business automation", "PrimePOS", "PrimeSchool", "Gym Management System", "custom software"],
  icons: {
    icon: "/brand/primex-mark.png",
    shortcut: "/brand/primex-mark.png",
    apple: "/brand/primex-mark.png",
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
