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
});