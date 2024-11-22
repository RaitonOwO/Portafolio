// Detectar cuando los elementos están en la vista
function activarAnimacion() {
    const elementos = document.querySelectorAll('.animado');
    const trigger = window.innerHeight / 1.2;
  
    elementos.forEach((elemento) => {
      const distancia = elemento.getBoundingClientRect().top;
      if (distancia < trigger) {
        elemento.classList.add('visible');
      }
    });
  }
  
  // Aplicar animaciones al hacer scroll
  window.addEventListener('scroll', activarAnimacion);
  activarAnimacion();
  
  // Interacción del botón CV
  const btnCv = document.querySelector('.btn-cv');
  btnCv.addEventListener('click', () => {
    alert('¡Gracias por descargar mi CV!');
    btnCv.style.animation = 'shake 0.5s ease';
  });
  
  // Animación "shake" en el botón
  btnCv.addEventListener('animationend', () => {
    btnCv.style.animation = '';
  });
  
  // Animación personalizada "shake"
  const estilo = document.createElement('style');
  estilo.innerHTML = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
  `;
  document.head.appendChild(estilo);
  

////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
  
    projectItems.forEach(item => {
      item.addEventListener('click', () => {
        const link = item.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank'); 
        }
      });
    });
  });
  


// Detectar cuando los elementos están en la vista
function activarAnimacion() {
  const elementos = document.querySelectorAll('.animado');
  const trigger = window.innerHeight / 1.2;

  elementos.forEach((elemento) => {
      const distancia = elemento.getBoundingClientRect().top;
      if (distancia < trigger) {
          elemento.classList.add('visible');
      }
  });
}

// Aplicar animaciones al hacer scroll
window.addEventListener('scroll', activarAnimacion);
activarAnimacion();
