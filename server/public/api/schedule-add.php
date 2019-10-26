<?php

    $rawdata = getBodyData();
    $user_name = $rawdata["username"];
    $day = $rawdata["day"];
    $starttime = $rawdata["startTime"];
    $endtime = $rawdata["endTime"];

    // print($user_name);
    // print($day);
    // print($starttime);
    // print($endtime);

    $insertQuery = "INSERT INTO `schedule` (`id`,`username`,`day`,`starttime`,`endtime`)
                      VALUES (NULL, '$user_name','$day','$starttime','$endtime') ";

    $result = mysqli_query($conn, $insertQuery);

    if(!$result){
        throw new Exception( 'schedule add failed' );
    } else {
        $output = [
            "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
    }

?>
