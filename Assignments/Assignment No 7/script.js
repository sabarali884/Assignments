// // 1. Write a js program to find the maximum between two numbers.

// const number1 = prompt("Enter first number");
// const number2 = prompt("Enter second number");

// if (number2 > number1) {
//     console.log(`${number2} is greater then ${number1}`);
// } else if (number1 > number2) {
//     console.log(`${number1} is greater then ${number2}`);
// } else {
//     alert(`${number1} is equal to ${number2}`);
// }



// // 2. Write a js program to find the maximum between three numbers.

// const num1 = prompt("Enter first num");
// const num2 = prompt("Enter second num");
// const num3 = prompt("Enter third num"); 

// if (num1 > num2 && num1 > num3){
//     console.log(`${num1} is greater then ${num2} and ${num3}`);
// }else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is greater then ${num1} and ${num3}`);
// }else if(num3 > num1 && num3 > num2){
//     console.log(`${num3} is greater then ${num1} and ${num2}`);
// }else{
//     console.log(`All the nums are equal`);
// }



// // 3. Write a js program to check whether a number is negative, positive or zero.

// const price1 = prompt("Enter the price");

// if(price1 > 0){
//     console.log(`Positive`);
// }else if(price1 < 0){
//     console.log(`Negative`);
// }else{
//     console.log(`0`);
// }


// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// const n1 = prompt("Enter n1");

// if (n1 % 5 === 0 && n1 % 11 === 0) {
//     console.log(`${n1} is divisible by 5 and 11`);
// } else {
//     console.log(`${n1} is not divisible by 5 and 11`);
// }


// 5. Write a js program to check whether a number is even or odd

// const p1 = prompt("Enter p1");

// if (p1 % 2 === 0) {
//     console.log(`${p1} is even number`);
// } else {
//     console.log(`${p1} is odd number`);
// }


// 6. Write a js program to check whether a year is leap year or not.

// const year1 = prompt("Enter year");

// if ((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 ===0) {
//     console.log(`${year1} is a leap year`);
// } else {
//     console.log(`${year1} is not a leap year`);
// }


// 7. Write a js program to input any alphabet and check whether it is vowel or consonant.

// const alphabet = prompt("Enter an alphabet");

// if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u') {
//     console.log(`{alphabet} is a vowel`);
// } else {
//     console.log(`${alphabet} is consonent`);
// }


// 8. Write a js program to check whether a character is uppercase or lowercase alphabet.

// const inputCharacter = prompt("Enetr a character");

// function checkCase(character) {
//     if (character === character.toUpperCase()) {
//         return 'Uppercase';
//     } else {
//         return 'Lowercase';
//     }
// }console.log(`${inputCharacter} is ${checkCase(inputCharacter)}.`);


// 9. Write a js program to input the week number and print weekday.

// const inputWeekNumber = prompt("Enter a number");

// function printWeekday(weekNumber) {
//     if (weekNumber >= 1 && weekNumber <= 7) {
//         const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
//         return weekdays[weekNumber - 1];
//     } else {
//         return 'Invalid week number. Please enter a number between 1 and 7.';
//     }
// }console.log(`Weekday corresponding to week number ${inputWeekNumber} is ${printWeekday(inputWeekNumber)}.`);


// 10. Write a js program to input the month number and print the number of days in that month.

// const inputMonthNumber = prompt("Enter a month number");

// function printDaysInMonth(monthNumber) {
//     if (monthNumber >= 1 && monthNumber <= 12) {
//         const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//         return daysInMonth[monthNumber - 1];
//     } else {
//         return 'Invalid month number. Please enter a number between 1 and 12.';
//     }
// }console.log(`Number of days in month ${inputMonthNumber} is ${printDaysInMonth(inputMonthNumber)}.`);

// 11. Write a js program to count a minimum number of notes in a given amount.