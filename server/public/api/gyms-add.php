<?php

  $rawdata = getBodyData();
  $place_name = $rawdata["name"];
  $place_id = $rawdata["place_id"];
  $lat = $rawdata["lat"];
  $lng = $rawdata["lng"];

  $query = " SELECT * FROM `gyms`";
  $gymQuery = " INSERT INTO `gyms` (`id`, `name`, `placeId`, `lat`, `lng`)
                VALUES (NULL, '$place_name', '$place_id', '$lat', '$lng') ";

  $result = mysqli_query($conn, $query);
  $num_rows = mysqli_num_rows($result);

    if($num_rows !== 0){
      throw new Exception("gymname not available!");
    } else {
      $gymresult = mysqli_query($conn, $gymQuery);

      if(!$gymresult){
        throw new Exception('gym result failed');
      } else {
        $output = [
          "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
      }
    }

?>
