// Obtén el elemento con el id "toggle"
let toggleButton = document.getElementById("toggle");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function () {
    // Toggle de la clase "on" en el botón
    toggleButton.classList.toggle("on");

    // Obtén el elemento con el id "menu"
    let menu = document.getElementById("menu");

    // Alternar la visibilidad del menú con transición usando la clase
    menu.classList.toggle("visible");
});

// Obtén todos los elementos con la clase "itemMenuCelu"
let menuItems = document.querySelectorAll(".itemMenuCelu");

// Agrega un controlador de eventos a cada elemento de menú para cerrar el menú cuando se hace clic
menuItems.forEach(item => {
    item.addEventListener("click", function () {
        // Obtén el elemento con el id "menu"
        let menu = document.getElementById("menu");

        // Cierra el menú con transición
        menu.classList.remove("visible");

        // Asegúrate de quitar la clase "on" si es necesario
        if (toggleButton.classList.contains("on")) {
            toggleButton.classList.remove("on");
        }
    });
});

window.addEventListener('keydown', (event) => {
    let menu = document.getElementById('menu');
    if (event.code === 'Escape') {
        menu.classList.remove("visible");
        toggleButton.classList.remove("on")
    }
  });