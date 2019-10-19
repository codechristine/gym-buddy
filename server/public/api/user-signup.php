<?php require('functions.php') ?>
<?php require_once('../db-connection.php') ?>
<?php

    $checkUserName = "killaNoel";
    $queryCheck = "SELECT * FROM `user-signup` WHERE `user-signup`.`user-name` = $checkUserName";
    $checkResult = mysqli_query($conn, $queryCheck);

    if(!$checkResult){
        throw new Exception("Connection Error ". mysqli_connect_error());
    }

    $output = [];
    $num_rows = mysqli_num_rows($checkResult);

    if($num_rows === 0 ) throw new Exception("Invalid");

    while($row = mysqli_fetch_assoc($checkResult)){
        array_push($output, $row);
    }

    $json_version = json_encode($output);
    print($json_version);





    // $insertQuery = "INSERT INTO `user-signup` (`user-name`,`first-name`,`last-name`,`age`)
    //             VALUES ('Aaaron', 'Noel', 'Carino', 26)";

    // $result = mysqli_query($conn, $insertQuery);

    // if (!$result){
    //     echo "Failed";
    // } else {
    //     echo "Success";
    // }







    // $signUpQuery = "SELECT * FROM `user-signup`";

    // $signUpResult = mysqli_query( $conn, $signUpQuery );

    // if(!$signUpResult){
    //     throw new Exception( 'Sign up failed ' );
    // }

    // $signUpData = [];
    // $num_rows = mysqli_num_rows($signUpResult);

    // if($num_rows === 0) throw new Exception("Invalid ID: " . $_GET['id']);

    // while($row = mysqli_fetch_assoc($signUpResult)){
    //     array_push($signUpData, $row);
    // }

    // $json_version = json_encode($signUpData);
    // print($json_version);
    
    // if(mysqli_num_rows($signUpResult) > 0){
    //     while($signUpRow = mysqli_fetch_assoc( $signUpResult)){
    //         $signUpData[] = $signUpRow;
    //     }
    // } else {
    //     throw new Exception("Invalid User ID: $id ")
    // }

    // $user = intval($signUpData[0]['id'])
?>