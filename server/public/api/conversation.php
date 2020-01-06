<?php

    require_once('functions.php');
    set_exception_handler('error_handler');
    require_once('db-connection.php');
    startup();

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            require_once('conversation-post.php');
            break;
        case 'GET':
            require_once('conversation-get.php');
            break;
    }

?>
