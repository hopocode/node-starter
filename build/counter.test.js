"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_1 = require("./counter");
describe("Utils", function () {
    it("Counter fce with params (1,2) should return 3.", function () {
        expect(counter_1.counter(1, 2)).toBe(3);
    });
});
