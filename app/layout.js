import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import { FaViacoin } from "react-icons/fa";

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
      <body
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ><Analytics/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
