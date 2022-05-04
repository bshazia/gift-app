<?php
    include "index.php";
    $database = new Database();

    //user_id from sessions
    $user_id = 2;
    //$user_id = $_POST['user_id'];
    $person_name = $_POST['person_name'];
    $gender_id = (int)$_POST['gender'];
    $dob = $_POST['dob']; // yyyy-mm-dd
    
    if(isset($user_id, $person_name, $gender_id, $dob))
    {
        $sql = "CALL Add_Person('$user_id', '$person_name', $gender_id, '$dob');";
        $database->insertQuery($sql);
        
            var_dump($user_id);
            var_dump($gender_id);
            var_dump($dob);
            var_dump($person_name);
            
    }
    else{
        echo "Oops something went wrong";
    }
?>