import { catalog } from "@/lib/catalog";
import { ItemCard } from "@/components/item-card";
export default function ServicesPage() {
 const services = catalog.filter(item => item.kind === "service");
 return <section><p className="text-accent">CATALOGUE</p><h1 className="mb-8 text-4xl font-bold">Services</h1><div className="grid gap-5 md:grid-cols-2">{services.map(item => <ItemCard key={item.slug} item={item}/>)}</div></section>;
}