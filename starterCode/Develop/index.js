// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
const promptUser= () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else { 
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else { 
          console.log('Please enter your name!');
          return false;
        }
      }
    },
  ])
}

promptUser().then(console.log(answers));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
