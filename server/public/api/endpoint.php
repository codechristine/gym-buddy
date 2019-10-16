<?php

require_once('db-connection.php');

set_exception_handler('handleErrors');

function handleErrors( $error ){
    print('customError: ' . $error ->getMessage());
    exit();
}

$query = "SELECT * FROM `user`";
$result = mysqli_query( $conn , $query);

if (!$result){
    throw new Exception('error in query' . mysqli_error($conn));
    print("QUERY ERROR ..." . mysqli_error($result));
    exit();
}

$data = [];

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}

$outputJson = json_encode($data);
print($outputJson);
?>