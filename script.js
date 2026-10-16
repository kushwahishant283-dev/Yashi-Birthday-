function updateClockAndCheckBirthday() {
    const now = new Date();

    // 1. Clock functionality (Hours, Minutes, Seconds)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // AM/PM Format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'
    
    // Add leading zero if less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display clock in HTML element with id="clock"
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    // 2. Birthday Target Date: 10 January 2027, 00:00:00 (Midnight)
    // Note: Months are 0-indexed in JS (0 = January)
    const birthdayTime = new Date(2027, 0, 10, 0, 0, 0).getTime();
    const currentTime = now.getTime();

    // Agar current time target time ke barabar ya usse bada ho jaye
    if (currentTime >= birthdayTime) {
        const birthdayElement = document.getElementById('birthday-surprise');
        if (birthdayElement) {
            birthdayElement.style.display = 'block'; // Surprise show karein
        }
    }
}

// Har 1 second (1000ms) mein clock ko update aur time check karein
setInterval(updateClockAndCheckBirthday, 1000);

// Page load hote hi turant pehli baar chalayein taaki 1 second ka delay na dikhe
window.onload = updateClockAndCheckBirthday;
