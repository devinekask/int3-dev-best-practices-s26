/**
 * Naive approach
 * We don't preload the images, and adjust the src attribute
 * Make sure to test with network throttling in your devtools
 */
import gsap, { SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const appleImagePaths = new Array(13).fill(0).map((_, i) => {
  const index = `${i + 1}`.padStart(3, "0");
  return `./images/apple-webp-sequence/apple_${index}.webp`;
});

console.log(appleImagePaths);

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
    step: 0
  };
  const $appleImage = document.querySelector('.apple__image');

  tl.to(apple, { step: appleImagePaths.length-1, duration: 5, ease: SteppedEase.config(appleImagePaths.length-1), onUpdate: () => {
    const imagePath = appleImagePaths[apple.step];
    $appleImage.src = imagePath;
  }})
};

init();