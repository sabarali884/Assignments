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

// let inputAmount = prompt("Enter amount");

// function countMinimumNotes(amount) {
//     let notes = [5000, 1000, 500, 100, 50, 10, 5, 1];
//     let count = 0;
    
//     for (let i = 0; i < notes.length; i++) {
//         if (amount >= notes[i]) {
//             count += Math.floor(amount / notes[i]);
//             amount %= notes[i];
//         }
//     }
//         return count;
// }console.log(`Minimum number of notes required for amount ${inputAmount} is ${countMinimumNotes(inputAmount)}.`);


// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// const physicsMarks = prompt("Enter your physics marks");
// const chemistryMarks = prompt("Enter your chemistry marks");
// const biologyMarks = prompt("Enter your biology marks");
// const mathematicsMarks = prompt("Enter your mathematics marks");
// const computerMarks = prompt("Enter your computer marks");

// const result = calculateGrade(physicsMarks, chemistryMarks, biologyMarks, mathematicsMarks, computerMarks);

// function calculateGrade(physics, chemistry, biology, mathematics, computer) {
//     let totalMarks = physics + chemistry + biology + mathematics + computer;
//     let percentage = (totalMarks / 500) * 100;
//     let grade;

//     if (percentage >= 90) {
//         grade = 'A';
//     } else if (percentage >= 80) {
//         grade = 'B';
//     } else if (percentage >= 70) {
//         grade = 'C';
//     } else if (percentage >= 60) {
//         grade = 'D';
//     } else if (percentage >= 40) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     return { percentage, grade };
// }
// console.log(`Percentage: ${result.percentage}%`);
// console.log(`Grade: ${result.grade}`);


// 13. Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// const basicSalary = prompt("Enter salary");
// const grossSalary = calculateGrossSalary(basicSalary);

// function calculateGrossSalary(basicSalary) {
//     let hra, da;

//     if (basicSalary <= 10000) {
//         hra = 0.2 * basicSalary;
//         da = 0.8 * basicSalary;
//     } else if (basicSalary <= 20000) {
//         hra = 0.25 * basicSalary;
//         da = 0.9 * basicSalary;
//     } else {
//         hra = 0.3 * basicSalary;
//         da = 0.95 * basicSalary;
//     }

//     let grossSalary = basicSalary + hra + da;
//     return grossSalary;
// }
// console.log(`Gross salary for basic salary ${basicSalary} is ${grossSalary}.`);
