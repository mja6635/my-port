import Image from "next/image";
import AboutMe from "../components/about-me";

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 bg-background text-foreground">
      {/* GitHub Icon */}
      <a
        href="https://github.com/mja6635"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-foreground hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
        aria-label="GitHub Profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.05-.48.05-.48.8.06 1.22.83 1.22.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.68 7.68 0 012.01-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.14 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/matthew-atanasoff/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-16 text-foreground hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14C2.24 0 1 1.24 1 2.75v18.5C1 22.76 2.24 24 4 24h16c1.76 0 3-1.24 3-2.75V2.75C23 1.24 21.76 0 20 0zM8.09 20.45H4.58V9h3.51v11.45zM6.34 7.49c-1.13 0-2.06-.93-2.06-2.07s.93-2.07 2.06-2.07 2.06.93 2.06 2.07-.93 2.07-2.06 2.07zM20.45 20.45h-3.51v-5.42c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.52h-3.51V9h3.37v1.56h.05c.47-.89 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.41v6.28z" />
        </svg>
      </a>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Matt Atanasoff</h1>
      </section>


      <AboutMe/>


      {/* Projects Section */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 px-4">
            {/* Project Card */}
            <a
              href="https://github.com/mja6635/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[280px] max-w-sm bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:ring-2 hover:ring-zinc-400 dark:hover:ring-zinc-600 transition"
            >
              <Image
                src="/calculator-proj.png"
                alt="Calculator Project"
                width={300}
                height={200}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Calculator</h3>
                <p className="text-sm text-foreground/70 mt-2">
                  Created fully functioning calculator
                </p>
              </div>
            </a>

            {/* Duplicate more cards here */}
          </div>
        </div>
      </section>
    </main>
  );
}
