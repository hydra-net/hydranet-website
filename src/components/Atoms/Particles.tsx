import ParticlesVendor from 'react-tsparticles';
import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    // canvas is fixed by default and not changeable via config, so we put it on absolute
    function setCanvasAbsolute() {
      const canvas = document.querySelector(
        '#tsParticles canvas'
      ) as HTMLElement;
      if (canvas) {
        try {
          canvas.style.position = 'absolute';
        } catch (err) {
          // shit what can i do, let it be fixed then !
        }
      }
    }
    setCanvasAbsolute();
  }, []);
  return (
    <>
      <ParticlesVendor
        id={'tsParticles'}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#26B6D4',
            },
            shape: {
              type: 'polygon',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.4,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#26B6D4',
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Particles;
