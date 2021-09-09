$(document).ready(function () {

    //* Ejercicio trabajando con funciones callback

    $('form').submit(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();

        // * Ahora se envian los datos via POST

        $.post("http://localhost/CursoJQUERY-AJAX/convertir2.php", 
        {'nombre':nombre,'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').parent().removeClass('d-none');//todo| Res no tiene el d-none sino el div, se usa parent
                $('#res').html(data);
            }
        ).done(function(){  // todo| función callback DONE --- si todo sale bien
            $('#estado').html('Exito!');
            $('#estado').addClass('alert-success');
            $('#estado').removeClass('d-none');
        }).fail(function(){ // todo| función callback FAIL --- si hay un error
            $('#estado').html('Falló!');
            $('#estado').addClass('alert-danger');
            $('#estado').removeClass('d-none');
        }).always(function(){ // todo| función callback ALWAYS --- se ejecuta si está bien o hayan errores
            console.log("Finalizó");
        });
    });

});