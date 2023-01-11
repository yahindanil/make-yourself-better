import { secondsCounter } from "../Business logic/timerBusiness.js";

//Переименовать переменную
const time_display = document.querySelector(".timer");

const timer_start_btn = document.getElementById("timer-start-btn");
const timer_stop_btn = document.getElementById("timer-stop-btn");
const timer_reset_btn = document.getElementById("timer-reset-btn");

timer_start_btn.addEventListener("click", timerStartBrowser);
// timer_stop_btn.addEventListener("click", timerStop);
// timer_reset_btn.addEventListener("click", timerReset);

let interval = null;

function timerStartBrowser() {
  if (interval) {
    return;
  }

  interval = setInterval(changeTime, 1000);
}

function changeTime() {
  let seconds = secondsCounter();

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_display.innerText = `${hrs}:${mins}:${secs}`;
}
