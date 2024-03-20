/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector('#photo');
/* Profile Object  */ 
/* and */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Emmanuel Onyenatuluchi Ezechukwu",
    photo: {
        src: "images/profile.jpg",
        alt: "My profile Picture"
    },
    favoriteFoods: [
        "Rice",
        "Beans",
        "Bread",
        "Cake",
        "Yam",
        "Spaghetti"
    ], 

    hobbies: ["Traveling", "Listening to Music", "Coding", "Reading Mystery Novels"],
    placesLived: [
        { place: "Abuja, Nigeria", length: "1 year" },
        { place: "Enugu, Nigeria", length: "17 years" },
        { place: "Awka, Nigeria", length: "2 years" },
        { place: "Lagos, Nigeria", length: "1 year" },
        { place: "Ogun, Nigeria", length: "2 years" }
    ]
};


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let dl = document.querySelector("#places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
});

