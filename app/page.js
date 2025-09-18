'use client';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

const projects = [
{
  title: "AyuTrace",
  tech: "Next.js / Tailwind / Solidity / Ether.js / NextAuth / MongoDB",
  desc: "Blockchain-powered traceability system ensuring secure, transparent, and tamper-proof tracking of products from origin to end-user.",
  img: "/AyuTrace.png",
  live: "https://ethicons.vercel.app",
  repo: "https://github.com/Nikunjmiglani/ethicons"
},

  {
    title: "Whabitr",
    tech: "Next.js / Tailwind CSS / MongoDB / Express.js / NextAuth ",
    desc: "A Daily Habit Tracker with Streak and calendar view up to 90 days, built using Next.js, Tailwind CSS and MongoDB.",
    img: "/SS.png",
    live: "https://whabitr.online/",
    repo: "https://github.com/Nikunjmiglani/habiter",
  },
  {
    title: "ArcArea",
    tech: "Next.js / Framer / Tailwind CSS / MongoDB / NextAuth / Sanity CMS",
    desc: "Marketplace for People to hire top vendors/Architects/interior designers and furniture manufacturers.",
    img: "/ArcArea.png",
    live: "https://arcarea.vercel.app/",
    repo: "https://github.com/Nikunjmiglani/Arcarea.git",
  },
 {
    title: "Miggla Website",
    tech: "Next.js / Sanity CMS / Tailwind CSS / Framer",
    desc: "Website for a interior design firm.",
    img: "/Miggla.png",
    live: "https://miggla.vercel.app/",
  },
   {
    title: "FNDP - Fake News Detector Project",
    tech: "Next.js / Python / Scikit-learn",
    desc: "An AI-powered Fake News Detection Platform that uses machine learning models to classify news articles as real or fake.",
    img: "/fndp.png",
    live: "https://fndp-frontend.vercel.app",
    repo: "https://github.com/Nikunjmiglani/FNDP-Frontend",
  },
   {
    title: "Kaira - Landing Page",
    tech: "Next.js / Framer / Tailwind CSS ",
    desc: "A modern e-commerce landing page designed for seamless shopping experiences with clean UI.",
    img: "/kaira.png",
    live: "https://landing-page-ecomm.vercel.app/",
    repo: "https://github.com/Nikunjmiglani/Landing-page-Ecomm",
  },
];

import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiC,
  SiPython,
  SiHtml5,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiOpenai,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

import Image from 'next/image';
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState } from "react";


const words = ["I’m", "Nikunj"];

