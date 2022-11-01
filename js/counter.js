let countS = document.querySelector('#sec');
let countM = document.querySelector('#min');
let countH = document.querySelector('#hr');
let btns = document.querySelector('#btn1');
let btnend = document.querySelector('#btn2');


function countUp() {
  countS.innerHTML ++;
  if (countS.innerHTML == '60') {
    countM.innerHTML +=1
    countS.innerHTML = 0;
  }
  if(countM.innerHTML == '60') {
    countH.innerHTML ++;
    countM.innerHTML = 0;
  }
}
let inter= 0;
btns.addEventListener('click', function() {
  countS.innerHTML = 0;
  countM.innerHTML = 0;
  countH.innerHTML = 0;
  inter= setInterval(countUp, 1000);
  btns.style.display = 'none';
});
btnend.addEventListener('click', function() {
  clearInterval(inter);
  btns.style.display = 'inline-block';
  btnend.style.display = 'inline-block';
});