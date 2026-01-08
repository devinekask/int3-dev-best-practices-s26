import { DotLottie } from '@lottiefiles/dotlottie-web';

const animation = new DotLottie({
  autoplay: true,
  loop: false,
  canvas: document.querySelector("#anim-bitmap"),
  src: "assets/gears-encoded.json",
});

animation.addEventListener('load', () => {
  console.log('Animation loaded');
  animation.setMarker('build');
});

animation.addEventListener('complete', () => {
  console.log('Animation segment complete');
  animation.setMarker('loop');
});