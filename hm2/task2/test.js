import {expect} from "chai";
import {isEmpty} from "./index.js";


describe('Task 2', () => {
    let schedule = {};

    it('Should be true when no parameters', () => {
        expect(isEmpty(schedule)).equal(true);
    });

    it('Should be false when there are parameters ', () => {
        schedule["8:30"] = "wakeup";

        expect(isEmpty(schedule)).equal(false);
    });
});