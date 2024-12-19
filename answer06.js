let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}

const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

console.log("Categorized Expenses:", categorizedExpenses);

// Output
// Categorized Expenses: [ 'Low Expense', 'High Expense', 'Low Expense' ]