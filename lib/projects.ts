export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  impact: string;
  role: string;
  contributions: string[];
  results: string[];
  accent: string;
  surface: string;
  hero: string;
  cards: string[];
  gallery: {
    src: string;
    alt: string;
    layout?: "wide" | "tall";
    position?: string;
  }[];
  website?: string;
  presentation?: "web" | "mobile";
};

export const projects: Project[] = [
  {
    slug: "tala-thrive",
    presentation: "web",
    index: "01",
    title: "Tala Thrive",
    eyebrow: "Therapy platform · Web & mobile",
    headline: "Completing a therapy platform across web & mobile",
    summary:
      "Tala Thrive had an existing brand and website, but gaps in the product were getting in the way of both therapists and clients.",
    challenge:
      "The platform had a strong foundation, but important web-app journeys were unfinished. Clients needed a clearer route from matching to appointments, while practitioners needed reliable tools to manage sessions across web and mobile.",
    approach:
      "I mapped the end-to-end journeys for each user type, identified missing states and edge cases, and designed the flows needed to make the experience complete. Alongside the core product, I shaped a featured-program experience, the mobile app, and a website redesign.",
    impact:
      "The result was a more connected therapy journey across touchpoints—giving more than 100 users a product they could confidently use and helping the app earn a 5-star Play Store rating.",
    role: "Product Designer · UX · Web & Mobile",
    contributions: [
      "End-to-end user journeys",
      "Web app flows",
      "Mobile experiences",
      "Featured program experience",
      "Website redesign",
    ],
    results: ["100+ users", "5★ Play Store rating"],
    accent: "#f88732",
    surface: "#fdebdc",
    hero: "/projects/tala-match.png",
    cards: [
      "/projects/tala-match.png",
      "/projects/tala-calls.png",
    ],
    gallery: [
      {
        src: "/projects/tala-auth.png",
        alt: "Tala Thrive authentication screens",
        layout: "wide",
      },
      {
        src: "/projects/tala-match.png",
        alt: "Therapist matching and booking flow",
        layout: "wide",
      },
      {
        src: "/projects/tala-calls.png",
        alt: "Appointments and video session screens",
        layout: "wide",
      },
      {
        src: "/projects/tala-booking.png",
        alt: "Scheduling and payment flow",
        layout: "wide",
      },
      {
        src: "/projects/tala-splash.png",
        alt: "Tala Thrive loading and splash screens",
        layout: "wide",
      },
    ],
    website: "https://www.talathrive.com/",
  },

  {
    slug: "uma-box",
    presentation: "web",
    index: "02",
    title: "UMA Box",
    eyebrow: "Therapy platform · Product delivery",
    headline: "Turning a landing page into a working therapy platform",
    summary:
      "UMA Box began as a landing page. The product needed a real service experience for clients and therapists, with founder-led matching at the centre.",
    challenge:
      "Three very different users needed to work inside one connected system. Clients needed a safe path into therapy, therapists needed a dependable way to onboard and deliver sessions, and the founder needed visibility and control without becoming a bottleneck.",
    approach:
      "I designed the client, therapist, and admin experiences as one service blueprint—covering onboarding, matching, booking, communication, video meetings, payments, and operational workflows. I stayed involved through product delivery and QA to make sure the built experience held together.",
    impact:
      "The work moved UMA Box from a marketing page to a working therapy platform with three connected user experiences and the operational tools required to run them.",
    role: "Product Designer · Product Associate · QA",
    contributions: [
      "Client experience",
      "Therapist experience",
      "Admin workflows",
      "Therapist-client matching",
      "Communication & meetings",
      "Product QA",
    ],
    results: [
      "3 user experiences",
      "Landing page → working platform",
    ],
    accent: "#2ab9b3",
    surface: "#dff5f2",
    hero: "/projects/uma-video.png",
    cards: [
      "/projects/uma-video.png",
      "/projects/uma-admin.png",
    ],
    gallery: [
      {
        src: "/projects/uma-video.png",
        alt: "UMA Box video meeting experience",
        layout: "wide",
      },
      {
        src: "/projects/uma-admin.png",
        alt: "UMA Box admin dashboard",
        layout: "wide",
      },
      {
        src: "/projects/uma-onboarding.png",
        alt: "Therapist onboarding flows",
        layout: "wide",
      },
      {
        src: "/projects/uma-client-mobile.png",
        alt: "Responsive client experience",
        layout: "wide",
      },
      {
        src: "/projects/uma-landing.png",
        alt: "UMA Box redesigned website",
        layout: "tall",
        position: "top",
      },
    ],
    website: "https://theumabox.com/",
  },

  {
    slug: "givethanks",
    presentation: "mobile",
    index: "03",
    title: "GiveThanks",
    eyebrow: "Community app · Mobile product",
    headline: "Bringing prayer and community into one app",
    summary:
      "GiveThanks is a faith-centred community app where people can pray together, receive morning affirmations, journal, and follow messages from church leaders.",
    challenge:
      "The initial mobile designs did not clearly communicate the product or make its feature set feel coherent. The team needed a direction strong enough for investors and complete enough to take through launch.",
    approach:
      "I re-mapped the product around its daily rituals and community loops, then redesigned it in two stages: an investor-ready direction followed by a complete mobile experience covering practice, groups, journaling, profiles, and leader tools.",
    impact:
      "The new direction was accepted by investors, expanded into a fuller product, and delivered as a launched Android app.",
    role: "Product Designer",
    contributions: [
      "Mobile UX",
      "Feature mapping",
      "Investor-ready product direction",
      "Community interactions",
      "Prayer & affirmation experiences",
      "Final mobile product",
    ],
    results: [
      "Investor-approved direction",
      "Android app launched",
    ],
    accent: "#7564f5",
    surface: "#ebe9ff",
    hero: "/projects/givethanks-feed.png",
    cards: [
      "/projects/givethanks-home.png",
      "/projects/givethanks-voice.png",
    ],
    gallery: [
      {
        src: "/projects/givethanks-feed.png",
        alt: "GiveThanks community feed",
        layout: "tall",
        position: "top",
      },
      {
        src: "/projects/givethanks-voice.png",
        alt: "Voice affirmation experience",
        layout: "wide",
      },
      {
        src: "/projects/givethanks-groups.png",
        alt: "Community groups and leader tools",
        layout: "wide",
      },
      {
        src: "/projects/givethanks-journal.png",
        alt: "Personal journal experience",
        layout: "wide",
      },
      {
        src: "/projects/givethanks-home.png",
        alt: "GiveThanks mobile home",
        layout: "tall",
        position: "top",
      },
    ],
    website: "https://play.google.com/store/apps/details?id=com.givethanks.world",
  },

  {
    slug: "ticklish",
    presentation: "web",
    index: "04",
    title: "Ticklish",
    eyebrow: "C2C marketplace · Responsive web",
    headline: "Building a marketplace for safer ticket resale",
    summary:
      "Ticklish is a C2C marketplace built around a familiar problem: buying and reselling event tickets through WhatsApp, where scams and unreliable transactions are common.",
    challenge:
      "The product needed to make informal ticket resale feel more trustworthy without adding friction. Buyer and seller journeys had to work across small screens, while listings, offers, files, payments, and reputation all needed clear states.",
    approach:
      "Working alongside another designer, I helped shape the mobile-first web app around the complete resale journey—from seller onboarding and listing management to buyer checkout, offers, reviews, and QA across responsive breakpoints.",
    impact:
      "The outcome was a coherent marketplace concept spanning both sides of the transaction, with responsive flows that make ticket discovery, negotiation, purchase, and resale easier to understand.",
    role: "Product Designer · UX · QA",
    contributions: [
      "Marketplace flows",
      "Ticket discovery",
      "Buying & selling",
      "Resale experience",
      "Mobile-first interface",
      "Product QA",
    ],
    results: [
      "Buyer & seller journeys",
      "Mobile-first marketplace",
    ],
    accent: "#0878ff",
    surface: "#e2efff",
    hero: "/projects/ticklish-listings.png",
    cards: [
      "/projects/ticklish-listings.png",
      "/projects/ticklish-buyer.png",
    ],
    gallery: [
      {
        src: "/projects/ticklish-listings.png",
        alt: "Ticklish listing management",
        layout: "tall",
        position: "top",
      },
      {
        src: "/projects/ticklish-buyer.png",
        alt: "Ticklish buyer journey",
        layout: "tall",
        position: "top",
      },
      {
        src: "/projects/ticklish-offers.png",
        alt: "Offer management across desktop",
        layout: "wide",
      },
      {
        src: "/projects/ticklish-detail.png",
        alt: "Ticket detail and purchase experience",
        layout: "wide",
      },
      {
        src: "/projects/ticklish-editor.png",
        alt: "Create and edit a ticket listing",
        layout: "tall",
        position: "top",
      },
    ],
    website: "https://tick-lish.com/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
