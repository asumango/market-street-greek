"use client";

import { motion } from "framer-motion";

const items = [
  "Alpha Delta Pi — Official Content Partner",
  "National Convention Coverage",
  "Organization Philanthropy Days",
  "Now Onboarding Organizations Nationwide",
  "Panhellenic Conference Coverage",
];

export default function PartnerStrip() {
  const loop = [...items, ...items];

  return (
    <section className="border-y border-white/10 bg-ink-soft/60 py-6 sm:py-7">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center gap-6 mb-5">
        <span className="eyebrow text-[11px] text-paper-dim shrink-0">
          Trusted By
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mask-fade-x overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex w-max items-center gap-10 sm:gap-16"
        >
          {loop.map((item, i) => (
            <span
              key={i}
              className="font-heading text-lg sm:text-2xl font-semibold uppercase tracking-tight text-paper-dim/70 whitespace-nowrap flex items-center gap-3"
            >
              <span className="size-1.5 rounded-full bg-gold/70" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
