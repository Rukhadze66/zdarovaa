// 1.

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button pressed");
});

// 2.

const input = document.getElementById("myInput");
input.addEventListener("blur", (event) => {
  console.log("blurred");
});

// 3.

let score = 54;

if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// 4.

let count = 30;
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
