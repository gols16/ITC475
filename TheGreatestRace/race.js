let luigiCurrentlySelected = false;
let marioCurrentlySelected = false;
let peachCurrentlySelected = false;
let yoshiCurrentlySelected = false;

let luigi = document.createElement("img"); 
let mario = document.createElement("img");
let peach = document.createElement("img");
let yoshi = document.createElement("img");

luigi.src = "luigi.png";
mario.src = "mario.png";
peach.src = "peach.png";
yoshi.src = "yoshi.png";


let luigicharacterSet = document.createElement("img"); 
let mariocharacterSet = document.createElement("img");
let peachcharacterSet = document.createElement("img");
let yoshicharacterSet = document.createElement("img");

luigicharacterSet.src = "luigi.png";
mariocharacterSet.src = "mario.png";
peachcharacterSet.src = "peach.png";
yoshicharacterSet.src = "yoshi.png";

let characterCounter = 0;

let characters = [];

let characterNumberOne = null;
let characterNumberTwo = null;
let movecharactersInterval;
let stopLight = document.getElementById("stoplight");
let winnerWrapper = document.getElementById("winnerWrapper");
let animate;
let previousMs = 0;
let winnerDBValue;
let timestamp;
let characterOne;
let characterTwo;

function addSelectedcharacter(character){

    switch(character){
        case "luigi":

            if(characterCounter == 2){
                if(luigiCurrentlySelected == true){
                    document.getElementById("luigicharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("luigicharacterSet").style.backgroundColor = "yellow";
                    luigiCurrentlySelected = false;
                    characterCounter--;
                }
            } else {
                if(luigiCurrentlySelected == false){
                    document.getElementById("luigicharacterSet").style.border = "solid 5px green";
                    document.getElementById("luigicharacterSet").style.backgroundColor = "#79E484";
                    luigiCurrentlySelected = true;
                    characterCounter++;
                }
                else {
                    document.getElementById("luigicharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("luigicharacterSet").style.backgroundColor = "yellow";
                    luigiCurrentlySelected = false;
                    characterCounter--;
                }
            }
            break;

        case "mario":

            if(characterCounter == 2){
                if(marioCurrentlySelected == true){
                    document.getElementById("mariocharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("mariocharacterSet").style.backgroundColor = "yellow";
                    marioCurrentlySelected = false;
                    characterCounter--;
                }
            } else {
                if(marioCurrentlySelected == false){
                    document.getElementById("mariocharacterSet").style.border = "solid 5px green";
                    document.getElementById("mariocharacterSet").style.backgroundColor = "#79E484";
                    marioCurrentlySelected = true;
                    characterCounter++;
                }
                else {
                    document.getElementById("mariocharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("mariocharacterSet").style.backgroundColor = "yellow";
                    marioCurrentlySelected = false;
                    characterCounter--;
                }
            }
            break;

        case "peach":

            if(characterCounter == 2){
                if(peachCurrentlySelected == true){
                    document.getElementById("peachcharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("peachcharacterSet").style.backgroundColor = "yellow";
                    peachCurrentlySelected = false;
                    characterCounter--;
                }
            } else {
                if(peachCurrentlySelected == false){
                    document.getElementById("peachcharacterSet").style.border = "solid 5px green";
                    document.getElementById("peachcharacterSet").style.backgroundColor = "#79E484";
                    peachCurrentlySelected = true;
                    characterCounter++;
                }
                else {
                    document.getElementById("peachcharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("peachcharacterSet").style.backgroundColor = "yellow";
                    peachCurrentlySelected = false;
                    characterCounter--;
                }
            }
            break;

        case "yoshi":

            if(characterCounter == 2){
                if(yoshiCurrentlySelected == true){
                    document.getElementById("yoshicharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("yoshicharacterSet").style.backgroundColor = "yellow";
                    yoshiCurrentlySelected = false;
                    characterCounter--;
                }
            } else {
                if(yoshiCurrentlySelected == false){
                    document.getElementById("yoshicharacterSet").style.border = "solid 5px green";
                    document.getElementById("yoshicharacterSet").style.backgroundColor = "#79E484";
                    yoshiCurrentlySelected = true;
                    characterCounter++;
                }
                else {
                    document.getElementById("yoshicharacterSet").style.border = "solid 5px yellow";
                    document.getElementById("yoshicharacterSet").style.backgroundColor = "yellow";
                    yoshiCurrentlySelected = false;
                    characterCounter--;
                }
            }
            break;
    }

    if (characterCounter == 2){
        document.querySelector("#raceButton").disabled = false;
    }
    else {
        document.querySelector("#raceButton").disabled = true;
    }


    if (characterCounter > 2){
        alert("Please Select Only 2 characters!!")
    }

}

function raceSetUp(){
    document.getElementById("CharacterSelectionWrapper").style.display = "none";
    setcharacters();
    startCountDown();
}

function setcharacters(){
    if(luigiCurrentlySelected){
        characters.push(luigi);
    }
    if(marioCurrentlySelected){
        characters.push(mario)
    }
    if(peachCurrentlySelected){
        characters.push(peach)
    }
    if(yoshiCurrentlySelected){
        characters.push(yoshi)
    }

    addcharactersToGUI();
}

function addcharactersToGUI(){
    characterNumberOne = characters[0];
    characterNumberTwo = characters[1];

    setcharacterForDB(characterNumberOne, characterNumberTwo);

    characterNumberOne.className = "characterOne";
    characterNumberTwo.className = "characterTwo";

    document.getElementById("characterOne").appendChild(characterNumberOne);
    document.getElementById("characterTwo").appendChild(characterNumberTwo);

    characterNumberOne.style.left = 0;
    characterNumberTwo.style.left = 0;
}

function startCountDown(){

    for(let countDown = 3; countDown >= 0; countDown--){
        if (countDown == 0){
            setTimeout(displayGo, 4000);
        } else {
            if(countDown == 3){
                setTimeout(displayNumber, 1000, countDown);
            }
            else if (countDown == 2){
                setTimeout(displayNumber, 2000, countDown);
            } 
            else if (countDown == 1){
                setTimeout(displayNumber, 3000, countDown);
            }
        }
    }
}

function displayNumber(countDown){
    let countDownElement = document.createElement("div");
    countDownElement.innerHTML = countDown;
    countDownElement.className = "CountDown";
    document.getElementById("countDownWrapper").appendChild(countDownElement);
    setTimeout(clearCountDownNumber, 1000, countDownElement);
}

function displayGo(){
    let goElement = document.createElement("div");
    goElement.innerHTML = "GO!";
    goElement.className = "CountDown";
    document.getElementById("countDownWrapper").appendChild(goElement);
    setTimeout(clearCountDownNumber, 1000, goElement);
    setLightToGreen();
    requestAnimationFrame(movecharacters);
}

function setLightToGreen(){
    document.getElementById("redlight").style.boxShadow = "0px 0px 0px 0px red"
    document.getElementById("greenlight").style.boxShadow = "0px 0px 20px 5px #65E940"
}

function clearCountDownNumber(countDownElement){
    countDownElement.remove();
}

function movecharacters(ms) {

    let characterOneRandomNumber = Math.floor(Math.random() * 11);
    let characterTwoRandomNumber = Math.floor(Math.random() * 11);
    let finishLine = document.getElementById("finishline");

    if (previousMs !== 0) {
      var delta = ms - previousMs;;
      characterNumberOne.style.left = characterNumberOne.style.left || 0;
      characterNumberOne.style.left = parseFloat(characterNumberOne.style.left) + (characterOneRandomNumber * delta / 500) + '%';

      characterNumberTwo.style.left = characterNumberTwo.style.left || 0;
      characterNumberTwo.style.left = parseFloat(characterNumberTwo.style.left) + (characterTwoRandomNumber * delta / 500) + '%';
    }
    previousMs = ms;

    if(elementsOverlap(finishLine, characterNumberOne)){
        winner = "character One";
        cancelAnimationFrame(movecharacters);
        displayWinner(winner);
    } 
    else if(elementsOverlap(finishLine, characterNumberTwo)){
        winner = "character Two";
        cancelAnimationFrame(movecharacters);
        displayWinner(winner);
    }
    else {
        requestAnimationFrame(movecharacters);
        isTouchingStopLight(elementsOverlap(characterNumberOne, stopLight));
    }
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}

function isTouchingStopLight(isTouching){
    if (isTouching){
        stopLight.style.opacity = "30%";
    }
    else {
        stopLight.style.opacity = "100%";
    }
}

function displayWinner(winner){

    let winnerText = "";
    let winnerLabel = document.createElement("div");
    let winnerImage;

    if(winner == "character One"){
        switch(characterNumberOne){
            case luigi:
                winnerText = "luigi Wins!";
                setWinnerLabelColor("luigi", winnerLabel);
                winnerImage = luigicharacterSet;
                winnerDBValue = "luigi";
                break;
            case mario:
                winnerText = "mario Wins!";
                setWinnerLabelColor("mario", winnerLabel);
                winnerImage = mariocharacterSet;
                winnerDBValue = "mario";
                break;     
            case peach:
                winnerText = "peach Wins!";
                setWinnerLabelColor("peach", winnerLabel);
                winnerImage = peachcharacterSet;
                winnerDBValue = "peach";
                break; 
            case yoshi:
                winnerText = "yoshi Wins!";
                setWinnerLabelColor("#DDAF7A", winnerLabel);
                winnerImage = yoshicharacterSet;
                winnerDBValue = "yoshi";
                break;
        }
    }
    else if (winner = "character Two"){
        switch(characterNumberTwo){
            case luigi:
                winnerText = "luigi Wins!";
                setWinnerLabelColor("luigi", winnerLabel);
                winnerImage = luigicharacterSet;
                winnerDBValue = "luigi";
                break;
            case mario:
                winnerText = "mario Wins!";
                setWinnerLabelColor("mario", winnerLabel);
                winnerImage = mariocharacterSet;
                winnerDBValue = "mario";
                break;     
            case peach:
                winnerText = "peach!";
                setWinnerLabelColor("peach", winnerLabel);
                winnerImage = peachcharacterSet;
                winnerDBValue = "peach";
                break; 
            case yoshi:
                winnerText = "yoshi Wins!";
                setWinnerLabelColor("#DDAF7A", winnerLabel);
                winnerImage = yoshicharacterSet;
                winnerDBValue = "yoshi";
                break;
        }
    }
    
    winnerLabel.innerHTML = winnerText;
    document.getElementById("winnerLabel").appendChild(winnerLabel);
    document.getElementById("winnerImageDiv").appendChild(winnerImage);
    winnerWrapper.style.display = "flex";
    winnerImage.style.maxWidth = "100%";
    winnerImage.style.height = "auto";

    sendDataToServer();
}

function setWinnerLabelColor(color, winnerLabel){
    winnerLabel.style.color = color;
}

function sendDataToServer(){
    
    let xhr = new XMLHttpRequest();
    timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let params = "timestamp="+timestamp+"&CharacterOne="+characterOne+
        "&partipantTwo="+characterTwo+"&winner="+winnerDBValue;
    xhr.open('POST', 'stats.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}

function setcharacterForDB(characterOne, characterTwo){
    switch(characterOne){
        case luigi:
            characterOne = "luigi";
            break;
        case mario:
            characterOne = "mario";
            break;
        case peach:
            characterOne = "peach";
            break;
        case yoshi:
            characterOne = "yoshi";
            break;
    }
    switch(characterTwo){
        case luigi:
            characterTwo = "luigi";
            break;
        case mario:
            characterTwo = "mario";
            break;
        case peach:
            characterTwo = "peach";
            break;
        case yoshi:
            characterTwo = "yoshi";
            break;
    }

    console.log(characterOne);
    console.log(characterTwo);
}
