// // const inquirer = require("inquirer");
// const fs = require('fs');

// const generateHTML = ({characters, textColor, shapeColor}) => 
//   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>

// </svg>`;

// inquirer
// .prompt([
//     {
//         type: "input",
//         message: "Enter up to three characters here",
//         name: "characters"
//     },
//     {
//         type: "input",
//         message: "Input your text color here",
//         name: "textColor"
//     },
//     {
//         type: "list",
//         message: "Select a shape",
//         name: "shape",
//         choices: ["Circle", "Triangle", "Square"]
//     },
//     {
//         type: "input",
//         message: "Select a color for the shape",
//         name: "shapeColor"
//     }
// ])

// .then((answers) => {
//     if (answers.characters.length > 3) {
//         throw error('No more than 3 Characters!');
// }

//     console.log(`Characters: ${answers.characters}!`),
//     console.log(`Text Color: ${answers.textColor}`),
//     console.log(`Shape: ${answers.shape}`),
//     console.log(`Shape Color: ${answers.shapeColor}`)


//    const htmlPageContent = generateHTML(answers);
//     console.log(htmlPageContent);

//     fs.writeFile('logo.svg', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Generated logo.svg')
//      )
// })      


const fs = require('fs');
// here we are requiring the file system so that we can use the write file function
// the right file function allows us to write the generated html on a new logo.svg file
const inquirer = require("inquirer");
// here we are requiring the inquirer so that we can use the prompt function
// the prompt function allows us to ask the user questions and store the answers
const {Circle, Square, Triangle} = require("./lib/shapes");
// here we are importing the circle square in triangle classes

inquirer
// here we are using inquirer to use a series of prompts
const prompts = [
   
// here we are creating a const called prompts and setting it equal to an array
            {
                type: "input",
                message: "Enter up to three characters here",
                name: "text"
            },
            {
                type: "input",
                message: "Input your text color here",
                name: "textColor"
            },
            {
                type: "list",
                message: "Select a shape",
                name: "userShape",
                choices: ["Circle", "Triangle", "Square"]
            },
            {
                type: "input",
                message: "Select a color for the shape",
                name: "shapeColor"
            }
        ];

    

    
       

//Function to write data to file
function writeToFile(newFile, content) {
    // here we are creating a function called write to file that will write to a new generated file and publish the content
    fs.writeFile(newFile, content, function (err) {
        if (err) {
            return console.log(err);
            // This will return an error message (if necessary) and tell us what the error is
        }
        console.log("SVG Successfully created!");
    });
}


class Svg{
    // here we are creating a new class called svg
    constructor(){
        // This svg will need a shape(square, circle, or triangle) and it will need text (3 characters)
        this.svgText = ''
        // here we are setting the text equal to an empty string
        this.svgShape = ''
        // here we are setting the shape equal to an empty string
    }
    render(){
        // here we are using a render function to print html on a page
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.svgShape}${this.svgText}/</svg>`
        // if this is the common template for an svg and we are setting the width to 300 px
        // and the height to 200 pixels as was requested in the acceptance criteria
    }
    setSvgText(text,color){
        this.svgText = `<text x="100" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        // here we are creating an svg text function that takes in text and color
        // this allows us to determine how big the text is and where it appears on the svg
        // it also allows us to dynamically change the color of the text and the text content depending on what the user entered
    }
    setSvgShape(userShape){
        this.svgShape = userShape.render()
        // here we are creating a function called setSvgShape that takes in the userShape
        // here we are using the render function again to print the shape using the html
    }
    
}



async function init() {
	// here we are creating an async function
	// we will use the await keyword with the async function
	// initially I was using a .Then function but it was not working
	// a tutor I spoke with suggested that are using a sync function
	// an async function returns a promise that will be resolved later
	let svgString = "";
	// here we are creating a variable called svgString as setting a equal to an empty string
	// eventually this variable will contain all of the "information" for the svg
	// we will then use it as the content in the write to file function when we create the svg
	const svgFile = "logo.svg";
	// we are creating a const called svg file and setting the equal to logo.svg
	// this means that when we use the writeToFile function we will pass svg file as the NewFile when creating the svg

    // Prompt the user for answers
    const answers = await inquirer.prompt(prompts);
	// here we are creating a const called answers, these answers are the user responses to the prompt
	// we have to use the await keyword here because we are doing an async function
	// we are awaiting the user to input their responses
    let textInput = "";
	// here we are creating a variable context input and setting it equal to an empty string
	// the text input variable will eventually be  the 3 characters printed on the svg
    if (answers.text.length > 3) {
               throw error('No more than 3 Characters!');
               // here we are creating  an error catch to determine if the user has input more than 3 characters
         } else {
            textInput = answers.text;
            // here we are storing the user response for the text answer in the variable textInput
         }

	
	fontColor = answers.textColor;
	// here we are storing the user response for text color in the variable fontColor
	// this will determine what color are 3 characters are displayed as on the svg
	
	svgColor = answers.shapeColor;
	// here we are storing the user response for the shape color in the variable svgColor
	// this will determine what the background color is for the svg
	
	selectedShape = answers.userShape;
	// here we are storing the user response for the shape in the variable called selectedShape
	// this will determine whether the svg is a circle a square or a triangle
	
	//user shape
	let generatedSvg;
	// here we are creating a variable call generatedSvg
	// here we will use a series of if statements to determine if the user selected square circle or triangle
	if (selectedShape === "Square") {
		generatedSvg = new Square();
		// If the selected shape was a square than we will generate a new square using the imported square class
	}
	else if (selectedShape === "Circle") {
		generatedSvg = new Circle();
		// If the selected shape was a circle and we will generate a new circle using the imported circle class
	}
	else  {
		generatedSvg = new Triangle();
		// if the selected shape was a triangle we will generate a new triangle using the imported triangle class
	}
	// currently the variable generatedSvg only contains the selected shape
	generatedSvg.setColor(svgColor);
	// now we are setting the color using the setColor function , to svgColor(user input for color)
	// now the variable generatedSvg contains the shape and the color of the shape for the svg

	// Create a new Svg instance and add the shape and text elements to it
	let svg = new Svg();
	// here we are creating a variable called svg and setting a equal to a new instance of the Svg class
	svg.setSvgText(textInput, fontColor);
	// here we are adding the text content in the color of the text to the new svg instance using setSvgText()
	svg.setSvgShape(generatedSvg);
	// here we are adding the shape and the color of the shape to the new svg instance using setSvgShape
	svgString = svg.render();
	// we use the render function to generate the html and then save it in the svgString variable
	//Print shape to log
	writeToFile(svgFile, svgString); 
	// here we are using the right to file function to complete the project
	// we are passing in svgFile which will create a new file called logo.svg
	// we are passing in svgString which contains all of the html code and will generate an svg on the file 'logo.svg' 
}
init()
//here we run the init function
