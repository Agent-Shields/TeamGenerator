const inquirer = require('inquirer');

function Employee(name = '', ID = '', email = '') {
    this.name = name;

    this.ID = ID;
    this.email = email;
    console.log(this.name);
};

Employee.prototype.getName = function() {
     inquirer.prompt({
        type: 'text',
        name: 'name',
        message: "What is the employee's name?"
    })
    .then(({ name }) =>{
        this.name = new Employee(name);
    })
};

Employee.prototype.getId = function() {
     inquirer.prompt({
        type: 'text',
        name: 'employeeID',
        message: "What is the employee's ID number?"
    })
    .then(({ ID })=> {
        this.ID = Employee(ID);
    })
};

Employee.prototype.getEmail = function() {
     inquirer.prompt({
        type: 'text',
        name: 'employeeEmail',
        message: "What is the employee's email address?"
    })
    .then(({ email })=> {
        this.email = Employee(email);
    });
};

Employee.prototype.getRole = function() {
     inquirer.prompt({
        type: 'text',
        name: 'employeeRole',
        message: "What is the employee's role?"
    })
    .then(({ role })=> {
        this.role = Employee(role);
        console.log(Employee);
    })
};

module.exports = Employee;