"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nikunjmiglani/",
    },
    {
      name: "GitHub",
      href: "https://github.com/Nikunjmiglani",
    },
    {
      name: "X",
      href: "https://x.com/NikunjMiglani28",
    },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-full shadow-2xl bg-gray-900/30 backdrop-blur-lg border border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/Nlogo.png"
              width={45}
              alt="Logo"
              className="border border-white rounded-full hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 bg-black/20 p-1 py-2 rounded-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 text-sm font-medium rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: isOpen ? 0 : "100%" }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  className="fixed top-0 right-0 h-full w-64 z-50 md:hidden text-white"
  onClick={(e) => e.stopPropagation()}
>
  {/* Gradient Background */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
    }}
  />

  <button
    onClick={() => setIsOpen(false)}
    className="absolute top-6 right-6 text-white hover:text-gray-300"
  >
    <X className="w-6 h-6" />
  </button>

  <ul className="flex flex-col gap-6 mt-16 text-center">
    {navLinks.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="text-xl font-medium sm:text-xl text-white transition-colors"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</motion.div>

    </>
  );
}
