import { Strategy as PassportStrategy } from 'passport-strategy';
import { AuthenticateOptions } from 'passport'
import { Request } from 'express';

export class Strategy extends PassportStrategy {
  name: string;
  verify: Function;
  constructor(options: any, verify: Function) {
    super();
    this.name = options.name || 'example';
    this.verify = verify;
  }

  authenticate(req: Request, options: AuthenticateOptions): void {
    const username = req.body.username || req.query.username;
    const password = req.body.password || req.query.password;
    const verified = (err: any, user: any, info: any) => {
      if (err) { return this.error(err); }
      if (!user) { return this.fail(info); }
      this.success(user, info);
    }
    this.verify(username, password, verified);
    return
  }
}
