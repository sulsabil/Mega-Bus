const firstClassIncrease = document.getElementById("firstClassIncrease");
const firstClassDecrease = document.getElementById("firstClassDecrease");
const economyIncrease = document.getElementById("economyIncrease");
const economyDecrease = document.getElementById("economyDecrease");

//first class increase
firstClassIncrease.addEventListener("click", function() {
    handleTicketValue(true, "firstClass");
}) 

//first class decrease
firstClassDecrease.addEventListener("click", function() {
    handleTicketValue(false, "firstClass");
}) 

//economy increase
economyIncrease.addEventListener("click", function() {
    handleTicketValue(true, "economy");
})

//economy decrease
economyDecrease.addEventListener("click", function() {
    handleTicketValue(false, "economy");
})

function handleTicketValue(isIncrease, ticket) {
    var ticketInput = document.getElementById(ticket + "Input");
    var ticketNumber = parseInt(ticketInput.value);
    if (isIncrease == true) {
        ticketNumber = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketNumber = ticketNumber - 1;
    }

    ticketInput.value = ticketNumber;
    calculateTotal();
}

function calculateTotal() {
    var firstClassInput = document.getElementById("firstClassInput");
    var firstClassNumber = parseInt(firstClassInput.value);

    var economyInput = document.getElementById("economyInput");
    var economyNumber = parseInt(economyInput.value);

    var subTotal = firstClassNumber * 150 + economyNumber * 100;
    document.getElementById("subTotal").innerText = subTotal;

    var tax = (subTotal * .1);
    document.getElementById("tax").innerText = tax; 
    
    var totalPrice = subTotal + tax;
    document.getElementById("totalPrice").innerText = totalPrice; 

    return totalPrice;
}


