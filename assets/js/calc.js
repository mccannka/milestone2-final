// Capturing form submission

$(document).ready(function () {
    // attach the event listener
    $('#calculator').on('submit', function (event) {
        // runs when form is submitted
        // stop the default action from happening (page reloading)
        event.preventDefault();
    });
}); 
 
//Obtain inputs to fields 
let savingsHeld = document.getElementById ("saving-held");
let currentRate = document.getElementById ("rate-input");
let savingsType = document.getElementById ("type");

// Determine which rates customer wants 

function accountType(){

    if (savingsType =="Instant") 
    {accountType = instantAccess;

    } else if (savingsType == "Regular")
    {accountType = regularAccess; 
    
    } else if (savingsType == "Fixed")
    {accountType = fixedAccess;
    }
}

console.log("accountType");


// Get results for each competitor  
