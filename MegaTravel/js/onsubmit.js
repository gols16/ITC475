//New Zealand City Tours, Sports, Cycling, Museums, Boating
//Maldives, South Asia Museums, Sailing, Beach, Hiking, Boating
// Venice, Italy Museums, Theatre, Parks and Recreation, City Tours
//Cancun Parks and Recreation, Beaches, Boating, Snorkeling

// activities 

function selectActivity(destination){

    let nZDiv = document.getElementById("nZDiv");
    let mADiv = document.getElementById("mADiv");
    let vIDiv = document.getElementById("vIDiv");
    let cADiv = document.getElementById("cADiv");
    nZDiv.style.display='none';
    mADiv.style.display='none';
    vIDiv.style.display='none';
    cADiv.style.display='none';



    if(destination== "New Zealand"){
        nZDiv.style.display= 'block';

    }
    else if(destination == "Maldives, South Asia"){
        mADiv.style.display= 'block';
    }
     else if (destination == "Venice, Italy"){
        vIDiv.style.display= 'block';
     }
     else if (destination == "Cancun"){
        cADiv.style.display= 'block';
    }

}

// Validation

function onSubmit(){
    //Customer first name
    if(document.getElementById('firstName').value==""){
        alert ("Please enter a 'First Name' on the form")
        return false; 
    }
    //Customer last name
    else if(document.getElementById('lastName').value== ""){
        alert ("Please enter a 'Last Name' on the form")
        return false;
    }
    //Customer email address
    else if(document.getElementById('email').value == ""){
        alert ("Please enter a valid email address")
        return false; 
    }
    //Customer phone number
    else if(document.getElementById('phoneNumber').value == ""){
        alert ("Please enter a valid phone number")
        return false; 
    }    
    //How many children and adults are traveling
    else if(document.getElementById('travelers').value == ""){
        alert ("Please enter the amount of children and adults traveling")
        return false; 
    }  
    //The date they want to take a trip
    else if(document.getElementById('startDate').value == ""){
        alert ("Please enter the date you wish to start your trip")
        return false; 
    } 
    else if(document.getElementById('endDate').value == ""){
        alert ("Please enter the date you wish to end your trip")
        return false; 
    } 
    //The destination and activities they want to do (the component in our previous step)
    else if(document.getElementById('destination').value == ""){
        alert ("Please select an activity from a specific destination")
        return false; 
    } 
    



    




    







}

