"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Smartphone,
  MonitorPlay,
  Zap,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/data";

const icons: Record<string, React.ElementType> = {
  photo: Camera,
  longform: Clapperboard,
  vertical: Smartphone,
  horizontal: MonitorPlay,
  live: Zap,
  strategy: Compass,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-xs text-gold mb-4"
            >
              What We Capture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl sm:text-6xl uppercase tracking-tight max-w-2xl text-balance"
            >
              One team, every format your organization needs.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-paper-dim max-w-sm text-base leading-relaxed"
          >
            From a single philanthropy event to a full national conference,
            we build the coverage plan around what your organization actually
            needs to post.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {services.map((service, i) => {
            const Icon = icons[service.id] ?? Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="group relative bg-ink p-8 sm:p-10 min-h-[280px] flex flex-col hover:bg-ink-soft transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full border border-white/15 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <span className="eyebrow text-[10px] text-paper-dim">
                    {service.tag}
                  </span>
                </div>

                <div className="mt-10 sm:mt-12">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-3 flex items-start gap-2">
                    {service.title}
                    <ArrowUpRight className="size-4 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 mt-1" />
                  </h3>
                  <p className="text-paper-dim text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
