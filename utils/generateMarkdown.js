// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)

## Description
${data.description}

## Installation
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

`;
}

module.exports = generateMarkdown;
