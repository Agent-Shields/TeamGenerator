class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }

    getName() {
    console.log(`This employee's name is ${this.name}`)
    // return `${this.name}`;
    }

    getID() {
    console.log(`This employee's ID number is ${this.ID}`)
    // return `${this.ID}`;
    }

    getEmail() {
    console.log(`This employee's email address is ${this.email}`)
    // return `${this.email}`;
    }

    getRole() {
    // console.log(`This employee's role is ${this.role}`);
    return `${this.role}`;
    }
};

module.exports = Employee;