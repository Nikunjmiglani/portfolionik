"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About",   href: "#about",    id: "about" },
  { name: "Work",    href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact",  id: "contact" },
];

const socialLinks = [
  { name: "LinkedIn",   href: "https://www.linkedin.com/in/nikunjmiglani/" },
  { name: "GitHub",     href: "https://github.com/Nikunjmiglani" },
  { name: "X / Twitter", href: "https://x.com/NikunjMiglani28" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Font import + blink keyframe only — nothing Tailwind can do */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        @keyframes statusPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.75)} }
        .status-pulse { animation: statusPulse 2.5s ease-in-out infinite; }
        .nm-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .nm-mono  { font-family: 'DM Mono', 'Courier New', monospace; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nm-mono fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px] border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f4]/95 border-stone-300 shadow-sm backdrop-blur-md"
          : "bg-[#faf8f4]/80 border-stone-200 backdrop-blur-sm"
      }`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-stone-300 group-hover:border-orange-500 transition-all duration-300 relative group-hover:rotate-[-5deg] group-hover:shadow-[0_0_12px_rgba(234,88,12,0.25)]">
            <Image src="/Nlogo.png" alt="NM" fill className="object-cover" />
          </div>
          <span className="nm-mono text-[13px] tracking-[0.18em] text-stone-600 group-hover:text-stone-900 transition-colors">
            NM<span className="text-orange-500">_</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0 relative">
          {navLinks.map(({ name, href, id }) => {
            const isActive = activeSection === id || hoveredLink === id;
            return (
              <div
                key={id}
                className="relative"
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={href}
                  className={`block px-4 py-1.5 nm-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-200 ${
                    isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
                  }`}
                >
                  {name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-orange-500"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Status — hidden on small */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 status-pulse" />
            <span className="nm-mono text-[10px] tracking-[0.18em] text-stone-400 uppercase">Open to work</span>
          </div>

          {/* Resume btn */}
          <a
            href="/Nikunjresume.pdf"
            download
            className="hidden md:block nm-mono text-[10px] tracking-[0.22em] uppercase px-4 py-1.5 border border-stone-300 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200"
          >
            CV ↓
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-stone-500 hover:text-orange-500 transition-colors p-1"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── MOBILE PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-72 z-50 bg-[#faf8f4] border-l border-stone-200 px-8 pt-20 pb-10 flex flex-col md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>

            {/* Nav links */}
            <p className="nm-mono text-[9px] tracking-[0.35em] text-stone-400 uppercase mb-4">Navigation</p>
            {navLinks.map(({ name, href }, i) => (
              <motion.a
                key={name}
                href={href}
                className="nm-serif font-light text-[2rem] leading-tight text-stone-800 hover:text-orange-600 hover:pl-1.5 transition-all duration-150 mb-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.08 }}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </motion.a>
            ))}

            <div className="my-6 h-px bg-stone-200" />

            {/* Social links */}
            <p className="nm-mono text-[9px] tracking-[0.35em] text-stone-400 uppercase mb-4">Find me</p>
            {socialLinks.map(({ name, href }, i) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nm-mono text-[11px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-900 transition-colors mb-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.28 }}
                onClick={() => setIsOpen(false)}
              >
                {name} ↗
              </motion.a>
            ))}

            <div className="my-6 h-px bg-stone-200" />

            {/* CV download */}
            <motion.a
              href="/Nikunjresume.pdf"
              download
              className="nm-mono text-[11px] tracking-[0.2em] uppercase text-orange-600 hover:text-orange-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
            >
              Download CV ↓
            </motion.a>

            {/* Status dot at bottom */}
            <div className="mt-auto flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 status-pulse" />
              <span className="nm-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase">Open to work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}