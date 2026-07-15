"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { metrics, engagementBars } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const decimals = value % 1 !== 0 ? 1 : 0;
        setDisplay(v.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl lg:text-7xl">
      {display}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="size-4 text-gold" />
          <p className="eyebrow text-xs text-gold">Real Engagement, Not Vanity</p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-6xl uppercase tracking-tight max-w-3xl text-balance mb-16 sm:mb-20"
        >
          Content that shows up in the numbers.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-20 sm:mb-24">
          {metrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-white/15 pt-6"
            >
              <Counter value={m.value} suffix={m.suffix} />
              <p className="mt-3 text-sm text-paper-dim">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* engagement bars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-ink-soft/60 p-6 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-10">
            <h3 className="font-heading text-xl font-semibold">
              Average Engagement Rate by Format
            </h3>
            <span className="text-xs text-paper-dim">
              Based on chapter content, trailing 12 months
            </span>
          </div>

          <div className="space-y-6">
            {engagementBars.map((bar, i) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="font-medium">{bar.label}</span>
                  <span className="text-paper-dim">{bar.value}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
