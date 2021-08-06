<?php

$servername="localhost";
$username="root";
$password="";
$dbname="payroll";

	error_reporting(E_ERROR | E_PARSE);
		
$conn = new mysqli($servername,$username,$password,$dbname);
?>