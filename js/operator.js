"use strict";

// if (4 == 4) {
//   console.log("OK");
// } else {
//   console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("OK");
// }

// const num1 = 60;
// num1 === 50 ? console.log("OK") : console.log("Error");

// const num2 = 100;

// switch (num2) {
//   case 49:
//     console.log("Неверно");
//     break;
//   case 100:
//     console.log("Неверно");
//     break;
//   case 50:
//     console.log("Верно");
//     break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }

// Cycles

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

let num = 50;

do {
  console.log(num);
  num++;
} while (num <= 55);

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }

  console.log(i);
}
