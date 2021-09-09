$(document).ready(function(){

    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');

    // ? APPEND --- Agrega elementos al final de alguna etiqueta

    $('#subcontenedor').append('<button type="button" class="btn btn-danger">Boton agregado con append</button>');

    // ? PREPEND --- Agrega elementos al principio

    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger">Boton agregado con prepend</button>');

    // * Trabajando con CSS

    // $('#boton').css('color', 'orange');
    // $('#boton').css('background-color', 'green');

    // * Estos dos anteriores atributos en CSS asignados, se pueden unir de la siguiente manera:

    $('#boton').css({'color':'orange', 'background-color':'green'});

    // ? REMOVE
    // * $('#subcontenedor').remove();

    // ? HIDE  --- agrega display:none, lo oculta
    // *$('#subcontenedor').hide();


    // todo --- Trabajar con atributos
    // $('img').attr('src', 'imagen2.jpg');
    // $('img').attr('width', '300px');

    $('img').attr({'src':'imagen2.jpg', 'width': '400px'});



});