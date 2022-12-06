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

            }
