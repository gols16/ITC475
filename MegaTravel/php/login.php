<!-- The page should check the credentials given in the form against a table in your database that stores usernames and passwords.
If the user gives the correct credentials, they are sent to the admin page.
If the user does not give the correct credentials, they should be shown an appropriate error message on the login page
-->
<!-- The page should check the credentials given in the form against a table in your database that stores usernames and passwords.
If the user gives the correct credentials, they are sent to the admin page.
If the user does not give the correct credentials, they should be shown an appropriate error message on the login page
-->
<?php
verifyAdmin();
$msg = '';
if(isset($_POST['username']) && isset($_POST['password'])) {
    if(checkCredentials()) {
        login();
    } else {
        $msg = 'Error- Username and password are incorrect.';
    }
}
function checkCredentials() {
    $conn = dbConnect();
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "SELECT * FROM account WHERE username ='$username' && password = '$password'";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result)) { return true; }
    return false;
}
function dbConnect() {
    $conn = new mysqli("localhost", "root", "", "megatravel");
    if (!$conn) { die("Connection failed: " . mysqli_connect_error()); }
    return $conn;
}
function login() {
    setcookie('admin', 1, time() + 86400, '/');
    header('Location:./admin.php');
    die;
}
function cookies() {
    if(isset($_COOKIE['admin']) && $_COOKIE['admin']==1) {
        header('Location:./admin.php');
        die;
    }
    return false;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mega Travel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Add CSS -->
    <div id = "welcomeDiv">
        <p id = "currentTime"></p>
        <p id="welcomeGreetingText"></p>
        <img id="welcomeIcon" src="aa.png" alt="Welcome Icon">
    </div>
    <!-- (header) mega travel logo img & light blue background-->
    <h1>
        <img src="site files/mega travel logo.png" alt=" mega travel logo" class="logo">
    </h1>
    <!-- Add CSS -->
    <!-- navigation between pages (home, about us, contact)-->
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutUs.html">About Us </a></li>
            <li><a href="contactAgent.html">Contact Agent</a></li>
        </ul>
    </nav>
<body>
    <h2>Log in</h2>
    <form action="login.php" method="POST">
        <?php
        if($msg) {
            echo '<div class="errorMsg">' . $msg . '</div>';
        }
        ?>
        <div>
            <label for="username">Username</label>
            <input name="username" type="text" maxlength="20">
        </div>
        <div>
            <label for="password">Password</label>
            <input name="password" type="password" maxlength="20">
        </div>
        <input id="submitBtn" type="submit">
    </form>
    <footer>
        <p>Copyright Protected. All rights reserved.</p>
        <p>MEGA TRAVELS</p>
        <p>mega@travels.com</p>
    </footer>
</body>
</html>


