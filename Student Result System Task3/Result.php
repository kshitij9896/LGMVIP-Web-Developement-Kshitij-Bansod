<?php include 'header.php'; 

if($_SESSION['status']!="active")
{
header("location:login2.php");
?><script>alert('You Must Login First...');</script>
<?php
}
?>

<html>
<head>
<script>

function back()
{
	window.location="Result.php";
}

function gotopage()
{
	window.location="resultdisplay.php";
}
</script>
<title>LGM College || Official </title>


<style>
h5{
text-align:center;
font-weight:bold;
font-size:20px;
color:black;
font-family:"Times New Roman";
}
body{
background-image:url("img/demo.JPG");
background-attachment:fixed;
background-repeat:no-repeat;
background-size:cover;
}
label{
font-weight:bold;
font-family:'Times New Roman';
}

input[type=submit] {
  background-color: #008CBA;
  color: white;
  padding: 12px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: center;
}

input[type=submit]:hover {
  background-color: #45a049;
}


input[type=reset] {
  background-color: #008CBA;
  color: white;
  padding: 12px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: center;
}

input[type=reset]:hover {
  background-color: #45a049;
}

input[type=button] {
  background-color: #008CBA;
  color: white;
  padding: 12px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: center;
}

input[type=button]:hover {
  background-color: #45a049;
}


body{
background-image:url('img/.jpeg');
background-attachment:fixed;
background-repeat:no-repeat;
background-size:cover;
}

input[type=text],[type=number]
{
	font-family: 'Times New Roman';
}
</style>
</head>

<body>


<div clas="container-fluid">

   <form class="form-group"  form name="Empreg" method="post" action="RegisterStud.php" autocomplete="on">
	<h5>Student Result</h5>	
	  <table id='printtable'>

	<div class="row jumbotron">

		<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Roll No</label>
			<input type="text" name="rno" id="rno" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>



		         
		<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Name</label>
			<input type="text" name="s_name" id="s_name" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)">
		<div id="degvalue"></div>
		</div>


<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>English</label>
			<input type="text" name="english" id="english" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>


<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Physics</label>
			<input type="text" name="physics" id="physics" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Chesmistry</label>
			<input type="text" name="chemistry" id="chemistry" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Biology</label>
			<input type="text" name="biology" id="biology" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Maths</label>
			<input type="text" name="maths" id="maths" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>History</label>
			<input type="text" name="history" id="history" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Economics</label>
			<input type="text" name="economics" id="economics" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Geography</label>
			<input type="text" name="geography" id="geography" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Marathi</label>
			<input type="text" name="marathi" id="marathi" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>

<div class="col-md-4">
		<i class=" fa fa-address-card"></i> <label>Hindi</label>
			<input type="text" name="hindi" id="hindi" tabindex = 2 class="form-control" onkeyup="checkform()" placeholder="Enter Designation.." >
		<div id="degvalue"></div>
		</div>




		<div class="col-md-12" style="text-align : center; margin-top:25px;">
		<input type="submit" id="submit" name="insert"  value="Add Student Result" tabindex=19 class="btn btn-primary" tabindex=18> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

		</div>
</div>
</div>	
<hr width="50%">
</table>
</form>
</div>
</body>
</html>

 