//Swap the values of a and b without using a third variable
let a = 5;
let b = 9;
console.log("Before Swapping the values");
console.log("a, b = ", a , b);
a = a+b;
b = a-b;
a = a-b;
console.log("After Swapping the values");
console.log("a, b = ", a, b);

