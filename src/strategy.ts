import { Strategy as PassportStrategy } from 'passport-strategy';
import { Request } from 'express';

export interface AuthenticateOptions {
}

export abstract class AbstractStrategy extends PassportStrategy {
  name: string;
  constructor(options?: any) {
    super();
    this.name = options?.name || 'example';
  }

  authenticate(req: Request, options: AuthenticateOptions): void {
    const res = req.res
    res?.send('Logged-In');
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