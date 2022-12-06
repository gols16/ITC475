<!-- retrieves all forms stored in the MySQL database table.  You should loop through each stored form and display the information-->
<!-- retrieves all forms stored in the MySQL database table. 
 You should loop through each stored form and display the information-->
 <?php

 verifyAdmin();
 $conn = dbConnect();
$query = "SELECT * FROM client WHERE id=$id";
$result = mysqli_query($conn, $query, );

function dbConnect() {
    $conn = new mysqli("localhost", "root", "", "megatravel");
    if (!$conn) { die("Connection failed: " . mysqli_connect_error()); }
    return $conn;
}
function formatDate($date='') {
    if($date) {
        return date_format(date_create($date),"F j, Y");
    }
    return '';
}
function getDestination($destination='') {
    switch($destination) {
        case 'maldives':
            return 'Maldives, South Asia'; break;
        case 'newzealand':
            return 'New Zealand'; break;
        case 'venice':
            return 'Venice, Italy'; break;
        case 'cancun':
            return 'Cancun, Mexico'; break;
        default:
            return '';
    }
}
function cookies() {
    if(isset($_COOKIE['admin']) && $_COOKIE['admin']==1) {
        header('Location:./admin.php');
        die;
    }
    return false;
}
if (isset($_POST["next"]))
{
    global $a;
    global $conn;
    global $query;
    $a++;
    mysqli_query($conn, $query);
    echo $a;
    return $a;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mega Travel</title>
    <link rel="stylesheet" href="style.css">
    <script src="welcome.js" defer></script>

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

    <h2>Admin</h2>

<body>
<?php foreach($result as $row) { ?>
<div>              
    <div>
        <strong>Client name:</strong> <?php echo $row['name']; ?>
    </div>
    <div>
        <strong>Client phone number:</strong> <?php echo $row['phone']; ?>
    </div>
    <div>
        <strong>Client email:</strong> <?php echo $row['email']; ?>
    </div>
    <div>
        <strong>Number of adults:</strong> <?php echo $row['adults']; ?>
    </div>
    <div>
        <strong>Number of children:</strong> <?php echo $row['children']; ?>
    </div>
    <div>
        <strong>Destination:</strong> <?php echo getDestination($row['destination']); ?>
    </div>
    <div>
        <strong>Travel dates:</strong> <?php echo formatDate($row['startDATE']) . '&mdash;' . formatDate($row['endDATE']); ?>
    </div>
    <div>
        <strong>Interested activities:</strong> <?php echo $row['activities']; ?>
    </div>
</div>
<?php } ?>

  <footer>
        <p>Copyright Protected. All rights reserved.</p>
        <p>MEGA TRAVELS</p>
        <p>mega@travels.com</p>
    </footer>

</body>
</html>

