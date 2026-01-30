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