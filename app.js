function updateWeatherInfo(response) {
    console.log(response.data);
    // pulls weather data or city searched
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city){
    let apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(updateWeatherInfo);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");
console.log(response.data.condition.description);
