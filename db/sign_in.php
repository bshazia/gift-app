<?php
    include "index.php";
    $database = new Database();

    $username = $_POST['FullName'];
    $email = $_POST['email'];
    $password = $_POST['psw'];

    // check for phonenumber
    if(isset($username, $email, $password)){
        $sql = "CALL Create_Account('$email', '$username', '$password');";
        $database->insertQuery($sql);
    }
    else{
        echo "Problem with credentials";
    }
?>