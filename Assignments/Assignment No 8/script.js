// 1. Write a JS code to print numbers from 1 to 10

// for (let index = 1; index < 11; index++) {
//     console.log(index);
// }


// 2. Write a JS code to print Even numbers in given array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function printEvenNumbers(arr) {
//     arr.forEach(num => {
//         if (num % 2 === 0) {
//             console.log(num);
//         }
//     });
// }console.log("Even numbers in the array:");
// printEvenNumbers(numbers);


// 3. Write a JS code to delete all occurrence of element in given array

// let array = [1, 2, 3, 4, 2, 5, 2];
// let elementToRemove = 2;
// let resultArray = removeAllOccurrences(array, elementToRemove);

// function removeAllOccurrences(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             arr.splice(i, 1);
//             i--; 
//         }
//     }
//     return arr;
// }console.log(resultArray);


// 4. Write a JS code to find the power of a number using for loop

// let base = 2;
// let exponent = 3;
// let result = power(base, exponent);

// function power(base, exponent) {
//     if (exponent === 0) {
//         return 1; 
//     }
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base; 
//     }
//     return result;
// }console.log(result); 


// 5. Write a JS code to print a pattern using for loop
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */

// const rows = 8;

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += j + " ";
//     }
//     console.log(pattern);
// }


// 6. Write a JS code to find the no of digits in a number

// let number = 12345;
// let digitCount = countDigits(number);

// function countDigits(number) {
//     return number.toString().length;
// }console.log("Number of digits:", digitCount);


// 7. Write a JS code to calculate the sum of digits in a number

// let number = 12345;
// let digitSum = sumOfDigits(number);

// function sumOfDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }console.log("Sum of digits:", digitSum);


// 8. Write a JS code to find the largest number in an array

// let array = [3, 8, 2, 10, 5];
// let largestNumber = findLargestNumber(array);

// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//         return undefined;
//     }

//     let largest = arr[0];t
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }console.log("Largest number:", largestNumber);


// 9. Write a JS code to print the Fibonacci series for a given value of N

// let N = 10;
// let series = fibonacciSeries(N);

// function fibonacciSeries(n) {
//     let fibSeries = [];

//     if (n >= 1) {
//         fibSeries.push(0);
//     }
//     if (n >= 2) {
//         fibSeries.push(1);
//     }

//     for (let i = 2; i < n; i++) {
//         let nextFib = fibSeries[i - 1] + fibSeries[i - 2];
//         fibSeries.push(nextFib);
//     }

//     return fibSeries;
// }console.log("Fibonacci series for N =", N, ":", series);


// 10. Write a JS code to find duplicate values in a given array

// let array = [1, 2, 3, 4, 2, 5, 6, 4, 7, 7];
// let duplicateValues = findDuplicates(array);

// function findDuplicates(arr) {
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//                 duplicates.push(arr[i]);
//                 break;
//             }
//         }
//     }

//     return duplicates;
// }

// console.log("Duplicate values:", duplicateValues);


// 11. Write a JS code for Linear search algorithm

// let array = [4, 6, 2, 8, 3, 9, 5];
// let target = 8;
// let index = linearSearch(array, target);

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }


// 12. Write a JS code for Binary search algorithm

// let array = [1, 3, 5, 7, 9, 11, 13];
// let target = 9;
// let index = binarySearch(array, target);

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }
