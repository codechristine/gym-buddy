<?php

    require_once('functions.php');
    require_once('db-connection.php');
    startup();
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            require_once('user-check.php');
            require_once('user-signup.php');
            // print $hello;
            break;
        case 'GET':
            require_once('user-get.php');
            break;
    }

?>
