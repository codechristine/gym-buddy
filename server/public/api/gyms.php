<?php

  require_once('functions.php');
  require_once('db-connection.php');
  startup();
  set_error_handler('error_handler');

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      require_once('gyms-add.php');
      break;
    case 'GET':
      require_once('gyms-get.php');
        break;
}
