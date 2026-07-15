"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Camera, Music2, PlaySquare, Volume2 } from "lucide-react";

const verticalClips = [
  { seed: "ms-vert-1", label: "Bid Day Reveal", platform: "tiktok", views: "1.2M" },
  { seed: "ms-vert-2", label: "Recruitment Prep", platform: "instagram", views: "640K" },
  { seed: "ms-vert-3", label: "Chapter Retreat", platform: "tiktok", views: "980K" },
  { seed: "ms-vert-4", label: "Founders' Day", platform: "instagram", views: "410K" },
  { seed: "ms-vert-5", label: "Formal Getting Ready", platform: "tiktok", views: "2.1M" },
];

const horizontalClips = [
  { seed: "ms-horiz-1", label: "2025 National Convention Recap", duration: "6:42" },
  { seed: "ms-horiz-2", label: "A Week Inside Recruitment", duration: "4:15" },
];

const platformIcon = { tiktok: Music2, instagram: Camera };

export default function ContentShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 sm:py-32 border-t border-white/10 bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-xs text-gold mb-4"
          >
            Long-Form &amp; Social
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-balance"
          >
            From the main stage to the main feed.
          </motion.h2>
        </div>

        {/* Featured long-form video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/10 aspect-video mb-16 sm:mb-20 group"
        >
          <Image
            src="https://picsum.photos/seed/ms-feature-film/1600/900"
            alt="Alpha Delta Pi national convention recap film"
            fill
            sizes="100vw"
            className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause preview" : "Play preview"}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="relative flex items-center justify-center">
              {playing && (
                <>
                  <span className="absolute size-20 sm:size-24 rounded-full bg-gold/30 animate-ping" />
                  <span className="absolute size-20 sm:size-24 rounded-full bg-gold/20 animate-pulse" />
                </>
              )}
              <span className="relative flex size-20 sm:size-24 items-center justify-center rounded-full bg-paper/95 text-ink shadow-2xl group-hover:scale-105 transition-transform">
                {playing ? (
                  <Pause className="size-8 sm:size-9" fill="currentColor" />
                ) : (
                  <Play className="size-8 sm:size-9 translate-x-0.5" fill="currentColor" />
                )}
              </span>
            </span>
          </button>

          <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 right-5 sm:right-8 flex items-end justify-between">
            <div>
              <span className="eyebrow text-[10px] text-gold">
                Featured Film · Conference Recap
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-semibold mt-1 text-balance max-w-lg">
                Alpha Delta Pi 2025 National Convention
              </h3>
            </div>
            <span className="hidden sm:inline-flex eyebrow text-[10px] text-paper-dim border border-white/20 rounded-full px-3 py-1.5 backdrop-blur bg-ink/40">
              8:14
            </span>
          </div>
        </motion.div>

        {/* Vertical social clips carousel */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-lg sm:text-xl font-semibold">
              Vertical Social Cutdowns
            </h3>
            <span className="text-xs text-paper-dim hidden sm:inline">
              Scroll for more →
            </span>
          </div>
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
            {verticalClips.map((clip, i) => {
              const Icon = platformIcon[clip.platform as keyof typeof platformIcon];
              return (
                <motion.div
                  key={clip.seed}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="relative shrink-0 w-[190px] sm:w-[220px] aspect-9/16 rounded-2xl overflow-hidden ring-1 ring-white/10 snap-start group cursor-pointer"
                >
                  <Image
                    src={`https://picsum.photos/seed/${clip.seed}/500/900`}
                    alt={clip.label}
                    fill
                    sizes="220px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/30" />
                  <div className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full bg-ink/50 backdrop-blur">
                    <Icon className="size-4" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex size-12 items-center justify-center rounded-full bg-paper/95 text-ink">
                      <Play className="size-5 translate-x-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3.5">
                    <p className="font-heading text-sm font-semibold leading-tight">
                      {clip.label}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-paper-dim">
                      <Volume2 className="size-3" />
                      {clip.views} views
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Horizontal / YouTube style clips */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <PlaySquare className="size-5 text-gold" />
            <h3 className="font-heading text-lg sm:text-xl font-semibold">
              Horizontal &amp; YouTube Recaps
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {horizontalClips.map((clip, i) => (
              <motion.div
                key={clip.seed}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 group cursor-pointer"
              >
                <Image
                  src={`https://picsum.photos/seed/${clip.seed}/900/500`}
                  alt={clip.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex size-14 items-center justify-center rounded-full bg-paper/95 text-ink">
                    <Play className="size-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between">
                  <p className="font-heading font-semibold">{clip.label}</p>
                  <span className="text-xs text-paper-dim">{clip.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
