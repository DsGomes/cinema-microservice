require('dotenv-safe').config();
const MongoClient = require('mongodb').MongoClient;
let client = null;

async function connect(){
    console.log(process.env.MONGO_CONNECTION);
    if(!client)
        client = new MongoClient(process.env.MONGO_CONNECTION);

    await client.connect();
    return client.db(process.env.DATABASE);
}

async function disconnect(){
    if(!client) return true;
    await client.close();
    client = null;
    return true;
}

module.exports = { connect, disconnect }