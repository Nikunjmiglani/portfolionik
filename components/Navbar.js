"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About",   href: "#about",    id: "about" },
  { name: "Work",    href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact",  id: "contact" },
];

const socialLinks = [
  { name: "LinkedIn",   href: "https://www.linkedin.com/in/nikunjmiglani/" },
  { name: "GitHub",     href: "https://github.com/Nikunjmiglani" },
  { name: "X / Twitter",href: "https://x.com/NikunjMiglani28" },
];

export default function Navbar() {
  const [isOpen,         setIsOpen]         = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");
  const [hoveredLink,    setHoveredLink]    = useState(null);
  const linksRef = useRef({});

  // Close panel on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Lock body scroll when mobile panel is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <style>{`
        :root {
          --accent:    #c4622d;
          --accent-lt: rgba(196,98,45,0.12);
          --nav-bg:    rgba(250,248,244,0.88);
          --nav-bg-scrolled: rgba(250,248,244,0.97);
          --nav-border: rgba(196,98,45,0.12);
          --fg:        #292524;
          --muted:     #78716c;
          --panel-bg:  #faf8f4;
        }

        /* ─── Base ─── */
        .nm-nav {
          position: fixed; top:0; left:0; right:0; z-index:1000;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 3.5rem;
          height: 58px;
          background: var(--nav-bg);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          border-bottom: 1px solid var(--nav-border);
          font-family: 'DM Mono', 'Courier New', monospace;
          transition: background 0.35s, box-shadow 0.35s;
        }
        .nm-nav.scrolled {
          background: var(--nav-bg-scrolled);
          box-shadow: 0 1px 24px rgba(196,98,45,0.07);
        }

        /* ─── Logo ─── */
        .nm-logo {
          display: flex; align-items: center; gap: 0.6rem;
          text-decoration: none; flex-shrink: 0;
        }
        .nm-logo-img {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1.5px solid var(--accent);
          object-fit: cover;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .nm-logo:hover .nm-logo-img {
          box-shadow: 0 0 0 3px rgba(196,98,45,0.18);
          transform: rotate(-6deg) scale(1.05);
        }
        .nm-logo-text {
          font-size: 0.8rem; letter-spacing: 0.2em;
          color: var(--fg); opacity: 0.85;
        }
        .nm-logo-dot { color: var(--accent); }

        /* ─── Desktop links ─── */
        .nm-desktop {
          display: flex; align-items: center;
          gap: 0; position: relative;
        }
        .nm-link-wrap { position: relative; }
        .nm-link {
          display: block;
          padding: 0.4rem 1rem;
          font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--muted); text-decoration: none;
          transition: color 0.2s; position: relative; z-index: 1;
        }
        .nm-link.active,
        .nm-link:hover { color: var(--fg); }

        /* Framer motion underline is rendered inline — no extra CSS needed */

        /* ─── Right actions ─── */
        .nm-actions { display: flex; align-items: center; gap: 1rem; }

        .nm-status {
          display: flex; align-items: center; gap: 0.45rem;
          font-size: 0.6rem; letter-spacing: 0.18em; color: var(--muted);
          text-transform: uppercase;
        }
        .nm-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          animation: nmPulse 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        .nm-resume {
          font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 0.38rem 0.9rem;
          border: 1px solid rgba(196,98,45,0.45);
          color: var(--accent); text-decoration: none; background: transparent;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          font-family: inherit;
        }
        .nm-resume:hover {
          background: var(--accent); color: #fff;
          border-color: var(--accent);
        }

        /* ─── Hamburger ─── */
        .nm-burger {
          display: none; background: none; border: none;
          color: var(--fg); cursor: pointer; padding: 6px;
          border-radius: 4px; transition: color 0.2s, background 0.2s;
          line-height: 0;
        }
        .nm-burger:hover { color: var(--accent); background: var(--accent-lt); }

        /* ─── Mobile slide panel ─── */
        .nm-panel {
          position: fixed; top:0; right:0;
          height: 100dvh; width: min(300px, 85vw);
          z-index: 1010;
          background: var(--panel-bg);
          border-left: 1px solid rgba(196,98,45,0.12);
          padding: 0 2rem 2.5rem;
          font-family: 'DM Mono','Courier New',monospace;
          overflow-y: auto;
          display: flex; flex-direction: column;
        }
        .nm-panel-head {
          display: flex; align-items: center; justify-content: space-between;
          height: 58px; flex-shrink: 0;
        }
        .nm-close-btn {
          background: none; border: none; color: var(--muted);
          cursor: pointer; padding: 4px; line-height:0;
          transition: color 0.2s;
        }
        .nm-close-btn:hover { color: var(--accent); }

        .nm-panel-label {
          font-size: 0.55rem; letter-spacing: 0.35em;
          color: var(--muted); text-transform: uppercase;
          margin-bottom: 1.2rem; margin-top: 0.5rem;
        }
        .nm-panel-nav-link {
          display: block; font-family: 'Cormorant Garamond',Georgia,serif;
          font-size: 2rem; font-weight: 300;
          color: var(--fg); text-decoration: none;
          margin-bottom: 0.25rem; letter-spacing: -0.01em;
          transition: color 0.15s, padding-left 0.2s;
        }
        .nm-panel-nav-link:hover { color: var(--accent); padding-left: 6px; }

        .nm-panel-divider {
          height: 1px; background: rgba(196,98,45,0.1);
          margin: 1.5rem 0;
        }
        .nm-panel-social {
          font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--muted); text-decoration: none;
          display: block; margin-bottom: 0.75rem;
          transition: color 0.15s;
        }
        .nm-panel-social:hover { color: var(--fg); }

        .nm-panel-cv {
          display: inline-block; margin-top: auto; padding-top: 1.5rem;
          font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--accent); text-decoration: none;
          border: 1px solid rgba(196,98,45,0.4);
          padding: 0.6rem 1rem;
          transition: background 0.2s, color 0.2s;
        }
        .nm-panel-cv:hover { background: var(--accent); color: #fff; }

        @keyframes nmPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.7)} }

        @media (max-width: 767px) {
          .nm-desktop, .nm-status, .nm-resume { display: none !important; }
          .nm-burger { display: block; }
          .nm-nav { padding: 0 1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .nm-status-dot { animation: none; }
          .nm-logo-img { transition: none; }
        }

        /* kill tap highlight */
        .nm-nav *, .nm-panel * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav className={`nm-nav${scrolled ? " scrolled" : ""}`}>

        {/* Logo */}
        <Link href="/" className="nm-logo">
          <img src="/Nlogo.png" alt="NM" className="nm-logo-img" />
          <span className="nm-logo-text">
            Nikunj<span className="nm-logo-dot">.</span>
          </span>
        </Link>

        {/* Desktop links — animated underline via Framer layoutId */}
        <div className="nm-desktop">
          {navLinks.map(({ name, href, id }) => {
            const isActive = hoveredLink ? hoveredLink === id : activeSection === id;
            return (
              <div
                key={id}
                className="nm-link-wrap"
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={href}
                  className={`nm-link${activeSection === id ? " active" : ""}`}
                >
                  {name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nm-underline"
                    style={{
                      position: "absolute",
                      bottom: 0, left: "1rem", right: "1rem",
                      height: "1.5px",
                      background: "var(--accent)",
                      borderRadius: "1px",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="nm-actions">
          <div className="nm-status">
            <div className="nm-status-dot" />
            <span>Available</span>
          </div>
          <a href="/Nikunjmiglani.pdf" download className="nm-resume">
            Get Resume ↓
          </a>
          <button
            className="nm-burger"
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
            key="overlay"
            style={{
              position: "fixed", inset: 0, zIndex: 1005,
              background: "rgba(41,37,36,0.45)",
              backdropFilter: "blur(3px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── MOBILE SLIDE PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            className="nm-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className="nm-panel-head">
              <Link href="/" className="nm-logo" onClick={() => setIsOpen(false)}>
                <img src="/Nlogo.png" alt="NM" className="nm-logo-img" style={{ width: 28, height: 28 }} />
                <span className="nm-logo-text">
                  Nikunj<span className="nm-logo-dot">.</span>
                </span>
              </Link>
              <button className="nm-close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div className="nm-panel-label">Navigation</div>
            {navLinks.map(({ name, href }, i) => (
              <motion.a
                key={name}
                href={href}
                className="nm-panel-nav-link"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.08 }}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </motion.a>
            ))}

            <div className="nm-panel-divider" />

            {/* Social */}
            <div className="nm-panel-label">Find me</div>
            {socialLinks.map(({ name, href }, i) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nm-panel-social"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.28 }}
                onClick={() => setIsOpen(false)}
              >
                {name} ↗
              </motion.a>
            ))}

            <div className="nm-panel-divider" />

            {/* CV */}
            <motion.a
              href="/Nikunjmiglani.pdf"
              download
              className="nm-panel-cv"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              onClick={() => setIsOpen(false)}
            >
              Download CV ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}