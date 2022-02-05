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
        }
    ])
}

promptUser();