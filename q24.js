"use strict";
/* Ques # 24:
   More conditional test:  you don't have to limit the number of tests you create to 10. if you want to try more comparision , write more test. have at least one true and one false result for each of the following:

   . Test for equality and inequality with strings.

   .Test using the lowercase functions.

   . Numerical test involving equality and inequality , greater than and less than, greater than and equal to, and less than and equal to.

   . Test using "and"  and "or" operators.

   . Test whether an item  is in a array.

   . Test whether an item is not in a array.*/
// test: === and !==//
const string0 = "Apple";
const string1 = "Mango";
console.log(string0 === string1);
console.log(string0 !== string1);
// test: lowercase//
const mixed_Case1 = "HelloWorld";
console.log(mixed_Case1.toLowerCase() === "helloworld");
// test: === , !==, >, <, >=, <=//
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// test:  && , || //
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
//{test:  is in  Array }, {is in not Array}//
const fruits = ["apple", "orange", "grapes", "pear"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("Apple"));
