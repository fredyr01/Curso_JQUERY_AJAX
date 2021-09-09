$(document).ready(function () {
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        // * Se ubica el archivo json del cual se van a obtener los datos, junto a esto va una función callback
        // * Callback -- cuando termine de leer los datos me regresa algo, los datos
        $.get("empleados.json", function(data){
            console.log(data);
            // * Si quiero solo leer el nombre: console.log(data.nombre);
            $('#datosEmpleado').html(`
                Nombre: ${data.nombre} <br>
                Puesto: ${data.puesto} <br>
                Edad: ${data.edad} <br>
            `);
        })
    });
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
});