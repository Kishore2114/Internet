// // Variables:
// 1. The three parts of js are basic, clientside, serverside
// 2. the 2 ways of include js inside html are using script tag inside the head and at the end of the html code
// 3. When there is a DOM present in the body and values are defined which are functions in the js file then we insert the script tag at 
// the end
// 4. Is not a identifiers are "1sum", "43", "total sum" which dont follow the rule for naming a identifiers
// => The rule for naming a identifiers are:
//         a. They can contain letters (A-Z, a-z), digits (0-9), underscores (_), or dollar signs ($).
//         b. They cannot start with a digit.
//         c. They cannot contain spaces.
//         d. They cannot be reserved keywords.
// 5. Variables can declared using "var", "let", "const" keywords
// 6. TRUE and FALSE are boolean values
// 7. The three ways of writing a strings in js are using single quotes, double quotes, backticks
// 8. two ways to create an array in JavaScript:
// => 1. Using the array literal: const myArray = ["Hello", "World", "!"];
//    2. 2. Using the Array constructor: const myArray = new Array("Hello", "World", "!");
// 9. let obj1 = {
//     name: 'X3',
//     brand: 'Realme',
//     year: 2020,
//     OS: 'UI12',
//     price: '30000'
// }

// Expression:
// 1. a) sum = 12 + 13, b) diff = 12 - 13, c) pro = 12 * 13, d) div = 12 / 13, e) pow = 12 ** 13
// 2. a) 1.5, b) 0.51, c) 0, d) 11
// 3. FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, TRUE
// 4. a) CLientSide, b) let sum = 12; let str = "The sum is 12"; let newStr = `This is the original string: ${str}`; console.log(newStr); c) 12
// 5. a) let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];, b) primeNumbers[4] += 1;, c) let lastElement = primeNumbers.pop();
// 6. let combinedArray1 = arr1.concat(arr2);
// 7. iPhone Apple , [ 'name', 'company', 'date', 'price', 'color' ]


