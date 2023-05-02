const api_key = 'c5d4324d31ad6eaeca31cd012419df07';
const weatherApi = document.getElementById('weatherApi');

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
        // commented out sections in this function are for if one was to not use the for loop in here. plz leave these lines commented out for study refrence (at least for now). 
        console.log(weather_data);
        // const infoLi =document.createElement('li')
        const descriptionLi =document.createElement('li')
        const iconimg =document.createElement('img')
        // infoLi.textContent="Humidity: "+weather_data.info.humidity
        descriptionLi.textContent="Current Weather: "+weather_data.description
        // url found in documentation here https://openweathermap.org/weather-conditions
        iconimg.src='https://openweathermap.org/img/wn/'+weather_data.icon+'@2x.png'
        weatherApi.appendChild(iconimg)
        weatherApi.appendChild(descriptionLi)
        let counter=0
        for (let key in weather_data.info) {
          if(counter<4){
            const infoLi =document.createElement('li')
            infoLi.textContent=key+": "+weather_data.info[key]
            weatherApi.appendChild(infoLi)
            counter++
          }
          // const element = weather_data.info[key];
          // console.log(element)
        // const infoLi =document.createElement('li')
        // infoLi.textContent=key+": "+weather_data.info[key]
        // weatherApi.appendChild(infoLi)
     
        }
      }
    })
    .catch(error => console.log(error));
}

getWeather('New York');
