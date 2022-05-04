<?php
    include "index.php";
    $database = new Database();

    $email = $_POST['email'];
    $password = $_POST['psw'];

    
    if(isset($email, $password))
    {
        $sql = "CALL user_id('$email', '$password', @_user_id);";
        $database->insertQuery($sql);
        $sql = "SELECT @_user_id;";
        $user_id = $database->selectQuery($sql);
        $user_id = (int)$user_id[0]["@_user_id"];
        echo $user_id;
    }
    else{
        echo "invalid credentials";
    }
?>