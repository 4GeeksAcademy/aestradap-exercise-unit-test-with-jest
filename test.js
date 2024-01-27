// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

 // Import the function from app.js
 const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 156.5 yens and 0.87 pounds", function() {

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(3.5);

    // If 1 euro is 156.5 yens and 0.87 pounds, then 3.5 yens should be ( 3.5 / 156.5 ) * 0.87
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 1.07 dollars and 156.6 yens", function() {

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, and  1 euro is 156.5 yen then (3.5 dollars / 1.07) * 156.5 should be 511.92 yens.
    const expected = ( 3.5 / 1.07 ) * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.92); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})



