//Q1: Create a sample application in Typescript to find the factorial of a number. 
//(hint: initialize the no in a variable. No need to take input from user)
var num = 20;
var i;
var fact = 1;
for (i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log(fact);
