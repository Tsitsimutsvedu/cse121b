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
    let addNumber1 = Number(document.querySelector('#subtract1').value);
    let addNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(addNumber1, addNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click' , subtractNumbers);

 /* Arrow Function - Multiply Numbers */
let multiply = (a,b) => a*b;

    let multiplyNumbers = ()=>{
        let multiplyNumber1 = Number(document.querySelector('#factor1').value);
        let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click, multiplyNumbers');

/* Open Function Use - Divide Numbers */
let divide = (a , b) => a / b;
function divideNumbers(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#dividend').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector("divideNumbers").addEventListener("click" , divideNumbers);

/* Decision Structure */
function getTotal (){
    let total = Number(document.querySelector("#subtotal").value);
    if(document.getElementById('member').checked); {
    total = total - (0.2 * total);
}
    document.getElementById('total').textContent = '${total.toFixed(2)}';
}
document.querySelector('#getTotal').addEventListener("click , getTotal")

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
    let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
   document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
    let oddNumbers = numbersArray.filter(number => number % 2 == 0);
    document.getElementById('odds').textContent = oddNumbers

/* Output Evens Only Array */
   let evenNumbers = numbersArray.filter(number => number % 2 === 0);
   document.getElementById('evens').textContent = evenNumbers

/* Output Sum of Org. Array */
    let sum = numbersArray.reduce((total, number) => total + number, 0);
    document.getElementById('sumOfArray').textContent = sum

/* Output Multiplied by 2 Array */
    let multipliedBy2 = numbersArray.map(number => number * 2);
    document.getElementById('multiplied').textContent = multipliedBy2

/* Output Sum of Multiplied by 2 Array */
    let SumMultipliedBy2 = numbersArray.map(number => number * 2).reduce((total, multipleOfTwo) => total + multipleOfTwo, 0)
    document.getElementById('sumOfMultiplied').textContent = SumMultipliedBy2
    




