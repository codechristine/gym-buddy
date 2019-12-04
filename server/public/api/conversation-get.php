<?php

$userId = $_GET['userId'];
$friendId = $_GET['friendId'];

$query = "SELECT * FROM `messages` WHERE `senderid` = '$userId' AND `receiverid` = '$friendId' OR `senderid` = '$friendId' AND `receiverid` = '$userId'";

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
    throw new Exception("Gym does not exist.");
  }
} else {
  throw new Exception("Query was not sucessful");
}







?>
