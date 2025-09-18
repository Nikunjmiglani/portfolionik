import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I'm Nikunj",
  description: "Developer Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen w-full relative">
          {/* Midnight Ember Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, #3d2914 0%, #2a1810 30%, #1a0f0a 60%, #0d0806 100%)",
            }}
          />

          {/* All Content */}
          <div className="relative z-10 text-white">
            <Analytics />
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
