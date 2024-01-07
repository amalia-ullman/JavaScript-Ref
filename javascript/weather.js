const input = document.getElementById("searchInput");
input.addEventListener("keydown", function(e) {
    if(e.code == "Enter"){
        fetchWeatherData(location);
    }
});

async function fetchWeatherData(){

    const body = document.getElementById("body");
    body.classList.add('day');

    const location = document.getElementById("searchInput").value;
    const requestURL =  "https://api.weatherapi.com/v1/current.json?key=985a2db26c794b5ab87185757231012&q=" + location;
    fetchAstroData(location);
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    if(data.error){
        // console.error(`Unable to complete request. ${data.error.message}`);
        setErrorBadgeTo('visible');
    }
    else{
        setErrorBadgeTo('invisible');
        populateWeatherCard(data);
    }

}
function populateWeatherCard(obj){
    const card = document.getElementById('card');
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const forecast = document.getElementById('forecast');
    const icon = document.getElementById('icon');
    const humidity = document.getElementById('humidity');
    const time = document.getElementById('time');

    card.style.visibility="visible";
    city.textContent = obj.location.name;
    temp.textContent = obj.current.feelslike_f + "°F";
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    humidity.textContent = `Humidity: ${obj.current.humidity}%`
    time.textContent = `LocalTime: ${obj.location.localtime.slice(-5)}`
}

function setErrorBadgeTo(visibility){
    const errorbadge = document.getElementById("error-badge");

    let v = (visibility == 'visible' ? 'invisible' : 'visible');

    if(errorbadge.classList.contains(v)){
        errorbadge.classList.remove(v);
        errorbadge.classList.add(visibility);
    }
}

async function fetchAstroData(location){
    const requestURL = "https://api.weatherapi.com/v1/astronomy.json?key=985a2db26c794b5ab87185757231012&q=" + location;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    setBackgroundColor(data);
}

function setBackgroundColor(obj){
    const body = document.getElementById("body");
    if(obj.astronomy.astro.is_sun_up == 1){
        if(body.classList.contains('night')){
            body.classList.remove('night');
            body.classList.add('day');
        }
    }
    else{
        if(body.classList.contains('day')){
            body.classList.remove('day');
            body.classList.add('night');
        }
    }
}