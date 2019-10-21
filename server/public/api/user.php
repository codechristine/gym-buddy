<?php

require_once('functions.php');
require_once('db-connection.php');

startup();
set_exception_handler('error_handler');

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        // POST is used to add user to database
        //      [x] 1 - check if user exist
        //      [ ] 2 - if user DNE, query to add user to database
        //      [ ] 3 - if user user exist, THROW AN ERROR
        // require_once('user-add.php');    
        // require_once('user-get.php');
        $userToAdd = $_GET['user-name'];
        require_once('user-check.php');
        print("user.php - " . $num_rows);
        print('check 1');
        break;
    case 'GET':
        require_once('user-get.php');
        break;
}




?>
