let form = document.querySelector("form");

let dayValue = document.querySelector("#day");
let monthValue = document.querySelector("#month");
let yearValue = document.querySelector("#year");

let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");

let outputYears = document.querySelector("#YY");
let outputMonths = document.querySelector("#MM");
let outputDays = document.querySelector("#DD");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let d1 = parseInt(dayValue.value);
  let m1 = parseInt(monthValue.value);
  let y1 = parseInt(yearValue.value);

  let currentDate = new Date();
  console.log(currentDate);
  let d2 = currentDate.getDate();
  let m2 = 1 + currentDate.getMonth();
  let y2 = currentDate.getFullYear();

  let monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let isValid = true;

  if (isNaN(d1) || d1 < 1 || d1 > 31) {
    dayInput.classList.add("error");
    isValid = false;
  } else {
    dayInput.classList.remove("error");
  }

  if (isNaN(m1) || m1 < 1 || m1 > 12) {
    monthInput.classList.add("error");
    isValid = false;
  } else {
    monthInput.classList.remove("error");
  }

  if (isNaN(y1) || y1 >= y2) {
    yearInput.classList.add("error");
    isValid = false;
  } else {
    yearInput.classList.remove("error");
  }

  if (isValid) {
    
    if (d1 > d2) {
      d2 = d2 + monthList[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    outputYears.textContent = y;
    outputMonths.textContent = m;
    outputDays.textContent = d;

  } else {

    outputYears.textContent = "--";
    outputMonths.textContent = "--";
    outputDays.textContent = "--";
  }

});
