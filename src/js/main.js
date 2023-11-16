import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
// document.addEventListener("DOMContentLoaded", function () {
//   var buttons = [
//     document.getElementById("button-start"),
//     document.getElementById("button-one"),
//     document.getElementById("button-two"),
//     document.getElementById("button-three"),
//     document.getElementById("button-four"),
//     document.getElementById("button-five"),
//     document.getElementById("button-six"),
//     document.getElementById("button-seven"),
//     document.getElementById("button-heigt"),
//     document.getElementById("button-nine"),
//     document.getElementById("button-ten"),
//   ];

//   var sections = [
//     document.getElementById("page-one"),
//     document.getElementById("page-two"),
//     document.getElementById("page-three"),
//     document.getElementById("page-four"),
//     document.getElementById("page-five"),
//     document.getElementById("page-six"),
//     document.getElementById("page-seven"),
//     document.getElementById("page-height"),
//     document.getElementById("page-nine"),
//     document.getElementById("final-page"),
//   ];

//   buttons.forEach(function (button, index) {
//     button.addEventListener("click", function () {
//       sections[index].classList.remove("hidden");
//     });
//   });
// });

var buttons = document.querySelectorAll(".button");

buttons.forEach(function (button, index) {
  let section = button.getAttribute("data-section");
  if (section) {
    button.addEventListener("click", function () {
      document.querySelector(section).classList.remove("hidden");
      gsap.to("html", {
        duration: 1,
        scrollTo: {
          x: section,
        },
        ease: "power2.inOut",
      });
    });
  }
});
