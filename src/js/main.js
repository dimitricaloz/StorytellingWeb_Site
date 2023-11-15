import { gsap } from "gsap";

gsap.to(".slider-track", {
  x: "-75%",
});

// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: amplitudeX + "%",
//   ease: "sine.inOut",
// });
