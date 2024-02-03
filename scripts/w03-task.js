/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1 , number2){
    return number1 + number2;
}
function  addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener ('click' , addNumbers);

     
/* Function Expression - Subtract Numbers */
function Subtract (number1 , number2){
    return number1 - number2;
}
    function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click' , subtractNumbers);


 /* Arrow Function - Multiply Numbers */
const multiply = (a,b) => a*b;

    const multiplyNumbers = ()=>{
    const factor1 = parseFloat (document.getElementById('factor1').value);
    const factor2 = parseFloat (document.getElementById('factor2').value);
    const result = multiply(factor1, factor2);
    document.getElementById('product').innerText = 'result: ${result}';
}
document.getElementById('multiplyNumbers').addEventListener('click, multiplyNumbers');

/* Open Function Use - Divide Numbers */
const divide = (x , y) => x / y;

const divideNumbers = () => 
{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor"). value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}
document.getElementById("divideNumbers").addEventListener("click" , divideNumbers);

/* Decision Structure */
function getTotal (){
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if(document.getElementById("number").checked); {
    subtotal = subtotal - subtotal * 0.2
}
    document.getElementById("total").textContent = '${subtotal.toFixed(2)}';
}
document.getElementById("getTotal").addEventListener("click , getTotal")

/* ARRAY METHODS - Functional Programming */
    let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    console.log(numbersArray);

/* Output Source Array */
    var arrayElement = document.getElementById("Array");

/* Output Odds Only Array */
    document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Evens Only Array */
    document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
    numbersArray.reduce((sum , number) => sum + number);


/* Output Multiplied by 2 Array */
    numbersArray.map(number => number * 2);
    document.getElementById('multiplied').innerHTML = multipliedArray.join (',');

/* Output Sum of Multiplied by 2 Array */
    const multipliedArray = originalArray.map(element => element * 2);
    const sumofMultipliedArray = multipliedArray.reduce((accumulator  , currentValue) => accumulator + currentValue, 0);
    document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;




