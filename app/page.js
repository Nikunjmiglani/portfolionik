'use client';

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiPython, SiGit, SiLinux, SiTailwindcss, SiTypescript,
  SiJavascript, SiPostgresql, SiSolidity, SiKalilinux, SiWireshark,
} from "react-icons/si";
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "VulnScan",
    tech: "Next.js · FastAPI · Python · Groq AI",
    desc: "Automated vulnerability scanning system with AI-powered reporting and real-time threat analysis — identifies CVEs, open ports, and attack surfaces.",
    img: "/vuln_scan.jpg",
    repo: "https://github.com/Nikunjmiglani/advanced-vulnerability-scanner",
    tag: "Cybersecurity",
    tagStyle: "bg-red-50 text-red-700 border-red-200",
    imgBg: "bg-red-50",
  },
  {
    title: "Home SOC Lab",
    tech: "Wazuh · SIEM · Python · MITRE ATT&CK",
    desc: "Self-built Security Operations Center lab with custom Wazuh detection rules mapped to MITRE ATT&CK and a Python threat-intel enrichment pipeline for real-time alert triage.",
    img: "/image.png",
    repo: "https://github.com/Nikunjmiglani/home-soc-lab",
    tag: "Cybersecurity · SOC",
    tagStyle: "bg-red-50 text-red-700 border-red-200",
    imgBg: "bg-red-50",
  },
  {
    title: "Quizzkr",
    tech: "Next.js · Tailwind · Prisma · NeonDB · Framer Motion",
    desc: "Secure online quiz platform with role-based access, time-limited sessions, anti-cheat mechanisms, and real-time leaderboards backed by PostgreSQL.",
    img: "/quizzkr.png",
    live: "https://quizzkr.vercel.app",
    repo: "https://github.com/Nikunjmiglani/quizz",
    tag: "Security · EdTech",
    tagStyle: "bg-sky-50 text-sky-700 border-sky-200",
    imgBg: "bg-sky-50",
  },
  {
    title: "AyuTrace",
    tech: "Next.js · Solidity · Ether.js · MongoDB",
    desc: "Blockchain-powered traceability system ensuring secure, transparent, and tamper-proof tracking of products from origin to end-user.",
    img: "/AyuTrace.png",
    live: "https://ethicons.vercel.app",
    repo: "https://github.com/Nikunjmiglani/ethicons",
    tag: "Blockchain",
    tagStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    imgBg: "bg-emerald-50",
  },
  {
    title: "FNDP",
    tech: "Next.js · Python · Scikit-learn",
    desc: "AI-powered Fake News Detection Platform using ML models to classify news articles as real or fake with explainability outputs.",
    img: "/fndp.png",
    live: "https://fndp-frontend.vercel.app",
    repo: "https://github.com/Nikunjmiglani/FNDP-Frontend",
    tag: "AI / ML",
    tagStyle: "bg-violet-50 text-violet-700 border-violet-200",
    imgBg: "bg-violet-50",
  },
  {
    title: "Miggla Website",
    tech: "Next.js · Sanity CMS · Tailwind · Framer",
    desc: "Premium website for an interior design firm with CMS-driven content and fluid animations.",
    img: "/Miggla.png",
    live: "https://miggla.vercel.app/",
    tag: "Freelance",
    tagStyle: "bg-orange-50 text-orange-700 border-orange-200",
    imgBg: "bg-orange-50",
  },
  {
    title: "HireVexa Consultancy",
    tech: "Next.js · Prisma · PostgreSQL · Vercel",
    desc: "Job placement and LMS platform for a consultancy client — course creation, branded content management, and full SEO implementation with structured schema markup.",
    img: "/hirevexa.png",
    live: "https://hirevexaconsultancy.in",
    tag: "Freelance",
    tagStyle: "bg-orange-50 text-orange-700 border-orange-200",
    imgBg: "bg-orange-50",
  },
  {
    title: "Whabitr",
    tech: "Next.js · MongoDB · Express.js · NextAuth",
    desc: "Daily Habit Tracker with streak system, 90-day calendar view, and secure session management.",
    img: "/SS.png",
    live: "https://whabitr.online/",
    repo: "https://github.com/Nikunjmiglani/habiter",
    tag: "Productivity",
    tagStyle: "bg-teal-50 text-teal-700 border-teal-200",
    imgBg: "bg-teal-50",
  },
];

