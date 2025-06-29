<?php
include '../config.php'; 
$message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $new_password = password_hash($_POST['new_password'], PASSWORD_DEFAULT);

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $sql = "UPDATE users SET password = ? WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $new_password, $email);
        if ($stmt->execute()) {
            $message = "<div class='message success'>Password updated successfully. <a href='login.php'>Login</a></div>";
        } else {
            $message = "<div class='message error'>Failed to update password.</div>";
        }
    } else {
        $message = "<div class='message error'>No user found with this email.</div>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container">
    <h2>Forgot Password</h2>
    <?php if (!empty($message)) echo $message; ?>
    <form method="POST">
        <input type="email" name="email" placeholder="Your Email" required>
        <input type="password" name="new_password" placeholder="New Password" required>
        <input type="submit" value="Update Password">
    </form>
    <a href="login.php">Back to Login</a>
</div>
</body>
</html>
