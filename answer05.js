let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log(`Total Expenses: ₹${totalExpenseAmount}`);

// Output
// Total Expenses: ₹350