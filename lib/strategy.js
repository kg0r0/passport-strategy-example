"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
const passport_strategy_1 = require("passport-strategy");
class Strategy extends passport_strategy_1.Strategy {
    constructor(options) {
        super();
        this.name = options.name || 'example';
    }
    authenticate(req, options) {
        if (req.body.username === 'johndoe' && req.body.password === 'secret') {
            this.success(req.body.username);
            return;
        }
        this.fail(401);
        return;
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
exports.Strategy = Strategy;
