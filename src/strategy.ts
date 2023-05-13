import { Strategy as PassportStrategy } from 'passport-strategy';
import { AuthenticateOptions } from 'passport'
import { Request } from 'express';

export abstract class AbstractStrategy extends PassportStrategy {
  name: string;
  constructor(options?: any) {
    super();
    this.name = options.name || 'example';
  }

  authenticate(req: Request, options: AuthenticateOptions): void {
    if (options.authInfo === false) {
      const res = req.res
      res?.send('error');
      return
    }
    console.log('Logged-In');
    this.pass();
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

export class Strategy extends AbstractStrategy {
}