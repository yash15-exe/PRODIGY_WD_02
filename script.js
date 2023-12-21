let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

function startStopwatch() {
  timer = setInterval(updateTime, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCount = 1;
  updateDisplay();
  clearLapList();
}

function recordLap() {
  const lapTime = formatTime(hours, minutes, seconds);
  const lapList = document.getElementById("lapList");
  const listItem = document.createElement("li");
  listItem.textContent = `Lap ${lapCount}: ${lapTime}`;
  lapList.appendChild(listItem);
  lapCount++;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = formatTime(hours, minutes, seconds);
}

function clearLapList() {
  const lapList = document.getElementById("lapList");
  lapList.innerHTML = "";
}

function formatTime(hours, minutes, seconds) {
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}
