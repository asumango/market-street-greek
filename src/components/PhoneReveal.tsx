"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Player from "@vimeo/player";
import { Play } from "lucide-react";

const VIMEO_URL = "https://vimeo.com/1210210365/aff4383907" as const;
const VIMEO_TITLE = "ADPI Day 1 Recap";
const POSTER =
  "https://i.vimeocdn.com/video/2180031811-f983ca429b1f040a42ea46b78e438864f9edfc45a6fb16a11e7aa57d82ffb864-d_640?region=us";
const ROTATE_DELAY_MS = 1500;

export default function PhoneReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const rotateTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [started, setStarted] = useState(false);
  const [rotated, setRotated] = useState(false);

  const reset = () => {
    if (rotateTimeout.current) clearTimeout(rotateTimeout.current);
    setRotated(false);
    setStarted(false);
    playerRef.current?.destroy().catch(() => {});
    playerRef.current = null;
  };

  const handlePlayClick = () => {
    if (!containerRef.current || playerRef.current) return;
    setStarted(true);

    const player = new Player(containerRef.current, {
      url: VIMEO_URL,
      autoplay: true,
      loop: false,
      byline: false,
      title: false,
      portrait: false,
      dnt: true,
    });
    playerRef.current = player;
    player.on("ended", reset);

    rotateTimeout.current = setTimeout(() => setRotated(true), ROTATE_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (rotateTimeout.current) clearTimeout(rotateTimeout.current);
      playerRef.current?.destroy().catch(() => {});
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 border-t border-white/10 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-16">
        {/* copy */}
        <div className="lg:order-2 text-center lg:text-left">
          <p className="eyebrow text-xs text-gold mb-4">One Take, One Turn</p>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-balance mb-4">
            Watch the reveal.
          </h2>
          <p className="text-paper-dim max-w-md mx-auto lg:mx-0 leading-relaxed">
            Shot vertical, turned widescreen — live, in a single continuous
            take from {VIMEO_TITLE}.
          </p>
        </div>

        {/* phone */}
        <div className="lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-[330px] h-[330px] sm:w-[415px] sm:h-[415px] lg:w-[330px] lg:h-[330px] xl:w-[415px] xl:h-[415px]">
            <motion.div
              animate={{ rotate: rotated ? -90 : 0 }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "50% 50%" }}
              className="absolute inset-0 m-auto w-[150px] aspect-[9/19.5] sm:w-[190px] lg:w-[150px] xl:w-[190px] rounded-[2.2rem] bg-ink-soft ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] p-[10px]"
            >
              {/* notch */}
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-20" />
              {/* side buttons */}
              <div className="absolute -left-[2px] top-16 w-[2px] h-8 rounded-l bg-white/15" />
              <div className="absolute -left-[2px] top-28 w-[2px] h-12 rounded-l bg-white/15" />
              <div className="absolute -right-[2px] top-24 w-[2px] h-14 rounded-r bg-white/15" />

              {/* screen */}
              <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-black">
                {!started && (
                  <button
                    onClick={handlePlayClick}
                    aria-label={`Play ${VIMEO_TITLE}`}
                    className="absolute inset-0 z-10 group"
                  >
                    <Image
                      src={POSTER}
                      alt={VIMEO_TITLE}
                      fill
                      sizes="240px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/15 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-12 items-center justify-center rounded-full bg-paper/95 text-ink group-hover:scale-105 transition-transform">
                        <Play className="size-4 translate-x-0.5" fill="currentColor" />
                      </span>
                    </span>
                  </button>
                )}
                <div
                  ref={containerRef}
                  className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:block [&_iframe]:h-full [&_iframe]:w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
