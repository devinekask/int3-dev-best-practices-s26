import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isXs: "(max-width: 399px)",
      isMd: "(min-width: 400px)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { conditions } = context;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container--box",
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });

      if (!conditions.hasReducedMotion) {
        if (conditions.isMd) {
          gsap.to(".box", {
            scale: 2,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
          });
        }
      }

      tl.to(".box", {
        rotation: conditions.isXs ? -360 : 360,
        duration: 2,
      });
    }
  );
};

init();
