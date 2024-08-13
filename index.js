var hamvar = document.querySelector(".hambar");
var anchor = document.querySelectorAll(".anchor-links");
var span = document.querySelector(".navbar-anchor-span");
var href = document.querySelector(".href");
var line1 = document.querySelector(".line-1");
var line2 = document.querySelector(".line-2");
var line3 = document.querySelector(".line-3");
var line5 = document.querySelector(".line-4");
var line5 = document.querySelector(".line-5");
hamvar.addEventListener("click", hambarOpen);

function hambarOpen() {
  anchor.forEach(function (ancho) {
    if (ancho.classList.contains("hidden")) {
      ancho.classList.remove("hidden");
      ancho.classList.remove("href");
      ancho.classList.add("visible");
      hamvar.classList.add(".hambar");
      ancho.classList.add(".line");
    } else {
      ancho.classList.remove("visible");

      ancho.classList.add("hidden");
    }
  });
  line - 1;
}
