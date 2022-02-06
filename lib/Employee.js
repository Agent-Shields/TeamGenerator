class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }

    getName(questionsData) {
        this.name = questionsData.employeeName;
        console.log(this.name);
    }

    getID(questionsData) {
        this.ID = questionsData.employeeID;
        console.log(this.ID);
    }

    getEmail(questionsData) {
        this.email = questionsData.employeeEmail;
        console.log(this.email);
    }

    getRole(questionsData) {
        this.role = questionsData.employeeRole;
        console.log(this.role);
    }
};



// Employee.prototype.getName = function(questionsData) {
//     // this will return the name from inquirer response data
//     console.log(`The employee's name is ${questionsData.employeeName}`)
// };

// Employee.prototype.getId = function(questionsData) {
//     console.log(`The employee's ID is ${questionsData.employeeID}`)
// };

// Employee.prototype.getEmail = function(questionsData) {
//     console.log(`The employee's email address is ${questionsData.employeeEmail}`)
// };

// Employee.prototype.getRole = function(questionsData) {
//     console.log(`The employee's role is ${questionsData.employeeRole}`)
// };

module.exports = Employee;