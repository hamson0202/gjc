import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, BadgeCheck, Volume2, ArrowRight } from "lucide-react";
import ProductsShowcase from "@/components/ProductsShowcase";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "防火認證",
    desc: "板材與岩綿產品符合國家防火時效規範，安全有保障。",
  },
  {
    icon: Volume2,
    title: "隔音效果",
    desc: "完整隔間系統搭配岩綿填充，有效降低噪音干擾。",
  },
  {
    icon: Clock,
    title: "施工快速",
    desc: "標準化骨架與配件系統，大幅縮短現場施工時間。",
  },
  {
    icon: BadgeCheck,
    title: "品質保證",
    desc: "自 1994 年深耕建材產業，品質與信譽經得起考驗。",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-6rem)] sm:min-h-[calc(100dvh-7rem)]">
        {/* 桌面版：圖片貼齊右側與螢幕頂端，滿版上下、佔右半版 */}
        <div className="absolute right-0 top-[-7rem] hidden h-[calc(100%+7rem)] w-1/2 lg:block">
          <Image
            src="/images/factory/factory-2.jpg"
            alt="金進昌實業廠房生產線"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[calc(100dvh-7rem)] sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-md xl:max-w-lg">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              since 1994．輕鋼架防火建材專家
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary-dark sm:text-5xl">
              打造穩固防火的
              <br />
              輕隔間空間系統
            </h1>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              金進昌實業有限公司（GJC）自 1994 年成立，專營輕鋼架、隔間骨料、隔間板材、天花板與岩綿等防火建材，以穩定的品質與快速的施工效率，服務辦公室、商業空間及住宅工程。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary-dark px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
              >
                查看產品系列
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-medium text-primary-dark transition hover:border-primary-dark/30"
              >
                免費諮詢報價
              </Link>
            </div>
          </div>

          {/* 手機／平板版：圖片維持在文字下方的置中卡片 */}
          <div className="mt-10 overflow-hidden rounded-lg border border-line lg:hidden">
            <Image
              src="/images/factory/factory-2.jpg"
              alt="金進昌實業廠房生產線"
              width={2000}
              height={1500}
              priority
              className="h-64 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Products
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary-dark">產品系列</p>
            <p className="mt-3 text-foreground/55">
              五大核心產品，從骨架到板材、天花板與防火材料，完整支援輕隔間工程需求。
            </p>
          </div>
        </div>

        <div className="mt-14">
          <ProductsShowcase />
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why GJC
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary-dark">為什麼選擇我們</p>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title}>
                <item.icon size={22} className="text-primary" />
                <h3 className="mt-4 font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Facility
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary-dark">廠房實力</p>
            <p className="mt-3 text-foreground/55">
              完整的原料庫存與生產設備，確保供貨穩定、品質一致。
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { src: "/images/factory/factory-1.jpg", alt: "金進昌實業原料倉儲區" },
              { src: "/images/factory/factory-3.jpg", alt: "金進昌實業鋼捲原料與生產設備" },
            ].map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-lg border border-line">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={2000}
                  height={1500}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Team
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary-dark">用心的第一線團隊</p>
            <p className="mt-3 text-foreground/55">
              產品的穩定品質，來自每一位現場人員的專業與細心。
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                src: "/images/team/staff-operator.jpg",
                alt: "金進昌實業機台操作人員",
                title: "機台操作．嚴謹把關",
                desc: "每一道輕鋼架成型工序，都由經驗豐富的機台操作人員全程監控，確保尺寸精度與結構強度符合標準，是產品品質最前線的守門人。",
              },
              {
                src: "/images/team/staff-forklift.jpg",
                alt: "金進昌實業堆高機備貨人員",
                title: "備貨出貨．準時可靠",
                desc: "從理貨、打包到裝車，備貨人員仔細核對每一筆訂單內容，用心確保出貨無誤，讓客戶的每次交期都能準時、安心。",
              },
            ].map((person) => (
              <div key={person.src} className="overflow-hidden rounded-lg border border-line">
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={1600}
                  height={2133}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-primary-dark">{person.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/55">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-primary-dark px-8 py-12 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h2 className="text-2xl font-bold text-white">
                需要輕隔間或防火建材工程報價？
              </h2>
              <p className="mt-2 max-w-xl text-white/60">
                歡迎與我們聯繫，金進昌實業將依您的空間需求提供合適的產品建議與施工規劃。
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
            >
              立即聯絡我們
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
