import {
  getTime,
  resetTimerBusiness,
  setTimerStartDate,
  saveSecondsOnStop,
  resetSecondsOnStop,
} from "../Business logic/timerBusiness.js";

export let time = 0;

const time_display = document.querySelector(".timer");

const timer_start_btn = document.getElementById("timer-start-btn");
const timer_stop_btn = document.getElementById("timer-stop-btn");
const timer_reset_btn = document.getElementById("timer-reset-btn");

timer_start_btn.addEventListener("click", startTimerBrowser);
timer_stop_btn.addEventListener("click", timerStopBrowser);
timer_reset_btn.addEventListener("click", timerResetBrowser);

let interval = null;
let isIntervalRunning = false;

function startTimerBrowser() {
  if (isIntervalRunning) {
    return;
  }
  isIntervalRunning = true;

  setTimerStartDate();

  interval = setInterval(changeTime, 1000);
}

function changeTime() {
  time_display.innerText = getTime();
}

function timerStopBrowser() {
  clearInterval(interval);
  isIntervalRunning = false;
  saveSecondsOnStop();
}

function timerResetBrowser() {
  timerStopBrowser();
  time_display.innerText = resetTimerBusiness();
  resetSecondsOnStop();
}
