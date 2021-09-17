const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
    const {id} = req.params;
    
    if(!id){
        context.res ={
            status: 400,
            body:"Incorrect Employee ID"
        }
        return ;
    }

    const {db, connection} = await createMongoClient();
    const Employees = await db.collection('employees');

    try{
        const body = await Employees.findOne({empNumber:parseInt(id)})
        connection.close();
        if(body){
            context.res ={
                status: 201,
                body
            }
        }
        throw 404
    }catch(e){
        context.log(e);
        context.res ={
            status: e,
            body:"Employee not found"
        }
    }
}