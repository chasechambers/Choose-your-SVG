const Shape = require('./shape');

class Square extends Shape {
  
    constructor () {
        super();
    }
    render = () => {
        return  `<rect x="10" y="10" width="30" height="30" stroke=\"${this.getColor()}\" fill="transparent" stroke-width="5"/>`;
    };
};

module.exports = Square;