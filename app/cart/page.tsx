import Link from "next/link";
export default function CartPage() {
 return <section className="max-w-xl space-y-5"><p className="text-accent">CART</p><h1 className="text-4xl font-bold">Your cart</h1><div className="card"><p className="text-slate-300">Cart persistence is the next implementation step. This page is ready to connect to the checkout flow.</p></div><Link className="button" href="/checkout">Continue to checkout</Link></section>;
}