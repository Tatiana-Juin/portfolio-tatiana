import type { Metadata } from "next";
import { Geist, Geist_Mono   } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon portfolio avec nextjs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}  `}>
      <body>
        <Navbar />
         {children}
        <Footer />
       
        </body>
    </html>
  );
}
