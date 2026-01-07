import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const init = () => {
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
    rotation: 360,
    duration: 2
  })
};

init();