"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = exports.AbstractStrategy = void 0;
const passport_strategy_1 = require("passport-strategy");
class AbstractStrategy extends passport_strategy_1.Strategy {
    constructor(options) {
        super();
        this.name = (options === null || options === void 0 ? void 0 : options.name) || 'example';
    }
}
exports.AbstractStrategy = AbstractStrategy;
class Strategy extends AbstractStrategy {
    authenticate(req, options) {
    }
    success(user, info) {
    }
    fail(challenge, status) {
    }
    redirect(url, status) {
    }
    pass() {
    }
    error(err) {
    }
}
exports.Strategy = Strategy;
