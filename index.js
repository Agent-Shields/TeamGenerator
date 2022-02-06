const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generateHTML = require('./src/page-template')
const generateEmployeeCard = require('./src/page-template')
const fs = require('fs');


// list of questions to be prompted regarding employee data
const questions = 
[
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You need to enter the employee's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: "What is the employee's ID?",
        validate: employeeIDInput => {
            if (employeeIDInput) {
                return true;
            } else {
                console.log("You need to enter the employee's ID!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the employee's email address?",
        validate: employeeEmailInput => {
            if (employeeEmailInput) {
                return true;
            } else {
                console.log("You need to enter the employee's email address!")
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        validate: employeeRoleInput => {
            if (employeeRoleInput) {
                return true;
            } else {
                console.log("You need to enter the employee's role!")
                return false;
            }
        }
    }
];

// ask questions to the user via inquirer
function promptUser() {
    return inquirer
    .prompt(questions)
    .then(questionsData => {
        let employee = new Employee(questionsData.employeeName, questionsData.employeeID, questionsData.employeeEmail, questionsData.employeeRole);
        employee.getName();
        employee.getID();
        employee.getEmail();
        employee.getRole();
    })
};

// var questionsAnswers = {};

// TODO: Create function to write HTML file to dist
const writeFile = (questionsData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generateEmployeeCard(questionsData), err => {
        if (err) {
            reject(err);
            return;
        }
        
        resolve({
            ok: true,
            message: "File created!"
        })
        })
    })
}

// starts asking questions upon node index.js invokation 
promptUser()
    // .then(writeFileResponse => {
    //     return writeFile()
    // });