// 2

const sectionWrapper = document.querySelector(".wrapper");
const mail = document.getElementById("email");
const text = document.querySelectorAll(".text");
const btn = document.getElementById("submitBtn");

console.log(sectionWrapper);
console.log(mail);
console.log(text);
console.log(btn);

text.forEach((item) => {
  console.log(item);
});

// 3

sectionWrapper.style.border = "2px solid red";
sectionWrapper.style.padding = "10px";

text.forEach((text) => {
  text.style.color = "cyan";
});

btn.style.backgroundColor = "pink";
btn.style.color = "white";

// 4

const newElement = document.createElement("h3");

newElement.textContent = "User Panel";

newElement.setAttribute("class", "title");

sectionWrapper.append(newElement);
console.log(newElement);

// 5

mail.addEventListener("focus", () => {
  console.log("Input is focused");
});

// 6

submitBtn.addEventListener("click", () => {
  console.log("Button was pressed");
});
