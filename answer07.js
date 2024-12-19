let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2;
});

console.log("Doubled Numbers:", originalNumbers);

// Output
// Doubled Numbers: [ 4, 10, 16, 20, 6 ]