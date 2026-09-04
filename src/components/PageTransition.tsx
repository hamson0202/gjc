"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <div className="relative w-[46vw] max-w-[560px] min-w-[260px]">
              {/* 淡灰底稿，作為填色前的輪廓 */}
              <Image
                src="/images/logo.png"
                alt=""
                aria-hidden="true"
                width={1838}
                height={477}
                priority
                className="w-full h-auto opacity-[0.12] grayscale"
              />
              {/* 由左至右填色的彩色 logo */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="GJC"
                  width={1838}
                  height={477}
                  priority
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
