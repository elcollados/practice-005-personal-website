
const slides = [
  "screenshot/Home.png",
  "screenshot/Cart.png",
  "screenshot/Profile.png",
  "screenshot/Admin-products.png",
  "screenshot/Admin-orders.png"
];
let current = 0;

const slideImg = document.getElementById("slide");
const counter = document.getElementById("counter");

function showSlide() {
  slideImg.src = slides[current];
  slideImg.alt = "Store screenshot " + (current + 1) + " of " + slides.length;
  counter.textContent = (current + 1) + " / " + slides.length;
}

document.getElementById("next").addEventListener("click", function() {
  current = (current + 1) % slides.length;
  showSlide();
});

document.getElementById("prev").addEventListener("click", function() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide();
});


const button = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme") || 
(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");


button.textContent = saved === "dark" ? "Light mode" : "Dark mode";

button.addEventListener("click", function () {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  button.textContent = next === "dark" ? "Light mode" : "Dark mode";
});