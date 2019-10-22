<?php

    $user_name = $rawdata["username"];
    $first_name = $rawdata["firstname"];
    $last_name = $rawdata["lastname"];
    $age = $rawdata["age"];
    $weightlifting = $rawdata["weightlifting"];
    $cardio = $rawdata["cardio"];
    $yoga = $rawdata["yoga"];
    $bodybuilding = $rawdata["bodybuilding"];
    $swimming = $rawdata["swimming"];
    $photo = $rawdata["photo"];
    $gym = $rawdata["gym"];

    $signUpQuery = "INSERT INTO `user` (`username`, `firstname`, `lastname`, `age`, `weightlifting`, `cardio`, `yoga`, `bodybuilding`, `swimming`, `photo`, `gym`)
                    VALUES ('$user_name', '$first_name', '$last_name', '$age', '$weightlifting', '$cardio', '$yoga', '$bodybuilding', '$swimming', '$photo', '$gym')";

    $signUpResult = mysqli_query($conn, $signUpQuery);

    if(!$signUpResult) throw new Exception( 'Sign up failed');

    $output = [
        success => true
    ];

    $outputObj = json_encode($output);
    print($outputObj);

?>
