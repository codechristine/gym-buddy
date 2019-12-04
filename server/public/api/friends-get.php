<?php

$id = $_GET['id'];
if (!$id) {
  throw new Exception('Id is invalid!');
}


$query = "SELECT * FROM `friends` JOIN `user` ON `friends`.`receiver` = `user`.`id` WHERE `friends`.`sender` = $id";

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
