const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    if (this.github) {
      return this.github;
    }
    return false;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
