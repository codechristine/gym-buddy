<?php require_once('db-connection.php') ?>
<?php require_once('functions.php') ?>
<?php
    startup();
    set_exception_handler('error_handler');

    $output = file_get_contents('dummy-users-list.json');
    if(!empty($_GET['id'])){
        switch(is_numeric($_GET['id'])){
            case true:
                $whereClase = "WHERE `user`.`id` = {$_GET['id']}";
                break;
            case false:
                throw new Exception('id needs to be a number');
        }
    } else {
        $whereClase = "";
    }

    $query = "SELECT * FROM `user`";

    $result = mysqli_query($conn, $query);
    if(!$result){
        throw new Exception("Connection error---: ". mysqli_connect_error());
    }

    $output = [];
    $num_rows = mysqli_num_rows($result);
    if($num_rows === 0) throw new Exception("Invalid ID: " . $_GET['id']);

    while($row = mysqli_fetch_assoc($result)){
        array_push($output,$row);
    }

    $json_version = json_encode($output);
    print($json_version);