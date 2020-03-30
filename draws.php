<?php
    $existingDraws = array(
        "Danial", 
        "Danny", 
        '10,20,30,40,15,11'
    );

if (isset($_POST["draws"])) {
    $draw = $_POST["draws"];

    if(!empty($draw)) {
        foreach ($existingDraws as $existingDraw) {
            if (strpos($existingDraw, $draw) !== false) {
                echo $existingDraw;
                echo '<br>';
            }
        }
    }
}

?>