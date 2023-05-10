import { Strategy as PassportStrategy } from 'passport-strategy';
import { Request } from 'express';

export interface AuthenticateOptions {
}

export abstract class AbstractStrategy extends PassportStrategy {
}

export class Strategy extends AbstractStrategy {

  authenticate(req: Request, options: AuthenticateOptions): void {
  }

  success(user: any, info?: any): void {

  }

  fail(challenge: any, status: number): void;
  fail(status: number): void;
  fail(challenge: unknown, status?: unknown): void {

  }

  redirect(url: string, status?: number | undefined): void {

  }

  pass(): void {

  }

  error(err: Error): void {

  }
}