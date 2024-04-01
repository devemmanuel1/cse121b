const apiKey = "e27272c3adf6542bba31092c2d2e54f1";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});