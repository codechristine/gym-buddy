<?php


    $rawdata = getBodyData();
    $currentuser = $rawdata["currentUser"];
    $receiver = $rawdata["receiver"];

    $queryCheck = "SELECT * FROM `friends`
                    WHERE `friends`.`sender` = '$currentuser'
                      AND `friends`.`receiver` = '$receiver' ";

    $check = mysqli_query($conn, $queryCheck);
    $row = mysqli_num_rows($check);

    if ($row === 0) {
        throw new Exception("no one to delete");
    } else {
        $queryDelete = "DELETE FROM `friends`
                          WHERE (`sender`,`receiver`)
                            IN (('$currentuser','$receiver'),('$receiver','$currentuser'))  ";

        $checkDelete = mysqli_query($conn, $queryDelete);
        if(!$checkDelete) throw new Exception("Delete buddy Failed");

        $output = [
                "success" => true,
                "status" => 'Gym Buddy Removed :('
            ];
            $json_output = json_encode($output);
            print($json_output);
    }
?>
