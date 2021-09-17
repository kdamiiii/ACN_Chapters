const {MongoClient} = require('mongodb');

const config = {
    url:"mongodb://localhost:27017/crud-serverless-mongodb",
    dbName:"crud-serverless-mongodb"
};

const createConnection = async() =>{
    const connection = await MongoClient.connect(config.url, {
        useNewUrlPArser: true
    });

    const db = connection.db(config.dbName);

    return {
        connection,
        db
    }

}

module.exports = createConnection;