"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
beforeEach(() => {
});
describe('Strategy', () => {
    const strategy = new src_1.Strategy();
    const mockRequest = {};
    it('authenticate should not throw error', () => {
        strategy.authenticate(mockRequest, {});
    });
});
