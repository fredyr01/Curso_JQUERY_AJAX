$(document).ready(function(){

    // ? Select normal con buscador
    //$('.chosen-select').chosen();

    // ? Muestra mensaje si no se encuentra el valor buscado
    //$('.chosen-select').chosen({no_results_text:"Ups! no hay nada que diga: "});

    // ? Me permite deshabilitar el buscador si hay menos que un número que yo decida
    //$('.chosen-select').chosen({disable_search_threshold:11});

    // ? Definir en el select multiple el maximo de opciones a escoger
    //$('.chosen-select').chosen({max_selected_options:3});

    // ? Mueve las opciones a escoger a la derecha
    //$('.chosen-select').chosen({rtl:true});

    // ? Para agregar diferentes funcionalidades - mas de una funcionalidad
    //$('.chosen-select').chosen({rtl:true, max_selected_options:3 });

    // ? Muestra en navegador el valor escogido
    $('.chosen-select').chosen().change(function(){
        //alert('Cambió');
        alert($(this).val())
    })


});