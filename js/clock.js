
// Clock Edit
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate= new Date();
  const secRatio = currentDate.getSeconds() / 60;
  const minRatio = (secRatio + currentDate.getMinutes()) / 60;
  const hrRatio = (minRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secRatio);
  setRotation(minuteHand, minRatio);
  setRotation(hourHand, hrRatio);
}

function setRotation(el, rotationRatio) {
  el.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()