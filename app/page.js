'use client';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Miggla Website",
    tech: "Next.js / Sanity CMS / Tailwind CSS / Framer",
    desc: "Official website made for a leading interior design firm in Delhi.",
    img: "/Miggla.png", 
    live: "https://www.miggla.com/",
    
  },
  {
    title: "Kaira Landing page",
    tech: "Next.js / Tailwind CSS ",
    desc: "Responsive E-comm Landing Page.",
    img: "/kaira.png",
    live: "https://landing-page-ecomm.vercel.app/",
    repo: "https://github.com/Nikunjmiglani/Landing-page-Ecomm.git",
  },
   {
    title: "Portfolio",
    tech: "Next.js / Framer / Tailwind CSS",
    desc: "Personal portfolio made using Next.js & Tailwind CSS.",
    img: "/pp.png",
    live: "https://nikcodes.vercel.app/",
    repo: "https://github.com/Nikunjmiglani/portfolionik.git",
  },
 {
    title: "Get Me A Chai",
    tech: "Next.js / MongoDb /Tailwind CSS / Sanity CMS",
    desc: "Crowd Funding Application made as a part of Course with some personal modifications.",
    img: "/getmeachai.png",
   
    repo: "https://github.com/Nikunjmiglani/Get-Me-A-Chai.git",
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
  SiSolidity,
  SiHtml5,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiFirebase,
  SiTensorflow,
  SiNginx,
  SiExpress,
  SiOpenai,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

import Image from 'next/image';
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState } from "react";

// eslint-disable-next-line react/no-unescaped-entities
const words = ["I'm", "Nikunj"];


export default function Home() {
  const [showWords, setShowWords] = useState([]);

  useEffect(() => {
    words.forEach((word, index) => {
      setTimeout(() => {
        setShowWords((prev) => [...prev, word]);
      }, index * 500); // word-by-word delay
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
      <div className="border-t border-gray-800 mx-6 sm:mx-20"></div>

      <section className="flex flex-col items-center gap-2">
        <div className="mt-10 items-center">
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
            <h2 className="text-xl font-mono text-white mb-1 font-light opacity-85">About Me</h2>
            <p className="opacity-70">
              Hello! I&apos;m a developer from Delhi, India. Currently a Sophomore at SRM University. I enjoy programming and exploring technology. I&apos;m proficient in Full Stack Development and learning Cybersecurity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono text-white mb-1 opacity-85">What I do?</h2>
            <p className="opacity-70">
              I&apos;ve already delivered freelance projects and am currently diving deep into cybersecurity and development. I love combining practical experience with continuous learning—whether it&apos;s building web apps, securing systems, or experimenting with tech stacks.
            </p>
            <br />
            <p className="opacity-70">
              When not coding, I read Finance, listen to music, or go out.
            </p>
            <p className="opacity-70">
              I&apos;m <span className="text-white font-semibold">open to work</span>, freelance, or collaborate.{" "}
            </p>
          </div>

        <div className="flex mt-5 text-white justify-center items-center gap-3">
  <a
    href="/nik.pdf"
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
    Contact Me
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
        <p className="text-sm text-gray-400">
          🔒 Total contributions in the last year (public + private): <span className="text-white font-semibold">200</span>
        </p>
      </section>

    <section className="py-16 px-6">
  <h2 className="text-white text-3xl text-center font-mono mb-10">Featured Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {projects.map((project, index) => (
      <div key={index} className="bg-[#0f1117] p-4 rounded-lg shadow-lg">
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

        {/* Conditionally render links */}
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

    </main>
  );
}


