import Hero from "./sections/Hero";
import Cases from "./sections/Cases";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import About from "./sections/About";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Cases />
        <Team />
        <Testimonials />
      </main>
  );
}
