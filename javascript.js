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
function guessNumberOfSwitchBacks() {
    var switchBackAnswer = prompt("How many switch backs are on this hike?");
    if (switchBackAnswer > 30){
        alert("Yes, Get ready to burn!")
    } else if (switchBackAnswer < 29){
        alert("Lucky you only a few!")
    }
}

function fromWashington() {
    var correctAnswer = confirm("Do you want to hike in Western or Eastern washington?");
    if (correctAnswer){
        alert("Great! Lets find you a trail!");
    } else {hv
        alert("ok, just browsing")

    
    }
}


    //}
    // if (confirm("Do you want to hike in Western or Eastern Washington?")) {
        // document.write("Lets find you a trail!");
    // } else {
        // document.write("No problem, just browsing...");
    //}






