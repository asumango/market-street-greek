"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, calendlyUrl } from "@/lib/data";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > previous && latest > 160) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl sm:text-2xl tracking-wide text-paper">
            MARKET<span className="text-gold">ST.</span>
          </span>
          <span className="hidden sm:inline text-[10px] eyebrow text-paper-dim">
            Studios
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper-dim hover:text-paper transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
          >
            Book Your Chapter
            <ArrowUpRight className="size-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border border-white/15 text-paper"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-b border-white/10"
          >
            <nav className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-2xl font-heading font-semibold text-paper border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink"
              >
                Book Your Chapter
                <ArrowUpRight className="size-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
