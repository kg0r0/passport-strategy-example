import { Strategy as PassportStrategy } from 'passport-strategy';
import { AuthenticateOptions } from 'passport';
import { Request } from 'express';
export declare class Strategy extends PassportStrategy {
    name: string;
    constructor(options?: any);
    authenticate(req: Request, options: AuthenticateOptions): void;
    success(user: any, info?: any): void;
    error(err: Error): void;
    redirect(url: string, status?: number): void;
}
