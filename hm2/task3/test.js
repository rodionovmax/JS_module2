import {expect} from "chai";
import {calculator} from "./index.js";


describe('Task 3', () => {
    calculator.read(3, 5);

    it('Verify sum', () => {
        expect(calculator.sum()).equal(8);
    });

    it('Verify multiplication', () => {
        expect(calculator.mul()).equal(15);
    });
});