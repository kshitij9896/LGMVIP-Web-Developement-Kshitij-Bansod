<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<style>
body{
  background-color:#A9A9A9;
}
 table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: center;
  padding: 8px;
  border: 1px solid black;
  font-weight:Bold;
 
}
</style>
</head>
<body>
<div style="overflow-x:auto;">

  <dtable>
    <tr>
 
<?php

include('config.php');
//$connect = mysqli_connect("localhost", "root", "", "payroll");
$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($conn, $_POST["query"]);
 $query = "
  SELECT * FROM studentresult 
  WHERE name LIKE '%".$search."%'
  OR  english LIKE '%".$search."%'
  OR physics LIKE '%".$search."%' 
   ";
}
else
{
 $query = "SELECT * FROM studentresult ORDER BY rno ";
}
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0)
{
  
echo "<div class='tableDesign'>"; 
            echo "<table width='100%'>";
           echo "<div style='overflow-x:auto;'>";
$output = '
 
    <th>Roll No</th>
     <th>Name</th>
     <th>English</th>
     <th>Physics</th>			     
     <th>Chemistry</th>
     <th>Biology</th>
     <th>Mathematics</th>
     <th>History</th>
     <th>Economics</th>
     <th>Geography</th>
      <th>Marathi</th>
      <th>Hindi</th>	
	 										
        
         </tr>
 ';

?>            
 
    <tr>
<?php

 echo $output;
 while ($row1=$result->fetch_assoc()) {
  echo"<tr>"?>


  <?php
      
      echo "<td>"; echo $row1['rno']; echo "</td>";
      echo "<td>"; echo $row1['s_name']; echo "</td>";
      echo "<td>"; echo $row1['english']; echo "</td>";
      echo "<td>"; echo $row1['physics']; echo "</td>";
    echo "<td>"; echo $row1['chemistry']; echo "</td>";
      echo "<td>"; echo $row1['biology']; echo "</td>";
      echo "<td>"; echo $row1['maths']; echo "</td>";
      echo "<td>"; echo $row1['history']; echo "</td>";
      echo "<td>"; echo $row1['economics']; echo "</td>";
      echo "<td>"; echo $row1['geography']; echo "</td>";
      echo "<td>"; echo $row1['marathi']; echo "</td>";
      echo "<td>"; echo $row1['hindi']; echo "</td>";
      
      	
  
   echo "</tr>";
  }
echo"</div>";
}
else
{
 echo "<h1><center>Sorry, We Couldn't Find Any Results Matching ";
}

?>


</tr>
</table>
</div>
</tr>

</body>
</html>
