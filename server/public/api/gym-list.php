<?php
  require_once('functions.php');
  set_exception_handler('error_handler');
  require_once('db-connection.php');
  startup();

  $gymID = $_GET['placeId'];
  $userName = $_GET['userName'];
  $andClause = '';
  if (!(empty($_GET['category'])) && !empty($_GET['value'])) {
    $category = $_GET['category'];
    $value = $_GET['value'];
    $andClause = "AND u.`$category` = '$value' ";
  }

  $query = "SELECT * from `user` as u LEFT JOIN (SELECT sender, GROUP_CONCAT(receiver) as friends FROM `friends` GROUP BY sender) AS f ON f.sender = u.id
            WHERE u.gymid='$gymID' AND u.`username` != '$userName' $andClause ";

  $getResult = mysqli_query($conn, $query);
  $getOutput = [];

  if ($getResult) {
    if (mysqli_num_rows($getResult) > 0) {
      while ($row = mysqli_fetch_assoc($getResult)) {
        $row['friends'] = explode(',', $row['friends']);
        $getOutput[] = $row;
      }
      $json_get = json_encode($getOutput);
      print($json_get);
    } else {
      throw new Exception("Username does not exist.");
    }
  } else {
    throw new Exception("Query was not sucessful");
  }



?>
