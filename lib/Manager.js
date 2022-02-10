const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, ID, email, role, officeNo) {
        super(name, ID, email, role)
        this.officeNo = officeNo
    }

    getRole() {
        console.log(Manager.officeNo)
        return`Manager`
    }
};

module.exports = Manager;