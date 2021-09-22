const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
    let exists = false;
    const {db, connection} = await createMongoClient();
    const Employees = await db.collection('employees');

    try{
        const body = await Employees.findOne({empNumber:req.body.empNumber});
        
        if(!('empNumber' in req.body))
            throw 400;
        else if(body) {
            exists = true;
            throw 400;
        }

        Employees.insertOne(req.body, (err, obj)=>{
            if(err){
                throw 500;
            }
            context.res = {
                status: 201,
                body:"Successfully created Employee"
            };
            return;
        })
    }
    catch(e){
        context.res = {
            status: e,
            body: exists ? "Employee already Exists" : "Missing Field (empNumber)"
        };
    }

    
}