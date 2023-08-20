<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "rabbanjaved52@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Construct the email body
    $emailBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Thank you for your message. We'll be in touch!";
    } else {
        echo "There was an error sending the email. Please try again later.";
    }
}
?>
