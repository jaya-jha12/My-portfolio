
import './index.css'
import { useEffect,useState} from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './sections/Home';
import { About } from './sections/AboutMe';
import { Skills } from './sections/Skills';
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

function App() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setShowParticles(inView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen  overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <section id="home" className="min-h-screen snap-start">
          <Home />
        </section>
        <section id="about" className="h-screen snap-start">
          <About />
        </section>
        <section id="skills" className="min-h-screen snap-start">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen snap-start">
          <Projects showParticles={showParticles} />
        </section>
        <section id="contact" className=" snap-start">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
