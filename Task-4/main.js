// 1

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);

const today = new Date();
console.log(today);

// 2

let name = "ilarion";

let upperName = name.toUpperCase();

console.log(upperName);

// 3
const input = document.getElementById("textInput");
const button = document.getElementById("saveButton");

button.addEventListener("click", () => {
  localStorage.setItem("savedText", input.value);
});

window.addEventListener("load", () => {
  const savedText = localStorage.getItem("savedText");
  console.log(savedText);
});

// 4

const alertButton = document.getElementById("alertButton");

alertButton.addEventListener("click", () => {
  alert("Hello JavaScript");
});

// 5

// const timer = setInterval(() => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }, 1000);
