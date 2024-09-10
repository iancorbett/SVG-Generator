class Shape{
    // here we are creating a parent class called shape
    // we will create 3 child classes called square circle and triangle
    constructor(color){
        // here we are creating a constructor function that takes in a color
        this.color = color
    }
    setColor(color) {
        // here we are creating a set color function that will change the color of the SVG depending on the user input.
        this.color = (color);
    }
}

class Square extends Shape {
    // here we are creating a square child class that inherits the properties of the parent class, Shape.

    render(){
        // here we are using a render function
        // a render function takes html text and turns it into html on the page
        return `<rect x="100" height="250" width="250" fill="${this.color}">`
        // here we are filling in some parameters for our square SVG
    }
} 

class Circle extends Shape {
    // here we are creating a square child class that inherits the properties of the parent class, Shape.
    render(){
        return `<circle cx="100" cy="100" r="100" height="100" width="100" fill="${this.color}">`
         // here we are filling in some parameters for our circle SVG
    }
}

class Triangle extends Shape {
      // here we are creating a square child class that inherits the properties of the parent class, Shape.
    render(){
         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}">`
         // here we are filling in some parameters for our triangle SVG
    }
};

module.exports = {Square, Circle, Triangle}
// here we are exporting the square circle and triangle classes



