import type { PrimeLocation, Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "sp-001",
    title: "Corner Commercial Floor – Ginza Centre",
    location: "Blue Area",
    type: "Commercial Office",
    purpose: "Buy",
    price: "PKR 8.5 Crore",
    area: "2,500 Sq. Ft.",
    bathrooms: 2,
    parking: 3,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    description:
      "A prestigious corner commercial floor in Ginza Centre on Jinnah Avenue. Ideal for corporate headquarters, banks, or consultancy firms seeking maximum visibility in Islamabad's Blue Area commercial corridor.",
    amenities: [
      "Corner unit with dual road exposure",
      "Central HVAC",
      "Dedicated parking",
      "24/7 security & CCTV",
      "Backup generator",
      "Elevator access",
    ],
    paymentPlan:
      "40% down payment · 30% on transfer · 30% in 6 equal monthly installments. Bank financing facilitation available.",
    verified: true,
  },
  {
    id: "sp-002",
    title: "1 Kanal Courtyard Villa – DHA Phase II",
    location: "DHA Phase 2",
    type: "Luxury Villa",
    purpose: "Buy",
    price: "PKR 12.0 Crore",
    area: "1 Kanal",
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    description:
      "Sunlit 1 Kanal villa in DHA Phase II with landscaped courts, imported stone, and a private lounge wing. Crafted for families seeking secure, lifestyle-led living with durable capital value.",
    amenities: [
      "Italian marble flooring",
      "Smart home lighting",
      "Servant quarters",
      "Landscaped lawn",
      "Solar ready rooftop",
      "Gated community security",
    ],
    paymentPlan:
      "Full payment on transfer preferred. Flexible 50/50 structure available for verified buyers within 45 days.",
    verified: true,
    overseas: true,
  },
  {
    id: "sp-003",
    title: "Executive Office Suite – Jinnah Avenue",
    location: "Blue Area",
    type: "Commercial Office",
    purpose: "Rent",
    price: "PKR 3.5 Lac/mo",
    area: "1,800 Sq. Ft.",
    bathrooms: 2,
    parking: 2,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Fully fitted executive office suite overlooking Jinnah Avenue. Ready for immediate occupancy with meeting rooms, reception area, and warm architectural finishes suited to multinational or local enterprises.",
    amenities: [
      "Furnished & fitted",
      "High-speed fiber ready",
      "Meeting room",
      "Reception lobby",
      "Reserved parking",
      "Security desk",
    ],
    paymentPlan:
      "2 months advance · 1 month security · Annual lease with renewal option. Fit-out customization negotiable.",
    verified: true,
  },
  {
    id: "sp-004",
    title: "10 Marla Residence – Sector F-7",
    location: "F-6 / F-7",
    type: "Luxury Villa",
    purpose: "Buy",
    price: "PKR 6.8 Crore",
    area: "10 Marla",
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    description:
      "A refined 10 Marla residence in Sector F-7 with contemporary architecture, double-height foyer, and proximity to embassies, schools, and Margalla trails. Suited to diplomats and senior professionals.",
    amenities: [
      "Double-height foyer",
      "Designer kitchen",
      "Walk-in closets",
      "Rooftop terrace",
      "Underfloor heating option",
      "Prime F-7 location",
    ],
    paymentPlan:
      "Cash / bank transfer on possession. Title verification and transfer handled end-to-end by Splendors Properties.",
    verified: true,
  },
  {
    id: "sp-005",
    title: "Residential Plot – Capital Smart City",
    location: "Capital Smart City",
    type: "Residential Plot",
    purpose: "Buy",
    price: "PKR 1.15 Crore",
    area: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    description:
      "Verified 10 Marla residential plot in a high-growth block of Capital Smart City. Documented, development-backed land with a clear ownership trail—ideal for overseas Pakistanis.",
    amenities: [
      "Clear title documents",
      "Development-backed sector",
      "Wide approach road",
      "Utility planning approved",
      "Investment-grade zoning",
      "Overseas buyer facilitation",
    ],
    paymentPlan:
      "Developer installment schedule available. Spot payment discount applicable. Full documentation support included.",
    verified: true,
    overseas: true,
  },
  {
    id: "sp-006",
    title: "Skyline Penthouse – Bahria Enclave",
    location: "Bahria Enclave",
    type: "Penthouse",
    purpose: "Rent",
    price: "PKR 2.2 Lac/mo",
    area: "2,100 Sq. Ft.",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
    description:
      "A 3-bedroom penthouse in Bahria Enclave with club access, covered parking, and interiors composed for quiet, managed living. Well suited to executives and returning families.",
    amenities: [
      "Club & gym access",
      "Covered parking",
      "24/7 concierge",
      "Terrace with view",
      "Modular kitchen",
      "Community parks nearby",
    ],
    paymentPlan:
      "1 month advance · 1 month security · 12-month lease preferred. Family tenants prioritized.",
    verified: true,
    overseas: true,
  },
];

export const primeLocations: PrimeLocation[] = [
  {
    name: "Blue Area",
    tagline: "Jinnah Ave Commercial",
    listings: 28,
    note: "Prime yield corridor · 8–11% rental ROI",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    span: "wide",
  },
  {
    name: "DHA Phase II",
    tagline: "Gated Residences",
    listings: 42,
    note: "Steady appreciation · family lifestyle",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    span: "tall",
  },
  {
    name: "Sector F-6 / F-7",
    tagline: "Diplomatic Living",
    listings: 19,
    note: "Scarcity premium · embassy adjacency",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    span: "standard",
  },
  {
    name: "Bahria Enclave",
    tagline: "Growth Corridor",
    listings: 35,
    note: "Master-planned value · mid-term upside",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1000&q=80",
    span: "standard",
  },
];

export const LOCATION_OPTIONS = [
  "All",
  "Blue Area",
  "DHA Phase 2",
  "F-6 / F-7",
  "Bahria Enclave",
  "Capital Smart City",
] as const;

export const TYPE_OPTIONS = [
  "All",
  "Luxury Villa",
  "Commercial Office",
  "Penthouse",
  "Residential Plot",
] as const;

export const PURPOSE_OPTIONS = ["Buy", "Rent"] as const;

export const WHATSAPP_BASE = "https://wa.me/923331581620";
export const PHONE_DISPLAY = "0333-1581620";
export const PHONE_E164 = "+923331581620";
