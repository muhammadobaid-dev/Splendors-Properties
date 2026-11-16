"use client";

import Image from "next/image";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import type { Property } from "@/types/property";
import { WHATSAPP_BASE } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({
  property,
  onViewDetails,
}: PropertyCardProps) {
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Assalam-o-Alaikum Splendors Properties, I am interested in "${property.title}" located in ${property.location}. Please share more details.`
  )}`;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        {property.verified && (
          <span className="absolute top-3 left-3 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-[11px] font-medium text-ink backdrop-blur-md">
            Verified Title
          </span>
        )}
        <span className="absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-tight text-ink backdrop-blur-md">
          {property.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[11px] font-medium tracking-[0.16em] text-sand uppercase">
          {property.type} · For {property.purpose}
        </p>
        <h3 className="font-display mt-1.5 text-[1.35rem] leading-snug font-semibold tracking-tight text-ink">
          {property.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-taupe">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-bronze" />
            {property.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5 text-bronze" />
            {property.area}
          </span>
          {property.bedrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5 text-bronze" />
              {property.bedrooms} Beds
            </span>
          )}
          {property.bathrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5 text-bronze" />
              {property.bathrooms} Baths
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
          <button
            type="button"
            onClick={() => onViewDetails(property)}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-stone/50 bg-transparent px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-bronze hover:text-bronze-deep"
          >
            View Dossier
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-canvas transition hover:bg-bronze"
          >
            WhatsApp Agent
          </a>
        </div>
      </div>
    </article>
  );
}
