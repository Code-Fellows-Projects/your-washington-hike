var yourName = "Hello fellow hiker " + prompt("What's your name?") + "!";
var greeting; 
var whereFrom = prompt('Are you from Washington?');
    


if (yourName == 'Stacy'){
    greeting = 'Welcome  ' + yourName;
} else {
    greeting = 'Welcome ' + yourName;
}
var today = new Date(); 
var hourNow = today.getHours();

if (hourNow > 18) {
    greeting = 'Good evening fellow hiker!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon fellow hiker!';
} else if (hourNow > 0 ) {
    greeting = 'Good morning fellow hiker!';
} else {
    greeting = 'Welcome!';
}


document.write(greeting);

if (confirm("Do you want to hike in Western or Eastern Washington?")) {
    say = "Great! Lets find you a trail!";
    } else {
        say = "No problem, just browsing...";

    }
document.write(say);


