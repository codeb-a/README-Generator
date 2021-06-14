const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = (answers) => {
    const license = answers.license === "none" ? "" : answers.license;
    const licenseBadge = answers.license === "none" ? null : `![Github License](https://img.shields.io/badge/License-${license}-yellow.svg)`
    return `# ${answers.title}
${licenseBadge}
## Description
${answers.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Known Bugs](#bug)
* [Questions](#Questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Known Bugs
${answers.bug}
## Questions
For additional information please contact me via GitHub at [https://github.com/${answers.github}](https://github.com/${answers.github}) or via email at [${answers.email}](mailto:${answers.email}?subject=[GitHub]%README%Generator).`
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project here.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the steps to install your product here.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input instructions on how to use your application.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: ['MIT', 'WTFPL', 'ISC', 'Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter in whether or not users can contribute to your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe your tests.'
        },
        {
            type: 'input',
            name: 'bug',
            message: 'Enter any bugs in your application.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub user name.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
    ])
    .then((answers) => {
        console.log(answers);
        const readmeMdPage = generateReadMe(answers)
        fs.writeFile('./assets/README.md', readmeMdPage, (err) => err ? console.log(err) : console.log('Successfully Generated'));
    });