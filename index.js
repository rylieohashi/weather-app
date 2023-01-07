let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();

let ampm = hours < 12 ? "AM" : "PM";
hours = hours > 12 ? hours - 12 : hours;
hours = hours == 0 ? 12 : hours;

let minutes = now.getMinutes();
minutes = String(now.getMinutes()).padStart(2, "0");

let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date} ${year}, ${hours}:${minutes} ${ampm}`;

let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-bar");
  let cityElement = document.querySelector(".city");
  let capitalizeCity =
    input.value.charAt(0).toUpperCase() + input.value.slice(1);
  cityElement.innerHTML = `${capitalizeCity}`;

  function changeTemp(response) {
    let currentTemp = Math.round(response.data.main.temp);
    let feelsLike = Math.round(response.data.main.feels_like);
    let changeCurrentTemp = document.querySelector(".currentTemp");
    let changeFeelsLike = document.querySelector(".feelsLike");
    changeCurrentTemp.innerHTML = `${currentTemp}°`;
    changeFeelsLike.innerHTML = `Feels like ${feelsLike}°F`;
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalizeCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(changeTemp);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
