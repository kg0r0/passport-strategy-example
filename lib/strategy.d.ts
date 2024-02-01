import { Strategy as PassportStrategy } from 'passport-strategy';
import { AuthenticateOptions } from 'passport';
import { Request } from 'express';
export declare class Strategy extends PassportStrategy {
    name: string;
    verify: Function;
    constructor(options: any, verify: Function);
    authenticate(req: Request, options: AuthenticateOptions): void;
}
