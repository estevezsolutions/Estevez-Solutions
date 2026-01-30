document.addEventListener('DOMContentLoaded', () => {
  // Menú responsive
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => nav.classList.toggle('show'));

  // CARRUSEL
  const slides = document.querySelectorAll('.carousel-slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide,i) => slide.classList.toggle('active', i === index));
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000); // Cambia cada 5s

  // ANIMACIÓN CARDS
  const cards = document.querySelectorAll('.card');
  function showCards() {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom){
        card.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', showCards);
  showCards();
});