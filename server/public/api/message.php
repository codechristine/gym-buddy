<?php

    require_once('functions.php');
    set_exception_handler('error_handler');
    require_once('db-connection.php');
    startup();

    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            require_once('message-get.php');
            break;
    }

?>
