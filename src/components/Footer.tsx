import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-6 overflow-hidden rounded-full">
                <span className="w-1/2 bg-primary-light" />
                <span className="w-1/2 bg-accent" />
              </span>
              <span className="text-sm font-semibold tracking-wide">
                金進昌實業有限公司
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/50">
              自 1994 年成立以來，專注於輕鋼架、隔間骨料、隔間板材、天花板與岩綿等防火建材，提供穩定可靠的產品與工程服務。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80">產品項目</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products#${p.slug}`} className="transition hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80">網站導覽</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              <li>
                <Link href="/" className="transition hover:text-white">首頁</Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-white">產品</Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">關於我們</Link>
              </li>
              <li>
                <Link href="/csr" className="transition hover:text-white">企業社會責任</Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">聯絡我們</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80">聯絡資訊</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>臺中市龍井區藝術街72巷5號1樓</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>電話待補</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>信箱待補</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} 金進昌實業有限公司 GJC. All rights reserved.</p>
          <p>統一編號 84965533．since 1994</p>
        </div>
      </div>
    </footer>
  );
}
