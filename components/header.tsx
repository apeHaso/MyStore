import Link from "next/link";
export function Header() {
  return <header className="border-b border-slate-700"><nav className="container flex items-center justify-between py-5">
    <Link href="/" className="text-xl font-bold">MyStore</Link>
    <div className="flex gap-5 text-sm text-slate-300"><Link href="/products">Products</Link><Link href="/services">Services</Link><Link href="/cart">Cart</Link></div>
  </nav></header>;
}