/*
    This function is called by the links in the nav area of the page.
    The function creates 2 links and places them into the teal colored div.
    The text in the blue div is also changed.
*/
function changeLinkText(lnk) {
    // Condition checks which link was click by passing value to the 'lnk' variable
    // the visibility of the corresponding div is updated accordingly. 
    if(lnk == "classEx") {
        document.getElementById('divLeftDefault').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "block";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Default content";
        document.getElementById('ls_Heading').innerHTML = "Class Exercises";
        document.getElementById('rs_Heading').innerHTML = "Exercise Description";
    }else if (lnk == 'assign'){
        document.getElementById('divLeftDefault').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "block";
        document.getElementById('divRight').innerHTML = "Default content";
        document.getElementById('ls_Heading').innerHTML = "Assignments";
        document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
    
    }else if (lnk == 'home'){
        document.getElementById('divLeftDefault').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Default text deplayed";
    
    }else{
        document.getElementById('divLeftDefault').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').style.display = "none";
    }
    }
    /*
    This function changed the text displayed by an element/tag. It takes a parameter 'txt'
    that is used to control what text to display depending on which link is clicked. This
    function is called whenever the text in the right div element needs to be changed.
    */
    function changeDivRightText(txt) {
    // change the heading of the 'h2' tag in innerDivRight         
    document.getElementById('rs_Heading').innerHTML = txt;
    }