/* W05: Programming Tasks */

/* Declare and initialize global variables */

/* async displayTemples Function */
const templesElement = document.querySelector('#temples');
let templeList = [];


/* async getTemples Function using fetch()*/
const displayTemples = (temples) => {
   temples.forEach(temple => {
    let article = document.createElement('article');

    let h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
   });


};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await  fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    templeList = await response.json();
    displayTemples(templeList);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
  templesElement.innerHTML = '';
};


/* filterTemples Function */
const filterTemples = (temples) => {
  reset();

  let filter = document.querySelector('#filtered').value;

  // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => filterTemples(templeList));

getTemples();