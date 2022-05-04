<?php
    include "index.php";
    $database = new Database();

    //person_id from sessions
    $person_id = $_POST['person_id'];
    $preference_id = $_POST['preference_id'];


    
    if(isset($person_id, $preference_id))
    {
        $sql = "CALL Add_preferences('$person_id', '$preference_id')";
        $database->insertQuery($sql);
    }
    else{
        echo "Oops something went wrong";
    }
?>