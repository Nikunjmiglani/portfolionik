'use client';

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
} from "react-icons/si";

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  const tools = [
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "CSS", icon: <SiCss3 color="#264de4" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    { name: "Python", icon: <SiPython color="#FFD43B" /> },
    { name: "Solidity", icon: <SiSolidity color="#363636" /> },
    { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Prisma", icon: <SiPrisma color="#0c344b" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "AI", icon: <SiOpenai color="#03DAC6" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" /> },
    { name: "Express", icon: <SiExpress color="#fff" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  ];

  return (
    <main className="text-white">
      <div className="border-t border-gray-800 mx-6 sm:mx-20"></div>

      <section className="flex flex-col items-center gap-2">
        <div className="mt-15 items-center">
          <Image
            src="/Nikunj.jpg"
            width={70}
            height={70}
            className="border rounded-full"
            alt="Nikunj"
          />
        </div>
        <div className="font-light opacity-65 font-mono hover:scale-110 transition-transform duration-200">
          {"I'm Nikunj 👋"}
        </div>

        {/* About Me Section */}
        <div className="mt-8 max-w-3xl text-center px-4 space-y-4 text-gray-300">
          <div>
            <h2 className="text-xl font-mono text-white mb-1 font-light opacity-85">About Me</h2>
            <p className="opacity-70">
              {"Hello! I'm a developer from Delhi, India. Currently a Sophomore at SRM University. I enjoy programming and exploring technology. I'm proficient in Full Stack Development and learning Cybersecurity."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono text-white mb-1 opacity-85">What I do?</h2>
            <p className="opacity-70">
              {"I've already delivered freelance projects and am currently diving deep into cybersecurity and development. I love combining practical experience with continuous learning—whether it's building web apps, securing systems, or experimenting with tech stacks."}
            </p>
            <br />
            <p className="opacity-70">
              {"When not coding, I read Finance, listen to music, or go out."}
            </p>
            <p className="opacity-70">
              {"I'm "}
              <span className="text-white font-semibold">open to work</span>
              {", freelance, or collaborate. "}
              <a href="#contact" className="text-cyan-400 hover:underline">Contact Me</a>.
            </p>
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

      <section className="mt-20 px-4 text-white text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>

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
    </main>
  );
}

