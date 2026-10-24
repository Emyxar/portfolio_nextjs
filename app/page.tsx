import { Navbar } from '../app/components/Navbar';
import { Hero } from '../app/components/Hero';
import { About } from '../app/components/About';
import { TechStack } from '../app/components/TechStack';
import { Experience } from '../app/components/Experience';
import { Projects } from '../app/components/Projects';
import { Skills } from '../app/components/Skills';
import { Contact } from '../app/components/Contact';
import { Footer } from '../app/components/Footer';
import { ScrollToTop } from '../app/components/ScrollToTop';
import { RevealProvider } from "./components/RevealProvider";

function App() {

  return (
    <div className="min-h-screen bg-ink-950">
      <RevealProvider />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
