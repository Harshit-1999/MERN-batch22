//1. Write a program to check whether a number is Even or odd
let num = 7;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Given an integer, check if it is divisible by 5 and 11.
let number = 55;
if (number % 5 == 0 && number % 11 == 0) {
    console .log ("divisible by both");
} else{
    console.log("not divisible");
}


//Check whether a number is positive, negative, or zero.

let n = 3;
if (n > 0) {
    console.log("positive");
}
else if (n < 0) {
    console.log("negative");
}

else {
    console.log("zero");
}

//Check if a number is divisible by 2, 3, and 5 at the same time.

let b  = 30;
if (b % 2== 0 && b % 3==0 && b % 5 == 0){
console.log("divisible by 2.3.5");
}
else {
    console.log("not divisible");
}

//5. Reverse a number without using built-in functions
let rev = 0;
let onumber = 123456;
while (onumber !=0){
    let digit = onumber % 10;
    rev = rev *10 + digit
}
