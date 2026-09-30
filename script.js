"use strict";
//Identifyin DOM Variables
const billInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const calculateBtn = document.getElementById("calculate-btn");
const errorMessageElement = document.getElementById("error-message");
const tipAmountElement = document.getElementById("tip-amount");
const totalBillElement = document.getElementById("total-bill");

//Event Listeners
calculateBtn.addEventListener("click", calculateTip);

//Functions to be used
function calculateTip() {
  const billAmount = Number(billInput.value);
  const tipPercentage = Number(tipPercentageInput.value);

  errorMessageElement.textContent = "";

  tipAmountElement.textContent = "$0    .00";
  totalBillElement.textContent = "$0.00";

  if (billInput.value === "") {
    errorMessageElement.textContent = "*Please enter a bill amount.";
  } else if (tipPercentageInput.value === "") {
    errorMessageElement.textContent = "*Please enter a tip percentage.";
  } else if (billAmount <= 0) {
    errorMessageElement.textContent = "*Bill amount must be greater than zero!";
  } else if (tipPercentage < 0) {
    errorMessageElement.textContent = "*Tip amount cannot be negative!";
  } else if (tipPercentage > 100) {
    errorMessageElement.textContent = "*Tip amount cannot be more than 100%";
  } else {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;
    tipAmountElement.textContent = "$" + tipAmount.toFixed(2);
    totalBillElement.textContent = "$" + totalBill.toFixed(2);
  }
}
