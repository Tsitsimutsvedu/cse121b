/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1 , number2) {
    return number1 + number2;
}
function addNumbers() {}
    var number1 = document.getElementById("add1").value;
    var number2 = document.getElementById("add2").value;
     if (!isNaN(number1) && !isNaN(number2)) {
        var result = parseFloat(number1) + parseFloat(number2);
        console.log("The sum is: " + result);
     }
     else{
        console.log("Please enter valid numbers.");
     }

     function addNumbers(){
        var number1 = document.getElementById("add1").value;
        var number2 = document.getElementById("add2").value;
        if (!isNaN(number1) && !isNaN(number2)) {
            var sum = add(parseFloat(number1) , parseFloat(number2));
            document.getElementById("sum").value = sum;
            
        } else {

        console.log("Please enter valid numbers.");

    document.getElementById("addnumbers").addEventListener("click", addNumbers);
    

     }
}

/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
