function displayTemp(response){
    console.log(response.data.main.temp);
};
let apiKey=`51781a03b7d634472c63cc196a9cc04b`;
let city=`New York`
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);