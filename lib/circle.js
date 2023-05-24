const Shape = require('./shape');

class Circle extends Shape {
    #radius;
    constructor (newRadius) {
        super();
        this.#radius = newRadius;
    }
    render = () => {
        return  `<circle cx="145" cy="135" r=\"${this.#radius}\" stroke=\"${this.getColor()}\" fill="transparent" stroke-width="5"/>`;
    };
}

module.exports = Circle;