// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
const promptUser= () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your Project Title? (Required)',
      validate: projectTitle => {
        if (projectTitle) {
          return true;
        } else { 
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Briefly describe your project: (Required)',
      validate: projectDescription => {
        if (projectDescription) {
          return true;
        } else { 
          console.log('You need to enter a description.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process (if any)?'
    },
    {
      type: 'input',
      name: 'projectUse',
      message: 'What will this project be used for?'
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: 'input',
      name: 'projectContributors',
      message: 'Who contributed on this project, if any?'
    },
    {
      type: 'input',
      name: 'projectTesting',
      message: 'Are any tests included?'
    },
    {
      type: 'input',
      name: 'projectUse',
      message: 'What will this project be used for?'
    },
    {
      type: 'input',
      name: 'userQuestions',
      message: 'What do I do if I have an issue',
      validate: userQuestions => {
        if (userQuestions) {
          return true;
        } else { 
          console.log('Please include a form of user support.');
          return false;
        }
      }
    },
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
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser()
.then(answers => console.log(answers));