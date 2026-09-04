import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Layers,
  PanelsTopLeft,
  LayoutPanelTop,
  Flame,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "產品系列｜金進昌實業有限公司 GJC",
  description: "輕鋼架、隔間骨料、隔間板材、天花板、岩綿——完整的輕隔間防火建材產品系列。",
};

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "steel-frame": Building2,
  "partition-substructure": Layers,
  "partition-boards": PanelsTopLeft,
  "ceiling-systems": LayoutPanelTop,
  rockwool: Flame,
};

export default function ProductsPage() {
  return (
    <div>
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Products
          </h1>
          <p className="mt-2 text-3xl font-bold text-primary-dark sm:text-4xl">產品系列</p>
          <p className="mt-4 max-w-xl text-foreground/55">
            從骨架結構到板材、天花板與防火材料，金進昌提供完整的輕隔間工程建材，滿足各類空間的施工需求。
          </p>
        </div>
      </div>

      <div className="divide-y divide-line">
        {products.map((p) => {
          const Icon = icons[p.slug];
          return (
            <div key={p.slug} id={p.slug} className="scroll-mt-20">
              <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <Icon size={26} className="text-primary" />
                    <h2 className="mt-4 text-2xl font-bold text-primary-dark">{p.name}</h2>
                    <p className="mt-1 text-sm font-medium text-accent">{p.tagline}</p>
                    <p className="mt-4 leading-7 text-foreground/60">{p.description}</p>
                  </div>

                  <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="text-sm font-semibold text-primary-dark/80">產品特色</p>
                    <ul className="mt-4 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground/60">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary-dark px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
          >
            洽詢產品報價
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
