const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', (req,res)=>{
    res.send(employees);
});

router.get('/:empNumber', (req,res)=>{
    try{
        res.send(
            employeeController.getEmployeeByNumber(parseInt(req.params.empNumber))
        );
        
    }catch(e){
        res.status(e).send("Employee not Found");
    }
})

router.post('/create', (req,res)=>{
    try{
        employeeController.createNewEmployee(req.body);

        //Remove After-----------------
        console.log(employeeController.getEmployeeList());
        //Remove After-----------------

        res.send("Employee Successfully created");
    }catch(e){
        res.status(e).send("Employee already exists");
    }
});

router.put('/update', (req,res)=>{
    try{
        employeeController.updateEmployee(req.body);

        //Remove After-----------------
        console.log(employeeController.getEmployeeList());
        //Remove After-----------------
        
        res.send("Employee Successfully updated");
    }catch(e){
        res.status(e).send("Employee Does not exists");
    }
});

router.delete('/delete/:empNumber', (req,res)=>{
    try{
        employeeController.deleteEmployee(parseInt(req.params.empNumber));
        //Remove After-----------------
        console.log(employeeController.getEmployeeList());
        //Remove After-----------------
        res.send("Employee Successfully Deleted");
    }
    catch(e){
        res.status(e).send("Employee Does not exists");
    }
})

module.exports = router;