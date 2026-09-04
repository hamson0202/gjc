import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, GraduationCap, Award, Clapperboard } from "lucide-react";

export const metadata: Metadata = {
  title: "企業社會責任｜金進昌實業有限公司 GJC",
  description: "金進昌實業有限公司長期支持青年追逐夢想，贊助演員陳鼎中投入演藝之路，見證他從新人到金鐘獎得主的成長歷程。",
};

const facts = [
  { icon: Calendar, label: "出生", value: "2002 年，臺中市" },
  { icon: GraduationCap, label: "學歷", value: "新民高中表演藝術科．國立臺灣師範大學表演藝術學系" },
  { icon: Clapperboard, label: "代表作品", value: "《川流之島》、《月光海》、《不如海邊吹吹風》" },
  { icon: Award, label: "得獎紀錄", value: "第 51 屆金鐘獎迷你劇集／電視電影新進演員獎" },
];

export default function CsrPage() {
  return (
    <div>
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-sm font-semibold uppercase tracking-widest text-accent">
            CSR
          </h1>
          <p className="mt-2 text-3xl font-bold text-primary-dark sm:text-4xl">企業社會責任</p>
          <p className="mt-4 max-w-xl text-foreground/55">
            金進昌實業有限公司相信，支持年輕世代追逐夢想，是企業回饋社會最實在的方式。
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">
              陪伴演員陳鼎中，圓一個演藝夢
            </h2>
            <p className="mt-5 leading-7 text-foreground/60">
              金進昌實業長期關注臺中在地青年的築夢之路，多年來持續資助演員陳鼎中投入演藝訓練與作品拍攝，陪伴他從表演科系學生逐步踏上螢光幕前。從默默無聞到嶄露頭角，我們始終相信，穩定的支持是讓夢想得以茁壯的關鍵。
            </p>
            <p className="mt-4 leading-7 text-foreground/60">
              這份堅持在 2016 年迎來最好的印證：陳鼎中憑藉電視電影《川流之島》中飾演的「傅彥超」一角，勇奪第 51 屆金鐘獎「迷你劇集／電視電影新進演員獎」，成為該獎項創設以來的首位得主。對金進昌而言，這不僅是他個人努力的成果，也是企業長期投入社會公益、支持青年圓夢理念的最佳實踐。
            </p>
            <p className="mt-4 leading-7 text-foreground/60">
              金進昌實業將持續秉持「深耕產業、回饋社會」的經營理念，把對建材品質的堅持，延伸到對在地人才與夢想的長期投資。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src="/images/csr/chen-portrait.jpg"
                alt="演員陳鼎中專訪照"
                width={600}
                height={448}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src="/images/csr/chen-award.jpg"
                alt="陳鼎中獲得第51屆金鐘獎迷你劇集／電視電影新進演員獎"
                width={512}
                height={768}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-lg border border-line p-6">
              <f.icon size={20} className="text-primary" />
              <p className="mt-3 text-xs text-foreground/50">{f.label}</p>
              <p className="mt-1 text-sm font-medium text-primary-dark">{f.value}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-foreground/40">
          人物照片來源：ETtoday新聞雲。演員資料整理自公開報導與維基百科。
        </p>
      </div>
    </div>
  );
}
