//functions


// function sum() {
// var a=prompt("Enter a number");
// var b=prompt("Enter another number");
// var c=parseInt(a) + parseInt(b); //parseInt converts the text/string into interger(numbers)
// document.write("sum of a and b is " + c + "<br>");
// }

// sum (); // calls the function

// sum(5,6);
// sum(30,20);
// sum(100,123);


// function sum(a,b) { // dummy parameter/argument
// var a,b,c; //local variable - activate only within this function
// var c= a + b; //parseInt converts the text/string into interger(numbers)
// document.write("sum of a and b is " + c + "<br>");
// }


// // global variable
// var a=prompt("Enter a number");
// var b=prompt("Enter another number");
// var c=sum(parseInt(a),parseInt(b));

// function sum(x,y) {
// 	return c=x+y;
// }

// document.write("the sum of a and b is " + c+ "<br>");

//example of passing a txt and a num nito a function

// var name=prompt("Enter name");
// var age=prompt("Enter age");
// var age=parseInt(age);

// hello(name,age);

// function hello(name , age){
// 	document.write("Hello " + name + "! <br>" + "You are " + age + "years old.<br>");
// }


//multipication
var a=prompt("Enter a number");
var b=prompt("Enter another number");
var c=multiply(parseInt(a),parseInt(b));

function multiply(x,y) {
 	return c=x*y;
 }

document.write("the multiply of a and b is " + c+ "<br>");





