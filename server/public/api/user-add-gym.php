<?php
    $rawdata = getBodyData();
    $gymtoadd = $rawdata["name"];
    $gymid = $rawdata["place_id"];
    $currentUser = $rawdata["username"];

    echo json_encode($rawdata);


    $query = "UPDATE `user`
                SET `gymid` = '$gymid', `gymname` = '$gymtoadd'
                    WHERE `user`.`username` = '$currentUser' ";

    $result = mysqli_query($conn, $query);

?>
