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
          "Apache 2.0 ",
          "Boost Software  1.0",
          "BSD 3-Clause ",
          "BSD 2-Clause ",
          "CC0",
          "Attribution 4.0 International",
          "Attribution-ShareAlike 4.0 International",
          "Attribution-NonCommercial 4.0 International",
          "Attribution-NoDerivates 4.0 International",
          "Attribution-NonCommmercial-ShareAlike 4.0 International",
          "Attribution-NonCommercial-NoDerivatives 4.0 International",
          "Eclipse Public License 1.0",
          "GPL v3",
          "GPL v2",
          "AGPL v3",
          "LGPL v3",
          "FDL v1.3",
          "Hippocratic 2.1",
          "Hippocratic 3.0",
          "IPL 1.0",
          "ICL",
          "MIT",
          "MPL 2.0",
          "Open Data Commons Attribution",
          "Open Database License (ODbL)",
          "Public Domain Dedication and License (PDDL)",
          "The Perl License",
          "The Artistic License 2.0",
          "Open Font-1.1",
          "Unlicense",
          "WTFPL",
          "Zlib",
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
        name: "linkedIn",
        message: "Please enter your email address:",
      },
    ])
  );
});

makeReadme.then((data) => {
  const readMe = `
  # Title (insert)

  ## Description

  (insert)

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  (insert)

  ## Usage

  (insert)

  ## Credits (optional)

  (insert)

  ## License

  (insert)

  ## Contributing

  (insert)

  ## Tests

  (insert)

  ## Questions

  (insert)

  `;

  fs.writeFile("README.md", readMe, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success!")
  })
});
