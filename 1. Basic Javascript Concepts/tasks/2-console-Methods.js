/*
Basic Javascript Concepts: console Methods

Task:
	1. Uncomment the `console.log` statement and note the observations of the output.
	2. Commment `console.log` and uncomment the `console.dir` statement. Note how the output is different in both cases.
	3. Uncomment `console.clear` and repeat the exercise. Note what changes in both cases.
*/

// Do not edit the code until mentioned

let family = {
	name: 'Victor Alexander',
	age: 53,
	family: [
		{
			name: 'Julia Alexander',
			age: 52,
			relationship: 'Wife',
			possessions: [
				'Purse',
				'Makeup',
				'Suitcase'
			]
		},
		{
			name: 'Franklin Richmond',
			age: 54,
			relationship: 'Brother',
			possessions: [
				'Wallet',
				'Flask',
				'Watch',
				'Monocle'
			]
		}
	],
	possessions: [
		'Wallet',
		'Briefcase',
		'Umbrella'
	]
}

// Edit the code beyond this point.

// console.clear()

/*
	If we uncomment `console.clear`, it will clear the console . But it should be written after `console.log` and `console.dir`
*/

// console.log(family);

/*
	We can see the Javascript object "family" in console
*/

// console.dir(family, { depth: null });

/*
	We can see the nested Javascript object "family" in console in detail
*/
