const Employee = require('./Employee');
class Manager extends Employee {
    constructor(officeNo) {
        super()
        this.officeNo = officeNo
    }

    getRole() {
        console.log(Manager.officeNo)
        return`Manager`
    }
};

module.exports = Manager;