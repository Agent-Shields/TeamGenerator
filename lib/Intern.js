const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, ID, email, role, school) {
        super(name, ID, email, role);
        this.school = school;
    }

    getSchool() {
        return `${this.school}`
    }

    getRole(){
        return `${this.role}`
    }
}

module.exports = Intern;