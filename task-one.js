const day = document.getElementById("currentDayOfTheWeek");
const time = document.getElementById("currentUTCTime");

function getCurrentDay() {
    const currentDate = new Date();

    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfTheWeek[currentDate.getDay()];

    const currentSeconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const currentMilliseconds = currentDate.getUTCMilliseconds().toString();
    const currentMinutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const currentHours = currentDate.getUTCHours().toString().padStart(2, '0');

    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}:${currentMilliseconds}`;

    day.textContent = currentDay;
    time.textContent = currentTime;

    console.log(currentDay);
}

getCurrentDay();

setInterval(getCurrentDay, 1000);