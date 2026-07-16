const card = document.querySelector('.card');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Solo aplica el efecto si el mouse está sobre la tarjeta
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
