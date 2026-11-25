// EDIT HERE: all company facts live in this file.
const address = "F-2 Block, Plot No. 6, Shop No. 1, Near Wonder Car Showroom, Bhosari MIDC, Pune, Maharashtra, India";
export const site = {
  name: "Quality Enterprises",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app",
  email: "qualityenterprisesss2024@gmail.com",
  address,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address),
  // Taken from the company signboard photo. VERIFY before publishing.
  contacts: [
    { name: "Varsha Mali", phone: "8208870923" },
    { name: "Mahesh Mali", phone: "9881897940" },
    { name: "Barun Mandal", phone: "8983968472" },
  ],
  // Leave empty until the official WhatsApp number is confirmed (digits with country code, e.g. 91XXXXXXXXXX).
  whatsapp: "",
};
export const services = [
  { id: "multi-colour", title: "Multi-Colour Powder Coating", text: "Powder coating in a choice of colours for metal parts and fabrications, applied for an even, durable finish. [Edit: confirm colour range and part sizes.]" },
  { id: "surface-finishing", title: "Industrial Metal Surface Finishing", text: "Surface preparation and finishing of metal components ahead of coating. [Edit: confirm pre-treatment processes offered.]" },
  { id: "protective-decorative", title: "Protective & Decorative Coating", text: "Coatings that protect metalwork and give it a clean, consistent appearance. [Edit: confirm applications and materials.]" },
];
export const reasons = [
  ["Quality-focused finishing", "Careful preparation and application, checked before parts leave the shop."],
  ["Colour options", "Multi-colour powder coating to suit your product or brand."],
  ["Industrial applications", "Work for fabricators, manufacturers and workshops. [Edit: list sectors served.]"],
  ["Professional service", "Clear communication from enquiry to delivery."],
  ["Customer-focused approach", "We discuss requirements first so the finish fits the job."],
];
export const photos = [
  { src: "/photos/facility-entrance.jpg", w: 1280, h: 720, alt: "Entrance to the Quality Enterprises workshop shed with signboard", caption: "Workshop entrance, Bhosari MIDC", cat: "Facility" },
  { src: "/photos/facility-side.jpg", w: 720, h: 1280, alt: "Side view of the Quality Enterprises shed and yard", caption: "Workshop shed and yard", cat: "Facility" },
  { src: "/photos/sign-closeup.jpg", w: 720, h: 1280, alt: "Quality Enterprises signboard close-up", caption: "Company signboard", cat: "Signage" },
  { src: "/photos/sign-wide.jpg", w: 720, h: 1280, alt: "Quality Enterprises signboard on the factory wall", caption: "Signboard on the factory wall", cat: "Signage" },
];
