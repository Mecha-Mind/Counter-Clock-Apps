// Making CounterDown
// The End Of Counter
let countDown = new Date("May 30, 2022 23:59:59").getTime();

let count = setInterval( () => {
    // get Date Now 
    let dateNow = new Date().getTime()

    // Find Date Diff Between
    let dateDiff = countDown - dateNow;

    // get Time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / 1000 / 60);
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;

    if (dateDiff < 0) {
        clearInterval();
    }

}, 1000);

// package of bottom X 
let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 800) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}