<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

mail("maisy.millage@gmail.com",$name,$subject,$email,$msg);
?>