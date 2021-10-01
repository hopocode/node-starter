"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
exports.sleep = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("sleep end");
        }, ms);
    });
};
