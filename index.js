//1. Declare variables and use the assignment operators ( print the results)

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

num1 += 5;
console.log(num1);
num2 -= 5;
console.log(num2);
num3 *= 2;
console.log(num3);
num4 /= 2;
console.log(num4);
num5 %= 3;
console.log(num5);

//2. Try out the two kind of alerts that have been studied.

window.alert('1. kind of alert');
alert('1.1 kind of alert');
let confirmAlert = window.confirm('2. kind of alert');
console.log(confirmAlert);

//3. Try out the different types of loggings in the console

console.error('Error log');

console.table(['black', 'white', 'blue']); // content is displayed as a table

//console.log(['black', 'white', 'blue']); - content is displayed as a list

let dog = {name:'Daisy', year:2017};
console.dir(dog);

console.info('Info: Homework_2');

console.time('script');
alert('Click to continue');
console.timeLog('script'); 
alert("Click on things");
console.timeEnd('script');


//* Bonus: Try and find out new types of loggings in the console

//Methods?
console.warn('Warning Message');
console.debug('Debugging');
//console.assert() - displays an error message if false
//console.trace() - displays a stack trace 
console.clear();

