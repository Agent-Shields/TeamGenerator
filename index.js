const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name",
            validate: nameInput =>  {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's employee ID?",
            validate: employeeIDInput =>  {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address?",
            validate: managerEmailInput =>  {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            validate: managerOfficeInput =>  {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        }
    ]);
}

promptUser();