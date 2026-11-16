"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-bronze uppercase">
            Private viewing lounge
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Schedule a conversation, not a pitch.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-stone/30 bg-white p-6 shadow-[0_16px_50px_rgba(13,12,9,0.04)] sm:p-10">
            {submitted ? (
              <div className="animate-fade-up flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-bronze" />
                <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-ink">
                  Received, with thanks.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">
                  A Splendors consultant will reach you on WhatsApp or phone to
                  arrange a private viewing or desk appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-stone/40 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-bronze hover:text-bronze-deep"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Schedule a Private Consultation
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                      Full Name
                    </span>
                    <input
                      required
                      name="name"
                      className="w-full rounded-2xl border border-stone/30 bg-surface-warm px-4 py-3.5 text-sm outline-none transition focus:border-bronze"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                      Phone / WhatsApp
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="w-full rounded-2xl border border-stone/30 bg-surface-warm px-4 py-3.5 text-sm outline-none transition focus:border-bronze"
                      placeholder="03XX-XXXXXXX"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                      Property Interest
                    </span>
                    <select
                      required
                      name="interest"
                      defaultValue=""
                      className="w-full rounded-2xl border border-stone/30 bg-surface-warm px-4 py-3.5 text-sm outline-none transition focus:border-bronze"
                    >
                      <option value="" disabled>
                        Select interest
                      </option>
                      <option>Commercial Office</option>
                      <option>Luxury Villa</option>
                      <option>Penthouse</option>
                      <option>Residential Plot</option>
                      <option>General Advisory</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                      Budget Range
                    </span>
                    <select
                      required
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-2xl border border-stone/30 bg-surface-warm px-4 py-3.5 text-sm outline-none transition focus:border-bronze"
                    >
                      <option value="" disabled>
                        Select budget
                      </option>
                      <option>Under PKR 1 Crore</option>
                      <option>PKR 1 – 3 Crore</option>
                      <option>PKR 3 – 6 Crore</option>
                      <option>PKR 6 Crore+</option>
                      <option>Rental: Under 2 Lac/mo</option>
                      <option>Rental: 2 Lac+/mo</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-stone/30 bg-surface-warm px-4 py-3.5 text-sm outline-none transition focus:border-bronze"
                    placeholder="Preferred neighborhood, size, and timeline..."
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition hover:bg-bronze sm:w-auto"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>

          <aside className="flex flex-col justify-between overflow-hidden rounded-[32px] bg-surface-warm p-6 sm:p-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-bronze uppercase">
                Atelier
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Ginza Centre, Blue Area
              </h3>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
                  <p className="text-sm leading-relaxed text-taupe">
                    2nd Floor, Ginza Centre, Office # 07, Jinnah Ave, Block I,
                    G-7/2 Blue Area, Islamabad, 44000, Pakistan
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
                  <a
                    href="tel:+923331581620"
                    className="text-sm text-ink transition hover:text-bronze"
                  >
                    +92 333 1581620
                  </a>
                </div>
                <div className="flex gap-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
                  <p className="text-sm text-taupe">Mon–Sat: 10 AM – 7 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/40 text-ink transition hover:border-bronze hover:text-bronze"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/40 text-ink transition hover:border-bronze hover:text-bronze"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
