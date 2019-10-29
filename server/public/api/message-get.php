<?php

$userId = $_GET['userId'];

$query = "SELECT m.receiverid AS currentUserId, m.senderid as friendId, u.username, u.photo, GROUP_CONCAT(messageval) as totalMessage
          FROM `messages` as m LEFT JOIN (SELECT * FROM `user`) as u
          ON m.senderid = u.id
          WHERE m.receiverid = '$userId'
          GROUP BY senderid";

$getResult = mysqli_query($conn, $query);
$getOutput = [];

if ($getResult) {
  if (mysqli_num_rows($getResult) > 0) {
    while ($row = mysqli_fetch_assoc($getResult)) {
      $row['totalMessage'] = explode(',', $row['totalMessage']);
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
