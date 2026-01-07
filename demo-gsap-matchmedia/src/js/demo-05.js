import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const mm = gsap.matchMedia();

  mm.add({
    isXs: "(max-width: 399px)",
    isMd: "(min-width: 400px)",
  }, (context) => {
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

    tl.to(".box", {
      scale: (conditions.isMd) ? 2 : 1,
      rotation: (conditions.isXs) ? -360 : 360,
      duration: 2
    });
  });
};

init();