<?php
  require_once('functions.php');
  require_once('db-connection.php');
  startup();
  set_exception_handler('error_handler');

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
  $id = $rawdata["id"];
  $prevname = $rawdata["prevname"];
  $lowerCasePrevName = strtolower($prevname);
  $cleanUserName = str_replace("'","\'", $user_name);
  $lowerCaseUserName = strtolower($cleanUserName);
  $cleanFirstName = str_replace("'","\'", $first_name);
  $cleanLastName = str_replace("'","\'", $last_name);

  $query = "SELECT * FROM `user` WHERE `username` = '$lowerCaseUserName' ";
  $editQuery = "UPDATE `user`
                  SET `username` = '$cleanUserName',
                      `firstname` = '$cleanFirstName',
                      `lastname` = '$cleanLastName',
                      `age` = '$age',
                      `weightlifting` = '$weightlifting',
                      `cardio` = '$cardio',
                      `yoga` = '$yoga',
                      `bodybuilding` = '$bodybuilding',
                      `swimming` = '$swimming'
                  WHERE `user`.`id` = '$id' ";
  $getQuery = "SELECT * FROM `user` WHERE `user`.`id` = '$id' ";

  $result = mysqli_query($conn, $query);
  $num_rows = mysqli_num_rows($result);
  $editResult = mysqli_query($conn, $editQuery);

  if ($lowerCasePrevName === $lowerCaseUserName) {
    if(!$editResult) {
      throw new Exception( 'Edit was not successful');
    } else {
        $getResult = mysqli_query($conn, $query);
        $getOutput = [];
        if ($getResult) {
          if (mysqli_num_rows($getResult) > 0) {
            while ($row = mysqli_fetch_assoc($getResult)) {
              $row["prevName"] = $prevname;
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
    }
  } else {
    if($num_rows !== 0) {
        $errorOutput = [
          "success" => false,
          "error" => "Username is Not Available!",
          "id" => $id,
          "userName" => $prevname
        ];
        $json_error = json_encode($errorOutput);
        print($json_error);
    } else {
        if(!$editResult) {
        throw new Exception('Edit was not successful');
        } else {
            $getResult = mysqli_query($conn, $query);
            $getOutput = [];
            if ($getResult) {
              if (mysqli_num_rows($getResult) > 0) {
                while ($row = mysqli_fetch_assoc($getResult)) {
                  $row["prevName"] = $prevname;
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
      }
    }
  }


?>
