const APIKey="f872e331d0d2127159489956180d37b8";
const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Weather=document.querySelector(".weather");
const Temperature=document.querySelector(".temp");
const City=document.querySelector(".city");
const Humid=document.querySelector(".humidity");
const Wind=document.querySelector(".wind");
const Icon=document.querySelector(".weather-icon");
const Description=document.querySelector(".dsc");

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response=await fetch(URL + city + `&appid=${APIKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        Weather.style.display="none";
    }else{
        var data=await response.json();
        Description.innerHTML=data.weather[0].description;
        Temperature.innerHTML=Math.round(data.main.temp) +"°C";
        City.innerHTML=data.name;
        Humid.innerHTML=data.main.humidity + " %";
        Wind.innerHTML=data.wind.speed + " Km/h" ;

        if(data.weather[0].main == "Clouds"){
            Icon.src = "images/clouds.png";
        }else if (data.weather[0].main == "Rain"){
            Icon.src = "images/rain.png";
        }else if (data.weather[0].main == "Drizzle"){
            Icon.src = "images/drizzle.png";
        }else if (data.weather[0].main == "Clear"){
            Icon.src = "images/clear.png";
        }else if (data.weather[0].main == "Snow"){
            Icon.src = "images/snow.png";
        }else if (data.weather[0].main == "Mist"){
            Icon.src = "images/mist.png";
        }
        
        Weather.style.display="block";
        document.querySelector(".error").style.display="none";

    }
    

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
