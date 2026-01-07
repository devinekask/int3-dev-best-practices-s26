import { DotLottie } from '@lottiefiles/dotlottie-web';

const player = new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector("#anim"),
  src: "assets/bodymoving-export.json",
  marker: "box"
});

const handleButtonClick = (event) => {
  const marker = event.target.getAttribute("data-marker");
  player.setMarker(marker);
};

Array.from(document.querySelectorAll("button[data-marker]")).forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});