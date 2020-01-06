<?php

$bodyData = getBodyData();
$senderId = $bodyData['senderId'];
$receiverId = $bodyData['receiverId'];
$messageVal = $bodyData['messageVal'];
$filteredMessage = str_replace("'","\'", $messageVal);

$postQuery = "INSERT INTO `messages` (`id`, `senderid`, `receiverid`, `messageval`)
                VALUES (NULL, '$senderId', '$receiverId', '$filteredMessage') ";

$postResult = mysqli_query($conn, $postQuery);

if(!$postResult){
        throw new Exception('Sending message failed');
      } else {
        $output = [
          "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
      }





?>
