<?php


    $rawdata = getBodyData();
    $username = $rawdata["username"];
    $day = $rawdata["day"];
    $starttime = $rawdata["starttime"];
    $endtime = $rawdata["endtime"];

    $queryCheck = "SELECT * FROM `schedule`
                    WHERE `schedule`.`day` = '$day'
                        AND `schedule`.`username` = '$username' 
                          AND `schedule`.`starttime` = '$starttime'
                            AND `schedule`.`endtime` = '$endtime'";

    $checkResult = mysqli_query($conn, $queryCheck);
    $row = mysqli_num_rows($checkResult);


    if ($row === 0 ){
        throw new Exception("Schedule Block DNE");
    } else {
        // $queryDelete = "DELETE FROM `schedule`
        //                   WHERE (`username`, `day` ,`starttime` ,`endtime`)
        //                     IN ('$username','$day','$starttime','$endtime') ";
        $queryDelete = "DELETE  FROM `schedule`
                          WHERE `schedule`.`day` = '$day'
                            AND `schedule`.`username` = '$username' 
                              AND `schedule`.`starttime` = '$starttime'
                                AND `schedule`.`endtime` = '$endtime'";

        $checkDelete = mysqli_query($conn,$queryDelete);
        if(!$checkDelete) throw new Exception("Delete Schedule Failed");
        echo "delete successfull";
    }

    // echo $row;
    // $output = [];
    // while ($row = mysqli_fetch_assoc($checkResult)) {
    //     $output[] = $row;
    // }
    // $json_get = json_encode($output);
    // print($json_get);
?>