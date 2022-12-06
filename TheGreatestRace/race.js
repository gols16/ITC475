let luigiSelected= false;
let marioSelected = false;
let peachSelected= false;
let yoshiSelected = false;
let luigi = document.createElement("img"); 
let mario = document.createElement("img"); 
let peach = document.createElement("img"); 
let yoshi = document.createElement("img"); 
luigi.src= "luigi.png";
mario.src= "mario.png";
peach.src= "peach.png";
yoshi.src= "yoshi.png";
let characterCount=0;
let characters=[];
let character1 = null;
let character2= null;



function addCharacter(character){

    switch(character){
        case "luigi":

            if(characterCount == 2){
                if(luigiSelected == true){
                    document.getElementById("luigi").style.border = "solid 5px red";
                    document.getElementById("luigi").style.backgroundColor = "red";
                    luigiSelected = false;
                    characterCount--;
                }
            } else {
                if(luigiSelected == false){
                    document.getElementById("luigi").style.border = "solid 5px green";
                    document.getElementById("luigi").style.backgroundColor = "#green";
                    luigiSelected = true;
                    characterCount++;
                }
                else {
                    document.getElementById("luigi").style.border = "solid 5px red";
                    document.getElementById("luigi").style.backgroundColor = "red";
                    luigiSelected = false;
                    characterCount--;
                }
            }
            break;

        case "mario":
            if(characterCount == 2){
                if(marioSelected == true){
                    document.getElementById("mario").style.border = "solid 5px red";
                    document.getElementById("mario").style.backgroundColor = "red";
                    marioSelected = false;
                    characterCount--;
                }
            } else {
                if(marioSelected == false){
                    document.getElementById("mario").style.border = "solid 5px green";
                    document.getElementById("mario").style.backgroundColor = "#green";
                    marioSelected = true;
                    characterCount++;
                }
                else {
                    document.getElementById("mario").style.border = "solid 5px red";
                    document.getElementById("mario").style.backgroundColor = "red";
                    marioSelected = false;
                    characterCount--;
                }
            }
            break;
            case "peach":
                if(characterCount == 2){
                    if(peachSelected == true){
                        document.getElementById("peach").style.border = "solid 5px red";
                        document.getElementById("peach").style.backgroundColor = "red";
                        peachSelected = false;
                        characterCount--;
                    }
                } else {
                    if(peachSelected == false){
                        document.getElementById("peach").style.border = "solid 5px green";
                        document.getElementById("peach").style.backgroundColor = "#green";
                        peachSelected = true;
                        characterCount++;
                    }
                    else {
                        document.getElementById("peach").style.border = "solid 5px red";
                        document.getElementById("peach").style.backgroundColor = "red";
                        peachSelected = false;
                        characterCount--;
                    }
                }
                break;
                case "yoshi":
                    if(characterCount == 2){
                        if(yoshiSelected == true){
                            document.getElementById("yoshi").style.border = "solid 5px red";
                            document.getElementById("yoshi").style.backgroundColor = "red";
                            yoshiSelected = false;
                            characterCount--;
                        }
                    } else {
                        if(yoshiSelected == false){
                            document.getElementById("yoshi").style.border = "solid 5px green";
                            document.getElementById("yoshi").style.backgroundColor = "#green";
                            yoshiSelected = true;
                            characterCount++;
                        }
                        else {
                            document.getElementById("yoshi").style.border = "solid 5px red";
                            document.getElementById("yoshi").style.backgroundColor = "red";
                            yoshiSelected = false;
                            characterCount--;
                        }
                    }
                    break;
                }
                if(characterCount==2){
                    document.querySelector("#raceButton").disabled = false;
                }
            
                else {
                    document.querySelector("#raceButton").disabled = true;
                }

                if (characterCount > 2){
                    alert("Please Select Only 2 Characters.")
                }

            }

            function characterSetup(){
                if(luigiSelected){
                    characters.push(luigi);
                }
                if(marioSelected){
                    characters.push(mario)
                }
                if(peachSelected){
                    characters.push(peach)
                }
                if(yoshiSelected){
                    characters.push(yoshi)
                }
                loadCharacters();
            }
            function loadCharacters(){
                character1 = characters[0];
                document.getElementById("character1").appendChild(character1);
                document.getElementById("character2").appendChild(character2);
                character1.style.left = 0;
                character2.style.left = 0;

            }
            function startCount() {
                for(let countdown = 1; countdown >= 0; countdown--) {
                    if (countdown == 0) {
                        setTimeout(go, 500);
                    } 
                }
            }
            function go() {
                let goElement = document.createElement("div");
                goElement.className = "ready";
                document.getElementById("readySetGo").appendChild(goElement);
                setTimeout(resetCountdown, 500, goElement);
                setLightToGreen();
                requestAnimationFrame(moveCharacters);
            }
            function setLightToGreen() {
                document.getElementById("redOff").style.boxShadow = "0px 0px 0px 0px red";
                document.getElementById("greenOn").style.boxShadow = "0px 0px 20px 10px #65E940";
            }
            function resetCount(countDownElement) {
                countDownElement.remove();
            }
            function moveCharacters(ms){
                let char1num =  Math.floor(Math.random() * 11);
                let char2num = Math.floor(Math.random() * 11);
                let finishLine = document.getElementById("finishline");

                if (previousMs !== 0) {
                    var delta = ms - previousMs;
                    character1.style.left = character1.style.left || 0;
                    character1.style.left = parseFloat(character1.style.left) + (char1num * delta / 500) + '%';
                    character2.style.left = character2.style.left || 0;
                    character2.style.left = parseFloat(character2.style.left) + (char2num * delta / 500) + '%';
            }
            previousMs=ms;
            if(elementsOverlap(finishLine, character1)){
                winner="Character 1";
                cancelAnimationFrame(moveCharacters);
                displayWinner(winner);
            } 
            else if(elementsOverlap(finishLine, character2)) {
                winner = "Character 1";
                cancelAnimationFrame(moveCharacters);
                displayWinner(winner);
            }
            else{
                requestAnimationFrame(moveCharacters);
                isTouchingStopLight(elementsOverlap(character1, stopLight));
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
        function isTouchingStopLight(isTouching) {
            if (isTouching) {
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
        
            if(winner == "Character 1") {
                switch(character1) {
                    case luigi:
                        winnerText= "Luigi is the Winner!";
                        winnerColorTxt("green", winnerLabel);
                        winnerImage= luigi;
                        winner= "Luigi";
                        break;
                        case mario:
                        winnerText= "Mario is the Winner!";
                        winnerColorTxt("red", winnerLabel);
                        winnerImage= mario;
                        winner= "Mario";
                        break;
                        case peach:
                        winnerText= "Peach is the Winner!";
                        winnerColorTxt("pink", winnerLabel);
                        winnerImage= peach;
                        winner= "peach";
                        break;
                        case yoshi:
                        winnerText= "Yoshi is the Winner!";
                        winnerColorTxt("blue", winnerLabel);
                        winnerImage= yoshi;
                        winner= "Yoshi";
                        break;
                }
            }
            else if(winner = "Character 2"){
                switch(character2){
                    case luigi:
                        winnerText= "Luigi is the Winner!";
                        winnerColorTxt("green", winnerLabel);
                        winnerImage= luigi;
                        winner= "Luigi";
                        break;
                        case mario:
                        winnerText= "Mario is the Winner!";
                        winnerColorTxt("red", winnerLabel);
                        winnerImage= mario;
                        winner= "Mario";
                        break;
                        case peach:
                        winnerText= "Peach is the Winner!";
                        winnerColorTxt("pink", winnerLabel);
                        winnerImage= peach;
                        winner= "peach";
                        break;
                        case yoshi:
                        winnerText= "Yoshi is the Winner!";
                        winnerColorTxt("blue", winnerLabel);
                        winnerImage= yoshi;
                        winner= "Yoshi";
                        break;

                }
            }
            winnerLabel.innerHTML = winnerText;
            document.getElementById("winnerLabel").appendChild(winnerLabel);
            document.getElementById("winnerImg").appendChild(winnerImage);
            cardContent.style.display = "flex";
            winnerImage.style.maxWidth = "100%";
            winnerImage.style.height = "auto";
            sendServer();

            function winnerColorTxt(color, winnerLabel){
                winnerLabel.style.color=color;

            }
            function sendServer(){
                let XHR = new XMLHttpRequest();
                racingTime= new Date().toISOString().slice(0, 19).replace('T', ' ');
                let params = "racingTime="+racingTime+"&characterRacing1="+characterRacing1+
                "&characterRacing2="+characterRacing2+"&winner="+winner;
                xhr.open('POST', 'stats.php', true);
                xhr.open('POST', 'Process Statistics.php', true);
                xhr.onload = function(){
                    console.log(this.responseText);
                }
            
                xhr.send(params);
            }
            function saveRacingStats(character1, character2){

                switch(character1){
                    case luigi:{
                        characterracing 1



                }
                console.log(characterRacing1);
                console.log(characterRacing2);
            }

