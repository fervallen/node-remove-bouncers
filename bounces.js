let fileSystem = require('fs');
let removeCustomer = require('./remove-customer');
let customersCounter = 0;
let bounces = JSON.parse(fileSystem.readFileSync('data/bounces.json', 'utf8'));

bounces.items.forEach((item) => {
	customersCounter++;
	let timeout = 800 * customersCounter;
	setTimeout(() => {
		removeCustomer(item.address);
	}, timeout);
});