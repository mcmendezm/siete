import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Happly } from "@/components/sections/Happly";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Happly />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
