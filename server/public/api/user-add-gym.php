<?php
    $rawdata = getBodyData();
    $gymtoadd = $rawdata["name"];
    $gymid = $rawdata["place_id"];
    $currentUser = $rawdata["username"];

    echo json_encode($rawdata);


    $query = "UPDATE `user` 
                SET `gymid` = '$gymtoadd', `gymname` = '$gymid' 
                    WHERE `user`.`username` = '$currentUser' ";

    $result = mysqli_query($conn, $query);

?>