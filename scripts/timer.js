window.onload = function () {
  const time_el = document.querySelector(".timer");
  const best_time_el = document.querySelector(".best-time");
  const start_btn = document.getElementById("start");
  const stop_btn = document.getElementById("stop");
  const reset_btn = document.getElementById("reset");
  const best_time_reset_btn = document.getElementById("best-time-reset");

  let interval = null;

  let seconds;
  if (localStorage.getItem("timer") != null) {
    seconds = localStorage.getItem("timer");
    setTime(time_el, seconds);
  } else {
    seconds = 0;
  }

  let maxTime;
  if (localStorage.getItem("max-time") != null) {
    maxTime = localStorage.getItem("max-time");
    setTime(best_time_el, maxTime);
  } else {
    maxTime = 0;
  }

  start_btn.addEventListener("click", star);
  stop_btn.addEventListener("click", stop);
  reset_btn.addEventListener("click", reset);
  best_time_reset_btn.addEventListener("click", bestTimeReset);

  function timer() {
    seconds++;
    maxTime = seconds;

    setTime(time_el, seconds);
    setLoaclTimer();
  }

  // function setTime(timerElement) {
  //   let hrs = Math.floor(seconds / 3600);
  //   let mins = Math.floor((seconds - hrs * 3600) / 60);
  //   let secs = seconds % 60;

  //   if (secs < 10) secs = "0" + secs;
  //   if (mins < 10) mins = "0" + mins;
  //   if (hrs < 10) hrs = "0" + hrs;

  //   timerElement.innerText = `${hrs}:${mins}:${secs}`;
  // }

  function setTime(timerElement, timeType) {
    let hrs = Math.floor(timeType / 3600);
    let mins = Math.floor((timeType - hrs * 3600) / 60);
    let secs = timeType % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    timerElement.innerText = `${hrs}:${mins}:${secs}`;
  }

  function star() {
    if (interval) {
      return;
    }

    interval = setInterval(timer, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
    setBestTime();
  }

  function reset() {
    stop();
    setBestTime();
    seconds = 0;
    time_el.innerText = "00:00:00";
    localStorage.setItem("timer", 0);
  }

  function setBestTime() {
    if (localStorage.getItem("max-time") <= maxTime) {
      localStorage.setItem("max-time", maxTime);
      setTime(best_time_el, maxTime);
      console.log(localStorage.getItem("max-time"));
    }
  }

  function bestTimeReset() {
    best_time_el.innerText = "00:00:00";
    localStorage.setItem("max-time", 0);
  }

  function setLoaclTimer() {
    localStorage.setItem("timer", seconds);
  }
};

//1)При остановке или ресете переписывал  результат таймера в Лучшее время
//2)Лучшее время было сохранено а localStorage
//3)При запуске страницы сформировал "Лучшее время" из LocalStorage
//4)Сбрасывал лучшее время при нажатии на кнопку Reset
