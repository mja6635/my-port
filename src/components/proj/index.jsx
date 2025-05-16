import Image from "next/image";

export default function Proj() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <a
          href="https://github.com/mja6635/calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:ring-2 hover:ring-zinc-400 dark:hover:ring-zinc-600 transition transform hover:scale-[1.03]"
        >
          <Image
            src="/calculator-proj.png"
            alt="Calculator Project"
            width={300}
            height={200}
            className="object-contain w-full h-40 bg-black"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Calculator</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Created fully functioning calculator
            </p>
            <div className="mt-3 flex gap-2 text-xs text-zinc-400">
              <span className="bg-zinc-700 px-2 py-1 rounded-full">HTML</span>
              <span className="bg-zinc-700 px-2 py-1 rounded-full">CSS</span>
              <span className="bg-zinc-700 px-2 py-1 rounded-full">JavaScript</span>
            </div>
          </div>
        </a>

        {/* Project 2 & 3 Placeholders */}
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 flex items-center justify-center text-center animate-pulse"
          >
            <p className="text-foreground/70">Coming Soon</p>
          </div>
        ))}
      </div>
    </section>
  );
}
