/**
 * Use the loaded image instances instead of the src attribute
 * Make sure to test with network throttling in your devtools
 */
import gsap, { SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/all";
import loadImageAsync from "./utils/loadImageAsync";

gsap.registerPlugin(ScrollTrigger);

const appleImagePaths = new Array(13).fill(0).map((_, i) => {
  const index = `${i + 1}`.padStart(3, "0");
  return `./images/apple-webp-sequence/apple_${index}.webp`;
});

let appleImages = [];

const init = async () => {
  // preload the images
  document.documentElement.classList.add('is-loading');
  document.querySelector('body').classList.add('overflow-y-hidden');
  appleImages = await Promise.all(appleImagePaths.map((path) => {
    return loadImageAsync(path);
  }));
  preloadComplete();
};

const preloadComplete = () => {
  document.querySelector('body').classList.remove('overflow-y-hidden');
  gsap.to('.preloader', { duration: 0.5, autoAlpha: 0, onComplete: () => {
    document.documentElement.classList.remove('is-loading');
  }});
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
  
  const $appleWrapper = document.querySelector('.apple__wrapper');

  tl.to(apple, { step: appleImagePaths.length-1, duration: 5, ease: SteppedEase.config(appleImagePaths.length-1), onUpdate: () => {
    const $image = appleImages[apple.step];
    $image.classList.add('apple__image');
    $appleWrapper.innerHTML = '';
    $appleWrapper.appendChild($image);
  }})
};

init();