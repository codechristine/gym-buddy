<?php
require_once('functions.php');
set_exception_handler('error_handler');
require_once('db-connection.php');

$userName = $_POST["userName"];
$photo = $_FILES["photo"];
$directory = "../images/";
$imagePath = $directory.uniqid().$photo["name"];
$uploadOk = 1;
$imageUrl = substr($imagePath, 3);


if($photo["size"] > 5000000) {
  throw new Exception("File size is too big!");
}

$upload = move_uploaded_file($photo["tmp_name"], $imagePath);

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if ($upload) {
      $editQuery = " UPDATE `user`
                    SET `photo` = '$imageUrl'
                    WHERE `username` = '$userName' ";
      $editResult = mysqli_query($conn, $editQuery);

      if (!$editResult) {
        throw new Exception("Edit was not successful");
      } else {
        $query = "SELECT * FROM `user` WHERE `user`.`username` = '$userName' ";
        $getResult = mysqli_query($conn, $query);
        $getOutput = [];

        if ($getResult) {
          if (mysqli_num_rows($getResult) > 0) {
            while ($row = mysqli_fetch_assoc($getResult)) {
              $row["status"] = "Successfully Updated Photo!";
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
      throw new Exception('There was an error uploading your file');
    }
}




?>
