import {expect} from 'chai';
import {sumSalary} from "./index.js";


describe('Task 1', () => {
    it('Should sum all salaries', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300
        };

        expect(sumSalary(salaries)).equal(3900);
    });

    it('Should ignore other types', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300,
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).equal(3900);
    });

    it('Should ignore NaN, Infinite, -Infinite', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300,
            Bob: NaN,
            Peter: Infinity,
            Ivan: -Infinity,
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).equal(3900);
    });

    it('Should return 0 if no number properties', () => {
        let salaries = {
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).equal(0);
    });
});