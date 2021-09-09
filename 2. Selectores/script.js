$(document).ready(function(){

    // ! let varBoton = $('button').html();
    // ! console.log(varBoton);

    // ? Cambiando el nombre del botón desde la etiqueta html
    // $('button').html("Cambiado desde jquery");

    // ? Ahora desde la clase
    // $('.btn').html("Cambiado desde la clase");

    // ? Ahora desde el id
    //$('#boton').html("Cambiado desde el id");


    // ? Ahora, para cambiar el atributo especificamente

        $('#subcontenedor button').html("Cambiado solo el botón del subcontenedor");

    // ? Si queremos cambiar el valor al primer valor que encuentre entre varios del mismo
        $('button:first').html("Valor cambiado al primer botón");
        // * Si queremos que sea el ultimo, se cambia el first por last

});


// todo: Javascript desde cero  = Vainilla script
// todo: Lo anterior en el documento.ready se puede hacer tambien así:

// * document.querySelector('#boton').innerHTML="Cambiado desde vainilla script el id";





