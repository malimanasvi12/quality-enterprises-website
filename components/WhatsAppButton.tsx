"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { waUrl } from "@/lib/site";
export default function WhatsAppButton() {
  return (
    <motion.a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Quality Enterprises on WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16">
      <MessageCircle className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2} />
      <Phone className="absolute h-3.5 w-3.5 fill-white sm:h-4 sm:w-4" strokeWidth={0} />
    </motion.a>
  );
}
