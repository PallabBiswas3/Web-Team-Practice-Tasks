/*
Basic Javascript Concepts: Functions

Task:
	1. Define a function `titleCase` which takes in a string and converts into title-case.
	Title case refers to only the first letter being capitalized. Example: "Deez nuts"

	2. Define a function `factorial` which operates using recursion to calculate the factorial of a natural numcber.

	3. Define a function `logger` which takes in arguments and displays them one by one. 
	Implement this using both the `function ()` notation and the ` => ` notation

Note: Your submission may use normal `function ()` definitions but it is advised 
that you use the arrow function notation generally.
*/

// Write your code over here. Make sure to comment before each part.

//1. Define a function `titleCase` which takes in a string and converts into title-case.
//	Title case refers to only the first letter being capitalized. Example: "Deez nuts"

const titleCase = (str) => {
				const words = str.toLowerCase().split(" ");

				for (let i = 0; i < words.length; i++) {
					if (words[i].length > 0) {
						words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
					}
				}

				return words.join(" ");
			};
	//2. Define a function `factorial` which operates using recursion to calculate the factorial of a natural numcber.

const factorial = (n) => {
				if (n === 0) {
					return 1;
				}
				return n * factorial(n - 1);
			};
	//3. Define a function `logger` which takes in arguments and displays them one by one.
	//	Implement this using both the `function ()` notation and the ` => ` notation

const logger = (...args) => {
				for (let i = 0; i < args.length; i++) {
					console.log(args[i]);	
				}
			};
function logger() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

