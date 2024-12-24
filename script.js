function getWeather(){
    const apiKey = "62805aa522470b49af3cb4672b0c87c8";
    const city = document.getElementById("city").value;

    if(!city){
        alert("Please enter a city!");
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching current weather data",error);
            alert("Error fetching current weather data");
        });
    
    fetch(ForecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error("Error fetching hourly forecast data",error);
            alert("Error fetching hourly forecast data");
        });

}
