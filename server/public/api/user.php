<?php

    require_once('functions.php');
    require_once('db-connection.php');
    startup();
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            require_once('user-add.php');
            break;
        case 'GET':
            require_once('user-get.php');
            break;
        case 'PATCH':
            require_once('user-add-gym.php');
            break;
    }

?>
