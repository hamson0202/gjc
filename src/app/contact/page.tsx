import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "聯絡我們｜金進昌實業有限公司 GJC",
  description: "歡迎與金進昌實業有限公司聯繫，取得輕鋼架、輕隔間與防火建材產品報價。",
};

const contactInfo = [
  { icon: MapPin, label: "公司地址", value: "台中市西屯區西屯路三段185-2號" },
  { icon: Phone, label: "聯絡電話", value: "04-26310022" },
  { icon: Clock, label: "營業時間", value: "週一至週五 08:00–17:00" },
];

export default function ContactPage() {
  return (
    <div>
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact Us
          </h1>
          <p className="mt-2 text-3xl font-bold text-primary-dark sm:text-4xl">聯絡我們</p>
          <p className="mt-4 max-w-xl text-foreground/55">
            歡迎來電或填寫下方表單，我們將盡快與您聯繫，提供產品諮詢與工程報價服務。
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-primary-dark">公司資訊</h2>
            <ul className="mt-6 space-y-5">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <c.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <span className="block text-xs text-foreground/45">{c.label}</span>
                    <span className="block text-sm font-medium text-primary-dark">{c.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-lg border border-line">
              <iframe
                title="公司位置地圖"
                src="https://maps.google.com/maps?q=台中市西屯區西屯路三段185-2號&z=16&output=embed"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="border-t border-line pt-10 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-lg font-bold text-primary-dark">線上詢問表單</h2>
            <p className="mt-1 text-sm text-foreground/55">
              填寫以下資訊，我們的專員將盡快與您聯繫。
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
