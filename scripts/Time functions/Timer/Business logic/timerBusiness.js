if (!localStorage.getItem("localSecondsOnBrowserRestart")) {
  localStorage.setItem("localSecondsOnBrowserRestart", 0);
}

let secondsOnBrowserRestart = Number(
  localStorage.getItem("localSecondsOnBrowserRestart")
);

let timerStartDate;
let secondsSavedOnStop = 0;
let seconds = 0;

export function getTime() {
  let currentDate = new Date();
  seconds =
    Math.floor((currentDate - timerStartDate) / 1000) + secondsSavedOnStop;

  seconds += secondsOnBrowserRestart;

  localStorage.setItem("localSecondsOnBrowserRestart", seconds);

  return secondsToString(seconds);
}

export function secondsToString(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  return `${hrs}:${mins}:${secs}`;
}

export function setTimerStartDate() {
  timerStartDate = new Date();
}

export function saveSecondsOnStop() {
  secondsSavedOnStop = seconds;
}

export function resetTimerBusiness() {
  seconds = 0;
  secondsSavedOnStop = 0;
  localStorage.setItem("localSecondsOnBrowserRestart", 0);
}

// let timerStartDate;
// let secondsSavedOnStop = 0;
// let seconds = 0;

// export function getTime() {
//   let currentDate = new Date();
//   seconds =
//     secondsSavedOnStop + Math.floor((currentDate - timerStartDate) / 1000);

//   //Перевод seconds к формату "00:00:00"
//   let hrs = Math.floor(seconds / 3600);
//   let mins = Math.floor((seconds - hrs * 3600) / 60);
//   let secs = seconds % 60;
//   if (secs < 10) secs = "0" + secs;
//   if (mins < 10) mins = "0" + mins;
//   if (hrs < 10) hrs = "0" + hrs;

//   return `${hrs}:${mins}:${secs}`;
// }

// export function setTimerStartDate() {
//   timerStartDate = new Date();
// }

// export function saveSecondsOnStop() {
//   secondsSavedOnStop = seconds;
// }

// export function resetTimerBusiness() {
//   seconds = 0;
//   secondsSavedOnStop = 0;
// }
