// WORKING CODE
// function hiNum(x, y) {
// 	if (x > y) {
// 		console.log('The highest number is x which is ' + x);
// 	}
// 	else if (y > x) {
// 		console.log('The highest number is y which is ' + y);
// 	}
// 	else {
// 		y += x;
// 		console.log('The sum of x and y is ' + y);
// 	}
// }

// hiNum(3, 3);

//TRIAL CODE with issue
// let x = prompt("X is");
// x = Number(x); 
// let y = prompt("Y is"); 
// y = Number(y);

// function hiNum(x, y) {
// 	if (x > y) {
// 		console.log('The highest number is x which is ' + x);	//working
// 	}
// 	else if (y > x) {
// 		console.log('The highest number is y which is ' + y);	//working
// 	}
// 	else {
// 		y += x; //	y = y + x
// 		console.log('The sum of x and y is ' + y);	//issue is because anything you enter in a prompt is a string.

// 	}
// }

// hiNum(x, y);


// function hiNum(num1, num2) {
// 	if (num1 > num2) {
// 		console.log('The highest number is x which is ' + num1);
// 	}
// 	else if (num2 > num1) {
// 		console.log('The highest number is y which is ' + num2);
// 	}
// 	else if (num1 == num2) {
// 		console.log('Please give two different numbers');
// 	}
// 	else {
// 		y += x;
// 		console.log('The sum of x and y is ' + y);
// 	}
// }

// hiNum(200,2);
// hiNum(50, 980);
// hiNum(200, 200);

// function numOfChar(word) {
// 	console.log("The number of characters is " + word.length)
// }

// numOfChar('javascript');

function testAge(checkAge) {
	if (checkAge >= 18) {
		console.log(checkAge + " is a legal age.")
	}
	else {
		console.log(checkAge + " is a minor age.")
	}
}

testAge(24);

