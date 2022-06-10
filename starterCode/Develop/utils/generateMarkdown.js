// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center"> ${answers.projectTitle} </h1>

  ## Description
  ${answers.projectDescription}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation
    ${answers.installation}

  ## Usage
    ${answers.projectUse}

  ## License 
    This application is covered by the ${answers.license} license.

  ## Contributors
    ${answers.projectContributors}

  ## Tests
    ${answers.projectTesting}

  ## Questions
    ${answers.userQuestions} <br/>
    </br>
    Find me on Github: [${answers.github}](https://github.com/${answers.github}
    )</br>
    </br>
    Contact By Email: ${answers.email}</br></br>

    _This README was generated with ❤️ by [README-generator](https://github.com/3lyDaley/ReadMe-Generator)_
    `;
  }


module.exports = generateMarkdown;
