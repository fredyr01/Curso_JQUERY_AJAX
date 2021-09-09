$(document).ready(function () {

    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON("http://localhost/CursoJQUERY-AJAX/empleados.php",
            function (data) {
                // console.log(data);
                $.each(data, function (index, item) { 
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`
                        <li> ${item.nombre} -- ${item.puesto} -- ${item.edad}</li>
                    `);
                });
            });
    });

});