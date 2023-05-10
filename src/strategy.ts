import { Strategy as PassportStrategy } from "passport-strategy";
import { Request, Response } from 'express';

export interface AuthenticateOptions {
}

export abstract class AbstractStrategy extends PassportStrategy {
}

export class Strategy extends AbstractStrategy {
  authenticate(req: Request, options: AuthenticateOptions): void {
  }
}