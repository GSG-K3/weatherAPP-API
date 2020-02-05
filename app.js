let city =  document.getElementById("countryName");
let search = document.getElementById("searchButton");
let tempe = document.getElementById("weatherTemp");
let cityName = document.getElementById("cityName");
const windSpeed = document.getElementById("windSpeed");
const weatherStatus = document.getElementById("weatherStatus")
const flag = document.getElementById("countryFlag");
const humidity = document.getElementById("humidity");



function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  function showPosition(position) {
    window.lat = position.coords.latitude;
    window.lon = position.coords.longitude;
    console.log( window.lat); 
    console.log( window.lon); 
   searchF(); 
    // window.alert("Location Acquired: lat:"+lat+" lng:"+lon);
   
   }


search.addEventListener("click",searchF)

function searchF () {
    

event.preventDefault();
if(city == ""){// && document.getElementById('city').style.visibility != 'visible'){
	let link = 'https://api.openweathermap.org/data/2.5/weather?lat='+window.lat+'&lon='+window.lon+'139&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4'
    }
   
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value +'&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4'


let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
if(xhr.readyState==4 && xhr.status ==200){
const response = JSON.parse(xhr.responseText);

tempe.innerText = (response.main.temp + " °C")
cityName.innerText = response.name
weatherStatus.innerText = response.weather[0].description;
windSpeed.innerText = (response.wind.speed + " M/S");
country_code  = response.sys.country;
humidity.innerText = response.main.humidity
let flagLink = 'https://www.countryflags.io/'+country_code+'/shiny/64.png'
flag.src = flagLink;
}}
console.log(city.value);

xhr.open("GET", url)
xhr.send();
}