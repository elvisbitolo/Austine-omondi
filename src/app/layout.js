import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Austine Omondi | MCA Aspirant Karura Ward 2027",
  description:
    "Official campaign website of Austine Omondi — MCA aspirant for Karura Ward 2027. Educator, youth leader, environmentalist, and philanthropist committed to transformative leadership.",
  verification: {
    google: "EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo",
  },
  openGraph: {
    title: "Austine Omondi | MCA Aspirant Karura Ward 2027",
    description:
      "Official campaign website of Austine Omondi — MCA aspirant for Karura Ward 2027.",
    type: "website",
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
      </body>
    </html>
  );
}
