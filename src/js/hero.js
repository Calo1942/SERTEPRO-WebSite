const elementoMovible = document.getElementById('circle-interaction-container');

elementoMovible.style.transition = 'left 2s ease-out, top 0.1s ease-out'; // Ajusta la duración y la función de temporización

document.addEventListener('mousemove', (event) => {
elementoMovible.style.left = (event.clientX - 950) + 'px';
});

/*
const contenedor = document.getElementById('description');
const elementoMovible = document.getElementById('circle-interaction-container');

document.addEventListener('mousemove', (event) => {
    const contenedorRect = contenedor.getBoundingClientRect();
    const elementoRect = elementoMovible.getBoundingClientRect();
    
    let x = event.clientX - contenedorRect.left;
    
    // Limitar las posiciones dentro del contenedor
    x = Math.max(0, Math.min(x, contenedorRect.width - elementoRect.width));
    
    elementoMovible.style.left = x + 'px';
});
*/