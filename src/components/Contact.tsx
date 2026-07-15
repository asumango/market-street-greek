"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Loader2 } from "lucide-react";
import { contactEmail } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
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
              className="text-paper-dim text-lg leading-relaxed max-w-md mb-10"
            >
              Tell us about your next event, conference, or recruitment
              cycle. We&rsquo;ll put together a coverage plan and send it
              back within one business day.
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

            <div className="mt-14 flex items-center gap-4">
              <span className="font-display text-2xl">MARKETST.</span>
              <span className="text-xs text-paper-dim">
                Official Content Partner of Alpha Delta Pi
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-ink-soft/60 p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="size-6" />
                </span>
                <h3 className="font-heading text-xl font-semibold">
                  Got it — thank you!
                </h3>
                <p className="text-sm text-paper-dim max-w-xs">
                  We&rsquo;ll be in touch within one business day to talk
                  through coverage for your chapter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Chapter / Organization" name="chapter" />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label className="block text-xs eyebrow text-paper-dim mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    <option>National Conference / Convention</option>
                    <option>Recruitment Week</option>
                    <option>Philanthropy Event</option>
                    <option>Formal / Sisterhood Event</option>
                    <option>Ongoing Content Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs eyebrow text-paper-dim mb-2">
                    Tell us about it
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Dates, location, what you need covered..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink hover:bg-gold-light transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowUpRight className="size-4" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-sm text-crimson text-center">
                    Something went wrong — email us directly at{" "}
                    {contactEmail}.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs eyebrow text-paper-dim mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}
