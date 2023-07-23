import {expect} from 'chai';
import {getMinMax} from "./index.js";


describe('Task 5', () => {
    it('1 и -5.8 или 10 хотя 34 + -5.3 и 73', () => {
        expect(getMinMax('1 и -5.8 или 10 хотя 34 + -5.3 и 73')).to.deep.equal({ min: -5.8, max: 73 });
    });

    it('25 : -1 / -234 - 4 = 1000', () => {
        expect(getMinMax('25 : -1 / -234 - 4 = 1000')).to.deep.equal({ min: -234, max: 1000 });
    });
});