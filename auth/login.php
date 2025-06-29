<?php
session_start();
include '../config.php';  // ✅ correct relative path
$message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: ../template.php");  // or wherever you want to go after login
            exit();
        } else {
            $message = "<div class='message error'>Invalid password.</div>";
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
    <title>Login</title>
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
<div class="container">
    <h2>Login</h2>
    <?php if (!empty($message)) echo $message; ?>
    <form method="POST">
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Login">
    </form>
    <a href="signup.php">Don't have an account? Sign Up</a>
    <a href="forgot_password.php">Forgot Password?</a>
</div>
</body>
</html>
