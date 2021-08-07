<?php
    require("config.php");
    if(isset($_POST['insert']))
    {
        //Getting data from client
        $rn =$_POST['rno'];	
        $nm =$_POST['s_name'];
        $eng =$_POST['english'];
        $phy =$_POST['physics'];
        $chm =$_POST['chemistry'];
        $bio =$_POST['biology'];
        $maths=$_POST['maths'];
        $his =$_POST['history'];
        $eco =$_POST['economics'];
        $geo =$_POST['geography'];
        $mar =$_POST['marathi'];
        $hin =$_POST['hindi']; 
        
        //Creating database connection
        $conn=new mysqli($servername,$username,$password,$dbname);
        if($conn->connect_error)
	           header("location:Error Page.html");
        else
            {
               
            //Insert Query
		$qry="INSERT INTO studentresult (rno, s_name, english, physics, chemistry, biology, maths, history, economics, geography, marathi, hindi) VALUES ($rn,'$nm' ,'$eng', '$phy','$chm','$bio','$maths','$his','$eco','$geo','$mar','$hin')";
                //File moving to directory
                if($conn->query($qry)===true)
                {
	echo $conn->connect_error;
                    ?>
                    <script>
                        alert("Done");
	    window.location="Result.php";
                    </script>
                    <?php
                }
                else
                {
                    echo mysqli_error($conn);
                    ?>
                    <script>
                        alert("Salary Registration Unsuccesfull !!");
                        window.location.href="Result.php";
                    </script>
                    <?php
                }
            }
      
              
    }
?>