/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction(){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("myContent").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("myContent").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
    }
