let seconds = 0;
let timerStartDate;
let secondsSavedOnStop = 0;

export function getTime() {
  let currentDate = new Date();
  seconds =
    secondsSavedOnStop + Math.floor((currentDate - timerStartDate) / 1000);

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  return `${hrs}:${mins}:${secs}`;
}

export function resetTimerBusiness() {
  seconds = 0;
  return "00:00:00";
}

export function setTimerStartDate() {
  timerStartDate = new Date();
}

export function saveSecondsOnStop() {
  secondsSavedOnStop = seconds;
}

export function resetSecondsOnStop() {
  secondsSavedOnStop = 0;
}

// export function getTime() {
//   seconds++;

//   // переписать под Date
//   let hrs = Math.floor(seconds / 3600);
//   let mins = Math.floor((seconds - hrs * 3600) / 60);
//   let secs = seconds % 60;

//   if (secs < 10) secs = "0" + secs;
//   if (mins < 10) mins = "0" + mins;
//   if (hrs < 10) hrs = "0" + hrs;

//   return `${hrs}:${mins}:${secs}`;
// }