const tools = [
  { name: "Kali Linux",   icon: <SiLinux color="#444" /> },
  { name: "Wireshark",    icon: <SiWireshark color="#1679a7" /> },
  { name: "Python",       icon: <SiPython color="#2563eb" /> },
  { name: "Linux",        icon: <SiLinux color="#444" /> },
  { name: "Next.js",      icon: <SiNextdotjs color="#111" /> },
  { name: "React.js",     icon: <SiReact color="#0ea5e9" /> },
  { name: "TailwindCSS",  icon: <SiTailwindcss color="#06b6d4" /> },
  { name: "TypeScript",   icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript",   icon: <SiJavascript color="#ca8a04" /> },
  { name: "PostgreSQL",   icon: <SiPostgresql color="#336791" /> },
  { name: "Node.js",      icon: <SiNodedotjs color="#16a34a" /> },
  { name: "MongoDB",      icon: <SiMongodb color="#16a34a" /> },
  { name: "Solidity",     icon: <SiSolidity color="#888" /> },
  { name: "Git",          icon: <SiGit color="#e05d44" /> },
];

const stats = [
  { num: "20+", label: "Projects Built" },
  { num: "2+",  label: "Years in Security" },
  { num: "4",   label: "Domains" },
  { num: "∞",   label: "Curiosity" },
];

// Skills reordered: Cyber first, then IT/Networking, Full Stack is support
const skills = ["Cybersecurity", "IT / Networking", "Full Stack", "Blockchain", "AI / ML"];

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-6');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useTypewriter(text, speed = 55, startDelay = 700) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -4, y: dx * 4 });
  };

  return (
    <div
      ref={cardRef}
      data-reveal
      className="opacity-0 translate-y-6 bg-white border border-stone-200 overflow-hidden group hover:border-stone-400 hover:shadow-[6px_6px_0_#e7e5e4] active:shadow-[2px_2px_0_#e7e5e4] active:translate-x-[2px] active:translate-y-[2px]"
      style={{
        transitionDelay: `${index * 0.08}s`,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.15s ease, opacity 0.7s ease, translate 0.7s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Image */}
      <div className={`relative h-48 sm:h-52 overflow-hidden ${project.imgBg}`}>
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-95 saturate-90 group-hover:brightness-100 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 z-10" />
        <span className={`absolute top-3 left-3 z-20 text-[10px] tracking-[0.2em] uppercase font-mono px-2 py-1 border rounded-sm ${project.tagStyle}`}>
          {project.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-xl font-light text-stone-800 leading-tight">{project.title}</h3>
          <div className="flex gap-1.5 shrink-0 mt-0.5">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site`}
                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center border border-stone-200 text-stone-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 active:bg-orange-100 transition-all rounded-sm">
                <FaExternalLinkAlt size={11} />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repo`}
                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center border border-stone-200 text-stone-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 active:bg-orange-100 transition-all rounded-sm">
                <FaGithub size={11} />
              </a>
            )}
          </div>
        </div>
        <p className="text-[10px] tracking-widest text-orange-500 font-mono mb-2.5 uppercase leading-relaxed">{project.tech}</p>
        <p className="text-[13px] text-stone-500 leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );
}

