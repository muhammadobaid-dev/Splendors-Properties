export type LocationOption =
  | "All"
  | "Blue Area"
  | "DHA Phase 2"
  | "F-6 / F-7"
  | "Bahria Enclave"
  | "Capital Smart City";

export type PropertyTypeOption =
  | "All"
  | "Luxury Villa"
  | "Commercial Office"
  | "Penthouse"
  | "Residential Plot";

export type PurposeOption = "Buy" | "Rent";

export type EditorialCategory =
  | "all"
  | "blue-commercial"
  | "dha-f"
  | "overseas";

export interface PropertyFilters {
  location: LocationOption;
  type: PropertyTypeOption;
  purpose: PurposeOption;
}

export interface Property {
  id: string;
  title: string;
  location: Exclude<LocationOption, "All">;
  type: Exclude<PropertyTypeOption, "All">;
  purpose: PurposeOption;
  price: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  image: string;
  description: string;
  amenities: string[];
  paymentPlan: string;
  verified: boolean;
  overseas?: boolean;
}

export interface PrimeLocation {
  name: string;
  tagline: string;
  listings: number;
  note: string;
  image: string;
  span?: "wide" | "tall" | "standard";
}
