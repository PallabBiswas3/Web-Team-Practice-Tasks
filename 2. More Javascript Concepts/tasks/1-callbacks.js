/*
More Javascript Concepts: Callbacks, Timeouts and Intervals

Task:
*/

// Write your code over here. Make sure to comment before each part.
// 1. Define a function `callbackExecute` which takes two arguments, `message` and `callback`
// 	The function must first display the message and then execute the callback after 2 seconds.
function callbackExecute(message, callback) {
	console.log(message);
	setTimeout(() => {
		callback();
	}, 2000);
}
// 2. Define a function `timer` which takes in two arguments, `time` and `tick`
// 	Define a variable `count` with the initial value `0`.
// 	The timer will run for `time` seconds and every `tick` seconds, the `count` increases.
// 	Display the value of `count` at every tick. Once the time runs out, the program must stop executing.
const timer = (time, tick)=>{
	let count = 0;
	const timer = setInterval(() => {
		count++;
		console.log(count);
		if (count === time) {
			clearInterval(timer);
		}
	}, tick * 1000);
}



