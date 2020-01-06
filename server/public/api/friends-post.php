<?php

    $rawdata = getBodyData();
    $currentuser = $rawdata["currentUser"];
    $receiver = $rawdata["receiver"];


    $queryCheck = "SELECT * FROM `friends`
                WHERE `friends`.`sender` = '$currentuser'
                AND `friends`.`receiver` = '$receiver' ";

    $check = mysqli_query($conn, $queryCheck);
    $row = mysqli_num_rows($check);

    if ($row > 0){
        throw new Exception("Send and Receiver already Buddies~");
    } else {
        $queryBuddy = "INSERT INTO `friends` (`sender`, `receiver`)
        VALUES ('$currentuser','$receiver'), ('$receiver','$currentuser')";

        $result = mysqli_query($conn, $queryBuddy);
        if (!$result) throw new Exception("sender adding receiver failed");
        $output = [
                "success" => true,
                "status" => 'Gym Buddy Added!'
            ];
            $json_output = json_encode($output);
            print($json_output);
    }

?>