// Conditional Statements:
// 1.
//     let num = 2;
//     if (num % 2 == 0) {
//         console.log('Even');
//     } else if (num % 2 == 1) {
//         console.log('Odd');
//     } else {
//         console.log('Invalid Input');
//     }
// 2. 
//     let year = 2024;
//     if (year % 4 == 0) {
//         console.log('It is leap year')
//     } else if (year % 4 == 1) {
//         console.log('It is not a leap year.')
//     } else{
//         console.log('Invalid input!')
//     }
// 3. 
//     let marks = 85;
//     let grade;
//     if (marks >= 80) {
//         grade = 'A'
//     } else if (marks > 60 && marks >= 79) {
//         grade = 'B'
//     } else if (marks < 60 && marks >= 40) {
//         grade = 'C'
//     } else if (marks < 40 && marks >= 0) {
//         grade = 'D'
//     } else {
//         console.log('Invalid marks')
//     }
//     console.log('Your Grade is:', grade);
// 4. 
//     let side_a = 8;
//     let side_b = 8;
//     let side_c = 9;
//     // In a scalene triangle, all the sides of a triangle are of different length.
//     // In an isosceles triangle, two sides of a triangle are of the same measure.
//     // In an equilateral triangle, all the sides of a triangle are of equal length.
//     if (side_a == side_b && side_b == side_c) {
//         console.log('It is equilateral triangle')
//     } else if (side_a == side_b || side_b == side_c || side_a == side_c) {
//         console.log('It is isosceles triangle')
//     } else {
//         console.log('It is scalene triangle')
//     }
// 5.
//     function convertToLetterGrade(numericalGrade) {
//         if (numericalGrade >= 90) {
//         return 'A'; // Grade 90 and above is an A
//         } else if (numericalGrade >= 80) {
//         return 'B'; // Grade 80-89 is a B
//         } else if (numericalGrade >= 70) {
//         return 'C'; // Grade 70-79 is a C
//         } else if (numericalGrade >= 60) {
//         return 'D'; // Grade 60-69 is a D
//         } else {
//         return 'F'; // Grade below 60 is an F
//         }
//     }
//     console.log(convertToLetterGrade(95));
// 6.
//     let day = 5;
//     switch(day) {
//         case 1: {
//             console.log('Monday')
//             break;
//         }
//         case 2: {
//             console.log('Tuesday')
//             break;
//         }
//         case 3: {
//             console.log('Wednesday')
//             break;
//         }
//         case 4: {
//             console.log('Thrusday')
//             break;
//         }
//         case 5: {
//             console.log('Friday')
//             break;
//         }
//         case 6: {
//             console.log('Saturday')
//             break;
//         }
//         case 7: {
//             console.log('Sunday')
//             break;
//         }
//     }
// 7.
//     let season = '12-3';
//     switch (season) {
//         case 4-5: {
//             console.log('It is Summer')
//             break;
//         }
//         case 6-9: {
//             console.log('It is Rainy')
//             break;
//         }
//         case 10-11: {
//             console.log('It is Post-monsoon')
//             break;
//         }
//         case 12-3: {
//             console.log('It is Winter')
//             break;
//         }
//     }
// 8. 
//     function priceDiscount(price) {
//         switch (price) {
//             case (price >= 0) && (price <= 100): {
//                 console.log('Zero discount');
//                 break;
//             }
//             case (price >= 101) && (price <= 500): {
//                 console.log('10%');
//                 break;
//             }
//             case (price >= 501) && (price <= 1000): {
//                 console.log('20%');
//                 break;
//             }
//             case (price >= 1001): {
//                 console.log('discount % off thier phone battery')
//             }
//         }
//     }
//     priceDiscount(510)
// 9. 
//     let month = 5;
//         switch(month) {
//             case 1: {
//                 console.log('Jan')
//                 break;
//             }
//             case 2: {
//                 console.log('Feb')
//                 break;
//             }
//             case 3: {
//                 console.log('Mar')
//                 break;
//             }
//             case 4: {
//                 console.log('Arp')
//                 break;
//             }
//             case 5: {
//                 console.log('May')
//                 break;
//             }
//             case 6: {
//                 console.log('Jun')
//                 break;
//             }
//             case 7: {
//                 console.log('Jul')
//                 break;
//             }
//             case 8: {
//                 console.log('Aug')
//                 break;
//             }
//             case 9: {
//                 console.log('Sep')
//                 break;
//             }
//             case 10: {
//                 console.log('Oct')
//                 break;
//             }
//             case 11: {
//                 console.log('Nov')
//                 break;
//             }
//             case 12: {
//                 console.log('Dec')
//                 break;
//             }
//         }
// 10. 
//     function areaOfbasic(shape) {
//         switch (shape) {
//             case 'cricle': {
//                 let cvalue = 5;
//                 return Math.PI * cvalue * cvalue
//                 break;
//             }
//             case 'sqaure': {
//                 let svalue = 7;
//                 return svalue * svalue
//                 break;
//             }
//             case 'triangle': {
//                 let bvalue = 4;
//                 let hvalue = 5;
//                 return 0.5 * bvalue * hvalue
//             }
//         }
//     }

