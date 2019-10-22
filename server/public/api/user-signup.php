<?php

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

    $signUpQuery = "INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `age`, `weightlifting`, `cardio`, `yoga`, `bodybuilding`, `swimming`, `photo`, `gym`) 
                    VALUES (NULL, '$user_name', '$first_name', '$last_name', '$age', '$weightlifting', '$cardio', '$yoga', '$bodybuilding', '$swimming', '$photo', '$gym')";

    $updatedQuery = "SELECT * FROM `user`";
    $updatedResult = mysqli_query($conn, $updatedQuery);
    $signUpResult = mysqli_query($conn, $signUpQuery);

    if(!$signUpResult) throw new Exception( 'Sign up failed ' );


    $signUpData = [];
    $num_rows = mysqli_num_rows($updatedResult);

    while($row = mysqli_fetch_assoc($updatedResult)){
        array_push($signUpData, $row);
    }

    $json_version = json_encode($signUpData);
    print($json_version);
    
?>