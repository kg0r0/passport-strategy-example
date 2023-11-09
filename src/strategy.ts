import { Strategy as PassportStrategy } from 'passport-strategy';
import { AuthenticateOptions } from 'passport'
import { Request } from 'express';

export class Strategy extends PassportStrategy {
  name: string;
  constructor(options?: any) {
    super();
    this.name = options.name || 'example';
  }

  authenticate(req: Request, options: AuthenticateOptions): void {
    if (req.body.username === 'johndoe' && req.body.password === 'secret') {
      this.success(req.body.username);
      return
    }
    this.fail(401);
    return;
  }

  success(user: any, info?: any): void {
    super.success(user, info);
  }

  error(err: Error): void {
    super.error(err);
  }

  redirect(url: string, status?: number): void {
    super.redirect(url, status);
  }

}
