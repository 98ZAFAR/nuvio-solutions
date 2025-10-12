import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nuvio Solutions - Professional Freelance Web Development Team",
  description: "Expert freelance team specializing in modern web applications, mobile apps, and AI solutions. React, Next.js, Node.js, Python developers ready to bring your ideas to life.",
  keywords: "freelance web development, React, Next.js, Node.js, Python, mobile apps, AI solutions, custom software, full-stack development",
  authors: [{ name: "Nuvio Solutions" }],
  openGraph: {
    title: "Nuvio Solutions - Professional Freelance Web Development Team",
    description: "Expert freelance team specializing in modern web applications, mobile apps, and AI solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-slate-800`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
