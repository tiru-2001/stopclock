let display = document.querySelector(".display");
let start = document.querySelector(".start");
let stops = document.querySelector(".stop");
let clears = document.querySelector(".clears");
let interval;
let count = 0;
start.addEventListener("click", () => {
  if (count !== 0) {
    alert("timer is started");
    return;
  }

  interval = setInterval(() => {
    display.innerHTML = ++count;
  }, 1000);
});

stops.addEventListener("click", () => {
  clearInterval(interval);
});

clears.addEventListener("click", () => {
  count = 0;

  display.innerHTML = count;
});
