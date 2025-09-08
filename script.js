const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const submenuItems = document.querySelectorAll('.has-submenu > a');

// Toggle menú principal (hamburguesa)
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Toggle submenús en móviles
submenuItems.forEach(link => {
  link.addEventListener('click', (e) => {
    const parent = link.parentElement;

    // Solo en pantallas pequeñas
    if (window.innerWidth <= 768) {
      e.preventDefault();
      parent.classList.toggle('open');
    }
  });
});
