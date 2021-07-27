// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage Information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution guidelines:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Test instructions:',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Choose a License:',
      name: 'license',
      choices: gm.SUPPORTED_LICENSES,
    },
    {
      type: 'input',
      message: 'Github username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Email:',
      name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, function(err, result) {
        if(err) console.log('error', err);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile("gen_README.md", gm.generateMarkdown(response))
        );
}

// Function call to initialize app
init();
