<?php include("header.php");

 ?>
<html>
 <head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>LGM College || Official</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css">

</head>

 <body>
  <div class="display_result">
  <div class="container">

    <h3>All Students Results</h3>

   <br />
   <div id="result"></div>
  </div>
</div> 
</body>
</html>


<script>
$(document).ready(function(){

 load_data();

 function load_data(query)
 {
  $.ajax({
   url:"fetch2.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#result').html(data);
   }
  });
 }
 $('#search_text').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
});
 </script>
 <!-- </div> -->