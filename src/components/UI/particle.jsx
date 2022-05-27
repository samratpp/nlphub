
import Particles, { ISourceOptions } from "react-tsparticles";

const ParticleJs = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80
          },
          size: {
            value: 3
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#8a202f"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        color: {
          value: "#000000"
        },
        line_linked: {
          color: {
            value: "#000000"
          }
        },

        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }}
    />
  );
};

export default ParticleJs;
