import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import WhatsAppButton from "./_components/WhatsAppButton";
import Chatbot from "./_components/Chatbot";
import { SITE, SOCIAL } from "./_lib/constants";
import "./globals.css";

const BASE_URL = "https://austine-omondi.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE.name,
      description:
        "Official campaign website of Austine Omondi — MCA aspirant for Karura Ward, Westlands Constituency, Nairobi, 2027.",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: SITE.fullName,
      alternateName: SITE.name,
      url: BASE_URL,
      image: `${BASE_URL}/og-image.jpg`,
      telephone: SITE.phone.map((p) => `+254${p.slice(1)}`),
      email: SITE.email,
      jobTitle: `MCA Aspirant, ${SITE.aspiringWard} ${SITE.year}`,
      description:
        "Educator, youth leader, environmentalist, and philanthropist running for MCA of Karura Ward in the 2027 Kenyan General Elections.",
      nationality: { "@type": "Country", name: "Kenya" },
      birthPlace: {
        "@type": "Place",
        name: `Kojwach Ward, Kabondo Kasipul, Homabay County`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.aspiringWard,
        addressRegion: "Nairobi County",
        addressCountry: "KE",
      },
      knowsAbout: [
        "Education",
        "Youth empowerment",
        "Environmental conservation",
        "Community development",
        "Conflict resolution",
      ],
      worksFor: {
        "@type": "NGO",
        name: "Brilliant Angels Community Based Organization",
      },
      sameAs: [SOCIAL.tiktok, SOCIAL.facebook, SOCIAL.linkedin],
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  title: {
    default: "Austine Omondi | MCA Aspirant Karura Ward 2027",
    template: "%s",
  },
  description:
    "Austine Omondi — MCA aspirant for Karura Ward, Westlands Constituency, Nairobi, in the 2027 Kenyan General Elections. Educator, youth leader, environmentalist, and philanthropist committed to transformative leadership.",
  verification: {
    google: "EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo",
  },
  keywords: [
    "Austine Omondi",
    "MCA Karura Ward",
    "Karura Ward MCA 2027",
    "Westlands Constituency",
    "Member of County Assembly Karura",
    "Nairobi County Assembly",
    "MCA aspirant 2027 Kenya",
    "Karura MCA candidate",
    "Brilliant Angels CBO Githogoro",
  ],
  openGraph: {
    title: "Austine Omondi | MCA Aspirant Karura Ward 2027",
    description:
      "Austine Omondi — MCA aspirant for Karura Ward, Westlands Constituency, Nairobi, in the 2027 Kenyan General Elections. Educator, youth leader, environmentalist, and philanthropist.",
    type: "website",
    url: BASE_URL,
    siteName: "Austine Omondi",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Austine Omondi — MCA Aspirant, Karura Ward 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austine Omondi | MCA Aspirant Karura Ward 2027",
    description:
      "Austine Omondi — MCA aspirant for Karura Ward, Westlands Constituency, Nairobi, in the 2027 Kenyan General Elections.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        <main style={{ flex: 1, paddingTop: "var(--nav-height)" }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
