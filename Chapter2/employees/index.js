const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {   
    const {db, connection} = await createMongoClient();

    const Employees = db.collection('employees');
    const res = await Employees.find({});
    const body = await res.toArray();

    connection.close();

    context.res = {
        status:200,
        body
    }
    
}