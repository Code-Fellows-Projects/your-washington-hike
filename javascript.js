var yourName = prompt('Please enter your name?');
var greeting;

if (yourName == 'Stacy'){
    greeting = 'Welcome Majesty ' + yourName;
} else {
    greeting = 'Welcome ' + yourName;
}
var today = new Date(); 
var hourNow = today.getHours();

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0 ) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write(greeting);



