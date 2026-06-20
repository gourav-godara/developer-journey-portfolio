import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIChatbot from "@/components/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const BASE_URL = "https://gouravgodara.vercel.app";

export const metadata = {
  
  title: "Gourav Godara — Portfolio ",
  description:
    "Portfolio of Gourav Godara, a B.Tech CSE student at SVNIT Surat. Building modern web experiences with Next.js, React, and Tailwind CSS while mastering DSA and competitive programming.",

  // Open Graph — WhatsApp, LinkedIn, Facebook, Discord
  openGraph: {
    title: "Gourav Godara — CSE Student",
    description:
      "B.Tech CSE @ SVNIT Surat · Next.js · React · DSA · Open to internships in Software Dev, AI & Cybersecurity.",
    url: BASE_URL,
    siteName: "Gourav Godara Portfolio",
    images: [
      {
        url: `${BASE_URL}/portfolio-logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Gourav Godara — Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Gourav Godara — CSE Student",
    description:
      "B.Tech CSE @ SVNIT Surat · Next.js · React · DSA · Open to internships.",
    images: [`${BASE_URL}/portfolio-logo.jpeg`],
  },

  // Canonical
  metadataBase: new URL(BASE_URL),

  // Misc
  keywords: [
    "Gourav Godara",
    "Portfolio",
    "CSE Student",
    "SVNIT Surat",
    "Frontend Developer",
    "Next.js",
    "React",
    "DSA",
    "Web Development",
    "Competitive Programming",
  ],
  authors: [{ name: "Gourav Godara" }],
  creator: "Gourav Godara",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0F0F0F]">
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