// Loops:
// 1.
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }
// 2.
//     let n = 5;
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     console.log('Factorial of', n, 'is', fact);
// 3.
//     let x = 0;
//     let sum = 0;
//     let last = 100;
//     while (x <= last) {
//         sum = sum + x;
//         x++;
//     }
//     console.log('Total sum from 1 to 100 is:', sum);
// 4.
//     let number = 5;
//     let table = [];
//     for(let i = 1; i <= 10; i++) {
//         table.push(number * i);
//     }
// 5.
//     function prime(pnum) {
//         for(let i = 2; i * i < n; i++) {
//             if( n * i == 0) {
//                 return 'Not prime';
//             }
//         }
//         return 'Prime'
//     }
//     pnum(5)
// 6.
//     let a = 0;
//     let b = 1;
//     let sum = 0;
//     let endLimit = 5;
//     while (true) {
//         for (let i = 2; i <= endLimit; i++) {
//             sum = sum + i;
//             console.log(sum);
//         }
//     }
// 7.
//     function largeElement(arr) {
//         if (arr.lenght == 0) {
//             return 'Array is empty'
//         }
//         let largeest = arr[0];
//         for (let i = 1; i < arr.lenght; i++) {
//             if (arr[i] > largest) {
//                 largeest = arr[i];
//             }
//         }
//         return largest;
//     }
//     console.log('largest value is:', largeElement([3,5,7,2,8]));
// 8.
//     let str1 = 'harshith';
//     let count = 0;
//     for (let i = 0; i < str1.lenght; i++) {
//         switch(str1[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u': {
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// 9.
//     let nDigits = (num) => {
//         let nStr = num + '';// convert number to string
//         let sum = 0;
//         for(let i = 0; i < nStr.length; i++) {
//             sum = sum + Number(nStr[i]);
//         }
//         return sum;
//     }
// 10.
//     let palindrome = (str) => {
//         //reverse the string and check the given str and the reversed string are equal
//         let revStr = '';
//         for(let i = str.length - 1; i >= 0; i--) {
//             revStr += str[i];
//         }
//         if(str == revStr) {
//             return true
//         } else return false;
//     }

// Functions:
// 1.
//     function area(lenght, width) {
//         return lenght * width;
//     }
//     console.log(area(10, 5));
// 2.
//     function sumArray(a) {
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             sum = sum + a[i];
//         }
//         return sum;
//     }
//     console.log(sumArray([1, 4, 6, 9]));
// 3. 
//     function reverse(str) {
//         let revstr = "";
//         for (let i = str.length - 1; i>= 0; i--) {
//             revstr = revstr + str[i];
//         }
//         return revstr;
//     }
//     console.log(reverse("Dayananda"));
// 4.
//     let minMax = (a) => {
//         if(a.length == 0) return 'Empty array';
//         let min = a[0];
//         let max = a[0];
//         for(let i = 0; i < a.length; i++) {
//             if(a[i] > max) {
//                 max = a[i]
//             }
//             if(a[i] < min) {
//                 min = a[i]
//             }
//         }
//         return {
//             minimum: min,
//             maximum: max
//         }
//     }
// 5.
//     let reverse = (str) => {
//         let revStr = '';
//         for(let i = str.length - 1; i <= 0; i++) {
//             revStr += str[i];
//         }
//         return revStr;
//     }
// 7.
//     let gcd = (a, b) => {
//         //suppose a < b, then gcd(a, b) = gcd(a, r) where r is the remainder when b is divided by a, i.e. b = qa + r
//         //if either of a or b is equal to 0, then gcd is the non-zero number
//         if(a == 0) return b;
//         if(b == 0) return a;
//         let r;
//         if(a < b) {
//             r = b % a;
//             return gcd(a, r);//this is a function that calls itself. Such functions are called recursive functions. You can ignore this problem for this exam.
//         } else {
//             r = a % b;
//             return gcd(b, r); 
//         }
//     }
// 9.
//     let unique = (a) => {
//         //we create a new empty array and read elements from a and put it in new array if it is not already in the new array
//         let newA = [];
//         for(let i = 0; i < a.length; i++) {
//             //check if a[i] is already in newA or not
//             let isPresent = false;
//             for(let j = 0; j < newA.length; j++) {
//                 if(a[i] == newA[j]) {
//                     isPresent = true;
//                     break;//exit the loop
//                 }
//             }
//             if(!isPresent) {
//                 newA.push(a[i]);
//             }
//         }
//         return newA;
//     }
// 10.
//     let words = (sentence) => {
//         //assume for now that the sentence only contains single space to separate words.
//         let wds = [];
//         //loop to read characters from the sentence
//         let newWord = '';
//         let i = 0;
//         while(i < sentence.length) {
//             if(sentence[i] == ' ' || sentence[i] == '.') {
//                 //put the found word in wds array
//                 wds.push(newWord);
//                 //reset the newWord
//                 newWord = '';
//             } else {
//                 newWord += sentence[i];//read characters to form the word
//             }
//             i++;//move to the next character
//         }
//         return wds;
//     }
//     console.log(words("This is a new sentence."))