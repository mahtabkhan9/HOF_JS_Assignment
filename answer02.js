function printRandomNumbers() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Random Number: ${randomNumber}`);
    }, 2000);
}

printRandomNumbers();

// Output
// Random Number: 47
// Random Number: 21
// Random Number: 51
// Random Number: 2
// Random Number: 17
// and so on