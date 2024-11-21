const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
const weatherUp = document.querySelector(".weather-icon")
    
const apiKey="e3b36400f8b8531338772744f78b583b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 var data = await response.json();
  console.log(data);
  
  
 if(data.cod == 404){
   document.querySelector(".error").style.display ="block";
      document.querySelector(".weather").style.display ="none";
 }
 else{
      document.querySelector(".city").style.display ="block";
         document.querySelector(".error").style.display ="none";
  
  document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp-show").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity-percentage").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
  
  if(data.weather[0].main == "Clouds"){
    weatherUp.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherUp.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherUp.src = "images/clear.png";
  }
else if(data.weather[0].main == "Mist"){
    weatherUp.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherUp.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherUp.src = "images/snow.png";
  }
  
  
  document.querySelector(".weather").style.display = "block";
  
}
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
