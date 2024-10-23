/*
Basic Javascript Concepts: Arrays and Objects

Task:
	1. Using the `forEach` method on `accountSheet`, set a named value `expenditure` in each object.
	The value of the `expenditure` is `100 - balance`

	2. Using the `filter` and `map` methods, display an array of the names of those in `accountSheet`
	who have a balance greater than or equal to `50`.

	3. Using the spread operator, create objects for each broke member and add them to the account sheet.

	4. Display the array `accountSheet` after sorting iton the basis of
		a. remaining balance (increasing order)
		b. alphabetical order of name (in case of equal balance)

	5. Using `find` method, display the name of the person with the balance `94`

	6. Display the index of `Goose` in the accountSheet sorted solely based on the alphabetical order of name.

Note: Your submissions must use array and object methods
*/

// Do not edit the code until mentioned
const accountSheet = [
	{ name: 'Goose', balance: 53 },
	{ name: 'Panda', balance: 94 },
	{ name: 'Quack', balance: 4 },
	{ name: 'Ozone', balance: 20 }
];
const brokeWebDMembers = ['Symbiot', 'Koala', 'Diode'];
const brokeBalanceObject = { name: null, balance: 0, expenditure: 100 };

// Write your code over here. Make sure to comment before each part.
// 1. Using the `forEach` method on `accountSheet`, set a named value `expenditure` in each object.
// 	The value of the `expenditure` is `100 - balance`
	accountSheet.forEach((account) => {
				account.expenditures = 100 - account.balance;
			});
// 2. Using the `filter` and `map` methods, display an array of the names of those in `accountSheet`
// 	who have a balance greater than or equal to `50`.
const accountSheetMap = accountSheet
				.filter((account) => account.balance >= 50)
				.map((account) => account.name);
			console.log(accountSheetMap);

// 3. Using the spread operator, create objects for each broke member and add them to the account sheet.
brokeWebDMembers.forEach((member) => {
				accountSheet.push({ ...brokeBalanceObject, name: member });
			});
// 4. Display the array `accountSheet` after sorting items on the basis of
// 	a. remaining balance (increasing order)
// 	b. alphabetical order of name (in case of equal balance)
accountSheet.sort((a, b) => {
				if (a.expenditures > b.expenditures) {
					return -1;
				} else if (a.expenditures < b.expenditures) {
					return 1;}
				else{
					return 0;
				}}
			);
console.log(accountSheet);
accountSheet.sort((a, b)=>{ if (a.name > b.name) {
					return 1;
				} else if (a.name < b.name) {
					return -1;
				} 
				else {
					return 0;
				}
			});
console.log(accountSheet);
// 5. Using `find` method, display the name of the person with the balance `94`
console.log(accountSheet.find((account) => account.balance === 94).name);
// 6. Display the index of `Goose` in the accountSheet sorted solely based on the alphabetical order of name.
console.log(accountSheet.findIndex((account) => account.name === 'Goose'));
