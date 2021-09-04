/*
Wait for DOM to finish loading before running calculation 
*/
$(document).ready(function () {
    // attach the event listener
    $('#current-form').on('submit', function (event) {
        // runs when form is submitted
        // stop the default action from happening (page reloading)
        event.preventDefault()

    });
})


/*
Create Loop 
*/

function getProviderCalculations("current-rate","savings-type") {

    document.getElementById("current-rate").value = "";
    document.getElementById("savings-type").focus();

};
/* 
Instant Access 
*/
if (savings-type ==='Instant')
const bestRate = 0.40;

if (current-rate >= bestRate) 
if (true) {
    let mymessageTrue = "Nope youve got the best rate"; 
    console.log(mymessageTrue);
}
if (current-rate >= bestRate) 
if (false) {
    let mymessageFalse = "Yay we have a better rate"; 
    console.log(mymessageTrue);
}; 
=