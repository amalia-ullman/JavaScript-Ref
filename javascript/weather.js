async function fetchWeatherData(){
    const requestURL =  "https://api.weatherapi.com/v1/current.json?key=985a2db26c794b5ab87185757231012&q=89141";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

}