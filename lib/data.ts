import {
  BadgeCheck,
  Bolt,
  Building2,
  Cable,
  ClipboardCheck,
  Clock,
  Factory,
  Home,
  Lightbulb,
  PlugZap,
  ShieldCheck,
  Siren,
  Wrench,
  Zap
} from "lucide-react";

export const company = {
  name: "OBRIS LTD",
  tradingName: "OBRI Electrical Services",
  phone: "0203 633 0733",
  tel: "02036330733",
  whatsapp: "447445512699",
  address: "Tonbridge House, Tonbridge Street, London WC1H 9PA",
  email: "info@obri.co.uk",
  siteUrl: "https://www.obri.co.uk",
  message: "24/7 service with 45-minute call-out"
};

export const sourceContent = {
  welcome: "WELCOME TO OBRIS LTD HOME TO PROFESSIONAL ELECTRICIANS & INSTALLERS",
  intro: [
    "A trusted provider of Professional Electrical Solutions for RESIDENTIAL, COMMERCIAL & INDUSTRIAL properties.",
    "With a strong commitment to quality, safety, and customer satisfaction, we take pride in delivering reliable electrical services tailored to meet the needs of every customer.",
    "From installations and upgrades to fault finding and emergency call-outs, our experienced team ensures all work is completed to the highest standards.",
    "At OBRI Electrical Services, we believe in professionalism, honesty, and attention to detail.",
    "Our goal is to provide efficient, dependable, and cost-effective solutions while building long-lasting relationships with our clients through exceptional service and workmanship.",
    "Whether you require assistance with a small repair or a large-scale electrical project, OBRI Electrical Services is here to help with prompt, friendly, and expert support.",
    "We provide a thorough consultation to explain your available options. With that information, you can choose the scope of work that's right for your home or business and for your budget.",
    "We strive to save you both time and money by combining experience, high quality parts and equipment, and exceptional service. We will stick with the job until you are satisfied."
  ],
  whyChoose: [
    "At OBRI, we believe that every project deserves expert craftsmanship, dependable service, and complete customer satisfaction.",
    "Whether you need emergency electrical repairs, a full installation, smart home solutions, or interior improvements, our experienced team delivers professional results you can trust.",
    "We combine technical expertise with a customer-first approach, offering clear advice, flexible solutions, and transparent communication from start to finish.",
    "Available 24/7 with rapid response times, we work efficiently to minimise disruption while maintaining the highest standards of quality and safety.",
    "Our commitment is simple: reliable service, exceptional workmanship, and solutions tailored to your needs and budget. When you choose OBRI, you're choosing a partner dedicated to getting the job done right the first time."
  ],
  contact: [
    "We stay in constant communication with our customers until the job is done.",
    "If you have questions or special requests, just get in touch.",
    "OBRI LTD",
    "Monday - Friday: 24-Hour Emergency Service",
    "Saturday - Sunday: By Appointment Only"
  ],
  qualifications: ["Proud Member", "in Partnership", "Public Liability Insurance"]
};

export const trustBadges = [
  { title: "24/7 Emergency Service", icon: Siren },
  { title: "45-Minute Call-Out", icon: Clock },
  { title: "Residential, Commercial & Industrial", icon: Building2 },
  { title: "Fully Qualified Electricians", icon: BadgeCheck },
  { title: "Safety-Focused Work", icon: ShieldCheck }
];

