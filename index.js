/*
        This function is called by the links in the nav area of the page.
        The function creates 2 links and places them into the teal colored div.
        The text in the blue div is also changed.
    */
   function changeLinkText(lnk) {
    // Condition checks which link was click by passing value to the 'lnk' variable
    // the visibility of the corresponding div is updated accordingly. 

   switch (lnk) {
        case 'home' :
            document.getElementById('divLeft_Default').style.display = "block";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById("divLeft_RLinks").style.display = "none";
            document.getElementById('divRight').innerHTML = "Home link clicked. Default test displayed.";
            document.getElementById('ls_Heading').innerHTML = "ITC-111";
            document.getElementById('rs_Heading').innerHTML = "Intro to Programming <br>w/HTML, CSS & JavaScript";
            break;
         case 'classEx' :
            document.getElementById('divLeft_Default').style.display = "none";
            document.getElementById('divLeft_CELinks').style.display = "block";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById("divLeft_RLinks").style.display = "none";
            document.getElementById('divRight').innerHTML = "Default description for Class Exercise Link.";
            document.getElementById('ls_Heading').innerHTML = "Class Exercises";
            document.getElementById('rs_Heading').innerHTML = "Exercise Description";
           break;
        case 'assign' :
            document.getElementById('divLeft_Default').style.display = "none";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "block";
            document.getElementById("divLeft_RLinks").style.display = "none";
            document.getElementById('divRight').innerHTML = "Default description for Assignment Link.";
            document.getElementById('ls_Heading').innerHTML = "Assignments";
            document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
           break;
        case 'resource' :
            document.getElementById('divLeft_Default').style.display = "none";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById("divLeft_RLinks").style.display = "block";
            document.getElementById('divRight').innerHTML = "Default description for Resources Link.";
            document.getElementById('ls_Heading').innerHTML = "Resources";
            document.getElementById('rs_Heading').innerHTML = "Resource Examples";
          break;
     default: 
            document.getElementById('divLeft_Default').style.display = "block";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById("divLeft_RLinks").style.display = "none";
            document.getElementById('divRight').style.display = "none";

            
    }}

  
function changeDivRightText(txt) {
    // change the heading of the 'h2' tag in innerDivRight         
    document.getElementById('rs_Heading').innerHTML = txt;
}

