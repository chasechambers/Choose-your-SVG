class Shape {
   #color = 'black';
   constructor () {}
   getColor = () => {
      return this.#color;
   }
   setColor = (newColor) => {
      this.#color = newColor;
   } 
   render = () => {}
}

module.exports = Shape;
