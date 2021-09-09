$(document).ready(function () {

    let textoUI = $('#texto');
    textoUI.keyup(function (e) { 
        e.preventDefault();
        $('#saludo').html("Hola "+ textoUI.val());
    });

    $('form').submit(function (e) { 
        e.preventDefault();
    });
});