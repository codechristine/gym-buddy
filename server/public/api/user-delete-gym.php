<?php

  $rawdata = getBodyData();
  $gymtodelete = $rawdata["name"];
  $gymid = $rawdata["place_id"];
  $currentUser = $rawdata["username"];

    if(empty($gymid)){
      throw new Exception('nothing to delete');
    }

  $query = " UPDATE `user`
              SET `gymid` = '', `gymname` = ''
                WHERE `user`.`username` = '$currentUser' ";

  $result = mysqli_query($conn, $query);

  $userQuery = "SELECT * FROM `user` WHERE `username` = '$currentUser' ";

  $getResult = mysqli_query($conn, $userQuery);
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
