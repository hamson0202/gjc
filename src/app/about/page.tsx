import type { Metadata } from "next";
import { Building, Calendar, Users, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "關於我們｜金進昌實業有限公司 GJC",
  description: "金進昌實業有限公司自 1994 年成立，專營輕鋼架、輕隔間與防火建材產業。",
};

const facts = [
  { icon: Calendar, label: "設立日期", value: "1994 年 6 月 10 日" },
  { icon: Users, label: "代表人", value: "陳鴻志" },
  { icon: Wallet, label: "資本總額", value: "NT$ 105,000,000" },
  { icon: Building, label: "統一編號", value: "84965533" },
];

const timeline = [
  {
    year: "1994",
    title: "公司成立",
    desc: "金進昌實業有限公司於臺中成立，投入五金與建材批發業務。",
  },
  {
    year: "至今",
    title: "產業深耕",
    desc: "業務擴展至金屬製造加工、金屬結構製造及室內輕鋼架工程，累積深厚的產業經驗。",
  },
  {
    year: "現在",
    title: "專注防火建材",
    desc: "聚焦輕鋼架、隔間骨料、隔間板材、天花板與岩綿五大產品系列，服務各類空間工程。",
  },
];

const scope = [
  "五金批發零售",
  "建材及耐火材料批發",
  "國際貿易",
  "金屬製造加工（鋼材、鋁材、銅鑄造）",
  "金屬結構製造",
  "室內裝潢及輕鋼架工程",
  "景觀與室內設計",
];

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Us
          </h1>
          <p className="mt-2 text-3xl font-bold text-primary-dark sm:text-4xl">關於我們</p>
          <p className="mt-4 max-w-xl text-foreground/55">
            金進昌實業有限公司自 1994 年成立以來，深耕建材與金屬結構產業，以穩健的品質與服務，成為輕隔間、輕鋼架與防火建材領域值得信賴的夥伴。
          </p>
        </div>
      </div>

      {/* Company facts */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-white px-6 py-8 text-center">
                <f.icon size={20} className="mx-auto text-primary" />
                <p className="mt-3 text-xs text-foreground/50">{f.label}</p>
                <p className="mt-1 font-bold text-primary-dark">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business scope */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-primary-dark">營業項目</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {scope.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line px-3.5 py-1.5 text-sm text-foreground/65"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary-dark">發展歷程</h2>
        <div className="mt-10 max-w-2xl space-y-8 border-l border-line pl-8">
          {timeline.map((t) => (
            <div key={t.title} className="relative">
              <span className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-sm font-semibold text-accent">{t.year}</p>
              <h3 className="mt-1 font-bold text-primary-dark">{t.title}</h3>
              <p className="mt-1 text-sm leading-6 text-foreground/55">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
