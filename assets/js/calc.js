// Capturing form submission
let accountDetailed = '';


$(document).ready(function () {
    // attach the event listener
    $('#calculate').on('submit', function (event) {
        // runs when form is submitted
        // stop the default action from happening (page reloading)
        event.preventDefault();
        const form = event.target; 

        let savingsType = form.typeSelect.value; 
        determineType(savingsType);
    }); 
        
});


let savingsType = document.getElementById("type").value;


// Determine which rates customer wants 

function determineType(savingsType) {

    if (savingsType == "Instant") {
        accountDetailed = instantAccess;

    } else if (savingsType == "Regular") {
        accountDetailed = regularAccess;

    } else if (savingsType == "Fixed") {
        accountDetailed = fixedAccess;
    }
    console.log(accountDetailed);
}

// Get results for each competitor  

