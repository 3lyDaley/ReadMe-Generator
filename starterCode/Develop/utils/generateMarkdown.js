// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  `
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license === "Apache") {
    return `
      [Licence Link](https://choosealicense.com/licenses/apache-2.0/)
    `
  }
  else if (license === "Academic") {
    return `
      [Licence Link](https://choosealicense.com/licenses/afl-3.0/)
    `
  }
  else if (license === "GNU") {
    return `
      [Licence Link](https://choosealicense.com/licenses/lgpl-3.0/)
    `
  }
  else if (license === "ISC") {
    return `
      [Licence Link](https://choosealicense.com/licenses/isc/)
    `
  }
  else if (license === "MIT") {
    return `
      [Licence Link](https://choosealicense.com/licenses/mit/)
    `
  }
  else if (license === "Mozilla") {
    return `
      [Licence Link](https://choosealicense.com/licenses/mpl-2.0/)
    `
  }
  else if (license === "Open") {
    return `
      [Licence Link](https://choosealicense.com/licenses/osl-3.0/)
    `
  }

}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

  return `
  ## License 
    This application is covered by the ${answers.license} license.`
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = () => {
  return `
  # ${answers.projectTitle}

  ${renderLicenseBadge(license)}

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

    ${renderLicenseSection(license)}
    ${renderLicenseLink(license)}

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
