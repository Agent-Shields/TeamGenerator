const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(GitHub) {
        super()
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