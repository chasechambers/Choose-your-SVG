// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




const questions = inquirer
.prompt([
    {
        type: 'input',
        name: 'shape',
        message: 'What shape do you want?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What color do you want?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Chose a license type.',
        choices: ['Circle', 'Triange', 'Square']
      },
]);


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
