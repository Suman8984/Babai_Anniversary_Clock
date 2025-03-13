const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secHand.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minHand.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;

    const hours = now.getHours() % 12;
    const hoursDegrees = (hours * 30) + ((minutes / 60) * 30);
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();