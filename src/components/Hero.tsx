"use client";

import { ArrowUpRight } from "lucide-react";
import {
  LOCATION_OPTIONS,
  PURPOSE_OPTIONS,
  TYPE_OPTIONS,
} from "@/data/properties";
import type { PropertyFilters } from "@/types/property";

interface HeroProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
  onSearch: () => void;
}

export default function Hero({ filters, onFiltersChange, onSearch }: HeroProps) {
  return (
    <section id="home" className="px-3 pt-24 pb-6 sm:px-6 sm:pt-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C09]/78 via-[#0D0C09]/45 to-[#0D0C09]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(144,113,93,0.28),transparent_55%)]" />

        <div className="relative z-10 flex min-h-[78vh] flex-col justify-end px-6 pb-28 pt-20 sm:px-10 sm:pb-32 lg:px-16 lg:pt-28">
          <p className="animate-fade-up text-[11px] font-medium tracking-[0.28em] text-sand uppercase">
            Blue Area · Islamabad
          </p>
          <h1 className="animate-fade-up delay-100 font-display mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-canvas sm:text-5xl lg:text-[4.15rem]">
            Spaces Crafted for Living & Lasting Value in Islamabad.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-canvas/75 sm:text-lg">
            Blue Area’s premier real estate consultants—connecting discerning
            buyers and overseas investors with verified residences and
            high-yield commercial assets.
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-14 max-w-5xl px-2 sm:-mt-16">
        <div className="animate-fade-up delay-300 rounded-[28px] border border-stone/30 bg-white/90 p-3 shadow-[0_20px_60px_rgba(13,12,9,0.08)] backdrop-blur-md sm:rounded-full sm:px-4 sm:py-2.5">
          <div className="grid items-end gap-3 sm:grid-cols-[1fr_1fr_0.7fr_auto]">
            <label className="block px-2 pt-1 sm:pt-0">
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.18em] text-taupe uppercase">
                Location
              </span>
              <select
                value={filters.location}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    location: e.target.value as PropertyFilters["location"],
                  })
                }
                className="w-full border-0 bg-transparent py-1.5 text-sm font-medium text-ink outline-none"
              >
                {LOCATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === "All" ? "All neighborhoods" : opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="block border-stone/30 px-2 sm:border-l">
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.18em] text-taupe uppercase">
                Asset Type
              </span>
              <select
                value={filters.type}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    type: e.target.value as PropertyFilters["type"],
                  })
                }
                className="w-full border-0 bg-transparent py-1.5 text-sm font-medium text-ink outline-none"
              >
                {TYPE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === "All" ? "All assets" : opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="block border-stone/30 px-2 sm:border-l">
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.18em] text-taupe uppercase">
                Purpose
              </span>
              <select
                value={filters.purpose}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    purpose: e.target.value as PropertyFilters["purpose"],
                  })
                }
                className="w-full border-0 bg-transparent py-1.5 text-sm font-medium text-ink outline-none"
              >
                {PURPOSE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={onSearch}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-bronze-deep sm:py-3"
            >
              Explore
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
