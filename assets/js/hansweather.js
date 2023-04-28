const api_key = 'c5d4324d31ad6eaeca31cd012419df07';

function getWeather(new_york) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=c5d4324d31ad6eaeca31cd012419df07&units=imperial';
  fetch(url)
    .then(response => response.json())
    .then(data => {
       {
        const weather_data = {
          info: data.main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        };
        console.log(weather_data);
      }
    })
    .catch(error => console.log(error));
}

getWeather('New York');
