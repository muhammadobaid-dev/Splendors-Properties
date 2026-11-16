"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import type {
  EditorialCategory,
  Property,
  PropertyFilters,
} from "@/types/property";

const categoryTabs: { label: string; id: EditorialCategory }[] = [
  { label: "All Assets", id: "all" },
  { label: "Blue Area Commercial", id: "blue-commercial" },
  { label: "DHA & F-Sectors", id: "dha-f" },
  { label: "Overseas Picks", id: "overseas" },
];

interface FeaturedPropertiesProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
  onViewDetails: (property: Property) => void;
}

export default function FeaturedProperties({
  filters,
  onFiltersChange,
  onViewDetails,
}: FeaturedPropertiesProps) {
  const [category, setCategory] = useState<EditorialCategory>("all");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const locationOk =
        filters.location === "All" || p.location === filters.location;
      const typeOk = filters.type === "All" || p.type === filters.type;
      const purposeOk = p.purpose === filters.purpose;
      const categoryOk =
        category === "all" ||
        (category === "blue-commercial" &&
          p.location === "Blue Area" &&
          p.type === "Commercial Office") ||
        (category === "dha-f" &&
          (p.location === "DHA Phase 2" || p.location === "F-6 / F-7")) ||
        (category === "overseas" && Boolean(p.overseas));
      return locationOk && typeOk && purposeOk && categoryOk;
    });
  }, [filters, category]);

  return (
    <section id="featured" className="scroll-mt-28 px-3 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-bronze uppercase">
              Curated Inventory
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Residences & assets, composed with care.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryTabs.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-ink text-canvas"
                      : "bg-white/70 text-taupe ring-1 ring-stone/30 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-taupe">
          <span>
            {filtered.length} {filters.purpose.toLowerCase()} dossiers
            {filters.location !== "All" ? ` · ${filters.location}` : ""}
          </span>
          {(["Buy", "Rent"] as const).map((purpose) => (
            <button
              key={purpose}
              type="button"
              onClick={() => onFiltersChange({ ...filters, purpose })}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                filters.purpose === purpose
                  ? "bg-bronze text-white"
                  : "bg-white text-taupe ring-1 ring-stone/30"
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[32px] border border-dashed border-stone/50 bg-surface-warm px-6 py-16 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight text-ink">
              No matching dossiers
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-taupe">
              Adjust location, asset type, or purpose — or request a private
              viewing and we will source a verified match.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                onFiltersChange({
                  location: "All",
                  type: "All",
                  purpose: "Buy",
                });
              }}
              className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
