const newYear = new Date ("dec 31, 2023 00:00:00").getTime();

const days1 = document.querySelector(".day");
const hours1 = document.querySelector(".hour");
const minut1 = document.querySelector(".minute");
const second1 = document.querySelector(".second");

function timecountDown(){
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSecond = (newYearDate - nowDate)/1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600 % 24);
    const minutes = Math.floor(totalSecond / 60 ) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    days1.textContent = formateTime(days);
    hours1.textContent = formateTime(hours);
    minut1.textContent = formateTime(minutes);
    second1.textContent = formateTime(seconds); 
}

function formateTime(time){
    return time > 10 ? time: `${time}`
}

timecountDown()
setInterval(timecountDown, 1000)