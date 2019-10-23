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


?>
