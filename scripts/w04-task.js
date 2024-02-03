/* LESSON 3 - Programming Tasks */

/* Profile Object  */

    let myProfile = {
    name: "Tsitsi Mutsvedu",
    photo: {
       src: "images/tsitsi.png",
       alt: "My Profile Picture",
    }

    favoriteFoods: ["rice", "stew", "eggs", "pap", "chips"],
    };

    hobbies: ["Reading", "Writing", "Hiking"],
    placesLived: [],
    myProfile.placesLived.push(
    {
        place: 'Zimbabwe',
        length: '30 years',
    },)

/* Populate Profile Object with placesLive objects */
    myProfile.places-Lived.push(
   {
    place: 'South Africa',
    length: '10 years',
   }
    );
/* DOM Manipulation - Output */
/* Name */
    document.querySelector('#name').textContent = '${myProfile.name}';
    
/* Photo with attributes */
    document.querySelector('#photo').scr = myProfile.photo.src;
    document.querySelector('#photo').lastChild.myProfile.photo.alt;

/* Favorite Foods List*/
    myProfile.favorite-Foods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
    
})

/* Hobbies List */

    hobbies:["Reading", "Writing", "Hiking"]
    myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
    })

/* Places Lived DataList */


