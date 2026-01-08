import { DotLottie } from '@lottiefiles/dotlottie-web';

new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector("#anim-all"),
  src: "assets/bodymoving-export.json",
});

new DotLottie({
  autoplay: true,
  loop: true,
  // mode: "reverse",
  marker: "box", // box, ball, hexa
  canvas: document.querySelector("#anim-box"),
  src: "assets/bodymoving-export.json",
});

new DotLottie({
  autoplay: true,
  loop: true,
  marker: "ball",
  canvas: document.querySelector("#anim-ball"),
  src: "assets/bodymoving-export.json",
});

new DotLottie({
  autoplay: true,
  loop: true,
  marker: "hex",
  canvas: document.querySelector("#anim-hexa"),
  src: "assets/bodymoving-export.json",
});

new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector("#anim-lasso"),
  src: "assets/lasso.json",
});

new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector("#anim-bitmap"),
  src: "assets/gears-encoded.json",
});