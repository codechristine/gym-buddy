<?php


$query = "SELECT * FROM `user` WHERE `user`.`username` = '$userName' ";

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
