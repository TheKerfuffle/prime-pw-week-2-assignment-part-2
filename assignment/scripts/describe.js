// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare the variable name is the string 'Dane'
// We then check if the name variable is assigned the string value 'Mary'
// Since name is still 'Dane' the console will log the string 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we initialize the variable secret without assigning a value to it
// Then we declare the variable code to be the numerical value 123
// We then check to see if the code is exactly the number 123,
// since it is we assign the variable secret the string 'super'.
// We also multiply the variable code by 2 and assign it to that value, making it 246
// We then check to see if the value of code is greater than 250 which it is so
// We assign a new value to the variable secret making it 'duper'
// Then we log the value of secret to the console, meaning the console should spit out 'duper'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we declare 3 variables: isStudent is set to true, age is set to 34 and zip is set to 55407.
// Then we check to see if the variable isStudent is true AND that zip is greater than 80000
// Since zip is less than 80000 we move down to the next and check if isStudent is false or that age is less than 30
// Since neither of these conditions are met we move to the next where we check only whether isStudent is true
// Since it is true we log 'Welcome to Prime!' to the console.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo are assigned the wrong values
// should be:
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - We need to set colorTwo to purple as well
  // should also contain :
  // colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*

let temp = 40;
const time = 4;

// FIX - the || or operator should be the && and operator if we want to check for both conditions
// should be:
//
//if (temp > 39 && time >= 4) {
//  console.log('throw away the food!');
// }

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.

/*

let age = 21;
const minAge = 21;

// FIX - The condition not going to give us the desired console.log as it is
//    checking whether minAge is less than or equal to age,
//    not whether age is greater than or equal to minAge
//    Also, We need to swap the 'no entry' and 'enter' console.logs
//
// it should instead be:
//  if(age >= minAge) {
//  console.log('enter');
// } else {
//  console.log('no entry');
// }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
