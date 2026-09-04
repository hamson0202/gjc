"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Layers,
  PanelsTopLeft,
  LayoutPanelTop,
  Flame,
  ArrowRight,
} from "lucide-react";
import { products, type Product } from "@/data/products";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "steel-frame": Building2,
  "partition-substructure": Layers,
  "partition-boards": PanelsTopLeft,
  "ceiling-systems": LayoutPanelTop,
  rockwool: Flame,
};

const photos: Record<string, string | undefined> = {
  "steel-frame": "/images/products/steel-frame.jpg",
  "partition-substructure": "/images/products/partition-substructure.jpg",
  "partition-boards": "/images/products/partition-boards.jpg",
  "ceiling-systems": "/images/products/ceiling-systems.jpg",
  rockwool: "/images/products/rockwool.jpg",
};

function ProductPanel({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  const Icon = icons[product.slug];
  const photo = photos[product.slug];

  return (
    <div
      ref={ref}
      id={product.slug}
      className="relative h-[92dvh] min-h-[560px] w-full scroll-mt-20 overflow-hidden"
    >
      {photo ? (
        <motion.div
          style={{ y, top: "-14%", bottom: "-14%" }}
          className="absolute left-0 right-0"
        >
          <Image
            src={photo}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-dark">
          <Icon size={72} className="text-white/10" />
        </div>
      )}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-md rounded-lg bg-black/60 p-6 backdrop-blur-sm sm:p-8">
            <Icon size={24} className="text-white/80" />
            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{product.name}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{product.tagline}</p>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              {product.description}
            </p>
            <Link
              href={`/products#${product.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white"
            >
              了解更多 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  return (
    <div className="divide-y divide-white/10">
      {products.map((p) => (
        <ProductPanel key={p.slug} product={p} />
      ))}
    </div>
  );
}
