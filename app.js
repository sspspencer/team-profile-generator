const fs = require("fs");
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
      name: "name",
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
    answers.role = "Manager";
    employeeArr.push(
      new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    );
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
        name: "name",
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
      employeeArr.push(
        new Engineer(answers.name, answers.id, answers.email, answers.github)
      );
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
        name: "name",
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
      employeeArr.push(
        new Intern(answers.name, answers.id, answers.email, answers.school)
      );
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

function writeHtmlFIle(content) {
  fs.writeFile(
    "/Users/roxan/Desktop/projects/team-profile-generator/index.html",
    content,
    (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      console.log("your file was successfully created!");
    }
  );
}

function endPrompt() {
  const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
    <title>Document</title>
  </head>
  <body>
  <header id="header">My Team</header>
  <section id="card-section">
  ${cardAppend()}
  </section>
  <script src="../team-profile-generator/app.js"></script>
  </body>
</html>
`;
  employeeArr.forEach((element) => console.log(element));
  for (let i = 0; i < employeeArr.length; i++) {
    console.log(employeeArr[i].getRole());
  }
  writeHtmlFIle(content);
}

function cardAppend() {
  console.log("hello");
  let arr = [];

  for (let i = 0; i < employeeArr.length; i++) {
    if (employeeArr[i].getRole() === "Manager") {
      let newCard = `<div class="card"><div class="card-header"><p class="header-item">${
        employeeArr[i].name
      }</p><p class="header-item">${employeeArr[
        i
      ].getRole()}</p></div><div class="card-body"><p class="body-item">ID: ${
        employeeArr[i].id
      }</p><p class="body-item">Email: <a href="mailto:${
        employeeArr[i].email
      }" target="_blank">${
        employeeArr[i].email
      }</a></p><p class="body-item">Office Number: ${
        employeeArr[i].officeNumber
      }</p></div></div>`;
      arr.push(newCard);
    } else if (employeeArr[i].getRole() === "Engineer") {
      let newCard = `<div class="card"><div class="card-header"><p class="header-item">${
        employeeArr[i].name
      }</p><p class="header-item">${employeeArr[
        i
      ].getRole()}</p></div><div class="card-body"><p class="body-item">ID: ${
        employeeArr[i].id
      }</p><p class="body-item">Email: <a href="mailto:${
        employeeArr[i].email
      }" target="_blank">${
        employeeArr[i].email
      }</a></p><p class="body-item">Github: <a href="https://github.com/${
        employeeArr[i].github
      }" target="_blank">${employeeArr[i].github}</a></p></div></div>`;
      arr.push(newCard);
    } else if (employeeArr[i].getRole() === "Intern") {
      let newCard = `<div class="card"><div class="card-header"><p class="header-item">${
        employeeArr[i].name
      }</p><p class="header-item">${employeeArr[
        i
      ].getRole()}</p></div><div class="card-body"><p class="body-item">ID: ${
        employeeArr[i].id
      }</p><p class="body-item">Email: <a href="mailto:${
        employeeArr[i].email
      }" target="_blank">${
        employeeArr[i].email
      }</a></p><p class="body-item">School: ${
        employeeArr[i].school
      }</p></div></div>`;
      arr.push(newCard);
    }
  }
  console.log(arr);
  return arr.join(" ");
}
