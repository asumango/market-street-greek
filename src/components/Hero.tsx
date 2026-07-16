"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { calendlyUrl } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-32"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,241,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,241,232,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="eyebrow text-xs text-gold mb-6"
        >
          Content Studio for Greek Life
        </motion.p>

        <div className="max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display text-[13vw] leading-[0.92] sm:text-[7.5vw] lg:text-[6vw] tracking-tight text-balance uppercase"
          >
            Stop hosting events
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#f6f2ea]">
              no one sees.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg sm:text-xl text-paper-dim leading-relaxed"
          >
            Struggling to properly showcase your chapter&rsquo;s National
            Convention, leadership summit, or donor and alumnae relations?
            Market Street is the production team behind{" "}
            <span className="text-paper font-medium">
              Alpha Delta Pi&rsquo;s
            </span>{" "}
            biggest moments — and we&rsquo;re expanding to bring that same
            photo, video, and social content to sororities nationwide.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
            >
              Book Your Chapter
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-paper hover:border-gold hover:text-gold transition-colors"
            >
              <Play className="size-4" />
              See Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* photo collage strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 sm:mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4">
            {[
              { src: "/photos/hero-processional-1.jpg", alt: "Processional at Alpha Delta Pi National Convention", span: "col-span-2 sm:col-span-2" },
              { src: "/photos/hero-welcome-party-1.jpg", alt: "Welcome party at Alpha Delta Pi convention", span: "col-span-2 sm:col-span-2" },
              { src: "/photos/hero-awards-banquet-1.jpg", alt: "Awards banquet at Alpha Delta Pi convention", span: "hidden sm:block sm:col-span-2" },
              { src: "/photos/hero-silent-disco-1.jpg", alt: "Silent disco at Alpha Delta Pi convention", span: "col-span-2 sm:col-span-2" },
              { src: "/photos/hero-keynote-1.jpg", alt: "Keynote session at Alpha Delta Pi convention", span: "hidden sm:block sm:col-span-2" },
              { src: "/photos/hero-processional-2.jpg", alt: "Processional at Alpha Delta Pi National Convention", span: "col-span-2 sm:col-span-2" },
            ].map((img, i) => (
              <div
                key={img.src}
                className={`relative ${img.span} aspect-[3/2] rounded-2xl overflow-hidden ring-1 ring-white/10 group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover grayscale-[35%] contrast-[1.05] saturate-[0.85] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
