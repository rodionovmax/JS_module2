import {expect} from 'chai';
import {camelize} from "./index.js";


describe('Task 3', () => {

    it('background-color equals backgroundColor', () => {
        expect(camelize('background-color')).equal('backgroundColor');
    });

    it('list-style-image equals listStyleImage', () => {
        expect(camelize('list-style-image')).equal('listStyleImage');
    });

    it('-webkit-transition equals WebkitTransition', () => {
        expect(camelize('-webkit-transition')).equal('WebkitTransition');
    });

});