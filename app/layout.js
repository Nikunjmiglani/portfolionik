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
          {/* First Background (Black → Purple) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
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
