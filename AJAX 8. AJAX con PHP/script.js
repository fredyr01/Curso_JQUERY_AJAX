$(document).ready(function () {
    $('#convertir').click(function (e) { 
        e.preventDefault();
        let operacion=$('#operacion').val();
        let texto=$('#texto').val();
        let datos={'operacion':operacion,'texto':texto};
        // *  $.get("http://localhost/CursoJQUERY-AJAX/convertir.php?operacion="+operacion+"&texto="+texto
        // ? Trabajando como objetos los parametros que se envian, quedaría asi:

        // * $.get("http://localhost/CursoJQUERY-AJAX/convertir.php", {'operacion':operacion,'texto':texto},

        // todo -- Que se podría simplificar sacando el {'operacion':operacion,'texto':texto} en una variable
        $.get("http://localhost/CursoJQUERY-AJAX/convertir.php",datos,
        function(data){
            console.log(data);
            $('#listaPalabra').html(data);
        });
    });
});