import '../index.css';
import { Skillcard } from "../components/skillcard";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import ts from '../assets/ts.png';
import react from '../assets/react.svg';
import mongo from '../assets/mongo.png';
import postgress from '../assets/postgress.png';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const Skills = ({ showParticles }: { showParticles: boolean }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <section id="skills" className="relative w-full min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-svg " />

      {/* Particles */}
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            "particles": {
              "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
              "color": { "value": "#dae4ed" },
              "shape": { "type": "circle" },
              "opacity": { "value": 0.5 },
              "size": { "value": 2, "random": true },
              "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
              "move": { "enable": true, "speed": 1, "out_mode": "bounce" }
            },
            "interactivity": {
              "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
              "modes": { "repulse": { "distance": 70, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
          }}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <div className="flex justify-center mb-10 w-full">
          <h2 className="text-white text-5xl pt-20 pb-3 font-bold border-b-4 border-purple-500">
            Skills
          </h2>
        </div>
        <div className="flex flex-wrap justify-center w-full max-w-6xl">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={html} name="HTML" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={css} name="CSS" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={js} name="JavaScript" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={nodejs} name="Node.js" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={express} name="Express" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={react} name="React.js" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={ts} name="TypeScript" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={mongo} name="MongoDB" /></div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"><Skillcard image={postgress} name="PostgreSQL" /></div>
        </div>
      </div>
    </section>
  );
};
