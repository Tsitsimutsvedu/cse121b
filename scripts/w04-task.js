/* LESSON 3 - Programming Tasks */

/* Profile Object  */
    let myProfile = {
    name:  'Tsitsi Mutsvedu',
    photo: 'images/tsitsi.png',
    favoriteFoods: ["rice", "stew", "eggs", "pap", "chips"],
    hobbies: ["Reading", "Hiking", "Photography"],
    placesLived: []
    };

    /* Populate Profile Object with placesLive objects */
// Add more places as needed
    placesLived.push({ place: "Zimbabwe", length: "30 years" });
    placesLived.push({ place: "South Africa", length: "12 years" });

/* DOM Manipulation - Output */
/* Name */
    document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
    document.getElementById("name").textContent = myProfile.name;
    document.querySelector('#photo').scr = myProfile.photo.src;
    document.querySelector('#photo').lastChild.myProfile.photo.alt;


/* Favorite Foods List*/
    favoriteFoodsList = document.getElementById("favorite-foods");
    myProfile.favorite-Foods.forEach((food) => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
     
});
    
/* Hobbies List */
    hobbiesList = document.getElementById("hobbies");
    myProfile.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
    });

/* Places Lived DataList */
    placesLivedList = document.getElementById("places-lived");
    myProfile.placesLived.forEach((place) => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    const dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });



