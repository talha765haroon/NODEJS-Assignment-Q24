/* Ques # 24:
   More conditional test:  you don't have to limit the number of tests you create to 10. if you want to try more comparision , write more test. have at least one true and one false result for each of the following: 

   . Test for equality and inequality with strings.

   .Test using the lowercase functions.

   . Numerical test involving equality and inequality , greater than and less than, greater than and equal to, and less than and equal to.

   . Test using "and"  and "or" operators.

   . Test whether an item  is in a array.

   . Test whether an item is not in a array.*/


 
          // test: === and !==//
   const string0: string = "Apple";
   const string1: string = "Mango";
   console.log(string0 === string1);
   console.log(string0 !== string1);

   

      // test: lowercase//
   const  mixedCaseString: string = "HelloWorld";
   console.log(mixedCaseString.toLowerCase() === "helloworld")


      // test: === , !==, >, <, >=, <=//
   const num1: number = 10;
   const num2: number = 5;

   console.log(num1 === num2);
   console.log(num1 !== num2);
   console.log(num1 > num2);
   console.log(num1 < num2);
   console.log(num1 >= num2);
   console.log(num1 <= num2);

      // test:  && , || //
  const condition1: boolean = true;
  const condition2: boolean = false;
  console.log(condition1 && condition2);
  console.log(condition1 || condition2);
  

     //{test:  is in  Array }, {is in not Array}//
const fruits: string[] = ["apple", "orange", "grapes", "pear"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("Apple"));
  




