const Shape = require('./shape');

class Square extends Shape {
  
    constructor () {
        super();
    }
    render = () => {
        return  `<rect x="90" y="80" width="120" height="120" stroke=\"${this.getColor()}\" fill="transparent" stroke-width="5"/>`;
    };
};

module.exports = Square;