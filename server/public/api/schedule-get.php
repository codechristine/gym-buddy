<?php

    $rawdata = getBodyData();
    $username = $rawdata["username"];

    $queryCheck = "SELECT * FROM `schedule` WHERE `schedule`.`username` = '$username' ";

    $checkResult = mysqli_query($conn, $queryCheck);

    if(mysqli_num_rows($checkResult) === 0){
        throw new Exception("Cannot Find Schedule with given username");
    } else {
        $output = [];
        while ($row = mysqli_fetch_assoc($checkResult)){
            $output[] = $row;
        }
        $json_output = json_encode($output);
        print($json_output);
    }
    

?>