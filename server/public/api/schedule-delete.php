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

    if (mysqli_num_rows($checkResult) === 0 ){
        throw new Exception("Schedule Block DNE");
    } else {
        $queryDelete = "DELETE  FROM `schedule`
                          WHERE `schedule`.`day` = '$day'
                            AND `schedule`.`username` = '$username' 
                              AND `schedule`.`starttime` = '$starttime'
                                AND `schedule`.`endtime` = '$endtime'";

        $checkDelete = mysqli_query($conn,$queryDelete);
        if(!$checkDelete) throw new Exception("Delete Schedule Failed");
    }

?>