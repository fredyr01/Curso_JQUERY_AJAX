$(document).ready(function () {
    // $('#leerEmpleado').click(function (e) { 
    //     e.preventDefault();
    //     // * Se ubica el archivo json del cual se van a obtener los datos, junto a esto va una función callback
    //     // * Callback -- cuando termine de leer los datos me regresa algo, los datos
    //     $.get("empleados.json", function(data){
    //         console.log(data);
    //         // * Si quiero solo leer el nombre: console.log(data.nombre);
    //         $('#datosEmpleado').html(`
    //             Nombre: ${data.nombre} <br>
    //             Puesto: ${data.puesto} <br>
    //             Edad: ${data.edad} <br>
    //         `);
    //     })
    // });
    $('#leerArregloEmpleado').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('')
        $.get("empleados.json", function(data){
            console.log(data);
            $.each(data, function (index, item) { 
                 $('#listaEmpleados').html($('#listaEmpleados').html()+`
                    <li> ${item.nombre} -- ${item.puesto} -- ${item.edad} </li>
                 `);
            });
        });
    });
    $('#leerGetJson').click(function (e) { 
        e.preventDefault();
        // $.get("empleados.txt", function(data){  ///* Entrega un string
        //     // ? Convirtiendo a json
        //     data = JSON.parse(data);
        //     console.log(data);
        // });
        $.getJSON("empleados.json", function(data){ 
            console.log(data.empleados);
            $('#listaEmpleados').html('');
            $.each(data.empleados, function (index, item) { 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                   <li> ${item.nombre} -- ${item.puesto} -- ${item.edad} </li>
                `);
           });
        });
    });


    let empleados;
    $.getJSON("empleados.json", function(data){
        empleados = data.empleados; // * Solo se va a trabajar con el objeto de empleados
        $('#nombre').keyup(function (e) { 
            $('#listaEmpleados').html('');
            // let nombre = $('#nombre').val(); // ? Puede ser declarado igual como abajo
            let nombre = $(this).val();
            $.each(empleados, function (indexInArray, item) { 
                if(item.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1 ){  // * -1 es que no se parecen, más de 0 si se parece
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`
                   <li> ${item.nombre} -- ${item.puesto} -- ${item.edad} </li>
                `);
                }
            });

        });

     });
});