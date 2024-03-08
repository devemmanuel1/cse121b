/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Emmanuel Onyenatuluchi Ezechukwu";
const currentYear = 2024; 
console.log(`It is now ${currentYear}`);
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute("src" , profilePicture);
imageElement.setAttribute("alt" , "profile image of ${fullname}");



/* Step 5 - Array */
const favoriteFoods = ["Yam" , "cake" , "Rice" , "Beans"];
const newfavoritefood = ["Sharwama"];
favoriteFoods.push(newfavoritefood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
