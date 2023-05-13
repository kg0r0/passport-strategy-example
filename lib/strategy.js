"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = exports.AbstractStrategy = void 0;
const passport_strategy_1 = require("passport-strategy");
class AbstractStrategy extends passport_strategy_1.Strategy {
    constructor(options) {
        super();
        this.name = (options === null || options === void 0 ? void 0 : options.name) || 'example';
    }
    authenticate(req, options) {
        const res = req.res;
        res === null || res === void 0 ? void 0 : res.send('Logged-In');
    }
    success(user, info) {
        super.success(user, info);
    }
    error(err) {
        super.error(err);
    }
    redirect(url, status) {
        super.redirect(url, status);
    }
}
exports.AbstractStrategy = AbstractStrategy;
class Strategy extends AbstractStrategy {
}
exports.Strategy = Strategy;
