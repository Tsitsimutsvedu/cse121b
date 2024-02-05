/* LESSON 3 - Programming Tasks */

/* Profile Object  */
    let myProfile = {
    myProfile.fullName = "Tsitsi Mutsvedu",
    photo = "images/tsitsi.png",
    favoriteFoods = ["rice", "stew", "eggs", "pap", "chips"],
    hobbies = ["Reading", "Hiking", "Photography"],
};
 /* Populate Profile Object with placesLive objects */
    myProfile.placesLived = [];
    myProfile.placesLived.push({ place: "Zimbabwe", length: "30 years" });
    myProfile.placesLived.push({ place: "South Africa", length: "12 years" });
// Add more places as needed

/* DOM Manipulation - Output */
/* Name */
    document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
    document.querySelector('#photo').scr = myProfile.photo.src;
    document.querySelector('#photo').lastChild.myProfile.photo.alt;


/* Favorite Foods List*/
    let favoriteFoodsList = document.getElementById("favorite-foods");
    myProfile.favorite-Foods.forEach((food) => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});
    
/* Hobbies List */
    hobbies:["Reading", "Writing", "Photography"]
    myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
    })

/* Places Lived DataList */


