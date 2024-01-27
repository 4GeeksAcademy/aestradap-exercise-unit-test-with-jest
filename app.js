
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    let valueInPound =  ( valueInYen / 156.5 ) * 0.87;
    return parseFloat(valueInPound.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    //1.07 its the exchange rate from euros to 
    //156.5 its the exchange rate from euro to yen
    let valueInYen = ( valueInDollar / 1.07 ) * 156.5;
    // return the dollar value\
    return parseFloat(valueInYen.toFixed(2));
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };