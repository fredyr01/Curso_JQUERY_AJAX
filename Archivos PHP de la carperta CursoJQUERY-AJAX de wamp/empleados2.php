<?php

    // * Siguiente linea es para cualquier conexión via AJAX pueda ser atendida por el servidor
    header('Access-Control-Allow-Origin: *');

    $servidor="localhost";
    $usuario="root";
    $password="";
    $bd="empleados";
    $mysqli= new mysqli($servidor, $usuario, $password, $bd);

    if($_REQUEST['accion'] == "leer") {
        $arreglo=array();

        $consulta="SELECT id, nombre, puesto, edad FROM empleados";

        if($resultado = $mysqli->query($consulta)){
            while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
                $arreglo[] = $row;  //* Agrego los valores al arreglo
            }
            echo json_encode($arreglo);
        }
        $resultado->close();
    } else if($_REQUEST['accion'] == "insertar"){
        $sql="INSERT INTO empleados (nombre, puesto, edad) VALUES ('".$_POST["nombre"]."', '".$_POST["puesto"]."', '".$_POST["edad"]."')";

        // todo : echo $sql;

        if($mysqli->query($sql) === TRUE){
            echo "1";
        } else {
            echo "0";
        }
    } else if($_REQUEST['accion'] == "editar"){
        $sql="UPDATE empleados set nombre='".$_POST["nombre"]."', puesto='".$_POST["puesto"]."', edad='".$_POST["edad"]."' WHERE id='".$_POST["id"]."' " ;

        // todo : echo $sql;

        if($mysqli->query($sql) === TRUE){
            echo "1";
        } else {
            echo "0";
        }
    }

    else if($_REQUEST['accion'] == "borrar"){
        
        $sql="DELETE FROM empleados WHERE id='".$_POST["id"]."' " ;

        // todo : echo $sql;

        if($mysqli->query($sql) === TRUE){
            echo "1";
        } else {
            echo "0";
        }
    }

    $mysqli->close();

