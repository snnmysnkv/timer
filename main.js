const startbutton = document.querySelector('.startbutton')
const stopbutton = document.querySelector('.stopbutton')
const resetbutton = document.querySelector('.resetbutton')
const hourDisplay = document.querySelector('.hour span')
const minuteDisplay = document.querySelector('.minute span')
const secondDisplay = document.querySelector('.second span')
let hour = min = sec = 0;
let interval;


const doStartTime = () => {
    sec++
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
       min = 0;
       hour++;
    }
    if(hour == 24){
        hour = 0;
        min = 0;
        sec = 0;
    }
    setTimeDisplay();
    console.log(1);
}

const addEventListeners = () => {
    startbutton.addEventListener('click', function () {
        interval = setInterval(doStartTime, 1000);
    });
    stopbutton.addEventListener('click', stopTimer);
    resetbutton.addEventListener('click', resetTimer);
};

const setTimeDisplay = () => { 
    secondDisplay.textContent = formatValue(sec);
    minuteDisplay.textContent = formatValue(min);
    hourDisplay.textContent = formatValue(hour);
}
const formatValue = (time) => {
    return time.toString().padStart(2, '0')
}
addEventListeners()
function stopTimer(){
    clearInterval(interval)
}
function resetTimer(){
    stopTimer();
    sec = min = hour = 0;
    setTimeDisplay()
}