<?php

    $rawdata = getBodyData();
    $user_name = $rawdata["username"];
    $first_name = $rawdata["firstname"];
    $last_name = $rawdata["lastname"];
    $age = $rawdata["age"];
    $weightlifting = $rawdata["weightlifting"];
    $cardio = $rawdata["cardio"];
    $yoga = $rawdata["yoga"];
    $bodybuilding = $rawdata["bodybuilding"];
    $swimming = $rawdata["swimming"];
    $photo = '';
    $gymid = '';
    $gymname = '';

    $query = "SELECT * FROM `user` WHERE `username` = '$user_name' ";
    $signUpQuery = "INSERT INTO `user` (`id` ,`username`, `firstname`, `lastname`, `age`, `weightlifting`, `cardio`, `yoga`, `bodybuilding`, `swimming`, `photo`, `gymid`, `gymname`)
                    VALUES (NULL, '$user_name', '$first_name', '$last_name', '$age', '$weightlifting', '$cardio', '$yoga', '$bodybuilding', '$swimming', '$photo', '$gymid', '$gymname')";

    $result = mysqli_query($conn, $query);
    $num_rows = mysqli_num_rows($result);

    if($num_rows !== 0) {
        throw new Exception("Username is Not Available!");
    } else {
        $signUpResult = mysqli_query($conn, $signUpQuery);

        if(!$signUpResult) {
            throw new Exception( 'Sign up failed');
        } else {
            $output = [
                "success" => true
            ];
            $json_output = json_encode($output);
            print($json_output);
        }
    }

?>
