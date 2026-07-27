import Link from "next/link";
import type { StoreItem } from "@/types/store";
import { euros } from "@/lib/catalog";

export function ItemCard({ item }: {item: StoreItem}) {
  return <article className="card flex flex-col gap-4"><span className="text-xs uppercase tracking-widest text-accent">{item.kind}</span>
    <h2 className="text-xl font-bold">{item.title}</h2><p className="flex-1 text-slate-300">{item.description}</p>
    <div className="flex items-center justify-between"><strong>{euros(item.priceCents)}</strong><Link className="button" href={item.kind === "product" ? "/products" : "/services"}>View</Link></div>
  </article>;
}