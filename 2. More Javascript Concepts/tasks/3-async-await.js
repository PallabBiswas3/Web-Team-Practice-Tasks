/*
More Javascript Concepts: async... await

Task:
	1. A coin flip is expected to take at least 2.6 seconds and at most 5 seconds. The time taken is somewhat random.
	Using the function coinFlipPromise which returns the coin flip after a given time, define a function `coinFlips`
	The function will take an argument `n` which defines the number of coin flips within a given time.
	The function must generate `n` coin flips one after the other and display the output of each of them.

	For example:
	coinFlips(2)

	Output:
	Heads		(at t = 3.47s)
	Heads		(at t = 8.62s)

	Note: The time (t = x s) does not have to be displayed 

	2. Rewrite the function `responseHandler` into an async function `asyncResponseHandler`
*/

// Do not edit the code until mentioned

const coinFlipPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
			resolve(result);
		}, Math.random() * 2400 + 2600);
	});
}
// Write your code over here. Make sure to comment before each part.

// 1. Define `coinFlips` function to perform `n` coin flips sequentially with random time delays
const coinFlips = async (n) => {
    for (let i = 0; i < n; i++) {
        const result = await coinFlipPromise(); // Wait for each flip to complete
        console.log(result); // Display the result (either "Heads" or "Tails")
    }
};


// 2. Rewrite `responseHandler` as an async function `asyncResponseHandler`
async function asyncResponseHandler() {
    try {
        const response = await fetch("url");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("The request ended in an error.");
    }
}

