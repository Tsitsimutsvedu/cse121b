import {getRandomVerse} from './bible_verses.js';
import {getBookId} from './bible_verses.js';

const API_KEY = 'b54ec5be8d47160c6d4c336205215f64';

let currentBibleID = "de4e12af7f28f599-01"
let currentBibleName = "King James Version";
let currentBook = 'John'
let currentChapter = "3";
let currentVerse = "16";


const verseTile = document.querySelector('.tile');


let englishBibles = [
    {
        "id": "de4e12af7f28f599-01",
        "name": "King James Version",
        "abbreviationLocal": "KJV",
    },
    {
        "id": "9879dbb7cfe39e4d-01",
        "name": "World English Bible",
        "abbreviationLocal": "WEB",
    },
    {
        "id": "085defac6e17b9eb-01",
        "name": "Turkish WEB",
        "abbreviationLocal": "YTC",
    },
    {
        "id": "685d1470fe4d5c3b-01",
        "name": "American Standard Version",
        "abbreviationLocal": "ASVBT",
    }

]

const changeBibleVersion = (selectedBibleName) => {
    let selectedBibleID = englishBibles.find(bible => bible.name === selectedBibleName).id;
    console.log(selectedBibleID);
    currentBibleID = selectedBibleID;
    currentBibleName = selectedBibleName;
    fetchVerse();

}


const displayVerse = (response_json) => {
    verseTile.innerHTML = "";
    const verse = document.createElement('p');
    const verseRefElement = document.createElement('p');

    verse.className = "verse";
    verseRefElement.className = "verse-ref";

    console.log(response_json);
    if (!response_json.data["passages"]) {
        verse.innerHTML = `No verse found due to copyright law. Refresh to get a new verse`;
        verseTile.appendChild(verse);
        return;
    }

    const passage = response_json.data["passages"][0];
    const verseRef = passage["reference"];
    const verseText = passage["content"];

    verse.innerHTML = verseText.replace(/\d+/g, '');
    verseTile.appendChild(verse);

    verseRefElement.innerHTML = verseRef;
    verseTile.appendChild(verseRefElement);


    const selectElement = document.createElement('select');
    const option = document.createElement('option');
    option.textContent = currentBibleName;
    selectElement.appendChild(option);

    englishBibles.forEach(englishBibles => {
        const option = document.createElement('option');
        if (englishBibles.name !== currentBibleName) {
            option.textContent = `${englishBibles.name}`;
            selectElement.appendChild(option);
        }
    });

    selectElement.addEventListener('change', function () {
        const selectedBible = this.value;
        changeBibleVersion(selectedBible);
    });
    verseTile.appendChild(selectElement);
}


const fetchVerse = async () => {
    let verseID = `${getBookId(currentBook)}.${currentChapter}.${currentVerse}`;
    console.log(verseID);
    let verseEndpoint = `https://api.scripture.api.bible/v1/bibles/${currentBibleID}/search?query=${verseID}`;

    try {
        const response = await fetch(verseEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': API_KEY,
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const response_json = await response.json();
        displayVerse(response_json);
        console.log(response_json);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

}

const randomVerse = getRandomVerse();
currentBook = randomVerse.book;
currentChapter = randomVerse.chapter;
currentVerse = randomVerse.verse;
fetchVerse();







