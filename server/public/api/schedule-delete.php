<?php


    $rawdata = getBodyData();
    $username = $rawdata["prevName"];

    $queryCheck = "SELECT * FROM `schedule`
                    WHERE `schedule`.`username` = '$username' ";


    $checkResult = mysqli_query($conn, $queryCheck);

    if (mysqli_num_rows($checkResult) === 0 ){
        throw new Exception("Schedule Block DNE");
    } else {
        $queryDelete = "DELETE  FROM `schedule`
                          WHERE `schedule`.`username` = '$username' ";

        $checkDelete = mysqli_query($conn,$queryDelete);
        if(!$checkDelete) {
          throw new Exception("Delete Schedule Failed");
        } else {
          $output = [
            "success" => true
          ];
          $json_output = json_encode($output);
          print($json_output);
        }
    }

?>
