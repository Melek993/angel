const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const submenuLinks = document.querySelectorAll('.has-submenu > a');

// Toggle menú principal
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Toggle submenús en móviles
submenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle('open');
    }
  });
});