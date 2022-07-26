const socialCat = document.getElementById("socialCat");
const trashCat = document.getElementById("trashCat");
const codingCat = document.getElementById("codingCat");
const essentialCat = document.getElementById("essentialCat");

const socials = document.querySelectorAll(".social");
const trashs = document.querySelectorAll(".trash");
const codings = document.querySelectorAll(".coding");
const essentials = document.querySelectorAll(".essential");

socialCat.addEventListener("click", () => {
  update(socials);
});
trashCat.addEventListener("click", () => {
  update(trashs);
});
codingCat.addEventListener("click", () => {
  update(codings);
});
essentialCat.addEventListener("click", () => {
  update(essentials);
});
function update(cat) {
  cat.forEach((val) => {
    if (val.classList.contains("none")) {
      val.classList.remove("none");
    } else {
      val.classList.add("none");
    }
  });
}
function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  hr = checkTime(hr);
  min = checkTime(min);
  document.getElementById("clock").innerHTML = hr + ":" + min;
  let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  let months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let date = curWeekDay + ", " + curDay + ". " + curMonth;
  document.getElementById("date").innerHTML = date;

  let time = setTimeout(function () {
    startTime();
  }, 500);
}
// Add Zero for Hours and Minutes < 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
