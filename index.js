
const { Client } = require('pg')
const fs = require('fs')

const config = {
    connectionString: 'postgres://postgres:password@localhost:5432/postgres?sslmode=require',
    ssl: {
        ca: fs.readFileSync('rootCA.crt').toString(),
    },
}

const client = new Client(config);

(async function () {
    await client.connect()
    console.log('connected')
})()