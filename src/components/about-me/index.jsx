import Image from "next/image";
export default function AfterMe(){
    return (<section className="py-16 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <div className="w-48 h-48 relative">
          <Image
            src="/matt-atanasoff.png"
            alt="Matt Atanasoff"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-foreground/70">
            I'm a cybersecurity student passionate about solving real-world problems through code.
            I enjoy working on full-stack web apps, automation, and sharing security knowledge.
          </p>
        </div>
      </section>)
}
   