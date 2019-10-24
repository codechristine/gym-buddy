<?php
  require_once('functions.php');
  require_once('db-connection.php');
  startup();
  set_exception_handler('error_handler');

  $gymID = $_GET['placeId'];
  $userName = $_GET['userName'];

  $query = "SELECT * from `user` as u LEFT JOIN (SELECT receiver, sender FROM friends JOIN `user` WHERE sender = `user`.id  ) AS f ON f.receiver = u.id
            WHERE u.gymid='$gymID' AND u.`username` != '$userName' ";

  $getResult = mysqli_query($conn, $query);
  $getOutput = [];

  if ($getResult) {
    if (mysqli_num_rows($getResult) > 0) {
      while ($row = mysqli_fetch_assoc($getResult)) {
        $getOutput[] = $row;
      }
      $json_get = json_encode($getOutput);
      print($json_get);
    } else {
      throw new Exception("Username does not exist.");
    }
  } else {
    throw new Exception("Query was not sucessful");
  }



?>
