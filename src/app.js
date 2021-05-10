function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
function displayTemp(response){
  console.log(response);
let temperatureElement = document.querySelector("#temp");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let precipitationElement = document.querySelector("#precipitation");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

  celTemp = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celTemp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  if (response.data.weather[0].id < 600) 
  {    precipitationElement.innerHTML = "rain";    };
  if (response.data.weather[0].id > 699)
  {  precipitationElement.innerHTML = "none"; };
  if (response.data.weather[0].id > 599 && response.data.weather[0].id < 700)
  {precipitationElement.innerHTML = "snow";};      
console.log(response.data.weather[0].id);
  
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

};
let apiKey=`51781a03b7d634472c63cc196a9cc04b`;
let city=`New York`
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);