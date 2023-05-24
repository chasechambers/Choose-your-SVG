// TEST CODE PER INSTRUCTIONS
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

describe('circle', () => {
    it('should make a circle', () => {
        const shape = new Circle('20');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="145" cy="135" r="20" stroke="blue" fill="transparent" stroke-width="5"/>');
    });
});

describe('square', () => {
    it('should make a square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="80" width="120" height="120" stroke="blue" fill="transparent" stroke-width="5"/>');
    });
});

describe('triangle', () => {
    it('should make a triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" stroke="blue" fill="transparent" stroke-width="5"/>');
    });
});