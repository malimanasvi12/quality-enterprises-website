import Link from "next/link";
import Reveal from "./Reveal";
export default function CTA() {
  return (
    <section className="wrap py-16"><Reveal className="rounded-3xl bg-gradient-to-r from-teal/30 to-charcoal p-10 text-center">
      <h2 className="font-display text-3xl font-bold">Have a part that needs a finish?</h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-200">Tell us what you need and we will get back to you.</p>
      <Link href="/contact" className="btn btn-primary mt-6">Send an enquiry</Link></Reveal></section>
  );
}
