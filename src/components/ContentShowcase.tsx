"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Player from "@vimeo/player";
import {
  Play,
  Camera,
  Music2,
  PlaySquare,
  Volume2,
  VolumeX,
} from "lucide-react";

const FEATURED_VIMEO_URL = "https://vimeo.com/1210261032/4f807d0dee" as const;
const FEATURED_TITLE = "ADPi Presidents Weekend 2026";
const FEATURED_POSTER =
  "https://i.vimeocdn.com/video/2180098043-1dee71096eb946284073d1a380abeedd2527da093233b352b97acf59ba85e766-d_1280?region=us";
const FEATURED_DURATION = "14:27";

type VerticalClip = {
  src: string;
  label: string;
  platform: "tiktok" | "instagram";
  views: string;
  vimeoUrl?: `https://vimeo.com/${string}`;
};

const verticalClips: VerticalClip[] = [
  {
    src: "/photos/vertical-bid-day-reveal.jpg",
    label: "Photo Booth",
    platform: "tiktok",
    views: "1.2M",
    vimeoUrl: "https://vimeo.com/1210210409/afc4d6528e",
  },
  {
    src: "/photos/vertical-recruitment-prep.jpg",
    label: "1851 Shop Haul",
    platform: "instagram",
    views: "640K",
    vimeoUrl: "https://vimeo.com/1210210366/470104981d",
  },
  { src: "/photos/vertical-chapter-retreat.jpg", label: "Chapter Retreat", platform: "tiktok", views: "980K" },
  { src: "/photos/vertical-founders-day.jpg", label: "Founders' Day", platform: "instagram", views: "410K" },
  { src: "/photos/vertical-formal-getting-ready.jpg", label: "Formal Getting Ready", platform: "tiktok", views: "2.1M" },
];

const horizontalClips = [
  { src: "/photos/horizontal-convention-recap.jpg", label: "2025 National Convention Recap", duration: "6:42" },
  { src: "/photos/horizontal-recruitment-week.jpg", label: "A Week Inside Recruitment", duration: "4:15" },
];

const platformIcon = { tiktok: Music2, instagram: Camera };

export default function ContentShowcase() {
  const featuredContainerRef = useRef<HTMLDivElement>(null);
  const featuredPlayerRef = useRef<Player | null>(null);
  const [featuredStarted, setFeaturedStarted] = useState(false);

  const clipPlayers = useRef<Map<number, Player>>(new Map());
  const [activeClip, setActiveClip] = useState<number | null>(null);

  const registerClipPlayer = (index: number, player: Player | null) => {
    if (player) clipPlayers.current.set(index, player);
    else clipPlayers.current.delete(index);
  };

  const activateClip = (index: number) => {
    setActiveClip(index);
    clipPlayers.current.forEach((player, i) => {
      if (i === index) {
        player
          .setCurrentTime(0)
          .then(() => player.setMuted(false))
          .then(() => player.play())
          .catch(() => {});
      } else {
        player.setMuted(true).catch(() => {});
      }
    });
  };

  const handleFeaturedPlay = () => {
    if (!featuredContainerRef.current || featuredPlayerRef.current) return;
    setFeaturedStarted(true);

    const player = new Player(featuredContainerRef.current, {
      url: FEATURED_VIMEO_URL,
      autoplay: true,
      loop: false,
      byline: false,
      title: false,
      portrait: false,
      dnt: true,
    });
    featuredPlayerRef.current = player;

    player.on("ended", () => {
      featuredPlayerRef.current?.destroy().catch(() => {});
      featuredPlayerRef.current = null;
      setFeaturedStarted(false);
    });
  };

  useEffect(() => {
    return () => {
      featuredPlayerRef.current?.destroy().catch(() => {});
    };
  }, []);

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
          {!featuredStarted && (
            <button
              onClick={handleFeaturedPlay}
              aria-label={`Play ${FEATURED_TITLE}`}
              className="absolute inset-0 z-10"
            >
              <Image
                src={FEATURED_POSTER}
                alt={FEATURED_TITLE}
                fill
                sizes="100vw"
                className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-20 sm:size-24 items-center justify-center rounded-full bg-paper/95 text-ink shadow-2xl group-hover:scale-105 transition-transform">
                  <Play className="size-8 sm:size-9 translate-x-0.5" fill="currentColor" />
                </span>
              </span>

              <span className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 right-5 sm:right-8 flex items-end justify-between text-left">
                <span className="block">
                  <span className="eyebrow text-[10px] text-gold block">
                    Featured Film · Presidents Weekend
                  </span>
                  <span className="font-heading text-2xl sm:text-4xl font-semibold mt-1 text-balance max-w-lg block">
                    {FEATURED_TITLE}
                  </span>
                </span>
                <span className="hidden sm:inline-flex eyebrow text-[10px] text-paper-dim border border-white/20 rounded-full px-3 py-1.5 backdrop-blur bg-ink/40">
                  {FEATURED_DURATION}
                </span>
              </span>
            </button>
          )}
          <div
            ref={featuredContainerRef}
            className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:block [&_iframe]:h-full [&_iframe]:w-full"
          />
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
            {verticalClips.map((clip, i) => (
              <VerticalClipCard
                key={clip.label}
                clip={clip}
                index={i}
                isActive={activeClip === i}
                registerPlayer={registerClipPlayer}
                onActivate={activateClip}
              />
            ))}
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
                key={clip.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 group cursor-pointer"
              >
                <Image
                  src={clip.src}
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

function VerticalClipCard({
  clip,
  index,
  isActive,
  registerPlayer,
  onActivate,
}: {
  clip: VerticalClip;
  index: number;
  isActive: boolean;
  registerPlayer: (index: number, player: Player | null) => void;
  onActivate: (index: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = platformIcon[clip.platform];

  useEffect(() => {
    if (!clip.vimeoUrl || !containerRef.current) return;

    const player = new Player(containerRef.current, {
      url: clip.vimeoUrl,
      background: true,
      muted: true,
      autoplay: true,
      loop: true,
      dnt: true,
    });
    registerPlayer(index, player);

    return () => {
      registerPlayer(index, null);
      player.destroy().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clip.vimeoUrl, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onClick={() => clip.vimeoUrl && onActivate(index)}
      className={`relative shrink-0 w-[190px] sm:w-[220px] aspect-9/16 rounded-2xl overflow-hidden ring-1 snap-start group cursor-pointer transition-[box-shadow] ${
        isActive ? "ring-2 ring-gold" : "ring-white/10"
      }`}
    >
      {clip.vimeoUrl ? (
        <div
          ref={containerRef}
          className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:pointer-events-none"
        />
      ) : (
        <Image
          src={clip.src}
          alt={clip.label}
          fill
          sizes="220px"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/30" />
      <div className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full bg-ink/50 backdrop-blur">
        <Icon className="size-4" />
      </div>

      {clip.vimeoUrl ? (
        <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-ink/50 backdrop-blur text-paper">
          {isActive ? (
            <Volume2 className="size-4 text-gold" />
          ) : (
            <VolumeX className="size-4" />
          )}
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex size-12 items-center justify-center rounded-full bg-paper/95 text-ink">
            <Play className="size-5 translate-x-0.5" fill="currentColor" />
          </span>
        </div>
      )}

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
}
