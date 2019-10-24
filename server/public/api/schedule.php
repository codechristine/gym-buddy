<?php

    require_once('functions.php');
    require_once('db-connection.php');
    startup();
    set_exception_handler('error_handler');

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