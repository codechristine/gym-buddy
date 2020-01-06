<?php

    require_once('functions.php');
    set_exception_handler('error_handler');
    require_once('db-connection.php');
    startup();

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            require_once('schedule-add.php');
            break;
        case 'GET':
            require_once('schedule-get.php');
            break;
        case 'PATCH':
            require_once('schedule-update.php');
            break;
        case 'DELETE':
            require_once('schedule-delete.php');
            break;
    }



?>
