
const { Client } = require('pg')

const config = {
    connectionString: 'postgres://postgres:password@localhost:5432/postgres?sslmode=require',
}

const client = new Client(config);

(async function () {
    await client.connect()
    console.log('connected')
})()