`use strict`

// fetch the data on Houston's weather through the API
function fetchTheWeather() {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=houston&appid=91f0cc711c2a566373edfab27b76f054&units=imperial")
        .then(function(response) {
        console.log(`Fetch response is: `, response);
        return response.json();
    }).then(function(data) {
        updateWeather(data);
        console.log(`Data is: `, data);
    });
}

// linking the info thats in the HTML
const weatherApp = document.querySelector(`#weatherApp`);
const getWeatherButton = document.querySelector(`#getWeather`);

// choosing the specific data we want and then assigning it to updateWeather
function updateWeather(data) {
    const theWeather = `The temperature for ${data.name} is ${data.main.temp}, but it feels like ${data.main.feels_like}. The humidity is currently at ${data.main.humidity}.`;
    weatherApp.innerText = theWeather
};

// button function
getWeatherButton.addEventListener(`click`, function() {
    fetchTheWeather();
}) 

// call the fetchtheweather function 
fetchTheWeather();
 



