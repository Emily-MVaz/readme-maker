const inquirer = require("inquirer");
const fs = require("fs");

const makeReadme = new Promise((res, rej) => {
  res(
    inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the Project title?",
      },
      {
        type: "input",
        name: "description",
        message: "Give a brief description of your project:",
      },
      {
        type: "input",
        name: "install",
        message:
          "Provide a step-by-step description of how to install and run your project:",
      },
      {
        type: "input",
        name: "usageInfo",
        message: "Provide instructions for use of your project and examples:",
        //how can i add screenshots?? move on for now
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license fr your Project:",
        choices: [
          "AGPL v3",
          "Apache 2.0",
          "Artistic-2.0",
          "BSD 3-Clause",
          "BSD 2-Clause",
          "CC0",
          "Eclipse Public License 1.0",
          "FDL v1.3",
          "GPL v3",
          "GPL v2",
          "IPL 1.0",
          "ICL",
          "LGPL v3",
          "MIT",
          "MPL 2.0",
          "ODbL",
          "PDDL",
          "Unlicense",
        ],
      },
      {
        type: "input",
        name: "contribution",
        message:
          "Provide any guidelines for other developers to follow when contributing to your code:",
      },
      {
        type: "input",
        name: "test",
        message: "Provide any tests and instructions on running them:",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
      },
    ])
  );
});

makeReadme.then((data) => {
  const readMe = `
  # ${data.title} 
  <a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license}-brightgreen"></a>
 
  
  ## Description

  ${data.description}
  
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usageInfo}
  
  ## License
  
  Licensed under the ${data.license} License
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  Visit my [GitHub](https://github.com/${data.github})
  
  If you have any additional questions please email me at ${data.email}
  
  `;

  fs.writeFile("README.md", readMe, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Done!");
  });
});
