/*
Basic Javascript Concepts: Strings

Task:
	1. Use string methods to check if the following strings are a part of the string `message`
		a. Hello
		b. aa
		c. Goo

	2. Write a program which counts the number of words in the array `words` that
		a. start with 're'
		b. end with 'ent'
	Note: For task 2, make sure that the string checking is done irrespective of the case (lowercase or uppercase)

	3. Perform the following operations on the string `joke` (case insensitive)
		a. For each letter in the English alphabet, display the first instance of its appearance in the string
		b. If there is no instance of the letter, do not display the same
	Ex: 
		If joke = 'Goose'
		Output:
			e: 4
			g: 0
			o: 1
			s: 3

Note: Your submissions must use string methods
*/

// Do not edit the code until mentioned
const message = 'Hello, World! This is Goose. Get your treats from Ankan when he goes "Aa..."';
const words = [
	...['Reject', 'Resent', 'Indent', 'Rent'],
	...['Right', 'Moment', 'Print', 'Reinvent'],
	...['Koala', 'Accent', 'Reprimand']
];
const joke = 'I spent hours looking far and wide for something which was right under my nose.';

// Write your code over here. Make sure to comment before each part.

//1. Use string methods to check if the following strings are a part of the string `message`
console.log(message.includes('Hello'));
console.log(message.includes('aa'));
console.log(message.includes('Goo'));
//2. Write a program which counts the number of words in the array `words` that
// a. start with 're'
	const startsWithRe = words.filter(word => word.toLowerCase().startsWith('re')).length;
	console.log(`Number of words that start with 're': ${startsWithRe}`);
// b. end with 'ent'
const endsWithEnt = words.filter(word => word.toLowerCase().endsWith('ent')).length;
console.log(`Number of words that end with 'ent': ${endsWithEnt}`);

/*3. Perform the following operations on the string `joke` (case insensitive)
		a. For each letter in the English alphabet, display the first instance of its appearance in the string
		b. If there is no instance of the letter, do not display the same */

const lowerCaseJoke = joke.toLowerCase();
			for (let i = 97; i <= 122; i++) {
				const char = String.fromCharCode(i);
				const index = lowerCaseJoke.indexOf(char);
				if (index !== -1) {
					console.log(char + ":" + `${index}`);
				}
			}