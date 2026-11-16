"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#featured", label: "Properties" },
  { href: "#locations", label: "Locations" },
  { href: "#advisory", label: "Advisory" },
  { href: "#about", label: "About" },
];

interface NavbarProps {
  onBookConsultation: () => void;
}

export default function Navbar({ onBookConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6 lg:px-8">
      <div
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2.5 shadow-[0_8px_40px_rgba(13,12,9,0.06)] transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border-stone/30 bg-[#ECEBEB]/90 backdrop-blur-md"
            : "border-stone/20 bg-[#ECEBEB]/80 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="min-w-0 pl-2">
          <span className="font-display block text-[1.35rem] leading-none font-semibold tracking-tight text-ink">
            Splendors.
          </span>
          <span className="hidden text-[10px] tracking-[0.18em] text-taupe uppercase sm:block">
            Islamabad · Blue Area
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-taupe transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+923331581620"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-taupe transition hover:text-ink"
          >
            <Phone className="h-3.5 w-3.5" />
            0333-1581620
          </a>
          <button
            type="button"
            onClick={onBookConsultation}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition hover:bg-bronze-deep"
          >
            Book Consultation
          </button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="pointer-events-auto animate-fade-in mx-auto mt-2 max-w-6xl overflow-hidden rounded-[28px] border border-stone/30 bg-[#ECEBEB]/95 p-4 shadow-lg backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition hover:bg-white/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+923331581620"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-stone/40 px-4 py-3 text-sm font-medium text-ink"
            >
              <Phone className="h-4 w-4" />
              Call 0333-1581620
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBookConsultation();
              }}
              className="mt-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-canvas"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
