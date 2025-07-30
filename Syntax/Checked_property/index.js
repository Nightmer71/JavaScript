/*

.checked = property that determines the chekced state of an HTML checkbox

*/

const myCheckBox = document.getElementById(myCheckBox);
const visaButton = document.getElementById(visaButton);
const masterCard = document.getElementById(masterCard);
const paypalButton = document.getElementById(paypalButton);
const mySubmit = document.getElementById(mySubmit);
const subResult = document.getElementById(subResult);
const paymentResult = document.getElementById(paymentResult);

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`
    }
    else{
        subResult.textContent = `You are not subscribed`
    }

    if (visaButton.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if (masterCard.checked){
        paymentResult.textContent = `You are paying with Master Card`
    }
    else if (paypalButton.checked){
        paymentResult.textContent = `You are paying with Paypal`
    }
    else{
        paymentResult.textContent = `You must select a payment type`
    }
}