document.addEventListener('DOMContentLoaded', () => {
  // Menú responsive
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => nav.classList.toggle('show'));

  // Animación cards al hacer scroll
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