const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Choices = require("inquirer/lib/objects/choices");

const employeeArr = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "manager",
      message: "Please enter the Manager's Name!",
      validate: (managerinput) => {
        if (managerinput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "please enter the Manager's ID!",
      validate: (IdInput) => {
        if (IdInput) {
          return true;
        } else {
          console.log("Please enter a valide ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "please enter the Manager's Email!",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the Manager's email!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "officeNumber",
      message: "please enter the Manager's office number!",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter a valide office number!");
          return false;
        }
      },
    },

    {
      type: "confirm",
      name: "confirmContinue",
      message: "Would you like to add another Employee?",
      default: true,
    },
    {
      type: "list",
      name: "moreEmployees",
      message: "Would you like to add another Employee? ",
      choices: ["Engineer", "Intern"],
      when: ({ confirmContinue }) => confirmContinue,
    },
  ])
  .then((answers) => {
    employeeArr.push(answers);
    // Use user feedback for... whatever!!
    if (answers.moreEmployees === "Engineer") {
      engineerPrompt();
    } else if (answers.moreEmployees === "Intern") {
      internPrompt();
    } else if (answers.confirmContinue === false) {
      endPrompt();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log(error);
    }
  });

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineer",
        message: "Please enter the Engineer's Name!",
        validate: (engineerinput) => {
          if (engineerinput) {
            return true;
          } else {
            console.log("Please enter the Engineer's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "please enter the Engineer's ID!",
        validate: (IdInput) => {
          if (IdInput) {
            return true;
          } else {
            console.log("Please enter a valide ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "please enter the Engineer's Email!",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "please enter the Engineer's github username!",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the Engineer's email!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmContinue",
        message: "Would you like to add another Employee?",
        default: true,
      },
      {
        type: "list",
        name: "moreEmployees",
        message: "Would you like to add another Employee? ",
        choices: ["Engineer", "Intern"],
        when: ({ confirmContinue }) => confirmContinue,
      },
    ])
    .then((answers) => {
      employeeArr.push(answers);
      // Use user feedback for... whatever!!
      if (answers.moreEmployees === "Engineer") {
        engineerPrompt();
      } else if (answers.moreEmployees === "Intern") {
        internPrompt();
      } else if (answers.confirmContinue === false) {
        endPrompt();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}

function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "Please enter the Intern's Name!",
        validate: (managerinput) => {
          if (managerinput) {
            return true;
          } else {
            console.log("Please enter the Intern's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "please enter the Intern's ID!",
        validate: (IdInput) => {
          if (IdInput) {
            return true;
          } else {
            console.log("Please enter a valide ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "please enter the Intern's Email!",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "please enter the name of the Intern's school!",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the Intern's school name!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmContinue",
        message: "Would you like to add another Employee?",
        default: true,
      },
      {
        type: "list",
        name: "moreEmployees",
        message: "Would you like to add another Employee? ",
        choices: ["Engineer", "Intern"],
        when: ({ confirmContinue }) => confirmContinue,
      },
    ])
    .then((answers) => {
      console.log(answers);
      employeeArr.push(answers);
      // Use user feedback for... whatever!!
      if (answers.moreEmployees === "Engineer") {
        engineerPrompt();
      } else if (answers.moreEmployees === "Intern") {
        internPrompt();
      } else if (answers.confirmContinue === false) {
        endPrompt();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}

function endPrompt() {
  console.log(employeeArr);
}
