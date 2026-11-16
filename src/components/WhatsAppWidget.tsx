"use client";

const WHATSAPP_URL =
  "https://wa.me/923331581620?text=Assalam-o-Alaikum%20Splendors%20Properties,%20I%20would%20like%20to%20inquire%20about%20a%20property.";

export default function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition hover:brightness-95 sm:right-6 sm:bottom-6"
    >
      <span className="flex h-2 w-2 rounded-full bg-white" />
      Chat on WhatsApp
    </a>
  );
}