export const services = [
  ["emergency-electrical-repairs", "Emergency Electrical Repairs", "Rapid fault response, urgent repairs and make-safe attendance for homes and businesses.", Siren],
  ["wiring-rewiring", "Wiring & Rewiring", "Partial and full rewires, extensions, refurbishments and modern safety upgrades.", Cable],
  ["consumer-unit-upgrades", "Consumer Unit Upgrades", "Fuse board replacements, RCBO protection and compliant distribution upgrades.", PlugZap],
  ["fault-finding", "Fault Finding", "Systematic testing to identify tripping circuits, power loss and unsafe wiring issues.", Wrench],
  ["eicr-inspections", "EICR Inspections", "Electrical Installation Condition Reports for landlords, buyers and duty holders.", ClipboardCheck],
  ["lighting-installations", "Lighting Installations", "Interior, exterior, LED, emergency and feature lighting designed around your property.", Lightbulb],
  ["solar-panel-electrical-connections", "Solar Panel Electrical Connections", "Electrical connections and integration support for solar and renewable systems.", Zap],
  ["smart-home-installations", "Smart Home Installations", "Smart controls, lighting automation, connected devices and efficient switching.", Home],
  ["led-lighting-upgrades", "LED Lighting Upgrades", "Lower-energy lighting replacements for domestic, retail, office and industrial sites.", Lightbulb],
  ["sockets-switches", "Sockets & Switches", "Additional points, replacements, USB sockets, isolators and tidy finishing.", PlugZap],
  ["pat-testing", "PAT Testing", "Portable appliance testing for landlords, offices, shops and managed properties.", ClipboardCheck],
  ["earthing-bonding", "Earthing & Bonding", "Main protective bonding checks and upgrades for safer electrical installations.", ShieldCheck],
  ["circuit-breaker-rcd-replacement", "Circuit Breaker & RCD Replacement", "Replacement protective devices and investigation of nuisance tripping.", Bolt],
  ["smoke-alarm-installation", "Smoke Alarm Installation", "Mains-powered alarms, interlinked detection and landlord safety upgrades.", ShieldCheck],
  ["outdoor-garden-lighting", "Outdoor & Garden Lighting", "Weatherproof lighting, garden power, pathway lighting and external controls.", Lightbulb],
  ["security-lighting-cctv-power", "Security Lighting & CCTV Power", "Power supplies for lighting, CCTV, access control and perimeter protection.", ShieldCheck],
  ["electric-shower-installation", "Electric Shower Installation", "Dedicated circuits, isolators and replacement electric shower wiring.", Zap],
  ["cooker-hob-connections", "Cooker & Hob Connections", "Safe cooker points, isolators and appliance connection testing.", PlugZap],
  ["ev-charger-installation", "EV Charger Installation", "Domestic and commercial EV charger electrical installation support.", Bolt],
  ["data-cabling-networking", "Data Cabling & Networking", "Structured cabling, access points, comms cabinets and office network points.", Cable],
  ["three-phase-electrical-installations", "Three-Phase Electrical Installations", "Commercial and industrial three-phase supplies, boards and equipment connections.", Factory],
  ["backup-generator-ups-installations", "Backup Generator & UPS Installations", "Critical power, backup systems and changeover electrical works.", Zap],
  ["maintenance-contracts", "Maintenance Contracts", "Planned electrical maintenance for landlords, offices, shops and facilities.", ClipboardCheck],
  ["landlord-electrical-safety-certificates", "Landlord Electrical Safety Certificates", "Rental compliance inspections and remedial works for London landlords.", ClipboardCheck],
  ["commercial-shop-office-fit-out-electrical-works", "Commercial Shop & Office Fit-Out Electrical Works", "Power, lighting, data and containment for business fit-outs and refurbishments.", Building2],
  ["industrial-machinery-electrical-connections", "Industrial Machinery Electrical Connections", "Machinery supplies, isolators, control wiring and industrial fault support.", Factory],
  ["energy-efficient-electrical-upgrades", "Energy-Efficient Electrical Upgrades", "Practical upgrades that reduce energy waste and modernise older installations.", Zap]
] as const;

export const areas = [
  ["holborn-wc1n", "Holborn WC1N"],
  ["bloomsbury-wc1", "Bloomsbury WC1"],
  ["kings-cross-wc1h", "Kings Cross WC1H"],
  ["clerkenwell-ec1", "Clerkenwell EC1"],
  ["maida-vale-w9", "Maida Vale W9"],
  ["st-johns-wood-nw8", "St John's Wood NW8"],
  ["islington-n1", "Islington N1"],
  ["brent-cross-nw4", "Brent Cross NW4"],
  ["shepherds-bush-w12", "Shepherd's Bush W12"],
  ["acton-w3", "Acton W3"],
  ["hampstead-nw3", "Hampstead NW3"],
  ["camden-nw1", "Camden NW1"],
  ["nw9", "NW9"],
  ["nw10", "NW10"],
  ["w8", "W8"],
  ["w10", "W10"],
  ["w14", "W14"],
  ["e8", "E8"],
  ["e14", "E14"],
  ["e16", "E16"],
  ["n13", "N13"],
  ["sw6", "SW6"],
  ["se11", "SE11"],
  ["st-albans-al1", "St Albans AL1"]
] as const;

export const reviews = [
  {
    name: "OBRI customer",
    text: "The team at OBRI was professional, efficient, and highly knowledgeable. They completed the work to an exceptional standard and kept us informed throughout the entire process.",
    rating: 5
  },
  {
    name: "OBRI customer",
    text: "Outstanding service from start to finish. Fast response, transparent pricing, and excellent workmanship. We wouldn't hesitate to recommend OBRI to others.",
    rating: 5
  },
  {
    name: "OBRI customer",
    text: "Reliable, trustworthy, and committed to quality. OBRI delivered exactly what was promised and exceeded our expectations.",
    rating: 5
  }
];

export const faqs = [
  ["Do you offer emergency electrician call-outs?", "Yes. OBRI provides 24/7 electrical support with a target 45-minute call-out for urgent London jobs where availability and access allow."],
  ["Do you work on commercial and industrial sites?", "Yes. The team supports residential, commercial and industrial customers, including offices, shops, landlords, facilities and machinery connections."],
  ["Can you provide EICR reports?", "Yes. OBRI carries out Electrical Installation Condition Reports and can quote for any remedial works required for compliance."],
  ["Do you cover my area?", "OBRI covers central, north, west, east and south London areas, plus St Albans AL1. Use the contact form with your postcode for confirmation."],
  ["Can the contact form connect to email later?", "Yes. The form is built with validation and a success state so it can later submit to Resend, Formspree or a backend API."]
];

export const advicePosts = [
  ["what-to-do-when-power-trips", "What to do when your power keeps tripping", "A practical safety-first guide to common causes of tripping circuits and when to call an electrician."],
  ["eicr-landlord-guide-london", "EICR guide for London landlords", "What landlords should know about inspection timing, remedials and electrical safety certificates."],
  ["consumer-unit-upgrade-signs", "Signs your consumer unit may need upgrading", "How older fuse boards compare with modern RCD and RCBO protected consumer units."],
  ["ev-charger-installation-prep", "Preparing for EV charger installation", "What information helps an electrician assess charger location, supply capacity and cable routes."]
];
