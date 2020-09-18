'use strict'

function getHikerName() {
    var yourName = prompt("Hello fellow hiker! What's your name?");
    document.write(yourName);
    }

    function whatTime() {
        var hourNow = new Date().getHours();
    if (hourNow > 18) {
        document.write('Good evening fellow hiker!');
    } else if (hourNow > 12) {
        document.write('Good afternoon fellow hiker!');
    } else if (hourNow > 0 ) {
        document.write('Good morning fellow hiker!');
    } else {
        document.write('Welcome Hiker!');
    
    }
    
    }
    
function fromWashington() {
    if (confirm("Do you want to hike in Western or Eastern Washington?")) {
        document.write("Lets find you a trail!");
    } else {
        document.write("No problem, just browsing...");
    }
}