export default function Home() {
  const [showWords, setShowWords] = useState([]);

  useEffect(() => {
    words.forEach((word, index) => {
      setTimeout(() => {
        setShowWords((prev) => [...prev, word]);
      }, index * 500);
    });
  }, []);

  const tools = [
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "CSS", icon: <SiCss3 color="#264de4" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    { name: "Python", icon: <SiPython color="#FFD43B" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#363636" /> },
    { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "AI", icon: <SiOpenai color="#03DAC6" /> },
    { name: "Express", icon: <SiExpress color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#FF6F00" /> },
  ];

  return (
    <main className="text-white">
      <div className="border-t border-gray-800 mx-6 mt-20 sm:mx-20"></div>

      <section className="flex flex-col mt-5 items-center gap-2">
        <div className="items-center">
          <Image
            src="/Nikunj.jpg"
            width={70}
            height={70}
            className="border rounded-full"
            alt="Nikunj"
          />
        </div>

        <div className="font-light opacity-65 font-mono text-xl flex items-center gap-3">
          {showWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {word}
            </motion.span>
          ))}

          {showWords.length === words.length && (
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
          )}
        </div>

        <div className="mt-5 max-w-3xl text-center px-4 space-y-4 text-gray-300">
          <div>
            <h2 className="text-xl font-mono text-white mb-1 font-light opacity-85">Who Am I?</h2>
            <p className="opacity-70">
               I&apos;m a developer from Delhi, India. A 2nd Year Student at SRM University. I enjoy programming and exploring technology. I&apos;m proficient in Full Stack Development and learning Cybersecurity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono text-white mb-1 opacity-85">What Drives Me</h2>
            <p className="opacity-70">
              I&apos;ve already delivered freelance projects and am currently diving deep into cybersecurity and development. I love combining practical experience with continuous learning.
            </p>
            <br />
            <p className="opacity-70">
              When not coding, I read Finance, listen to music, or go out.
            </p>
            <p className="opacity-70">
              I&apos;m <span className="text-white font-semibold">open to work</span>, freelance, or collaborate.
            </p>
          </div>

          <div className="flex mt-5 text-white justify-center items-center gap-3">
            <a
              href="/Nikunj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white rounded-full px-4 py-2 cursor-pointer hover:scale-110 transition-transform duration-200 font-mono opacity-80"
              download
            >
              Get Resume
            </a>

            <a
              href="mailto:niikkunjmiglani@gmail.com"
              className="border border-white rounded-full px-4 py-2 cursor-pointer hover:scale-110 transition-transform duration-200 font-mono opacity-80"
            >
              Connect!
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden">
        <h2 className="text-white text-xl font-mono mb-4 ml-5">Tools that I have used</h2>
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 w-max"
            style={{
              animation: "scroll-horizontal 20s linear infinite",
            }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-600 text-white rounded-full px-4 py-2 text-sm"
              >
                <span className="text-xl">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-15 px-4 text-white text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-mono mb-10">GitHub Activity</h2>

        <div className="w-full overflow-hidden">
          <div className="flex justify-center flex-wrap">
            <GitHubCalendar
              username="Nikunjmiglani"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              colorScheme="dark"
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          📢 This graph includes only <strong>public contributions</strong>.
        </p>
       
      </section>

      <section className="py-16 px-6">
        <h2 className="text-white text-3xl text-center font-mono mb-10">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className=" p-4 rounded-lg shadow-lg">
              <div className="relative w-full h-50 md:h-52 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.img}
                  alt={project.title}
                  layout="fill"
                  className="rounded-md"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-green-300 font-mono mt-1">{project.tech}</p>
              <p className="text-sm text-gray-400 mt-2">{project.desc}</p>

              <div className="flex items-center gap-4 mt-4 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <FaGithub /> Repo Url
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-between items-start px-6 md:px-10 py-10 gap-10 md:gap-20">
        <div className="text-white w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="font-mono text-3xl">Get In Touch</h1>
            <br />
            <p>
              If you have any inquiries, please feel free to reach out. <br />
              You can contact me via email at <br />
              <a href="mailto:niikkunjmiglani@gmail.com" className="underline">niikkunjmiglani@gmail.com</a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-mono text-xl">Follow me</h1>
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="https://github.com/Nikunjmiglani" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white/20 hover:bg-white hover:text-black transition"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/nikunjmiglani/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white/20 hover:bg-white hover:text-black transition"><FaLinkedinIn size={20} /></a>
              <a href="https://www.instagram.com/niikkunj_/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white/20 hover:bg-white hover:text-black transition"><FaInstagram size={20} /></a>
              <a href="https://x.com/NikunjMiglani28" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white/20 hover:bg-white hover:text-black transition"><FaXTwitter size={20} /></a>
              <a href="https://coff.ee/nikunjmiglani" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-white/20 hover:bg-white hover:text-black transition"><SiBuymeacoffee size={20} /></a>
            </div>
          </div>

          <div className="pt-4 text-sm">
            © 2025 Developed by Nikunj
          </div>
        </div>

        <div className="text-white w-full md:w-1/2">
          <form
            className="w-full space-y-4"
            action="https://formspree.io/f/mgvynjpo"
            method="POST"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="fullName" placeholder="Full Name" required className="flex-1 p-3 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="text" name="phone" placeholder="Phone No" className="flex-1 p-3 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>

            <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white" />

            <textarea name="message" placeholder="Message" rows="5" required className="w-full p-3 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"></textarea>

            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button type="submit" className="w-full bg-white text-black font-medium py-3 rounded-md hover:bg-gray-200 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
