const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, ID, email, role, GitHub) {
        super(name, ID, email, role)
        this.GitHub = GitHub;
    }

    getGitHub() {
        return `${this.GitHub}`
    }

    getRole() {
        return `${this.Role}`
    }
}

module.exports = Engineer;