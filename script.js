//document.getElementById("count-el").innerText = 5;
// change the count-el in HTML to reflect the new count

let countEl = document.getElementById("count-el"); // pass in arguments
console.log(countEl);

let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

let saveEl = document.getElementById("save-el");
console.log(saveEl);
// let clicks = 0;
// function increment() {
//   clicks = clicks + 1;
//   console.log(clicks);
//   console.log("You just clicked");
// }

// let strings = "Previous entries: 4 - 5 - 11 - ";

// let user = "david";
// let message = "you have three new notifications";
// console.log(user + ", " + message + "!");
