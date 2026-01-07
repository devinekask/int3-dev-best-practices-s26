import { DotLottie } from '@lottiefiles/dotlottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const player = new DotLottie({
  canvas: document.querySelector("#anim"),
  src: "assets/lottie-demo.json",
});

gsap.to(player.canvas, {
  scrollTrigger: {
    trigger: player.canvas,
    start: 'top top',
    end: '+=1000',
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      player.setFrame(self.progress * (player.totalFrames-1));
    }
  },
});