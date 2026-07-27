import type { StoreItem } from "@/types/store";

export const catalog: StoreItem[] = [
  { slug: "starter-template", title: "Starter Template", description: "A downloadable project template.", priceCents: 1200, kind: "product", delivery: "Secure download after payment" },
  { slug: "setup-session", title: "Setup Session", description: "A one-to-one technical setup session.", priceCents: 3500, kind: "service", delivery: "Delivery arranged after payment" },
  { slug: "creator-pack", title: "Creator Pack", description: "A curated digital resource pack.", priceCents: 1900, kind: "product", delivery: "Secure download after payment" }
];

export const euros = (cents: number) => new Intl.NumberFormat("nl-NL", {style:"currency", currency:"EUR"}).format(cents / 100);