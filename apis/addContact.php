<?php
header("Access-Control-Allow-Origin: *");
include("connection.php");

$name = $_POST["fullname"];
$email = $_POST["email"];
$phone = $_POST["number"];
$message = $_POST["message"];

// $query = "INSERT INTO contact_info(name, author) VALUE (" . $name .", ?)";

$query = $mysqli->prepare("INSERT INTO contact_info(name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssis", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>