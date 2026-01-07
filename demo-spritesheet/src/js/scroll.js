import gsap, { SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const appleNumCols = 5;
const appleNumRows = 4;
const appleStepPercentageX = 1 / appleNumCols;
const appleStepPercentageY = 1 / appleNumRows;
const applePositions = [
  { x: 0, y: 0 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 0, y: 3 },
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
];

const init = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-with-apple",
      scrub: true,
      markers: true,
      pin: ".apple",
    },
  });

  const apple = {
    step: 0,
  };
  const $appleImage = document.querySelector(".apple__image");

  tl.to(apple, {
    step: applePositions.length - 1,

    ease: SteppedEase.config(applePositions.length - 1),
    onUpdate: () => {
      console.log(apple.step);
      const applePosition = applePositions[apple.step];
      $appleImage.style.transform = `translate(${
        -100 * applePosition.x * appleStepPercentageX
      }%, ${-100 * applePosition.y * appleStepPercentageY}%)`;
    },
  });
};

init();
