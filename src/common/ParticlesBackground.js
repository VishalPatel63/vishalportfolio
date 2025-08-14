import React from 'react'
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

 const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fullScreen: { enable: true },
      background: {
        // image: "url('https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        
        position: "center",
        size: "cover",
       
      },
      particles: {
        number: { value: 80, density: { enable: true, value_area: 700 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 150, color: "#6E727F", opacity: 0.1, width: 0.5 },
        move: { enable: true, speed: 2, direction: "none", random: false, out_mode: "out" },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          push: { particles_nb: 2 },
        },
      },
      detectRetina: true,
    }}
  />
  )
};
export default ParticlesBackground;

