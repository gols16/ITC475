//display current date and time

function welcomeTime(){
var display = new Date().toLocaleTimeString();
var text = welcomeGreetingText;
document.getElementById("currentTime").innerHTML=display;
document.getElementById("welcomeGreetingText").innerHTML=text;
}

let now = new Date(); 
let hours = now.getHours();
let welcomeGreetingText = "";
let welcomeIcon = document.getElementById('welcomeIcon');
let currentTime= document.getElementById('currentTime');

//visual icons
// display a Sun between 6:00am and 6:00pm
if(hours >= 6 && hours <= 18){
    welcomeIcon.src = "sunIcon.jpeg";

}
else {
    welcomeIcon.src = "moonIcon.png";
//  display a Moon between 6:01pm and 5:59am
}


// if statements 
// between 12am and 11:59am "Good Morning"
if (hours >=0 && hours <=11){
    welcomeGreetingText = " Good Morning!";
}

// between 12pm and 5:00pm "Good Afternoon"
if (hours >=12 && hours <= 17){
    welcomeGreetingText = " Good afternoon!";
}

// between 5:01pm and 11:59pm, "Good Evening" 
if (hours > 17 && hours <= 23){
    welcomeGreetingText = " Good night!";
}

setInterval (welcomeTime,1000);



