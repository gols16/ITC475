function deviceSettings() {
    var select = document.getElementById('devices');
    var value = select.options[select.selectedIndex].value;
    if(value == 'livingRoom') {
        livingRoomDiv.style.display = "block";
    }
    else {
        livingRoomDiv.style.display = "none";
    }
    if(value == 'bed1Lamp') {
        bed1LampDiv.style.display = "block";
    }
    else {
        bed1LampDiv.style.display = "none";
    }
    if(value == 'bed2Lamp') {
        bed2LampDiv.style.display = "block";
    }
    else {
        bed2LampDiv.style.display = "none";
    }
    if(value == 'bathroomFan') {
        bathroomFanDiv.style.display = "block";
    }
    else {
        bathroomFanDiv.style.display = "none";
    }
    if(value == 'washer') {
        washerDiv.style.display = "block";
    }
    else {
        washerDiv.style.display = "none";
    }
    if(value == 'dryer') {
        dryerDiv.style.display = "block";
    }
    else {
        dryerDiv.style.display = "none";
    }
    if(value == 'frontDoor') {
        frontDoorDiv.style.display = "block";
    }
    else {
        frontDoorDiv.style.display = "none";
    }
    if(value == 'backDoor') {
        backDoorDiv.style.display = "block";
    }
    else {
        backDoorDiv.style.display = "none";
    }
    if(value == 'garageDoor') {
        garageDoorDiv.style.display = "block";
    }
    else {
        garageDoorDiv.style.display = "none";
    }
    if(value == 'kitchenFan') {
        kitchenFanDiv.style.display = "block";
    }
    else {
        kitchenFanDiv.style.display = "none";
    }
    if(value == 'diningRoomLight') {
        diningRoomLightDiv.style.display = "block";
    }
    else {
        diningRoomLightDiv.style.display = "none";
    }
}
