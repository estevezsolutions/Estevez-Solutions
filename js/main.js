// Formulario
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();
    const mensaje = this.mensaje.value.trim();
    
    if(nombre === '' || email === '' || mensaje === ''){
        alert('Por favor completa todos los campos.');
        return;
    }
    
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Correo electrónico no válido.');
        return;
    }
    
    alert('Gracias por contactarnos, pronto nos comunicaremos contigo.');
    this.reset();
});

// Carrusel de proyectos
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
function showSlide(index){
    slides.forEach(s => s.style.display = 'none');
    slides[index].style.display = 'block';
}
showSlide(currentSlide);

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});
document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Auto slider testimonios
const slider = document.querySelector('.slider');
let sliderInterval = setInterval(() => {
    if(slider){
        slider.scrollLeft += slider.offsetWidth;
        if(slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth){
            slider.scrollLeft = 0;
        }
    }
}, 5000);