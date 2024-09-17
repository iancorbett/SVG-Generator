# SVG-Generator

Project description:

This is a project that is used in the integrated terminal using the inquirer function. We will prompt the user for different input that will then be used to generate a scalable vector graphic upon running the application. The user will be prompted with three questions. The user will be asked to input up to three characters, as well as a background color and a shape for the scalable vector graphic, The options for the SVG's shape are circle triangle and square. Then a function is used to dynamically generate a new SVG. This new scalable vector graphic will be generated on a new page that is created called logo.SVG. We do this by using the writeFile method. We will also create a new instance of the Svg class, and then use the render function to create the new SVG. Other functions such as setSvgText and setSvgShape are used to generate the characteristics of the SVG depending on the user's input. There are comments in the code that go into more detail on the functionality of the code. Additionally, we will be using jest to run tests to make sure that the SVG‘s are being created correctly.

User instructions:

First, you will have to open the index file in the integrated terminal then you will have to install all of the necessary packages, including inquirer and jest. Once all the necessary packages have been installed you will run the command node index in the integrated terminal and you will then answer the three prompts that you are asked upon finishing the third prompt a new file called logo.SVG will be created. You will write click after opening the file and then open it in the live server. Your newly created SVG will be there!

Usage information: 

In order to use this application, you need to open the code from GitHub in VS code and then open up the index.js file in the integrated terminal. You will then run node index to run the javascript file. You will then be prompted with a series of questions that will ask you for the information that you need to build an SVG. When you answer these questions, your responses will be received and will generate the SVG that you requested.

How to contribute: In order to contribute to this page, you need to have permission from the repository owner. It is publicly viewable, but changes have to be from users that have been granted permission to make edits on the page.

Testing the application: 

In order to test this application, download node.js if you have not already. Use NMP (node package manager), to install everything that you will need to complete the project.(inquirer, fs, etc.) Use the integrated terminal to run the index.js file, using the node index command. Answer all of the questions that you are prompted. Upon answering and submitting your answer to the final question, an HTML page named “index.html” will be automatically generated. Open this file in the live server, and your README page will be ready!

Screenshots: For screenshots of the completed projects, please refer to the examples folder, where there is an example for every shape.

Sources:

For this projects, I did receive any help from one tutor, and I did receive help in the form of looking over another project on Github, that was created for a similar project. 
The link to that GitHub repo is: https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker
Before looking through this repo and meeting with the tutor, I had all but one function of the application working. I was able to dynamically create the logo.svg file, and it contained an SVG that changed color, based on the user input. Additionally, the text on the SVG was created correctly. The only thing that I could not figure out was how to dynamically change the shape. I could only get it to create one shape that was hard coded. I met with a tutor and was reccomended to use a switch statement. However I was still unable to make the application work, before I looked at this code and realized what I was missing. My previous code was left commented out in the index.js file. What I realized was that I was missing a few things, but most importantly, I was not using the render function, which draws the html on a page. Using the render funciton, I was able to the setSvgShape function to set and draw the shape that was inputed by the user. Another bit of help that I took from the project was to use an async function. Although I discussed this witht the tutor, and therefore knew it was what I had to do, I was having issues actually implementing it. One other thing I borrowed from the source that i cited, was a simple code refractoring. I set a const called svgFile and set it equal to logo.svg, and when i called the writeFile method, instead of writing logo.svg, I simply called svgFile instead. Overall, I was able to do about 80-90% of the project on my own, but without having used this source, I would likely not have been able to satisfy all of the acceptance criteria, becuause I was not able to dynamically generate the shape of the SVG based on the user input. 
  
Link to Walk-Through: https://www.youtube.com/watch?v=f_OZcU73NbA

License: MIT License

License Explanation:

Copyright (c) 2024 iancorbettPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THESOFTWARE.

Contact:

My GitHub username is iancorbett. Here is a link to my Github: github.com/iancorbett E-mail: iancorbett1324@gmail.com





