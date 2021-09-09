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
                        <li> <i class="fas fa-user-edit"
                        data-id='${item.id}'
                        data-nombre='${item.nombre}'
                        data-puesto='${item.puesto}'
                        data-edad='${item.edad}'
                        > </i>
                        <i class="fas fa-user-minus" data-id='${item.id}'></i>
                        ${item.nombre} -- ${item.puesto} -- ${item.edad}</li>
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
                $('#lista-tab').click();
                $('#leerEmpleados').click();

            } else if (data=== "0"){
                console.log("Hubo un error!");
            }
        });
    });


    //* Se maneja asi, cuando son etiquetas que se crean de manera dinamica con js, se hace asi y no como .click();

    $(document).on('click', '.fa-user-edit', function(){
        //console.log($(this).data('id'));
        $('#crearEmpleado').addClass('d-none');
        $('#editarEmpleado').removeClass('d-none');
        $('#datos-tab').html('Editar');
        $('#datos-tab').click();

        $('#id').val($(this).data('id'));
        $('#nombre').val($(this).data('nombre'));
        $('#puesto').val($(this).data('puesto'));
        $('#edad').val($(this).data('edad'));
    });

    $('#editarEmpleado').click(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();
        let id = $('#id').val();

        $.post('http://localhost/CursoJQUERY-AJAX/empleados2.php',
        {"accion":"editar", "nombre":nombre, "puesto":puesto, "edad":edad, "id":id }, 
        function(data){
            if(data=='1'){

            }
        });
        
        $('#lista-tab').click();
        $('#leerEmpleados').click();

        $('#crearEmpleado').removeClass('d-none');
        $('#editarEmpleado').addClass('d-none');
        $('#datos-tab').html('Crear');
    });

    $(document).on('click', '.fa-user-minus', function(){
        let id=$(this).data('id');
        const linea = $(this).parent();
        //console.log(id);
        $.post("http://localhost/CursoJQUERY-AJAX/empleados2.php", 
            {"accion":"borrar", "id":id},
            function (data) {
                //console.log(data);
                linea.remove();
            });
    });
});