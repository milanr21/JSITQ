// # Reversing the string

// function reverseString(str) {
//   let str1 = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     str1 = str1 + str[i];
//   }
//   return str1;
// }

// let firstString = " This is the best dish";

// console.log(reverseString(firstString));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("milan"));

// Longest word in the javascript

// function longestWord(sentence) {
//   let words = sentence.split(" ");

//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(longestWord("This is the Nepal and Iloveit"));

// Checking if the number is palindrom of not

// function isPalindrome(intialStr) {
//   let str = intialStr.toLowerCase().replace(/[^0-9a-z]/g, "");

//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }

//     start++;
//     end--;
//   }
//   return true;
// }

// let a = isPalindrome("Madam, in Eden, I'm Adam");

// console.log(a); // Output: true

// function isPalindrome(Intialstr) {
//   let str = Intialstr.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reverseStr = str.split("").reverse().join("");

//   return str === reverseStr;
// }

// let str = "Madam, in Eden, I'm Adam";

// console.log(isPalindrome(str));

// Write a function to remove the duplicate elements from the array

// function duplicateRemoe(arr) {
//   let uniqueEl = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueEl.indexOf(arr[i]) === -1) {
//       uniqueEl.push(arr[i]);
//     }
//   }
//   return uniqueEl;
// }

// let arr1 = [
//   1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 1, 2, 1, 2, 2, 2, 1, 1,
// ];
// console.log(duplicateRemoe(arr1));

// function removeDuplicate(arr) {
//   let newArr = new Set(arr);
//   return [...newArr];
// }

// let arr1 = [1, 2, 3, 4, 5, 5, 5, 5, 5];
// console.log(removeDuplicate(arr1));

//

// function VowelsPresent(str) {
//   let vowels = ["a", "e", "i", "o", "u"];

//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(VowelsPresent("This is the best dish"));

// finding the largest element in array

// function isLargest(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// let a = [10, 3, 122, 43, 44, 9, 5, 50, 22, 5, 7];

// let result = isLargest(a);

// console.log(result);

// check if the number is prime or not

// function isPrime(x) {
//   if (x <= 1) {
//     return false;
//   }
//   for (let i = 2; i < x / 2; i++) {
//     if (x % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(19));

// function to calculate the factorial

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   } else {
//     return x * factorial(x - 1);
//   }
// }

// console.log(factorial(5));

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }

//   let fact = 1;

//   for (let i = 1; i <= x; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// console.log(factorial(5));

// write a program to remove all the whitespace characters from a string

// function removeWhiteSpace(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result += str[i];
//     }
//   }
//   return result;
// }

// let str1 = " This           is            the            best";

// let str2 = removeWhiteSpace(str1);

// console.log(str1);
// console.log(str2);

// function removeWhitespace(str) {
//   const result = str.replace(/\s/g, "");
//   return result;
// }

// const inputString = "This is the best dish";
// console.log(removeWhitespace(inputString));

// function sumOfEl(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }

//   return result;
// }

// let data = [1, 2, 3, 4, 5];

// console.log(sumOfEl(data));

// function average(arr) {
//   let result = 0;
//   let average;

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//     average = result / arr.length;
//   }
//   return average;

// }

// let data = [1, 2, 3, 4, 5];
// console.log(average(data))

// Bubble sort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let data = [12, 9, 2, 14, 4, 5, 9, 16, 31];

// console.log(bubbleSort(data));

// Check if the array is sorted or not sorted

// function isSorted(arr) {
//   for(let i = 1; < arr.length; i++) {
//     if(arr[i - 1] > arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function mergeArr(arr1, arr2) {
//   let finalArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     finalArr[i] = arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     finalArr[arr1.length + i] = arr2[i];
//   }
//   return finalArr;
// }

// let data1 = [1, 2, 3, 4, 5];
// let data2 = [6, 7, 8, 9, 10];

// console.log(mergeArr(data1, data2));

// removing the element

// function removeElement(arr, target) {
//   for (let i = arr.indexOf(target); i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   return arr;
// }

// let data = [1, 2, 3, 4, 5, 6, 100, 2, 4];
// let target = 100;
// console.log(removeElement(data, target));

// find the second largest elment in an array

// function findSecondLargest(arr) {
//   const sortedArr = arr.sort((a, b) => b - a);

//   let secondLargest = sortedArr[1];

//   return secondLargest;
// }

// let numbers = [1, 3, 4, 12, 31, 4, 1];

// console.log(findSecondLargest(numbers));

// finobacci series in the given function

// function finonacciSeries(n) {
//   var fibo = [0, 1];

//   for (var i = 2; i < n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

// var n = 10;
// console.log(finonacciSeries(n));
