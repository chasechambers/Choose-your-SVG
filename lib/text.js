class Text {
    #color = 'black';
    #value = '';
    constructor (value) {
        this.#value = value;
    }
    getColor = () => {
       return this.#color;
    }
    setColor = (newColor) => {
       this.#color = newColor;
    } 
    render = () => {
        return `<text x="0" y="50" font-family="Verdana" font-size="35" stroke=\"${this.#color}\" fill="transparent">${this.#value}</text>`;
    }
 }
 
 module.exports = Text;
 