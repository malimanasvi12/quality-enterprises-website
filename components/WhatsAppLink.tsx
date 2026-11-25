import { MessageCircle } from "lucide-react";
import { waUrl } from "@/lib/site";
export default function WhatsAppLink({ label = "Enquire on WhatsApp", className = "" }: { label?: string; className?: string }) {
  return <a href={waUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${className}`}><MessageCircle size={16} />{label}</a>;
}
