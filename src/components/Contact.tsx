"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { Mail } from "lucide-react";
import { contactEmail, calendlyUrl } from "@/lib/data";

const CALENDLY_EMBED_URL = `${calendlyUrl}?background_color=0a0a0b&text_color=f6f2ea&primary_color=c9a227&hide_gdpr_banner=1`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-xs text-gold mb-4"
        >
          Let&rsquo;s Talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-balance mb-6"
        >
          Ready for your chapter to look this good?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-paper-dim text-lg leading-relaxed max-w-md mx-auto mb-8"
        >
          Grab 30 minutes on our calendar and we&rsquo;ll put together a
          coverage plan for your next event, conference, or recruitment
          cycle.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center gap-2 text-paper font-medium border-b border-gold pb-1 hover:text-gold transition-colors"
        >
          <Mail className="size-4" />
          {contactEmail}
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mx-auto max-w-5xl px-5 sm:px-8 mt-14"
      >
        <div className="rounded-3xl border border-white/10 bg-ink-soft/60 overflow-hidden p-2 sm:p-4">
          <div
            className="calendly-inline-widget w-full h-[1000px] sm:h-[720px]"
            data-url={CALENDLY_EMBED_URL}
          />
        </div>
      </motion.div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 mt-14 flex items-center justify-center gap-4">
        <span className="font-display text-2xl">MARKETST.</span>
        <span className="text-xs text-paper-dim">
          Official Content Partner of Alpha Delta Pi
        </span>
      </div>
    </section>
  );
}
