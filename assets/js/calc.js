
// Capturing form submission

$(document).ready(function () {
    // attach the event listener
    $('#calculator').on('submit', function (event) {
        // runs when form is submitted
        // stop the default action from happening (page reloading)
        event.preventDefault()
    });
})
 
//Obtain inputs to fields 
let savingsHeld = document.getElementById ("saving-held");
let currentRate = document.getElementById ("rate-input");
let savingsType = document.getElementById ("type");

// If savingsType selected was instant access  

function getRates(){

    if (savingsType =="Instant") 
    {getRates = instantAccess;

    } else if (savingsType == "Regular")
    {getRates = regularAccess; 
    
    } else if (savingsType == "Fixed")
    {getRates = fixedAccess;
    }
}

console.log("Instant", "Regular", "Fixed")

