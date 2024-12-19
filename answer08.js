let originalNumbers = [2, 5, 8, 10, 3];
let evenNumbers = [];

originalNumbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log("Even Numbers:", evenNumbers);

// Output
// Even Numbers: [ 2, 8, 10 ]