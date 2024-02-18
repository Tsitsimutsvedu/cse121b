/* W06: Programming Tasks */

/* Declare and initialize global variables */

/* async displayProphets Function */
const templesElement = document.querySelector('#prophets');
let templeList = [];


/* async getProphets Function using fetch()*/
const displayProphets = (prophets) => {
   prophets.forEach(prophet => {
    let article = document.createElement('article');

    let h3 = document.createElement('h3');
    h3.textContent = prophet.prophetName;

    let img = document.createElement('img');
    img.src = prophet.imageUrl;
    img.alt = prophet.location;

    article.appendChild(h3);
    article.appendChild(img);

    prophetElement.appendChild(article);
   });


};

/* async getProphets Function using fetch()*/
const getProphets = async () => {
  try {
    const response = await  fetch("https://byui-cse.github.io/cse121b-ww-course/resources/prophets.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    prophetList = await response.json();
    displayProphets(prophetList);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the prophetsElement.
const reset = () => {
  templesElement.innerHTML = '';
};


/* filterProphets Function */
const filterProphets = (prophets) => {
  reset();

  let filter = document.querySelector('#filtered').value;

  // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        case 'Joseph Smith':
            displayProphets(prophets.filter(prophet => prophet.location.includes('Joseph Smith')));
            break;
        case 'Russell M Nelson':
            displayProphets(prophets.filter(prophet => !prophet.location.includes('Russell M Nelson')));
            break;
        case 'Brigham Young':
            displayProphets(prophets.filter(prophet => prophet.location.includes('Brigham Young')));
            break;
        case 'all':
            displayProphets(prophets);
            break;
    }
};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => filterProphets(prophetList));

getProphets();