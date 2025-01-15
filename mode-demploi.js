function isMobile() {
  return window.matchMedia("(max-width: 360px)").matches;
}

var slideIndex = 1;

function initSlider() {
  if (isMobile()) {
      showSlides(slideIndex);
  }
}

function plusSlides(n) {
  if (isMobile()) {
      showSlides(slideIndex += n);
  }
}

function currentSlide(n) {
  if (isMobile()) {
      showSlides(slideIndex = n);
  }
}

function showSlides(n) {
  if (!isMobile()) return;

  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
  
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}

// Initialiser le slider et ajouter un écouteur pour les changements de taille d'écran
window.addEventListener('load', initSlider);
window.addEventListener('resize', initSlider);
