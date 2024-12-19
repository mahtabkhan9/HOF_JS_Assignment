const ordersList = [
    { name: "Laptop", price: 12000 },
    { name: "Mobile", price: 7000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 },
];

function calculateTotalPrice(orders) {
    let totalPrice = 0;
    orders.forEach(order => {
        totalPrice += order.price;
    });
    return totalPrice;
}

console.log(`Total Order Amount: ₹${calculateTotalPrice(ordersList)}`);

// Output:
// Total Order Amount: ₹31000