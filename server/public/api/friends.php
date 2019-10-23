<?php

require_once('functions.php');
require_once('db-connection.php');

startup();
set_exception_handler('error_handler');

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