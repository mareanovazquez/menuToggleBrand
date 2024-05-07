window.addEventListener('scroll', function() {
    // Obtenemos la posición vertical actual del scroll
    let scrollTop = window.scrollY;

    // Obtenemos la altura total de la página
    let documentHeight = document.documentElement.scrollHeight;

    // Obtenemos la altura visible del navegador
    let windowHeight = window.innerHeight 

    // Calculamos el progreso del scroll como un porcentaje
    let scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Seleccionamos la barra que queremos manipular
    let bar = document.getElementById('loading-scroll');

    // Limitamos la anchura máxima de la barra al 90%
    let barWidth = Math.min(scrollProgress, 100);

    // Ajustamos la anchura de la barra
    bar.style.width = barWidth + '%';

});