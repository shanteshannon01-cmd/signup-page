let clubName = "The Case File Club";
console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}

nextButton.addEventListener("click", showNextMeeting);

let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);