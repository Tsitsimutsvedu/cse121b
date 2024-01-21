/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables*/

const fullName = "Tsitsi Mutsvedu";
const currentYear = new Date().getFullYear();
const profilePicture = "images/tsitsi.png";
 
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
var foodElement = document.getElementById("food");
var yearElement = document.querySelector("#year");
var imageElement = document.querySelector(`img`);
 

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement = currentYear.textContent;
imageElement.setAttribute("src", "images/tsitsi.png");
imageElement.setAttribute("alt", `Profile image of" ${fullName}`);
 
/* Step 5 - Array */
var favouriteFoods = ["Pizza", "Burger", "Chips", "Bread", "Steak"];
foodElement.innerHTML = `${favouriteFoods}`

var singleFavouriteFood = "chips";
favouriteFoods.push(singleFavouriteFood);
foodElement.innerHTML += `<br> ${favouriteFoods}`;

favouriteFoods.shift();
foodElement.innerHTML += `<br> ${favouriteFoods}`;

favouriteFoods.pop();
foodElement.innerHTML += `<br> ${favouriteFoods}`;



