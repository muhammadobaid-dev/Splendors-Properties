"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Bath, BedDouble, Car, MapPin, Maximize, X } from "lucide-react";
import type { Property } from "@/types/property";
import { WHATSAPP_BASE } from "@/data/properties";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  useEffect(() => {
    if (!property) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [property, onClose]);

  if (!property) return null;

  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Assalam-o-Alaikum Splendors Properties, I am interested in "${property.title}" located in ${property.location}. Please share more details.`
  )}`;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
    >
      <div
        className="animate-scale-in max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[32px] bg-canvas shadow-2xl sm:rounded-[32px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-72">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-ink shadow transition hover:bg-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute right-4 bottom-4 left-4">
            <span className="mb-2 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur-md">
              Verified Title
            </span>
            <h3
              id="property-modal-title"
              className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {property.title}
            </h3>
          </div>
        </div>

        <div className="space-y-7 p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-2xl font-semibold tracking-tight text-ink">
              {property.price}
            </p>
            <p className="inline-flex items-center gap-1.5 text-sm text-taupe">
              <MapPin className="h-4 w-4 text-bronze" />
              {property.location} · {property.purpose}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-taupe">
            <span className="inline-flex items-center gap-1.5">
              <Maximize className="h-4 w-4 text-bronze" />
              {property.area}
            </span>
            {property.bedrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-bronze" />
                {property.bedrooms} Beds
              </span>
            )}
            {property.bathrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-bronze" />
                {property.bathrooms} Baths
              </span>
            )}
            {property.parking != null && (
              <span className="inline-flex items-center gap-1.5">
                <Car className="h-4 w-4 text-bronze" />
                {property.parking} Parking
              </span>
            )}
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold tracking-tight text-ink">
              Dossier
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-taupe">
              {property.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold tracking-tight text-ink">
              Amenities
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {property.amenities.map((item) => (
                <li key={item} className="text-sm text-taupe">
                  <span className="mr-2 text-bronze">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-surface-warm p-5 sm:p-6">
            <h4 className="font-display text-lg font-semibold tracking-tight text-ink">
              Payment Plan
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-taupe">
              {property.paymentPlan}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-canvas transition hover:bg-bronze"
            >
              WhatsApp Agent
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-stone/50 px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-bronze"
            >
              Private Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
