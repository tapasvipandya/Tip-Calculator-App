'use strict';

//getting buttons 
const tipBtns = document.querySelectorAll('.numValue');
//getting custom tip value 
const customVal = document.querySelector('.customVal');
//getting bil value 
const billValue = document.querySelector('.billValue');
//getting number of person 
const personNum = document.querySelector('.personNum');
//getting tip amount label 
const tipDisplayLabel = document.querySelector('.display__tip-value');
//getting total per person label 
const totalDisplayLabel = document.querySelector('.display__total-value');
//setting intiial value 
const errorMessage = document.querySelector('.error__message');

let bill = 0;
let tipAmount = 0;
let person = 0;
let tipPercentage = 0;
let customTipPercentage = 0;
let total = 0;

//Getting value for bill 
billValue.addEventListener('change', function (e) {
    bill = Number(e.target.value);
})
//Getting value for number of People 
personNum.addEventListener('change', function (e) {
    person = Number(e.target.value);

})
//Getting value for custom tip 
customVal.addEventListener('change', function (e) {
    customTipPercentage = Number(e.target.value);
})


//function to calculate tip 
const calculateTip = function (tipPerc) {
    tipAmount = (bill * tipPerc) / 100;
    tipDisplayLabel.textContent = `$${tipAmount}`;
    return tipAmount;
}

const calculateTotal = function (person) {
    total = ((bill + tipAmount) / person).toFixed(2);
    totalDisplayLabel.textContent = `$${total}`;
}
//button onclick event 

for (let i = 0; i < tipBtns.length; i++) {
    tipBtns[i].addEventListener('click', function () {
        tipPercentage = tipBtns[i].value;
        calculateTip(tipPercentage);
        calculateTotal(person);
    }
    )
}

//custom tip change event 
customVal.addEventListener('change', function () {

    calculateTip(customTipPercentage);
    calculateTotal(person);

});