/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
templesElement.innerHTML = "Temple data goes here!";
var templeList = [];


/* async displayTemples Function */
var templeList = [];
const displayTemples = (temples) => {
for (let temple of temples) {
     }
};
templeList.push("Angkor Wat", "Borobudur", "Parthenon");
displayTemples(templeList);

/* async getTemples Function using fetch()*/
var temples = [
    {templeName: "Salt Lake Temple"},
    {templeName: "Rome Italy Temple"},
    {templeName: "Tokyo Japan Temple"}
  ];
    temples.forEach(function(temple) {
    var article = document.createElement("article");
    var h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    article.appendChild(h3);
    document.body.appendChild(article);
  });
  

/* reset Function */
var img = document.createElement("img");
img.src = temple.imageUrl;
img.alt = temple.location;
document.body.appendChild(img);


/* filterTemples Function */


getTemples();

/* Event Listener */
