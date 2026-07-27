export type StoreItem = {
  slug: string; title: string; description: string; priceCents: number;
  kind: "product" | "service"; delivery: string;
};