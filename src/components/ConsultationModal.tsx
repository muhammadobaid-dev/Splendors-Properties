"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  open,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
    >
      <div
        className="animate-scale-in w-full max-w-lg rounded-t-[32px] bg-canvas p-6 shadow-2xl sm:rounded-[32px] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-bronze uppercase">
              Private appointment
            </p>
            <h3
              id="consult-title"
              className="font-display mt-1 text-2xl font-semibold tracking-tight text-ink"
            >
              Book a Consultation
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-taupe transition hover:bg-white hover:text-ink"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="animate-fade-up rounded-[24px] bg-surface-warm px-5 py-12 text-center">
            <CheckCircle2 className="mx-auto h-11 w-11 text-bronze" />
            <p className="font-display mt-4 text-2xl font-semibold tracking-tight text-ink">
              Request received
            </p>
            <p className="mt-2 text-sm text-taupe">
              We will confirm your preferred time shortly. You may also call
              0333-1581620.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-canvas"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                Full Name
              </span>
              <input
                required
                name="name"
                className="w-full rounded-2xl border border-stone/30 bg-white px-4 py-3.5 text-sm outline-none focus:border-bronze"
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
                className="w-full rounded-2xl border border-stone/30 bg-white px-4 py-3.5 text-sm outline-none focus:border-bronze"
                placeholder="03XX-XXXXXXX"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                Preferred Time
              </span>
              <select
                required
                name="time"
                className="w-full rounded-2xl border border-stone/30 bg-white px-4 py-3.5 text-sm outline-none focus:border-bronze"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a slot
                </option>
                <option>Morning (10 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 3 PM)</option>
                <option>Evening (3 PM – 7 PM)</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.14em] text-taupe uppercase">
                Brief Note
              </span>
              <textarea
                name="note"
                rows={3}
                className="w-full resize-none rounded-2xl border border-stone/30 bg-white px-4 py-3.5 text-sm outline-none focus:border-bronze"
                placeholder="Property interest or questions..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-canvas transition hover:bg-bronze"
            >
              Confirm Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
