let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const taxRate = 0.1;

const expensesWithTax = expenses.map(expense => ({
    ...expense,
    tax: expense.amount * taxRate,
}));

console.log("Expenses with Tax:", expensesWithTax);

// Output
// Expenses with Tax: [
//     { amount: 100, category: 'Utilities', tax: 10 },
//     { amount: 200, category: 'Groceries', tax: 20 },
//     { amount: 50, category: 'Entertainment', tax: 5 }
// ]