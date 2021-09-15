let savingsType = null;
let providerIdMapper = {
    'ulsterBank': 'ub-rate',
    'Santander': 'sant-rate',
    'danskeBank': 'db-rate',
    'AIB': 'aib-rate',
}

// Define the mapping from variable to HTML option
// "<saving var name>": "<HTML Option>" 
let savings_options = {
    'instant': "Instant",
    'regular': "Regular",
    'fixed': "Fixed",
}

$(document).ready(function () {
    // Capturing form submission
    savingsType = document.getElementById("type").value;

    /*
    On submit, runs Bootstrap validations and determines which bank is suitable
    */
    $('#calculate').on('submit', function (event) {
        // runs when form is submitted
        // stop the default action from happening (page reloading)
        event.preventDefault();
        const form = event.target;

        let savingsType = form.typeSelect.value;
        determineType(savingsType);
    });

    // TODO: Add emailjs
    // emailjs.init("YOUR_USER_ID");
    // https://github.com/Code-Institute-Submissions/LeagueLore
    // https://github.com/Code-Institute-Submissions/explore-ireland/blob/master/assets/js/email.js
});


/* 
Determine which savings account the visitor wants  
*/
function determineType(savingsType) {
    if (savingsType == savings_options.instant) {
        accountDetailed = instantAccess;  // defined in separate file
    } else if (savingsType == savings_options.regular) {
        accountDetailed = regularAccess;
    } else if (savingsType == savings_options.fixed) {
        accountDetailed = fixedAccess;
    }
    console.log(accountDetailed);
    updateHTML(accountDetailed);
}

/* 
This updates the HTML data related to the banks 
*/
function updateHTML(data) {
    data.forEach(function(i) {
        $(`#${providerIdMapper[i.provider]}`).html(`${i.rate}%`)
    });
}