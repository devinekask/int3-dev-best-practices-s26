/**
 * Show some progress in the preloader
 * Make sure to test with network throttling in your devtools
 */
import gsap, { SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/all";
import delay from "./utils/delay";
import loadImageAsync from "./utils/loadImageAsync";

gsap.registerPlugin(ScrollTrigger);

const appleImagePaths = new Array(13).fill(0).map((_, i) => {
  const index = `${i + 1}`.padStart(3, "0");
  return `./images/apple-webp-sequence/apple_${index}.webp`;
});

let appleImages = [];
let numImagesLoaded = 0;
const $preloaderPercentage = document.querySelector(".preloader__percentage");
const $preloaderVisual = document.querySelector(".preloader__visual");

const init = async () => {
  // preload the images
  $preloaderVisual.classList.add("preloader__visual--has-transition");
  onProgress();
  document.documentElement.classList.add("is-loading");
  document.querySelector("body").classList.add("overflow-y-hidden");
  appleImages = await Promise.all(
    appleImagePaths.map(async (path) => {
      const image = await loadImageAsync(path);
      numImagesLoaded++;
      onProgress();
      return image;
    })
  );
  preloadComplete();
};

const onProgress = () => {
  const relativeProgress = numImagesLoaded / appleImagePaths.length;
  const progressPercentage = Math.round(relativeProgress * 100);
  console.log(
    numImagesLoaded,
    appleImagePaths.length,
    relativeProgress,
    progressPercentage
  );
  $preloaderPercentage.textContent = `${progressPercentage}%`;
  $preloaderVisual.style.transform = `scale3d(1, ${relativeProgress}, 1)`;
};

const preloadComplete = async () => {
  await delay(350); // add some extra time for the preload visual css transition to finish
  document.querySelector("body").classList.remove("overflow-y-hidden");
  gsap.to(".preloader", {
    duration: 0.5,
    autoAlpha: 0,
    onComplete: () => {
      document.documentElement.classList.remove("is-loading");
    },
  });
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

  const $appleWrapper = document.querySelector(".apple__wrapper");

  tl.to(apple, {
    step: appleImagePaths.length - 1,
    ease: SteppedEase.config(appleImagePaths.length - 1),
    onUpdate: () => {
      const $image = appleImages[apple.step];
      $image.classList.add("apple__image");
      $appleWrapper.innerHTML = "";
      $appleWrapper.appendChild($image);
    },
  });
};

init();
