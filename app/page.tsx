import Contact from "@/components/sections/Contact";
import Github from "@/components/sections/Github";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
       <Github />
       <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
