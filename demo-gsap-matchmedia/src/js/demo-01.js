import gsap from 'gsap';

const init = () => {
  const tl = gsap.timeline();
  tl.to(".box", {
    rotation: 360,
    duration: 2
  })
};

init();