<?php

    $currentuser = $_GET["username"];

    $query = "SELECT DISTINCT `schedule`.`username` as user,`schedule`.`day` as week_day,
    (
        SELECT
        GROUP_CONCAT(DISTINCT `schedule`.`starttime`, ' ', `schedule`.`endtime` SEPARATOR ' ')
        FROM `schedule`
        WHERE `schedule`.`day` = week_day AND `schedule`.`username` = user
    ) as `schedule`
    FROM `schedule`
    WHERE `schedule`.`username` = '$currentuser'";

    $result = mysqli_query($conn, $query);

    $output = [
        "Sunday" => [],
        "Monday" => [],
        "Tuesday" => [],
        "Wednesday" => [],
        "Thursday" => [],
        "Friday" => [],
        "Saturday" => []
    ];

    while($row = mysqli_fetch_assoc($result)){
            $pizza = $row["schedule"];
            $pieces = array_map('intval', explode(' ', $pizza));
        switch($row["week_day"]){
            case $row["week_day"] === "Sunday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Monday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Tuesday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Wednesday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Thursday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Friday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
            case $row["week_day"] === "Saturday":
                $output[$row["week_day"]] = $pieces = array_map('intval', explode(' ', $pizza));
                break;
        }
    }

        $json_output = json_encode($output);
        print($json_output);
?>