// Mobile Nav Menu
function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-[#faf8f4] flex flex-col justify-center items-center gap-8 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {[
        { href: "#about", label: "About" },
        { href: "#projects", label: "Work" },
        { href: "#contact", label: "Contact" },
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onClose}
          className="font-serif text-4xl font-light text-stone-800 hover:text-orange-600 transition-colors"
        >
          {label}
        </a>
      ))}
      <a
        href="/Nikunjmiglani.pdf"
        download
        onClick={onClose}
        className="font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-3 border border-stone-400 text-stone-700 hover:bg-stone-800 hover:text-white mt-4 transition-all"
      >
        Resume ↗
      </a>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollReveal();
  // Updated typewriter: Cyber first, IT/Networking second, Full Stack as support
  const { displayed: typedRole, done: roleDone } = useTypewriter('Cybersecurity · IT & Networking · Full Stack');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        .font-mono  { font-family: 'DM Mono', 'Courier New', monospace !important; }
        body { font-family: 'DM Mono', monospace; cursor: default; }
        html { scroll-behavior: smooth; }

        /* dot grid bg */
        .dot-grid {
          background-image: radial-gradient(circle, #c4622d12 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* marquee */
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        .marquee-track { animation: marquee 32s linear infinite; }

        /* scroll line */
        @keyframes scrollDown { 0%{top:-100%} 100%{top:200%} }
        .scroll-line::after {
          content: ''; position: absolute;
          top: -100%; left: 0; width: 100%; height: 100%;
          background: #c4622d;
          animation: scrollDown 2s ease-in-out infinite;
        }

        /* blink */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { animation: blink 1s step-end infinite; }

        /* pulse */
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.75)} }
        .status-pulse { animation: pulse 2.5s infinite; }

        /* fade up hero */
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .animate-fade-up-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.7s ease 0.25s both; }
        .animate-fade-up-3 { animation: fadeUp 0.7s ease 0.45s both; }
        .animate-fade-up-4 { animation: fadeUp 0.7s ease 0.6s both; }

        /* hamburger lines */
        .ham-line { display:block; width:22px; height:1.5px; background:#44403c; transition: all 0.3s ease; }
        .ham-open .ham-line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        .ham-open .ham-line:nth-child(2) { opacity: 0; transform: translateX(-4px); }
        .ham-open .ham-line:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }

        /* reveal */
        [data-reveal] { transition: opacity 0.7s ease, transform 0.7s ease; }

        /* mobile tap highlight */
        * { -webkit-tap-highlight-color: transparent; }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .scroll-line::after { animation: none; }
          .cursor-blink { animation: none; }
          .status-pulse { animation: none; }
          [data-reveal] { opacity: 1 !important; transform: none !important; }
          .animate-fade-up-1, .animate-fade-up-2, .animate-fade-up-3, .animate-fade-up-4 { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="bg-[#faf8f4] text-stone-800 min-h-screen overflow-x-hidden dot-grid">

        {/* ── MOBILE MENU ── */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-14 py-4 border-b border-stone-200 bg-[#faf8f4]/90 backdrop-blur-md">
          <a href="#" className="font-serif text-xl font-light text-stone-800 hover:text-orange-600 transition-colors">
            Nikunj<span className="text-orange-600">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["#about", "#projects", "#contact"].map((href, i) => (
              <a key={href} href={href}
                className="text-stone-500 text-[11px] tracking-[0.2em] uppercase font-mono hover:text-orange-600 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-orange-500 hover:after:w-full after:transition-all">
                {["About", "Work", "Contact"][i]}
              </a>
            ))}
            <a href="/Nikunjmiglani.pdf" download
              className="text-[11px] tracking-[0.18em] uppercase font-mono px-4 py-2 border border-stone-400 text-stone-700 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all">
              Get Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-[5px] p-2 -mr-1 z-50 relative ${menuOpen ? 'ham-open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </nav>

        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-14 pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
          {/* Vertical deco — desktop only */}
          <div className="hidden lg:flex absolute right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-stone-400 text-[10px] tracking-[0.3em] uppercase font-mono" style={{ writingMode: 'vertical-rl' }}>
            <div className="w-px h-20 bg-stone-300" />
            Based in Delhi
            <div className="w-px h-20 bg-stone-300" />
          </div>

          {/* Eyebrow — cyber-flavored availability tag */}
          <div className="flex items-center gap-3 mb-5 sm:mb-7 animate-fade-up-1">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-orange-500 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-mono">
              Open to Cyber &amp; IT Roles · 2026
            </span>
          </div>

          {/* Name */}
          <h1 className="font-serif font-light leading-[0.88] tracking-tight mb-0 animate-fade-up-2"
            style={{ fontSize: 'clamp(4rem,15vw,12rem)' }}>
            Nikunj
            <span className="block text-orange-600 italic">Miglani</span>
          </h1>

          {/* Divider */}
          <div className="animate-fade-up-3 my-6 sm:my-8 h-px bg-gradient-to-r from-stone-400 via-stone-200 to-transparent" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 sm:gap-6 animate-fade-up-4">
            <p className="font-mono text-[12px] sm:text-[13px] text-stone-500 tracking-wide">
              <span className="text-orange-500 mr-2">→</span>
              {typedRole}
              {!roleDone && (
                <span className="inline-block w-0.5 h-[0.9em] bg-orange-500 ml-0.5 align-middle cursor-blink" />
              )}
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="font-mono text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-4 sm:px-6 py-3 bg-orange-600 text-white border border-orange-600 hover:bg-transparent hover:text-orange-600 active:scale-95 transition-all">
                Get In Touch
              </a>
              <a href="#projects" className="font-mono text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-4 sm:px-6 py-3 bg-transparent text-stone-800 border border-stone-400 hover:bg-stone-800 hover:text-white hover:border-stone-800 active:scale-95 transition-all">
                View Work
              </a>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="relative w-px h-12 bg-stone-300 overflow-hidden scroll-line" />
            <span className="text-stone-400 text-[9px] tracking-[0.3em] uppercase font-mono">Scroll</span>
          </div>
        </section>

        {/* ── STATUS BAR ── */}
        <div className="border-t border-b border-stone-200 bg-stone-50 overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max">
            {[
              { dot: true, label: "Seeking Cyber & IT Roles" },
              { label: "3rd Year · SRM University" },
              { label: "Ethical Hacking · Pentesting · Networking" },
              { label: "niikkunjmiglani@gmail.com" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-stone-500 uppercase whitespace-nowrap px-5 sm:px-6 py-3 border-r border-stone-200 last:border-r-0">
                {item.dot && <div className="w-1.5 h-1.5 rounded-full bg-green-500 status-pulse shrink-0" />}
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 lg:gap-28">
          {/* Left */}
          <div data-reveal className="opacity-0 translate-y-6">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="text-orange-500 text-[10px] tracking-[0.35em] uppercase font-mono">01 — Who I Am</span>
              <div className="w-8 sm:w-12 h-px bg-stone-300" />
            </div>
            <h2 className="font-serif font-light leading-[1.15] mb-6 sm:mb-8 text-stone-800"
              style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)' }}>
              I secure, connect, and<br />
              <em className="italic text-orange-600">build the internet.</em>
            </h2>
            <p className="font-mono text-[13px] text-stone-500 leading-loose mb-4 sm:mb-5">
              A cybersecurity-focused developer from Delhi, currently in my 3rd year at SRM University.
              My primary interest is offensive and defensive security — ethical hacking, vulnerability
              assessment, and IT/networking fundamentals.
            </p>
            <p className="font-mono text-[13px] text-stone-500 leading-loose mb-4 sm:mb-5">
              I back that with full-stack engineering ability — so I don&apos;t just find the holes,
              I understand the systems they live in. That combination makes me useful across
              security ops, IT support, and network administration roles.
            </p>
            <p className="font-mono text-[13px] text-stone-500 leading-loose">
              When not at a terminal — Finance books, good music, or a walk outside.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
              {skills.map(s => (
                <span key={s} className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-stone-300 text-stone-500 bg-stone-50">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-6 sm:mt-8 flex-wrap">
              <a href="/Nikunjmiglani.pdf" download
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-5 sm:px-6 py-3 bg-orange-600 text-white border border-orange-600 hover:bg-transparent hover:text-orange-600 active:scale-95 transition-all">
                Download CV
              </a>
              <a href="mailto:niikkunjmiglani@gmail.com"
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-5 sm:px-6 py-3 bg-transparent text-stone-800 border border-stone-400 hover:bg-stone-800 hover:text-white hover:border-stone-800 active:scale-95 transition-all">
                Email Me
              </a>
            </div>
          </div>

          {/* Right */}
          <div data-reveal className="opacity-0 translate-y-6" style={{ transitionDelay: '0.12s' }}>
            {/* Photo — centered on mobile */}
            <div className="flex lg:block justify-center lg:justify-start">
              <div className="w-20 h-20 rounded-full border-2 border-stone-300 overflow-hidden relative mb-6 sm:mb-8 shadow-[4px_4px_0_#e7e5e4]">
                <Image src="/Nikunj.jpg" fill alt="Nikunj" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-6 sm:mb-8">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#faf8f4] p-5 sm:p-6 hover:bg-orange-50 transition-colors">
                  <div className="font-serif text-3xl sm:text-4xl font-light text-orange-600 leading-none">{s.num}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS MARQUEE ── */}
        <section className="border-t border-b border-stone-200 bg-stone-50 py-8 sm:py-10">
          <p className="font-mono text-[10px] tracking-[0.35em] text-stone-400 uppercase px-4 sm:px-8 lg:px-14 mb-4 sm:mb-5">Tools &amp; Stack</p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-2 w-max marquee-track">
              {[...tools, ...tools].map((tool, i) => (
                <div key={i}
                  className="flex items-center gap-2.5 bg-white border border-stone-200 px-4 py-2.5 font-mono text-[12px] text-stone-700 whitespace-nowrap hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 transition-all rounded-sm cursor-default select-none">
                  <span className="text-base leading-none">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-36">
          <div data-reveal className="opacity-0 translate-y-6 flex flex-wrap items-end justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-orange-500 text-[10px] tracking-[0.35em] uppercase font-mono">02 — Featured Work</span>
                <div className="w-8 sm:w-12 h-px bg-stone-300" />
              </div>
              <h2 className="font-serif font-light text-stone-800" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
                Selected Projects
              </h2>
            </div>
            <span className="font-serif italic text-stone-400 text-base sm:text-lg">Eight selected works</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ── GITHUB ── */}
        <section className="border-t border-stone-200 bg-stone-50 py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div data-reveal className="opacity-0 translate-y-6 mb-4">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-orange-500 text-[10px] tracking-[0.35em] uppercase font-mono">03 — Activity</span>
                <div className="w-8 sm:w-12 h-px bg-stone-300" />
              </div>
              <h2 className="font-serif font-light text-stone-800" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
                GitHub Contributions
              </h2>
            </div>
            <div data-reveal className="opacity-0 translate-y-6 mt-8 sm:mt-10 bg-white border border-stone-200 p-4 sm:p-8 overflow-x-auto" style={{ transitionDelay: '0.1s' }}>
              <div className="flex justify-start sm:justify-center min-w-max sm:min-w-0">
                <GitHubCalendar
                  username="Nikunjmiglani"
                  blockSize={11}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="light"
                  theme={{
                    light: ['#f5f0ea', '#fcd9b8', '#f4a464', '#e07230', '#c4622d'],
                  }}
                />
              </div>
            </div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-stone-400 uppercase mt-3">
              Public contributions only
            </p>
          </div>
        </section>

        {/* ── FOOTER / CONTACT ── */}
        <footer id="contact" className="border-t border-stone-200 bg-[#faf8f4]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 lg:gap-28">
            {/* Left */}
            <div data-reveal className="opacity-0 translate-y-6">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="text-orange-500 text-[10px] tracking-[0.35em] uppercase font-mono">04 — Contact</span>
                <div className="w-8 sm:w-12 h-px bg-stone-300" />
              </div>
              <h2 className="font-serif font-light leading-[1.05] text-stone-800 mb-5 sm:mb-6"
                style={{ fontSize: 'clamp(2.2rem,6vw,5rem)' }}>
                Let&apos;s build<br />
                <em className="italic text-orange-600">something.</em>
              </h2>
              <p className="font-mono text-[13px] text-stone-500 leading-loose mb-6 sm:mb-8">
                Open to Cybersecurity, IT, Networking, and Full Stack roles.<br className="hidden sm:block" />
                Drop a line at{" "}
                <a href="mailto:niikkunjmiglani@gmail.com"
                  className="text-stone-700 underline underline-offset-4 hover:text-orange-600 transition-colors break-all sm:break-normal">
                  niikkunjmiglani@gmail.com
                </a>
              </p>
              <div className="flex gap-2 flex-wrap mb-8 sm:mb-10">
                {[
                  { href: "https://github.com/Nikunjmiglani", icon: <FaGithub size={15} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/nikunjmiglani/", icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
                  { href: "https://www.instagram.com/niikkunj_/", icon: <FaInstagram size={15} />, label: "Instagram" },
                  { href: "https://x.com/NikunjMiglani28", icon: <FaXTwitter size={15} />, label: "X / Twitter" },
                  { href: "https://coff.ee/nikunjmiglani", icon: <SiBuymeacoffee size={15} />, label: "Buy me a coffee" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center border border-stone-300 text-stone-500 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 active:bg-orange-100 transition-all rounded-sm">
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-stone-400 uppercase">
                © 2026 Nikunj Miglani — Built with intention
              </p>
            </div>

            {/* Right — Contact Form */}
            <div data-reveal className="opacity-0 translate-y-6" style={{ transitionDelay: '0.12s' }}>
              <p className="font-serif font-light text-xl sm:text-2xl text-stone-700 mb-5 sm:mb-6">Send a message</p>
              <form
                className="flex flex-col gap-3"
                action="https://formspree.io/f/mgvynjpo"
                method="POST"
              >
                {/* Stack on mobile, row on sm+ */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text" name="fullName" placeholder="Full Name" required
                    className="flex-1 bg-stone-50 border border-stone-200 px-4 py-3.5 sm:py-3 font-mono text-[12px] text-stone-700 placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-orange-50 transition-all"
                  />
                  <input
                    type="text" name="phone" placeholder="Phone No"
                    className="flex-1 bg-stone-50 border border-stone-200 px-4 py-3.5 sm:py-3 font-mono text-[12px] text-stone-700 placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-orange-50 transition-all"
                  />
                </div>
                <input
                  type="email" name="email" placeholder="Email" required
                  className="bg-stone-50 border border-stone-200 px-4 py-3.5 sm:py-3 font-mono text-[12px] text-stone-700 placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-orange-50 transition-all"
                />
                <textarea
                  name="message" placeholder="Message" rows={5} required
                  className="bg-stone-50 border border-stone-200 px-4 py-3.5 sm:py-3 font-mono text-[12px] text-stone-700 placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-orange-50 transition-all resize-none"
                />
                <input type="text" name="_gotcha" className="hidden" />
                <button
                  type="submit"
                  className="bg-orange-600 text-white font-mono text-[11px] tracking-[0.2em] uppercase py-4 sm:py-3.5 border border-orange-600 hover:bg-transparent hover:text-orange-600 active:scale-95 transition-all">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}