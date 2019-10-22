<?php

    $rawdata = getBodyData();
    $user_name = $rawdata["username"];

    $query = "SELECT * FROM `user` WHERE `username` = '$user_name' ";

    $result = mysqli_query($conn, $query);
    $num_rows = mysqli_num_rows($result);

    if($num_rows !== 0) {
        throw new Exception("Username is Not Available!");
    }

?>
