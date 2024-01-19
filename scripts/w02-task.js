/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables*/

const fullName = "Tsitsi Mutsvedu";
const currentYear = new Date().getFullYear();
const profilePicture = "images/tsitsi.png";
 
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = documentgetEementById("food");
const yearElement = document.querySelector("#year");
var imageElement = document.querySelector("#tsitsi.png");
 
/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
nameElement.innerHTML = <strong>${fullName}</strong>;
var currentYear = yearElement.textContent;
imageElement.setAttribute("src, images/tsitsi.png");
imageElement.setAttribute("alt", "Profile image of" + insertName);
 

/* Step 5 - Array */
var favouriteFoods = ["Pizza", "Burger", "Chips", "Bread", "Steak"];
var foodElement = document.getElementById("food");
var uIElement = document.createElement("ul");
for ( var i = 0; i <favouriteFoods.length; i++) {
    var IiElement = document.createElement("Ii");
    IiElement.textContent = favouriteFoods[i];
    uIElement.appendChild(IiElement);
    foodElement.innerHTML = "";
    foodElement.appendChild(uIElement);
}
var singleFavouriteFood = "Chips";

favouriteFoods.push(singleFavouriteFood);
console.log(favouriteFoods);

foodElement.innerHTML += "<br> ${favFoods}";

favouriteFoods.shift();
console.log(favouriteFoods);

var modifiedArrayString = favouriteFoods.join("<br>");
foodElement.innerHTML = modifiedArrayString;

favouriteFoods.pop();
console.log(favouriteFoods);

originalArray.push(finalModifiedFoods);
console.log(originalArray);






