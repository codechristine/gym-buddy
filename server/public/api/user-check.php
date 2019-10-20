<?php 
    // require_once('user.php');
    // $userToAdd = 'killaNoel';

    $query = "SELECT * FROM `user-signup` WHERE `user-name` = '$userToAdd' ";

    $result = mysqli_query($conn, $query);

    $output = [];
    $num_rows = mysqli_num_rows($result);

    if($num_rows === 0) throw new Exception("Invalid");

    while($row = mysqli_fetch_assoc($result)){
        array_push($output,$row);
    }

    $json_version = json_encode($output);
    print($json_version);

?>