import {expect} from 'chai';
import {filterRange} from "./index.js";


describe('Task 2', () => {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    it('Should filter properly between 1 and 4', () => {
        let expected = [3,1]
        expect(filtered).to.deep.equal(expected);
    });

    it('Shouldn\'t change initial array', () => {
        let copyOfOriginalArr = [...arr];
        filterRange(arr, 1, 4);

        expect(arr).to.deep.equal(copyOfOriginalArr);
    });
});