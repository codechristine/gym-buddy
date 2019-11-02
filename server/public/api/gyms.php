<?php

  require_once('functions.php');
  set_error_handler('error_handler');
  require_once('db-connection.php');
  startup();

  switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
      require_once('gyms-add.php');
      break;
    case 'GET':
      require_once('gyms-get.php');
        break;
}
