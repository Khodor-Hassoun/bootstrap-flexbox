<?php
    header("Access-Control-Allow-Origin: *");

    include("connection.php");

    $query = $mysqli->prepare("SELECT name, email FROM contact_info");
    $query->execute();
    $array = $query->get_result();
    
    $response = [];
    
    while($a = $array->fetch_assoc()){
        $response[] = $a;
    }
    
    $json = json_encode($response);
    echo $json;
    
?>