<?php
include '../config.php';
$message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if the email already exists in the database
    $sql_check = "SELECT * FROM users WHERE email = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    if ($result_check->num_rows > 0) {
        // Email already exists
        $message = "<div class='message error'>User already exists with this email.</div>";
    } else {
        // Proceed with inserting the new user
        $sql = "INSERT INTO users (full_name, email, phone, password) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $full_name, $email, $phone, $password);

        if ($stmt->execute()) {
            header("Location: login.php");
            exit();
        } else {
            $message = "<div class='message error'>Something went wrong. Please try again.</div>";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container">
    <h2>Sign Up</h2>
    <?php if (!empty($message)) echo $message; ?>
    <form method="POST">
        <input type="text" name="full_name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="phone" placeholder="Phone Number" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Sign Up">
    </form>
    <a href="login.php">Already have an account? Login</a>
</div>
</body>
</html>
