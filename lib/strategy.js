"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
const passport_strategy_1 = require("passport-strategy");
class Strategy extends passport_strategy_1.Strategy {
    constructor(options, verify) {
        super();
        this.name = options.name || 'example';
        this.verify = verify;
    }
    authenticate(req, options) {
        const username = req.body.username || req.query.username;
        const password = req.body.password || req.query.password;
        const verified = (err, user, info) => {
            if (err) {
                return this.error(err);
            }
            if (!user) {
                return this.fail(info);
            }
            this.success(user, info);
        };
        this.verify(username, password, verified);
        return;
    }
}
exports.Strategy = Strategy;
