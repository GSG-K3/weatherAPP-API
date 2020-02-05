let city =  document.getElementById("countryName");
let search = document.getElementById("searchButton");
let tempe = document.getElementById("weatherTemp");
let cityName = document.getElementById("cityName");
const windSpeed = document.getElementById("windSpeed");
const weatherStatus = document.getElementById("weatherStatus")
const flag = document.getElementById("countryFlag");
const humidity = document.getElementById("humidity");
let url ;
var win = document.defaultView;

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  function showPosition(position) {
    win.lat = position.coords.latitude;
    win.lon = position.coords.longitude;
    console.log( win); 
    console.log( window); 
    // window.alert("Location Acquired: lat:"+lat+" lng:"+lon);
      searchF(); 

   }


search.addEventListener("click",searchF)


function searchF () {

console.log(city.value)
if(city.value == ""){// && document.getElementById('city').style.visibility != 'visible'){
	 url = 'https://api.openweathermap.org/data/2.5/weather?lat='+win.lat+'&lon='+win.lon+'139&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4'
   console.log(url)
} else {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value +'&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4'
   console.log(url)

    event.preventDefault();

  }

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
if(xhr.readyState==4 && xhr.status ==200){
const response = JSON.parse(xhr.responseText);

tempe.innerText = (response.main.temp + " °C")
cityName.innerText = response.name
weatherStatus.innerText = response.weather[0].description;
windSpeed.innerText = (response.wind.speed + " M/S");
country_code  = response.sys.country;
humidity.innerText = (response.main.humidity + " %" )
let flagLink = 'https://www.countryflags.io/'+country_code+'/shiny/64.png'
weatherMain = response.weather[0].main;
flag.src = flagLink;
document.getElementById('image').src = weatherImg(weatherMain);

}}

xhr.open("GET", url)
xhr.send();




function weatherImg (weather)  {
console.log(weatherMain);

    if(weather == "Clouds"){
        return "animated/cloudy.svg"	
    }
    else if(weather == "Rain"){
        return "animated/rainy-6.svg"	
    }
    else if(weather == "Mist"){
        return "animated/snowy-4.svg"	
    }
    else if(weather == "Clear"){
            return "animated/day.svg"
    }
    else if(weather == "Smoke"){
        return "animated/snowy-6.svg"	
    }
    else if(weather == "Drizzle"){
        return "animated/rainy-7.svg"	
    }
    else if(weather == "Thunderstorm"){
        return "animated/thunder.svg"		
    }
    return;

}
}