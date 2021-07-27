# 08-readme-generator
A command-line application that dynamically generates a professional README.md file from a user's input

## Table of Contents
* [General info](#general-info)
* [Recording](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)

## General Info
A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

A demo of this can be found on Github pages here: https://rgultiano.github.io/06-day-planner/

## Recording
Recording of the generator working can be found here:
https://drive.google.com/file/d/1BmVCv9qUjzg6M3QukrPJy1jK3hhNMuap/view

## Technologies
Project is created with:
* Nodejs
* Enquirer

## Setup
To run this project, just copy the contents and run `node index.js` in the root directory


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
