$(document).ready(function () {

    //* Para que funcione el nav tab
    $('#nav-tab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      });

    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON("http://localhost/CursoJQUERY-AJAX/empleados2.php", {"accion":"leer"},
            function (data) {
                // console.log(data);
                $.each(data, function (index, item) { 
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`
                        <li> ${item.nombre} -- ${item.puesto} -- ${item.edad}</li>
                    `);
                });
            });
    });

    $('#crearEmpleado').click(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();
        let edad=$('#edad').val();
        //* Se van a enviar los datos por POST */
        $.post("http://localhost/CursoJQUERY-AJAX/empleados2.php",
        {"accion":"insertar", "nombre":nombre, "puesto":puesto, "edad":edad },
        function(data){
            // * Borrar registros luego de haberlos insertado
            if(data === "1"){
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');
            } else if (data=== "0"){
                console.log("Hubo un error!");
            }
        });
    });
});