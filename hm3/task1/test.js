import {expect} from 'chai';
import {namify} from "./index.js";


describe('Task 1', () => {
    let vasya = { name: 'Вася', age: 25 };
    let petya = { name: 'Петя', age: 30 };
    let masha = { name: 'Маша', age: 28 };

    it('Should return array of names', () => {
        let users = [vasya, petya, masha];
        let names = ['Вася', 'Петя', 'Маша'];

        expect(namify(users)).to.deep.equal(names);
    });

    it('Should return empty when array of users is empty', () => {
        let users = [];
        let names = [];

        expect(namify(users)).to.deep.equal(names);
    });

});