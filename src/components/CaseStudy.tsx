"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import {
  HardDrive,
  Folder,
  FolderOpen,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { caseStudyStats, deliveryDays } from "@/lib/data";

const TOTAL_CATEGORIES = deliveryDays.reduce((sum, d) => sum + d.count, 0);

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      type: "tween",
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
      onComplete: () => setDisplay(value.toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl lg:text-6xl">
      {display}
    </span>
  );
}

export default function CaseStudy() {
  const [openDay, setOpenDay] = useState<string | null>(deliveryDays[0].day);

  return (
    <section
      id="case-study"
      className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-xs text-gold mb-4"
        >
          Real Delivery · ADPi&rsquo;s 175th National Convention
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl sm:text-6xl uppercase tracking-tight max-w-3xl text-balance mb-6"
        >
          Every moment. Fully documented.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-paper-dim max-w-2xl leading-relaxed mb-16 sm:mb-20"
        >
          Organizations outlive us. When Alpha Delta Pi celebrated 175 years
          in Palm Springs, CA, our job wasn&rsquo;t just to show up with
          cameras — it was to build an archive worthy of the sisterhood&rsquo;s
          next 175 years. Every photo and every frame is now part of the
          organization&rsquo;s permanent record.
        </motion.p>

        {/* Stat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 mb-16 sm:mb-20">
          {caseStudyStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t border-white/15 pt-5"
            >
              <Counter value={stat.value} />
              <p className="mt-2 text-sm text-paper-dim">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery archive visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-ink-soft/60 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 sm:p-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold/10 border border-gold/30">
                <HardDrive className="size-5 text-gold" />
              </span>
              <div>
                <p className="font-heading font-semibold">
                  ADPi_175_Convention — Delivered
                </p>
                <p className="text-xs text-paper-dim">
                  {TOTAL_CATEGORIES} organized categories across 4 days
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-gold">
              <CheckCircle2 className="size-3.5" />
              Delivered on one drive
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {deliveryDays.map((d) => {
              const isOpen = openDay === d.day;
              const remaining = d.count - d.sample.length;
              return (
                <div key={d.day}>
                  <button
                    onClick={() => setOpenDay(isOpen ? null : d.day)}
                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      {isOpen ? (
                        <FolderOpen className="size-5 text-gold shrink-0" />
                      ) : (
                        <Folder className="size-5 text-paper-dim shrink-0" />
                      )}
                      <span className="font-heading font-semibold">
                        {d.day}
                      </span>
                    </span>
                    <span className="flex items-center gap-4 shrink-0">
                      <span className="text-xs text-paper-dim">
                        {d.count} folders
                      </span>
                      <ChevronDown
                        className={`size-4 text-paper-dim transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 px-6 sm:px-8 pb-6 pl-[52px] sm:pl-[56px]">
                          {d.sample.map((item) => (
                            <span
                              key={item}
                              className="text-xs rounded-full border border-white/15 px-3 py-1.5 text-paper-dim"
                            >
                              {item}
                            </span>
                          ))}
                          {remaining > 0 && (
                            <span className="text-xs rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-gold">
                              +{remaining} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-paper-dim mt-8 max-w-lg mx-auto"
        >
          Every photo, every video — organized, edited, and delivered ready
          to be revisited for generations.
        </motion.p>
      </div>
    </section>
  );
}
