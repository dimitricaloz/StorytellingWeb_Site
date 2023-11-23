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
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          x: section,
        },
        ease: "power2.inOut",
      });
    });
  }
});

var elementOne = document.querySelector(".element-one");
var bubbleOne = document.querySelector(".buble-one");

elementOne.addEventListener("click", function () {
  bubbleOne.classList.toggle("is-visible");
});

var elementTwo = document.querySelector(".element-two");
var bubbleTwo = document.querySelector(".buble-two");

elementTwo.addEventListener("click", function () {
  bubbleTwo.classList.toggle("is-visible");
});

var elementFour = document.querySelector(".element-four");
var bubbleFour = document.querySelector(".buble-four");

elementFour.addEventListener("click", function () {
  bubbleFour.classList.toggle("is-visible");
});

var elementFive = document.querySelector(".element-five");
var bubbleFive = document.querySelector(".buble-five");

elementFive.addEventListener("click", function () {
  bubbleFive.classList.toggle("is-visible");
});

var elementSix = document.querySelector(".element-six");
var bubbleSix = document.querySelector(".buble-six");

elementSix.addEventListener("click", function () {
  bubbleSix.classList.toggle("is-visible");
});

var elementSeven = document.querySelector(".element-seven");
var bubbleSeven = document.querySelector(".buble-seven");

elementSeven.addEventListener("click", function () {
  bubbleSeven.classList.toggle("is-visible");
});

var elementEight = document.querySelector(".element-eight");
var bubbleEight = document.querySelector(".buble-eight");

elementEight.addEventListener("click", function () {
  bubbleEight.classList.toggle("is-visible");
});

var elementNine = document.querySelector(".element-nine");
var bubbleNine = document.querySelector(".buble-nine");

elementNine.addEventListener("click", function () {
  bubbleNine.classList.toggle("is-visible");
});

const ecranJumelles = document.querySelector(".ecran-jumelles");
const page5 = document.querySelector(".page-5");

page5.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calcul de la position du centre de la page-5
  const page5Rect = page5.getBoundingClientRect();
  const centerX = page5Rect.left + page5Rect.width / 2;
  const centerY = page5Rect.top + page5Rect.height / 2;

  // Calcul de la différence entre la position de la souris et le centre de la page-5
  const diffX = mouseX - centerX;
  const diffY = mouseY - centerY;

  // Mise à jour de la position du div ecran-jumelles
  ecranJumelles.style.transform = `translate(${diffX}px, ${diffY}px) scale(2)`;
});

// Réinitialisation de la position lorsque la souris quitte la page-5
page5.addEventListener("mouseleave", function () {
  ecranJumelles.style.transform = "translate(0, 0) scale(2)";
});
