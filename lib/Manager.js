const Employee = require('./Employee');
class Manager extends Employee {
    constructor(officeNo) {
        super()
        this.officeNo = officeNo
    }

    getRole() {
        return`Manager`
    }
};

module.exports = Manager;