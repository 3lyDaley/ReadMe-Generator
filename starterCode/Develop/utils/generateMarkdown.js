// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.projectTitle}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  ${data.projectDescription}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributeos)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.projectUse}
  
  ## license 
    This application is covered by the ${data.license} license.


  ## Contributors
    ${data.projectContributors}

  ## Tests
    ${data.projectTesting}

  ## Questions
    ${data.userQuestions} <br/>
    </br>
    Find me on Github: [${data.github}](https://github.com/${data.github}
    )</br>
    </br>
    Contact By Email: ${data.email}</br></br>

    _This README was generated with ❤️ by [README-generator](https://github.com/3lyDaley/ReadMe-Generator)_
    `;
  }


module.exports = generateMarkdown;
