<?php

require_once('functions.php');
set_exception_handler('error_handler');
require_once('db-connection.php');
startup();

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        require_once('friends-post.php');
        break;
    case 'GET':
        require_once('friends-get.php');
        break;
    case 'DELETE':
        require_once('friends-delete.php');
        break;
}
?>
