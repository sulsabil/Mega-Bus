document.getElementById("firstClassIncrease").addEventListener("click", function(){
    
    // const ticketInput = document.getElementById("firstClassInput");
    // const ticketNumber = parseInt(ticketInput.value);
    // ticketNewNumber = ticketNumber + 1;
    // ticketInput.value = ticketNewNumber;
    handleBtn('firstClass',true);

});

document.getElementById("firstClassDecrease").addEventListener("click",function(){
    handleBtn('firstClass',false);
});

document.getElementById("economyIncrease").addEventListener("click",function(){
     handleBtn('economy',true);
});

document.getElementById("economyDecrease").addEventListener("click",function(){
      handleBtn('economy',false);
});

function handleBtn(ticket,isIncrease){
    const ticketInput = document.getElementById(ticket + "Input");
    const ticketNumber = parseInt(ticketInput.value);
    // ticketNewNumber = ticketNumber + 1;
    if(isIncrease == true){
        ticketNewNumber = ticketNumber + 1;
    }
    if(isIncrease == false && ticketNumber > 0){
        ticketNewNumber = ticketNumber - 1;
    }
    ticketInput.value = ticketNewNumber;
    calculation();
}

function calculation(){
    const firstClassInput = document.getElementById("firstClassInput");
    const firstClassNumber = parseInt(firstClassInput.value);

    const economyInput = document.getElementById("economyInput");
    const economyNumber = parseInt(economyInput.value);

    const subTotal = firstClassNumber * 150 + economyNumber * 100;
    document.getElementById("subTotal").innerHTML = subTotal;
    
    const tax = (subTotal * .1);
    document.getElementById('tax').innerHTML = tax;

    const total = subTotal + tax;
    document.getElementById('Total').innerHTML = total;

    return total;


}

document.getElementById("bookNow").addEventListener("click",function(){
    const formInput = document.getElementById("formInput").value;
    const toInput = document.getElementById("toInput").value;
    const departureInput = document.getElementById("departureInput").value;
    const returnInput = document.getElementById("returnInput").value;
    const firstClassInput = document.getElementById("firstClassInput").value;
    const economyInput = document.getElementById("economyInput").value;

    if (!formInput || !toInput || !departureInput || !returnInput || !firstClassInput || !economyInput) {
        document.getElementById('warning').innerText = 'Please Fill All The Required Information!!';
    }
    else {
        var bookingFrom = document.getElementById("bookingForm");
        bookingFrom.style.display = "none";
        var bookingContent = document.getElementById("bookingContent");
        bookingContent.style.display = "none";
        
        var bookingConfirm = document.getElementById("bookingConfirm");
        bookingConfirm.style.display = "block";
    
        var paymentSlip = calculation();
        document.getElementById("paymentSlip").innerText = paymentSlip;

    }
});

document.getElementById("backHome").addEventListener("click",function(){
    
    const bookingFrom = document.getElementById("bookingForm");
    bookingFrom.style.display = "block";

    var bookingContent = document.getElementById("bookingContent");
    bookingContent.style.display = "block";
    
    var bookingConfirm = document.getElementById("bookingConfirm");
    bookingConfirm.style.display = "none";
});