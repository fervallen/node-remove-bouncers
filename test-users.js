let csv = require('csvtojson');
let removeCustomer = require('./remove-customer');
let customersCounter = 0;

csv().fromFile('data/test-users.csv').then((users) => {
	users.forEach((item) => {
		customersCounter++;
		let timeout = 800 * customersCounter;
		setTimeout(() => {
			removeCustomer(item);
		}, timeout);
	});
});
