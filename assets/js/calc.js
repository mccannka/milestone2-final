
// Capturing form submission

let rateForm = document.getElementById('rate-form');
rateForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

  // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
  let rate = currentForm.elements[].value;
  let type = currentForm.elements[].value;
}

/*
This function calculates the interest based on the savings and rate passed
savings: integer/float - User inputted value
rate: percentage - User inputted value
*/
function highInterest(providers) {rate
    return savings * rate/100;
}



// Detail Form Validation, max / min values etc 

/*
Loop over all providers and find the highest interest rate for each depending on the chosen savingsType
*/
function getProviderCalculations(rate, type){
    let biggestRate = 0;
    let biggestProvider; // Store the index of the provider
    let interestCalculationResults = {};
    interestCalculationResults["Your Interest Rate"] = highInterest(savingsAmount, currentRate);


// iterate over providers
for (let index in providers) {
    // Calculate the interest for the provider and store it in the dictionary
    interestCalculationResults[providers[index]["Name"]] = calculateInterest(savingsAmount, providers[index][savingsType]);

    // compare current rate against biggest rate
    if (providers[index][savingsType] > biggestRate) {
        // assign new biggest rate
        biggestProvider = index;
        biggestRate = providers[index][savingsType];
    }
}
return [biggestProvider, biggestRate];


/* Competitor Rates */
const providers = [
    {
        "Name": "AIB",
        "Instant": 0.20, // Percentage amounts e.g. 0.01 (to means 0.01%)
        "Regular": 1.50,
        "Fixed": 1.20,
    },
    {
        "Name": "Ulster Bank",
        "Instant": 0.40,
        "Regular": 0.60,
        "Fixed": 1.00,
    },
    {
        "Name": "Danske Bank",
        "Instant": 0.15,
        "Regular": 0.50,
        "Fixed": 0.70,
    },
]