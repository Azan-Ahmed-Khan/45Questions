let famousNames = "azan";
console.log(`\nIs famousName == "azan"? I predict true`);
console.log(famousNames == "azan");
console.log(`\nIs famousName != "azan"? I predict false`);
console.log(famousNames != "azan");


let fName = "AZAN";
console.log(`\nIs fName == "azan"? I predict true`);
console.log(fName.toLocaleLowerCase() == "azan");

console.log(`\nIs fName == "AZAN"? I predict true`);
console.log(fName == "azan".toUpperCase());


let numericNumber=6;
console.log(`\nIs numbericNumber == 6? I predict true`);
console.log(numericNumber == 6);
console.log(`\nIs numbericNumber != 6? I predict false`);
console.log(numericNumber != 6);
console.log(`\nIs numbericNumber >= 6? I predict true`);
console.log(numericNumber >= 6);
console.log(`\nIs numbericNumber <= 6? I predict true`);
console.log(numericNumber <= 6);

console.log(`\nIs numbericNumber >= 6 && <=6 ? I predict true`);
console.log(numericNumber <= 6 && numericNumber>=6);
console.log(`\nIs numbericNumber > 6 || <=6 ? I predict true`);
console.log(numericNumber > 6 || numericNumber<=6);

let numberArray=[2,4,6,8,10];
console.log(`\nIs numberArray include 6 ? I predict true`);
console.log(numberArray.includes(6));

console.log(`\nIs numberArray include 7 ? I predict false`);
console.log(numberArray.includes(7));