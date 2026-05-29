// 1.

let students = [
  "ana",
  "levani",
  "gio",
  "nuca",
  "alexandre",
  "ika",
  "sandro",
  "lizi",
];

const longWords = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].length > 4) {
    longWords.push(students[i]);
  }
}
console.log(longWords);

longWords.unshift("aqvsenti");
console.log(longWords);

longWords.push("shaqro");
console.log(longWords);

// 2.

let ages = [12, 25, 18, 31, 7, 44, 29, 16];

const newArr = ages.filter((num) => num % 2 !== 0);

console.log(newArr);

// 3.

let arrayOne = [15, 3, -8, 22, 1];
let arrayTwo = [7, -2, 30, 11, 5];

let mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);

mergedArray.sort((a, b) => b - a);
console.log(mergedArray);

for (let number of mergedArray) {
  console.log(number);
}
