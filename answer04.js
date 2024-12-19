let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const groceriesExpenses = expenses.filter(expense => expense.category === "Groceries");

console.log("Groceries Expenses:", groceriesExpenses);

// Output
// Groceries Expenses: [ { amount: 200, category: 'Groceries' } ]