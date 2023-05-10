"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = exports.AbstractStrategy = void 0;
const passport_strategy_1 = require("passport-strategy");
class AbstractStrategy extends passport_strategy_1.Strategy {
}
exports.AbstractStrategy = AbstractStrategy;
class Strategy extends AbstractStrategy {
}
exports.Strategy = Strategy;
