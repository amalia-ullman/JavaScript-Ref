const hourText = document.getElementById("hour");
const minuteText = document.getElementById("minute");
const secondText = document.getElementById("second");
const ampmText = document.getElementById("ampm");
const timezone = document.getElementById("timezone");
const now = new Date();

hourText.textContent = now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2,});
minuteText.textContent = now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2,});
secondText.textContent = now.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2,});
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
    console.log("SetTime");
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

    hourText.textContent = hours.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    minuteText.textContent = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    secondText.textContent = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2,});
    timezone.textContent = now.toLocaleDateString(undefined, {day: '2-digit', timeZoneName: 'long'}).substring(4);
}

setInterval(setTime, 1000);