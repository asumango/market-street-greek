"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Expand, Play, X } from "lucide-react";
import { galleryFilters, galleryItems } from "@/lib/data";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(
    null
  );

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-xs text-gold mb-4"
            >
              The Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-balance"
            >
              A feed worth scrolling. A history worth keeping.
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter === f
                    ? "text-ink"
                    : "text-paper-dim hover:text-paper border border-white/15"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-2 sm:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActive(item)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 text-left"
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="eyebrow text-[9px] text-gold mb-1">
                    {item.category}
                  </span>
                  <span className="font-heading font-semibold text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-ink/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category === "Video" || item.category === "Social" ? (
                    <Play className="size-4" />
                  ) : (
                    <Expand className="size-4" />
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[85vh] overflow-hidden rounded-3xl ring-1 ring-white/10"
            >
              <div className="relative w-full" style={{ aspectRatio: `${active.w} / ${active.h}` }}>
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6 flex items-end justify-between">
                <div>
                  <span className="eyebrow text-[10px] text-gold">
                    {active.category}
                  </span>
                  <p className="font-heading text-xl font-semibold">
                    {active.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-ink/70 backdrop-blur hover:bg-ink"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
