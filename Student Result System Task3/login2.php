<?php session_start(); ?>
<script>
function preback(){window.history.forward();}
setTimeout("preback()",0);
window.onunload=function(){null};
</script>

<!DOCTYPE html>
<html>
<head>
    
    <title>LGM College || Official</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css">

<style>
body,html {
    height: 100%;
}
body{
background-image:url('img/main1.jpeg');
            background-attachment:fixed;
            background-repeat:no-repeat;
            background-size:cover;
}
</style>
</head>
<body>

<div class="login_section">
<div class="container-fluid h-100">

    <div class="row justify-content-center align-items-center h-100">
        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3 jumbotron" >
            <h4 style="text-align:center;">Sign In</h4>
                 <form action="login2.php" name="login" method="post">

                <div class="form-group">
                    <input _ngcontent-c0="" name="username" class="form-control form-control-lg" placeholder="Username" type="text" required>
                </div>
                <div class="form-group">
                    <input name="password" class="form-control form-control-lg" placeholder="Password" type="password" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-info btn-lg btn-block" name="btn_login" id="btn_login">SIGN IN</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>

</body>
</html>

<?php 

try
{
    require("config.php");
    if (isset($_POST['btn_login'])) {
        $db=new mysqli($servername,$username,$password,$dbname);
        if($db->connect_error){
        echo "Database Connection Error".$db->connect_error;
            header("location:Error Page.php");
            }
                    else{
            login();
        }   
    }
    

}
catch(Exception $e)
{
    echo "Some Error Occured: ".$e->getMessage(); 
}



// LOGIN USER
function login(){
    global $db, $username, $errors;

    $username = ($_POST['username']);
    $password = ($_POST['password']);
    
    // attempt login if no errors on form
    if (count($errors) == 0)
   {
        $password = ($password);
                 
        $query = "SELECT * FROM login WHERE username='$username' AND password='$password' LIMIT 1";
        $results = mysqli_query($db, $query);

        if (mysqli_num_rows($results) == 1) { // user found
            // check if user is admin or user
            $_SESSION['status']="active";
            $logged_in_user = mysqli_fetch_assoc($results);
            if ($logged_in_user['user_type'] == 'admin') {  
                 header("location:home.php");         
                $_SESSION['user'] = $logged_in_user;
                        $_SESSION['success']  = "You are now logged in";                                        
                            }
                        else if ($logged_in_user['user_type'] == 'student') {
                header('location:home1.php');          
                $_SESSION['user'] = $logged_in_user;
                $_SESSION['success']  = "You are now logged in";
                
            }
        }
            
    }
}

function e($val){
    global $db;
global $db, $username, $errors;
    return mysqli_real_escape_string($db, trim($val));
}



?>
