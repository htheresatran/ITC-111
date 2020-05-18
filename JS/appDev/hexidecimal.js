var numberInput = window.prompt("what is your decimal number?"); //get value from user, example: 479 for example
var count = window.prompt("enter number of digits do you want? (1-16)"); //how many values do they want? example: 2

checkDigits(count);
var almostHexadecimal = gettingAlmostHexadecimal(numberInput); //change number input to sorted array to change to hexadecimal later
var final = hexadecimalFinal(almostHexadecimal); //translated the almost array to actual hexadecimal array
alert(" your hexadecimal numbers are (" + final.slice(0, count) +")"); //print the sorted array from 0 to digits wanted using slice

function checkDigits(count){ //checking count function
    if (count > 16 || count < 1) { //has to be between 1 and 16
        while (count > 16 || count < 1) {
        count = window.prompt("Your number (" + count + ") is not a number between 1 and 16. Try again");   
    } 
    } else {
        return count;
        }
    }

function gettingAlmostHexadecimal(numberInput){ //passing 479 makes array from number
    var almostHexadecimal = []; // Declare arrray for numbers (should become 15, 13, 1)
    if  (numberInput > 0) { //only 16 and up need to be changed 
        while (numberInput != 0) { // 479, while the whole number is > 0
            var x = Math.abs(numberInput/16); // 29.9375 = 479 divide by 16 and got the absolute value
            var remainderPart = 16 * (x - Math.floor(x)); // 15 = 16(29.9375 - 29) gets the reaminder part
            almostHexadecimal.push(remainderPart); //put 15 into to almostHexidecimal array
            numberInput = Math.floor(x); //rounds down to lower integer (29) and loops again to get next remainder
    } 
    var sortedHex = almostHexadecimal.sort(); //sort the array, becomes [1, 13, 15]
    return sortedHex; //return it to convert to hexadecimal
    }
}

function hexadecimalFinal(sortedHex) { // for matching the decimal to hexadecimal (0=0, 1=1, 2=2, ... , 10 = A..)
var hexadecimalFinal = []; //declare new translated hexadecimal array
    for (i = 0; i < sortedHex.length; i++){ //starting at array [0], stop when goes through length
    var y = sortedHex[i]; // variable for array[0]
        if (y <= 9) { //if the number is less than 9 then decimal = hexadecimal
            hexadecimalFinal.push(y); //no need to do anything, push to new array
            }     
        else { //if its greater than 10 then you need a letter 
    	var letter = String.fromCharCode(55 + y); //javascript gets letter from number, A=65 and for hexadecimal A=65 so subtract 10
  		hexadecimalFinal.push(letter); // pass letter to new array
    	} 
    }
    return hexadecimalFinal;
}