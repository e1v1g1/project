let num = 20;

function showFirstMessages(text) {
  console.log(text);
  console.log(num);
}

showFirstMessages("Hellow");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(5, 5));
console.log(calc(3, 3));
console.log(calc(2, 2));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("hello");
};

logger();

const calc = (a, b) => a + b;
console.log(calc(5, 4));
