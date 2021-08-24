// console.log("Hello World");
// console.log("Using JavaScript");
// let name = "Peter Griffin";	//string
// let num1 = 12;				//numeric
// let num2 = 3;				//numeric
// console.log(num1 + num2);

// let x = 2;
// let y = 3;

// console.log(x);
// // expected output: 2

// console.log(x = y + 1); // 3 + 1
// // expected output: 4

// console.log(x = x * y); // 4 * 3
// // expected output: 12

// let bar = 5;

// Number + Number => addition
// bar += 2 is the same as bar = bar + 2// 7

//expected output is 7
// console.log(bar);

// bar -= 2;
// console.log(bar);

// bar *= 2;
// console.log(bar);

// bar /= 2;
// console.log(bar);

// Comparison Operators
// JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. 

//Equality Operator (==)
// console.log(1 == 1);
// // expected output: true

// console.log('1' == 1);
// // expected output: true

// //Strict Equality Operator (==)
// console.log(1 === 1);
// // expected output: true

// console.log('1' === 1);
// // expected output: false

//Inquality Operator (!=)
// console.log(1 != 2);
// // expected output: true

// console.log(1 != '1');
// // expected output: false

//Strict Inquality Operator (!==)
// console.log(3 !== '3');
// // expected output: true

// console.log(4 !== 3);
// // expected output: true

// Relational Operator
// Greater than operator (>)
// let x = 4;
// let y = 3;

// console.log(x > y);
// // expected output: true

// Greater than or equal Operator (>=)
// console.log(x >= y);
// // expected output: true

// console.log(y >= x);
// // expected output: false

// Less than Operator (>)
// console.log(y < x);
// // expected output: true

// Less than or equal Operator (>=)
// console.log(x <= y);
// // expected output: false

// console.log(x <= 10);
// // expected output: true

// Logic Operators
// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT). Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

// Logical AND (&&)
// console.log((19 > 11) && (23 < 50));
// // returns true

// Logical OR (||)
// console.log((19 > 11) || (23 < 50));
// // returns true

// console.log((19 > 11) || (23 === 50));
// // returns false

// Logical NOT (!)
// console.log(!(100 < 150))
// // returns false

// Conditional Statements
// In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. 
// Conditional statements allow us to represent such decision making in JavaScript, from the choice that must be made to the resulting outcome of those choices.

// If... Else If... Else statement
let x = 12;

if (x === 10) {
	console.log("Equal to 10");
}

else if (x > 10) {
	console.log("x is greater than 10");
}

else {
	console.log("x is less than 10");
}
