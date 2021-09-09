$(document).ready(function () {
    $('#boton').click(function (e) { 

        e.preventDefault();  // todo Evita que haga un envio de datos
        $('img').attr('src', 'imagen2.jpg');
    });

    $('#subcontenedor button:nth-child(1)').click(function (e) {  // todo --- Selecciona al primer botón
        e.preventDefault();
        $('img').attr('width', '200px');
    });

    $('#subcontenedor button:nth-child(2)').click(function (e) { // todo --- Selecciona al segundo botón
        e.preventDefault();
        let margen = $('img').css('margin-left');
        //alert(margen);
        // Se modifica el valor de margen que es 0px para que sea solo el número y se convierte a entero
        margen = parseInt(margen.replace('px', ''));
        margen = margen +30;
        $('img').css('margin-left', margen+'px');
    });

    $('#subcontenedor button:nth-child(3)').click(function (e) {  // todo --- Selecciona al tercer botón
        e.preventDefault();
        $('img').toggleClass('d-none');
    });

    $('#subcontenedor button:nth-child(4)').click(function (e) {  // todo --- Selecciona al 4 botón
        e.preventDefault();
        $('img').hide(300);

        // ? al hide se le puede pasar por parametro como el 300 tambien 'slow' o 'fast'
    });

    $('#subcontenedor button:nth-child(5)').click(function (e) {  // todo --- Selecciona al 5 botón
        e.preventDefault();
        $('img').show(300);

        // ? al show se le puede pasar por parametro como el 300 tambien 'slow' o 'fast'
    });

    $('#subcontenedor button:nth-child(6)').click(function (e) {  // todo --- Selecciona al 6 botón
        e.preventDefault();
        $('img').toggle(300);
    });

    $('#subcontenedor button:nth-child(7)').click(function (e) {  // todo --- Selecciona al 7 botón
        e.preventDefault();
        $('img').fadeIn(300);
    });

    $('#subcontenedor button:nth-child(8)').click(function (e) {  // todo --- Selecciona al 8 botón
        e.preventDefault();
        $('img').fadeOut(300);
    });

    $('#subcontenedor button:nth-child(9)').click(function (e) {  // todo --- Selecciona al 9 botón
        e.preventDefault();
        $('img').slideUp(300);
    });

    $('#subcontenedor button:nth-child(10)').click(function (e) {  // todo --- Selecciona al 10 botón
        e.preventDefault();
        $('img').slideDown(300);
    });

    $('#subcontenedor button:nth-child(11)').click(function (e) {  // todo --- Selecciona al 11 botón
        e.preventDefault();
        $('img').slideToggle(300);
    });

});