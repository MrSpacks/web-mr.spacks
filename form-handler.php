<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required!";
        exit;
    }

    $to = "mr.spacks@seznam.cz";
    $subject = "Похоже есть работенка)";
    $body = "Имя: $name\nEmail: $email\nСообщение: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Messege sent successfully!";
    } else {
        echo "Error when sending a message.";
    }
}
?>