import Hero from "./sections/Hero";
import Cases from "./sections/Cases";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import About from "./sections/About";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Results from "./sections/Results";

export default function Home() {
  return (
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Cases />
        <Results />
        <Team />
        <Testimonials />
        <Contact />
      </main>
  );
}
