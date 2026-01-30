// Validación simple del formulario
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();
    const mensaje = this.mensaje.value.trim();
    
    if(nombre === '' || email === '' || mensaje === ''){
        alert('Por favor completa todos los campos.');
        return;
    }
    
    if(!validateEmail(email)){
        alert('Correo electrónico no válido.');
        return;
    }
    
    alert('Gracias por contactarnos, pronto nos comunicaremos contigo.');
    this.reset();
});

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Slider automático testimonios
const slider = document.querySelector('.slider');
let isDown = false, startX, scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll testimonial cada 5s
setInterval(() => {
    if(slider) {
        if(slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth){
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += slider.offsetWidth;
        }
    }
}, 5000);