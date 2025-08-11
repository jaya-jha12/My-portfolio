import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = ({ showParticles }: { showParticles: boolean }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <section id="projects" className="relative h-full w-full ">
        <div className="absolute inset-0 -z-20 bg-[url('../backg.png')] bg-cover bg-center min-h-screen" />
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#dae4ed"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed":1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 71.79151743337344,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}
          className="absolute inset-0 -z-10"
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl text-white font-bold items-center pt-14 underline decoration-purple-950  underline-offset-15 py-7">Projects</div>
        <div className="flex flex-wrap justify-center w-full max-w-6xl z-10">
           <div className="w-1/3 p-4"><ProjectCard image={"./paytm.png"} title={"Paytm-Clone"} link="https://github.com/jaya-jha12/paytm-clone.git" tags={["React","MongoDB","Express","Node.js"]}/></div>
           <div className="w-1/3 p-4"><ProjectCard image={"./stripe.png"} title={"Payment-integration"} link="https://github.com/jaya-jha12/payment_backend.git" tags={["Express","Node.js","Stripe"]}/></div>
           <div className="w-1/3 p-4"><ProjectCard image={"./chatbot.png"} title={"Chatbot Frontend"} link="https://github.com/jaya-jha12/chatbot_frontend.git" tags={["Spline","React","Supabase","JavaScript"]}/></div>
        </div>
      </div>
    </section>
  );
};
