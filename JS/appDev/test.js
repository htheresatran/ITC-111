var numberInput = window.prompt("what is your decimal number? "); //get value from user, 479
var count = window.prompt("enter number of digits do you want? (1-16)"); //how many values do they want? 2

function checkDigits(count){
    if (count > 16 || count < 1) { //has to be between 1 and 16
        print("Your number (" + count + ") is not a number between 1 and 16. Try again");   
    } 
    else {
        return count;
        }
    }

function checkDigits(count);