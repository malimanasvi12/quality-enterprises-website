import Reveal from "./Reveal";
export default function PageHead({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <section className="bg-gradient-to-b from-ink to-deep pb-12 pt-32">
      <Reveal className="wrap"><p className="text-sm uppercase tracking-[0.25em] text-teal">{kicker}</p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-slate-300">{text}</p>}</Reveal>
    </section>
  );
}
