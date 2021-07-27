const  SUPPORTED_LICENSES = ["MIT", "BSD"];
const LICENSE_DATA = {
    "MIT":{
      badge:{
        img: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        url: 'https://opensource.org/licenses/MIT',
      },
      description: 'For details of the MIT licenses refer to: https://opensource.org/licenses/MIT'
    },
    "BSD": {
      badge:{
        img: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        url: 'https://opensource.org/licenses/BSD-3-Clause',
      },
      description: 'For details of the BSD licenses refer to: https://opensource.org/licenses/BSD-3-Clause'
    }
  };


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(LICENSE_DATA[license])
    return `[![License](${LICENSE_DATA[license].badge.img})](${LICENSE_DATA[license].badge.url})`;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(LICENSE_DATA[license])
    return `${LICENSE_DATA[license].badge.url}`;
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(LICENSE_DATA[license])
    return LICENSE_DATA[license].description;
  return "";  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

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

## License
${renderLicenseSection(data.license)}

## Questions
* Github: [${data.github}](https://github.com/${data.github}/)
* For any questions email me at ${data.email}
`;
}

module.exports = {
  SUPPORTED_LICENSES,
  generateMarkdown
};
