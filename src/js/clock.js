const handleHours   = document.getElementById('handle-hours');
const handleMinutes = document.getElementById('handle-minutes');
const handleSeconds = document.getElementById('handle-seconds');

const timeHours     = document.getElementById('time-hours');
const timeMinutes   = document.getElementById('time-minutes');
const timeSeconds   = document.getElementById('time-seconds');

let currentHours    = '00';
let currentMinutes  = '00';
let currentSeconds  = '00';


addEventListener('load', pageLoaded);


function pageLoaded()
{
    setInterval(refresh, 1000)
}

function refresh()
{
    updateLocalTime();
    updateTextClock();
    updateHoursHandle();
    updateMinutesHandle();
    updateSecondsHandle();
}

function updateHoursHandle()
{
    let deg = ((currentHours / 12) * 360) + ((currentMinutes / 60) * 30);
    handleHours.style.transform = `rotate(${deg}deg)`;
}

function updateMinutesHandle()
{
    let deg = ((currentMinutes / 60) * 360) + ((currentSeconds / 60) * 6);
    handleMinutes.style.transform = `rotate(${deg}deg)`;
}


function updateSecondsHandle()
{
    let deg = currentSeconds * 6;
    handleSeconds.style.transform = `rotate(${deg}deg)`;
}



function updateLocalTime()
{
    const date = new Date();

    currentHours   = date.getHours() + 1;
    currentMinutes = date.getMinutes();
    currentSeconds = date.getSeconds();
}


function updateTextClock()
{    
    timeHours.innerText   = currentHours < 10 ? `0${currentHours}` : currentHours;
    timeMinutes.innerText = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    timeSeconds.innerText = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
}