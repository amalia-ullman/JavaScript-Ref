async function fetchWeatherData(){
    const location = document.getElementById("searchInput").value;
    const requestURL =  "https://api.weatherapi.com/v1/current.json?key=985a2db26c794b5ab87185757231012&q=" + location;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    if(data.error){
        alert(`Unable to complete request. ${data.error.message}`);
    }
    else{
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

    card.style.visibility="visible";
    city.textContent = obj.location.name;
    temp.textContent = obj.current.feelslike_f + "°F";
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    humidity.textContent = `Humidity: ${obj.current.humidity}%`
}