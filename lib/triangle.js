const Shape = require('./shape');

class Triangle extends Shape {
  
    constructor () {
        super();
    }
    render = () => {
        return  `<polygon points="150, 18 244, 182 56, 182" stroke=\"${this.getColor()}\" fill=\"${this.getColor()}\" stroke-width="5"/>`;
    };
};

module.exports = Triangle;