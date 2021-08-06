<?php
include 'header2.php';
?>
<?php
if($_SESSION['status']!="active")
{
header("location:login2.php");
}
else{ ?>

<!DOCTYPE html>
<html>
<head>
	<title>Home Page</title>
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body style="background-color:#A9A9A9;">
<div class="home_section">
<h4>Welcome <?php echo $_SESSION['user']['username']; ?></h4>
</div>
</body>
</html>
<?php  }
include 'footer.php';
?>