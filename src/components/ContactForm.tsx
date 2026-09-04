"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-line p-10 text-center">
        <CheckCircle2 size={36} className="text-primary" />
        <p className="mt-4 text-lg font-bold text-primary-dark">感謝您的詢問！</p>
        <p className="mt-2 text-sm text-foreground/55">
          我們已收到您的訊息，將盡快與您聯繫。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary-dark/80">姓名</label>
          <input
            required
            type="text"
            className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm text-primary-dark outline-none transition focus:border-primary"
            placeholder="請輸入您的姓名"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary-dark/80">電話</label>
          <input
            required
            type="tel"
            className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm text-primary-dark outline-none transition focus:border-primary"
            placeholder="請輸入聯絡電話"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-primary-dark/80">電子郵件</label>
        <input
          type="email"
          className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm text-primary-dark outline-none transition focus:border-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-primary-dark/80">需求說明</label>
        <textarea
          required
          rows={4}
          className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm text-primary-dark outline-none transition focus:border-primary"
          placeholder="請簡述您的工程需求，例如坪數、施工地點、產品項目等"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-dark px-6 py-3 text-sm font-medium text-white transition hover:bg-primary sm:w-auto"
      >
        送出詢問
        <Send size={16} />
      </button>
    </form>
  );
}
