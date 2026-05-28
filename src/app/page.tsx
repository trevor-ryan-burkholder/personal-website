import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Background } from "@/components/site/Background";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Background />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
