'use strict';
let https = require('https');

const helpcrunchApiHost = 'helpcrunch.helpcrunch.com';
const helpcrunchApiPath = '/api/public/customers';
const helpcrunchApiKey = process.env.API_KEY;

let removedCustomersCounter = 0;
let proccessedCustomersCounter = 0;
module.exports = (customer) => {
	let customerEmail = customer['Email'] ? customer['Email'] : customer;
	let payload = JSON.stringify([{ email: customerEmail }]);
	let request = https.request({
	    host: helpcrunchApiHost,
	    path: helpcrunchApiPath,
	    method: 'DELETE',
	    headers: {
	      'Content-Type': 'application/json',
	      'Content-Length': Buffer.byteLength(payload),
	      'Authorization': 'Bearer api-key="' + helpcrunchApiKey + '"',
	    }
	}, (response) => {
		response.on('data', (chunk) => {
			if (chunk.indexOf('removed') != -1) {
				removedCustomersCounter++;
				console.log('Removed customer ' + customerEmail + ', total removed: ' + removedCustomersCounter + ', response: ' + chunk);
			} else {
		    	console.log(`Response: ${chunk}`);
			}
			proccessedCustomersCounter++;
			console.log('Total customers proccessed: ' + proccessedCustomersCounter);
		});
	});
	request.write(payload);
	request.end();
};
