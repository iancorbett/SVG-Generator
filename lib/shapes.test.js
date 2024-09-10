const {Square, Circle, Triangle} = require('./shapes');
// here we are importing the square circle and triangle classes

describe('SquareTest', () => {
    it('Should generate a square shaped SVG with the color that was selected by the user', () => {
    const shape = new Square();
    // here we are creating a const called shape and setting it equal to a new instance of a square object
    shape.setColor("red");
    // here we are using the set color function to make the color of this shape red
    expect(shape.render()).toEqual(`<rect x="100" height="250" width="250" fill="red">`);
    // here we are running the expect function to see if the square was generated correctly.
});
});

describe('CircleTest', () => {
    it('Should generate a circle shaped SVG with the color that was selected by the user', () => {
        const shape = new Circle() ;
        // here we are creating a const called shape and setting it equal to a new instance of a circle object
        shape.setColor("orange");
        // here we are using the set color function to make the color of this shape orange
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" height="100" width="100" fill="orange">`);
        // here we are running the expect function to see if the circle was generated correctly.
    });
});

describe('TriangleTest', () => {
    it('Should generate a triangle shaped SVG with the color that was selected by the user', () => {
        const shape = new Triangle();
        // here we are creating a const called shape and setting it equal to a new instance of a triangle object
        shape.setColor("blue");
        // here we are using the set color function to make the color of this shape yellow
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue">`);
        // here we are running the expect function to see if the triangle was generated correctly.
    });
});