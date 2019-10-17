<?php
    /*
    *   This file checks what method we are using.
    *   Depending on what the SERVER method reads,
    *   it will make a call to the specific file and
    *   perform the functions provided
    */
?>
<?php require('functions.php') ?>
<?php require_once('db-connection.php') ?>
<?php

    startup();
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            require_once('user-add.php');
            break;
        case 'GET':
            require_once('user-get.php');
            break;
    }

?>



<?php
    // $output = file_get_contents('dummy-users-list.json');
    // if(!empty($_GET['id'])){
    //     switch(is_numeric($_GET['id'])){
    //         case true:
    //             $whereClase = "WHERE `user`.`id` = {$_GET['id']}";
    //             break;
    //         case false:
    //             throw new Exception('id needs to be a number');
    //     }
    // } else {
    //     $whereClase = "";
    // }

    // $query = "SELECT * FROM `user`" . $whereClase;

    // $result = mysqli_query($conn, $query);
    // if(!$result){
    //     throw new Exception("Connection error---: ". mysqli_connect_error());
    // }

    // $output = [];
    // $num_rows = mysqli_num_rows($result);
    // if($num_rows === 0) throw new Exception("Invalid ID: " . $_GET['id']);

    // while($row = mysqli_fetch_assoc($result)){
    //     array_push($output,$row);
    // }

    // $json_version = json_encode($output);
    // print($json_version);

    ?>