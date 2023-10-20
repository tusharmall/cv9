<?php
// Check if the form is submitted
if (isset($_POST["submit"])) {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Connect to the database (replace these with your actual database credentials)
    $db_host = "localhost";
    $db_user = "root";
    $db_password = "";
    $db_name = "tush";

    $conn = mysqli_connect($db_host, $db_user,$db_password,$db_name);

    // Check if the connection is successful
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Insert data into the database
    $sql = "INSERT INTO contact_form (name, email, number, subject, message) VALUES ('$name', '$email', '$number', '$subject', '$message')";

    if (mysqli_query($conn, $sql)) {
        // echo "Message sent successfully!";
        // Redirect to index.php
    //     header("Location: index.php");
    //     exit; // Ensure no further code execution after the redirect
    // } else {

        $to = "tusharmall1910@gmail.com";
        $subject = "New Contact Form Submission";
        $message_body = "Name: $name\nEmail: $email\nPhone Number: $number\nSubject: $subject\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $message_body, $headers)) {
            header("Location: index.php");
            exit;
        } else {
            echo "Error sending email.";
        }
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    


    // if (mysqli_query($conn, $sql)) {
    //     echo "Message sent successfully!";
    // } else {
    //     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    // }

    // Close the database connection
    mysqli_close($conn);
}
?>
