// SpendWise Budget Information
let monthlyBudget = 30000;
let totalExpenses = 0;

// Calculate remaining balance
function calculateBudget() {
    let remainingBalance = monthlyBudget - totalExpenses;

    document.getElementById("budget").textContent = "KSh " + monthlyBudget;
    document.getElementById("expenses").textContent = "KSh " + totalExpenses;
    document.getElementById("balance").textContent = "KSh " + remainingBalance;

    console.log(`Monthly Budget: KSh ${monthlyBudget}`);
    console.log(`Total Expenses: KSh ${totalExpenses}`);
    console.log(`Remaining Balance: KSh ${remainingBalance}`);
}

function addExpense() {
    let expense = Number(document.getElementById("expense").value);

    totalExpenses = totalExpenses + expense;

    calculateBudget();

    document.getElementById("expesnse").value = "";
}

// Ask the user for their budget
let userBudget = prompt("Enter your monthly budget:", monthlyBudget);

if (userBudget !== null && userBudget !== "") {
    monthlyBudget = Number(userBudget);
}

// Calculate the starting budget
calculateBudget();