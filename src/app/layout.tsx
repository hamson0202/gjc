import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "金進昌實業有限公司 GJC｜輕鋼架．輕隔間．防火建材",
  description:
    "金進昌實業有限公司（GJC）自 1994 年成立，專營輕鋼架、隔間骨料、隔間板材、天花板與岩綿等防火建材，提供穩定可靠的產品與工程服務。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <PageTransition>
          <main className="flex-1 pt-24 sm:pt-28">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
