import { NextResponse } from "next/server";
export const runtime = "nodejs";
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (b.company) return NextResponse.json({ ok: true }); // honeypot
  const g = (k: string, max: number) => String(b[k] ?? "").trim().slice(0, max);
  const name = g("name", 100), phone = g("phone", 20), email = g("email", 150), service = g("service", 100), message = g("message", 3000);
  if (name.length < 2 || !/^[+\d][\d\s-]{7,14}$/.test(phone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10)
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "Email service is not configured yet." }, { status: 503 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New enquiry from ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Service:</b> ${esc(service)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>` }),
  });
  if (!r.ok) return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
