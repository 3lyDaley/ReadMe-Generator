// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser= () => {
  console.log(`
=======================
Generate your ReadMe.md
=======================
`);
// ReadMe prompts
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
      validate: github => {
        if (github) {
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
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./readMe.md', fileContent, err => {

      // if theres an error, reject the Promis and send the err to the Promise's `.catch()` method
      if (err){
        reject (err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then(data => {
    return generateMarkdown(data)
  })
  .then(pageMarkdown => {
    return writeFile(pageMarkdown)
  })
  .catch(err => {
    console.log(err);
  })
}

// Function call to initialize app
init();

