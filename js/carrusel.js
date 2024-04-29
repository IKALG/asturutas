let index = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function siguienteSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  mostrarSlide();
}

mostrarSlide();
setInterval(siguienteSlide, 3000); // Cambiar de slide cada 3 segundos