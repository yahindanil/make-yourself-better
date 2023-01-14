import { secondsToString } from "../../Timer/Business logic/timerBusiness.js";

export function getRecordTime() {
  return secondsToString(localStorage.getItem("recodTimeLoacal"));
}

export function recordTimeResetBusiness() {
  localStorage.setItem("recodTimeLoacal", 0);
}
