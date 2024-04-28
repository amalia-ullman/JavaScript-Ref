const hourText = document.getElementById("hour");
const minuteText = document.getElementById("minute");
const secondText = document.getElementById("second");
const ampmText = document.getElementById("ampm");
const timezone = document.getElementById("timezone");
const now = new Date();

hour.textContent = now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2,});
minute.textContent = now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2,});
second.textContent = now.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2,});
checkAMPM();

function checkAMPM(){
    if(parseInt(hourText.textContent) < 12){
        ampmText.textContent = "AM";
    }
    else{
        if(parseInt(hourText.textContent) > 12){
            hourText.textContent = parseInt(hourText.textContent) - 12;
        }
        ampmText.textContent = "PM";
    }
}

function setTime(){
    seconds = parseInt(secondText.textContent);
    minutes = parseInt(minuteText.textContent);
    hours = parseInt(hourText.textContent);
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if (minutes == 60){
            minutes = 0;
            hours++;
            checkAMPM();
        }
    }

    hour.textContent = hours.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    minute.textContent = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    second.textContent = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    timezone.textContent = now.toLocaleDateString(undefined, {day: '2-digit', timeZoneName: 'long'}).substring(4);
}

setInterval(setTime, 1000);