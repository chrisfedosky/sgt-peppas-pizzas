//Js playpen

/* arithmetic operators
+ - * / % remainder after division ** exponentiator */
const num1 = 10;
const num2 = 5;
const num3 = 100;

let result1 = num1 + num2 + num3;
let result2 = num1 - num3 + num2;
let result3 = num3 * num2 + num1;
let result4 = num1 / num2 - num3;
let result5 = num1 / 0;
let result6 = num3 % num2;
let result7 = num2 ** num1;

console.log(`If i add ${num1}, ${num2} and ${num3}, i get a total of ${result1}.`);
console.log(`If i subtract ${num3} from ${num1}, then add ${num2}, i get a total of ${result2}!`);
console.log(`If i multiply ${num3} by ${num2} and add ${num1}, do i get ${result3}?`);
console.log(`If i divide ${num1} by ${num2} and subtract ${num3}, i get ${result4}`);
console.log(`I drive an ${result5}.`);
console.log(`If i divide ${num3} by ${num2}, i have a remainder of ${result6}.`);
console.log(`${num2} to the power of ${num1} is ${result7}!`)