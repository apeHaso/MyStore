import Link from "next/link";
import { catalog } from "@/lib/catalog";
import { ItemCard } from "@/components/item-card";

export default function Home() {
  return <div className="space-y-14">
    <section className="max-w-3xl space-y-6 py-12"><p className="font-semibold text-accent">MY STORE</p><h1 className="text-5xl font-bold tracking-tight">Digital products and helpful services.</h1><p className="text-lg text-slate-300">A clean, privacy-first foundation ready for your catalogue and payment flow.</p><div className="flex gap-3"><Link className="button" href="/products">Browse products</Link><Link className="button button-secondary" href="/services">Browse services</Link></div></section>
    <section><h2 className="mb-6 text-2xl font-bold">Featured</h2><div className="grid gap-5 md:grid-cols-3">{catalog.map(item => <ItemCard key={item.slug} item={item} />)}</div></section>
  </div>;
}