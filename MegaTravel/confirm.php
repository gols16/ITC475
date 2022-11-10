<!DOCTYPE html>
<html>

<body>
    <link rel="stylesheet" href="style.css"/>
    <script type="text/javascript" src="onsubmit.js"></script>
    <script src="onsubmit.js" defer></script>

    <h1>
        <img src="site files/mega travel logo.png" alt=" mega travel logo" class="logo"/>
    </h1>

    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutUs.html">About Us </a></li>
            <li><a href="contactAgent.html">Contact Agent</a></li>

        </ul>

    </nav>
/* new page called confirm.php that is shown to customers after they submit the travel reservation contact form
//All of the submitted information from the form should be populated on this page.
//you will add this data into a MySQL table.  You will use your existing confirmation.php script to take the form data and stores it into a MySQL table. You only need to create one table in MySQL to store your data.
*/

<h2>
    Thank you for submitting your travel agent contact request! Here is the information you submitted:
<h2>
        echo "<strong>Client Name: </strong>".$_POST["firstName"]." ".$_POST["lastName"]."<br>"."<br>";
            echo "<strong>Client Phone Number: </strong>" .$_POST["phoneNumber"]."<br>"."<br>";
            echo "<strong>Client Email: </strong>".$_POST["email"]."<br>"."<br>";
            echo "<strong>Number of Adults and Children traveling: </strong>".$_POST["travelers"]."<br>"."<br>";
            echo "<strong>Destination: </strong>".$_POST["destination"]. "<br>"."<br>";
            echo "<strong>Travel Dates: </strong>".$_POST["startDate"]. " through ". $_POST["endDate"]. "<br>"."<br>";


<!--Footer-->
 <footer>
        <p>Copyright Protected. All rights reserved.</p>
        <p>MEGA TRAVELS</p>
        <p>mega@travels.com</p>
    </footer>
    
    </body>
</html>

