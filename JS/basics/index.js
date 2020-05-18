//console.log('Hello!');

var firstName = 'John';

var message = 'wassup'; //type string

var year = 2020; //type number

var isTrue = true; //type boolean

var someVar;

function printToConsole(msg){ //msg is whatever is outside 
    //console.log(msg); //prints out whatever message was

    var what = msg + 'yo'; //this makes what = "wassup"
    return what; //don't need variable outside of function, will change message to that and when you say function(message) it says wassup yo
}

window.print(printToConsole(what)); //message = wassup = goes to msg

