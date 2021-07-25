// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
      name: 'contributation',
    },
    {
      type: 'input',
      message: 'Test instructions:',
      name: 'test',
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
            writeToFile("gen_README.md", generateMarkdown(response))
        );
}

// Function call to initialize app
init();
