const apiKey = "7b13b4ee0ca21287922866bd239b0eda";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather_icon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather_icon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_icon.src = "img/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
