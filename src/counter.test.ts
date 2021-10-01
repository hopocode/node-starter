import { counter } from './counter';

describe("Utils", () => {
    it("Counter fce with params (1,2) should return 3.", () => {
        expect(counter(1, 2)).toBe(3);
    })
})