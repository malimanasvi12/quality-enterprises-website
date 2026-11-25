"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { services } from "@/lib/site";
type Errs = Partial<Record<"name" | "phone" | "email" | "message", string>>;
export default function ContactForm() {
  const [errs, setErrs] = useState<Errs>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    const er: Errs = {};
    if (d.name.trim().length < 2) er.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{7,14}$/.test(d.phone.trim())) er.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) er.email = "Enter a valid email address.";
    if (d.message.trim().length < 10) er.message = "Please write at least 10 characters.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong.");
      setState("ok"); f.reset();
    } catch (x) { setMsg(x instanceof Error ? x.message : "Something went wrong."); setState("fail"); }
  }
  const E = ({ k }: { k: keyof Errs }) => errs[k] ? <p id={`${k}-e`} className="mt-1 text-xs text-tangerine">{errs[k]}</p> : null;
  return (
    <form onSubmit={submit} noValidate className="card space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {([["name", "Name", "text", "name"], ["phone", "Phone number", "tel", "tel"], ["email", "Email", "email", "email"]] as const).map(([k, l, t, ac]) => (
        <div key={k}><label htmlFor={k} className="mb-1 block text-sm">{l}</label>
          <input id={k} name={k} type={t} autoComplete={ac} className="field" aria-invalid={!!errs[k]} aria-describedby={`${k}-e`} /><E k={k} /></div>
      ))}
      <div><label htmlFor="service" className="mb-1 block text-sm">Service required</label>
        <select id="service" name="service" className="field">{services.map(s => <option key={s.id}>{s.title}</option>)}<option>Other</option></select></div>
      <div><label htmlFor="message" className="mb-1 block text-sm">Message</label>
        <textarea id="message" name="message" rows={5} className="field" aria-invalid={!!errs.message} aria-describedby="message-e" /><E k="message" /></div>
      <button disabled={state === "sending"} className="btn btn-primary w-full disabled:opacity-60"><Send size={16} />{state === "sending" ? "Sending…" : "Send enquiry"}</button>
      <div aria-live="polite">
        {state === "ok" && <p className="flex gap-2 text-sm text-teal"><CheckCircle2 size={18} />Thank you. Your enquiry has been sent and we will get back to you.</p>}
        {state === "fail" && <p className="flex gap-2 text-sm text-tangerine"><AlertCircle size={18} />{msg} You can also email us directly.</p>}
      </div>
    </form>
  );
}
