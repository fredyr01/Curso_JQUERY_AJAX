<?php

    // * Siguiente linea es para cualquier conexión via AJAX pueda ser atendida por el servidor
    header('Access-Control-Allow-Origin: *');

    $servidor="localhost";
    $usuario="root";
    $password="";
    $bd="empleados";
    $mysqli= new mysqli($servidor, $usuario, $password, $bd);

        $arreglo=array();

        $consulta="SELECT id, nombre, puesto, edad FROM empleados";

        if($resultado = $mysqli->query($consulta)){
            while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
                $arreglo[] = $row;  //* Agrego los valores al arreglo
            }
            echo json_encode($arreglo);
        }

    $resultado->close();
    $mysqli->close();

