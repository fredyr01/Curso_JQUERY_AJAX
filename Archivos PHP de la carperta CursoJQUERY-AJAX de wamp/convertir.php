<?php

    // * Siguiente linea es para cualquier conexión via AJAX pueda ser atendida por el servidor
    header('Access-Control-Allow-Origin: *');

    if($_REQUEST['operacion'] == 'may'){
        echo strtoupper($_REQUEST['texto']);
    } else if ($_REQUEST['operacion'] == 'min'){
        echo strtolower($_REQUEST['texto']);
    } else {
        echo $_REQUEST['texto'];
    }



?>