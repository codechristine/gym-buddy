<?php

  $rawdata = getBodyData();
  $place_name = $rawdata["name"];
  $place_id = $rawdata["placeId"];
  $lat = $rawdata["lat"];
  $lng = $rawdata["lng"];
  $gymname = str_replace("'","\'", $place_name);

  $query = " SELECT * FROM `gyms` WHERE `gyms`.`placeid` = '$place_id' ";
  $gymQuery = " INSERT INTO `gyms` (`id`, `name`, `placeid`, `lat`, `lng`)
                VALUES (NULL, '$gymname', '$place_id', '$lat', '$lng') ";

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
