0. Run `npm i`
1. To download bounce data in JSON you need to call Mailgun API:  
`curl -s --user "api:key-111111111111111111111111111111111" -G https://api.eu.mailgun.net/v3/inner.helpcrunch-mail.com/bounces?limit=10000 > ./data/bounces.json`
2. Run `API_KEY=1111111111111111111111111111111111 node bounces.js`
3. Add CSV files to data folder (they must contain email field in csv)
4. Run `API_KEY=1111111111111111111111111111111111 node test-users.js`
