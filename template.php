<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: ../auth/login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ATS-Friendly Resume Generator</title>
  <link rel="stylesheet" href="style.css" />


</head>
<body>
<a href="../logout.php" class="logout-btn">Logout</a>

  <h1>ATS-Friendly Resume Generator</h1>
  <h2>Pick Your Resume Style</h2>
  <p>— S.K Resume Project —</p>

  <div class="container">
    <!-- Template 1 -->
    <a href="home/home.php" class="resume-box" style="background-image: url('image/template1.jpg');">

      <div class="template-label">Template 1</div>
      <div class="text-overlay">
        <h3>Create Resume</h3>
        <p>Clean and modern design</p>
      </div>
    </a>

    <!-- Template 2 -->
    <a href="home/home.php" class="resume-box" style="background-image: url('image/template1.jpg');">

      <div class="template-label">Template 2</div>
      <div class="text-overlay">
        <h3>Create Resume</h3>
        <p>Professional layout</p>
      </div>
    </a>
  </div>

</body>
</html>
