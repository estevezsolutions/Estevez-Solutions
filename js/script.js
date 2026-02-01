const links = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;
    links.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            links.forEach(l => l.classList.remove('activo'));
            link.classList.add('activo');
        }
    });
});