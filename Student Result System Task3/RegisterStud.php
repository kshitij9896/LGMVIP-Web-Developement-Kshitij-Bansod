<?php
    require("config.php");
    if(isset($_POST['insert']))
    {
        //Getting data from client
        $rn =$_POST['rollno'];	
        $nm=$_POST['name'];
        $eng = $_POST['english'];
        $phy=$_POST['physics'];
        
        //Creating database connection
        $conn=new mysqli($servername,$username,$password,$dbname);
        if($conn->connect_error)
	           header("location:Error Page.html");
        else
            {
               
            //Insert Query
		
            $qry="INSERT INTO studentresult (,Name, English,Physics) VALUES ($rn,'$nm' ,'$eng', '$phy', )";
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