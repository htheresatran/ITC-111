//English word list
var greetings_En = ["Hello", "How are you?", "Whats up", "Nice to meet you"];
var bodyParts_En = ["Head", "Chest", "Back", "Arm", "leg"];
var colors_En = ["red", "orange", "yellow", "blue", "green", "Brown"]

//Spanish word list
var greetings_Sp= ["Hola", "Como estas?", "Que onda?", "Es un placer"];
var bodyParts_Sp= ["cabeza", "cofre", "espalda", "brazo", "pierna"];
var colors_Sp = ["rojo", "naranja", "amarillo", "azul", "verde", "marron"]

// Variable to hold the display word
var word = document.getElementById('wrd');

//Variable that will store curretly displayed word
var crrWrd;
// Variables to hold the current list and target lsit
var crrLst;
var trgLst;

// Variable to hold index of word in its list 
var ndx;

// Boolean variable to hold flipped/not flipped state
var flipped = false;

function init(){ 
    // Set the crrLst variable to the greetins_En array
    crrLst = greetings_En;
    // Set the trgLst variable to equal to the greetings-Sp array
    trgLst = greetings_Sp;
    //Set current word to the first word in the crrLst
    crrWrd = crrLst[0];
    // Set the 'word' display to show the current word
    word.innerHTML = crrWrd;
    // Set ndx variable to index of the current word in the current list
    ndx = crrLst.indexOf(crrWrd);
    //reset category list to default
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("target1").selectedIndex = 0;
    document.getElementById("target2").selectedIndex = 0;
}

function chgList(trg){
    switch(trg.value){
        case "greetings":
            crrLst = greetings_En;
            trgLst = greetings_Spt;
            break;
        case "bodyParts":
            crrLst = greetings_En;
            trgLst = greetings_Sp;
            break;
        case "colors":
            crrLst = greetings_En;
            trgLst = greetings_Sp;
            break;
    }
    word.innerHTML = crrLst[ndx];
}

function prvWrd(){
    if(ndx >0){
        ndx--;
    }else{
        ndx = (crrLst.length - 1);
    }
    word.innerHTML = crrList[ndx]
}
function flipWrd(){
    if(flipped){
        word.innerHTML = crrList[ndx];
        flipped = false;
    }else{
        word.innerHTML = trgLst[ndx];
        flipped = true;
    }
}
function nxtWrd(){
if(ndx < (crrLst.length -1)){
    ndx++;
}else{
    ndx = 0;
    } 
    word.innerHTML = crrlst[ndx];
}

//changeurrent list bad on which option from tdrop dwn list
function setList(trg){
    switch(trg.id){
        case "target1":
            if(trg.value == "English"){
                crrLst = greetings_En;
            }else{
                crrLst = greetings_Sp;
            }
        break;
        case "target2":
            if(trg.value == "English"){
                crrLst = greetings_En;
            }else{
                crrLst = greetings_Sp;
                }
        break;
    }
}

// Swap ccrLst and trgLst
function swapTargets(){
    var trg1 = document.getElementById("target1").value;
    var trg2 = document.getElementById("target2").value;
    var tmpTrg = trg1;
    document.getElementById("target1").value = trg2;
    document.getElementById("target1").value = tmpTrg;

    var tmpLst  = crrLst;
    crrst = trgLst;
    trgLst = tmpLst;

    crrWrd = crrLst(ndx);

    word.innerHTML = crrWrd;    
}

document.onload = init();