const Text = require('./text');

describe('text', () => {
    it('should display text', () => {
        const text = new Text('CCC');
        text.setColor("blue");
        expect(text.render()).toEqual('<text x="110" y="150" font-family="Verdana" font-size="35" stroke="blue" fill="transparent">CCC</text>');
    });
});