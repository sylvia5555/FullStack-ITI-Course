//  1
let fName = prompt("Enter ur first name..");
let lName = prompt("Enter ur last name..");
let confirmName = confirm("ur full name is " + fName + " " + lName);

let BYear = prompt("Enter ur birth year");
console.log("Welcome " + fName + " " + lName + ", " + (2023 - BYear) + " years old");

//  2
console.log("It’s the first release of a calculator that only has a summation feature.");
let fNum = prompt("Enter the first number..");
fNum = Number(fNum);// convert string to integer
let lNum = prompt("Enter the second number..");
lNum = Number(lNum); //convert string to integer

console.log("The summation result is " + (fNum + lNum))