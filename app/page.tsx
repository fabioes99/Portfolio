import AboutSection from "@/components/main/AboutSection";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import EmailSection from "@/components/main/EmailSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <AboutSection />
        <Encryption />
        <Projects /> 
        <EmailSection />
      </div>
    </main>
  );
}