$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();

        // * Ahora se envian los datos via POST

        $.post("http://localhost/CursoJQUERY-AJAX/convertir2.php", 
        {'nombre':nombre,'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').html(data);
            }
        );
    });

});