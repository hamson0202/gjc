"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/products", label: "產品" },
  { href: "/about", label: "關於我們" },
  { href: "/csr", label: "企業社會責任" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="GJC 金進昌實業"
            width={1838}
            height={477}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-primary-dark" : "text-foreground/60 hover:text-primary-dark"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-primary-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-primary"
          >
            免費諮詢
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary-dark lg:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-3 lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                  active ? "bg-primary-dark/5 text-primary-dark" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-md bg-primary-dark px-3 py-2.5 text-center text-sm font-medium text-white"
          >
            免費諮詢
          </Link>
        </div>
      )}
    </header>
  );
}
