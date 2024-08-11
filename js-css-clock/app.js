const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
   //console.log("Hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    //console.log(secondDegrees);

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    //console.log(minuteHand);

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000); // run setDate every second