// Packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Text = require('./lib/text');


// Main function

const main = () => {

  const confirmAnswerValidator = async (input) => {
    if (input.length > 3) {
       return 'Please restrict answer to max of 3 characters';
    }
    return true;
 };


// Prompt user for answers

inquirer
  .prompt([
      {
        type: 'input',
        name: 'answerText',
        message: 'Enter up to three characters:',
        validate: confirmAnswerValidator
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your text?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want?',
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape?',
      }
  ])

  // Handling answers
  .then(answers => { 

   // Sets Shape and shape color

   let shape;
   switch (answers.shape) {
    case 'Circle': {
      shape = new Circle('60');
      break;
    }
    case 'Square': {
      shape = new Square();
      break;
    }
    case 'Triangle': {
      shape = new Triangle();
      break;
    }
  };
  shape.setColor(answers.shapeColor);

  // Sets answer text and text color

  const answerText = new Text(answers.answerText);
  answerText.setColor(answers.textColor);

  // Builds SVG Image file

  let svg = ""
  svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
  svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
  svg += '<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">\n'

  svg += `\t${shape.render()}\n`;
  svg += `\t${answerText.render()}\n`;
  svg += '</svg>'
   
   fs.writeFile('testSVG.svg', svg, (err) => {  
       // throws an error, you could also catch it here
       if (err) throw err;

  }
  );
});
};

// Runs function/program
main();