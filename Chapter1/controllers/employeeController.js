let employees = [
    {empNumber:1,empName:"John Doe", empJobTile:"Software Engineer", empDepartment:"IT"},
    {empNumber:2,empName:"Jane Morris", empJobTile:"Business Analyst", empDepartment:"IT"},
    {empNumber:3,empName:"Evan Almighty", empJobTile:"HR Manager", empDepartment:"HR"}
];

const employeeController = {

    getEmployeeList: ()=>{
        return employees;
    },

    getEmployeeByNumber: (empNumber) =>{
        for(let employee in employees){
            if(employees[employee].empNumber === empNumber)
                return employees[employee];
        }
        throw 404;
    },

    createNewEmployee: (empDetails, id=null) =>{
        for(let employee in employees){
            if(employees[employee].empNumber === empDetails.empNumber)
                throw 409;
        }
        employees.push(empDetails);
    },

    updateEmployee: (empDetails) =>{
        for(let employee in employees){
            if(employees[employee].empNumber === empDetails.empNumber){
                employees[employee] = empDetails;
                return;
            }
        }
        throw 404;
    },

    deleteEmployee:(empNumber)=>{
        for(let employee in employees){
            if(employees[employee].empNumber === empNumber){
                employees.splice(employee,1)
                return;
            }
        }
        throw 404;
    }
}

module.exports = employeeController;