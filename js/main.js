let slides = document.querySelectorAll('.carousel img');
let index = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);