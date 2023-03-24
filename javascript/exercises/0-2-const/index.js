// #######################################
// #                                     #
// #            Circle Calculator        #
// #                                     #
// #######################################

let PI = 3.14159;
const radius = 5;
let area;

// Calculate the area of a circle using the formula A = πr^2
area = PI * radius * radius;

// Print out the area of the circle
console.log("The area of the circle is: " + area);

// Change the value of the radius variable
radius = 7;

// Recalculate the area of the circle using the same formula
area = PI * radius * radius;

// Print out the new area of the circle
console.log("The new area of the circle is: " + area);

// Declare a let variable
const num = 10;

// Try to change the value of the constant variable
// This will result in an error because constants cannot be reassigned
// PI = 3.14;

// Print out the value of the num variable
console.log("The value of num is: " + num);

// Change the value of the num variable
num = 15;

// Print out the new value of the num variable
console.log("The new value of num is: " + num);