// Seleccionamos el botón del menú, el menú y todos los enlaces del menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a');
const body = document.body;

// Al hacer clic en el botón de hamburguesa, alterna la clase active y no-scroll
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Alterna la clase para desactivar el desplazamiento
});

// Al hacer clic en cualquier enlace dentro del menú, cierra el menú y desactiva el desplazamiento
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
        body.classList.remove('no-scroll'); // Asegura que el desplazamiento esté habilitado después de cerrar el menú
    });
});
