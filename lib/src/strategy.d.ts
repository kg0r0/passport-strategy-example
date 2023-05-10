import { Strategy as PassportStrategy } from 'passport-strategy';
import { Request } from 'express';
export interface AuthenticateOptions {
}
export declare abstract class AbstractStrategy extends PassportStrategy {
}
export declare class Strategy extends AbstractStrategy {
    authenticate(req: Request, options: AuthenticateOptions): void;
    success(user: any, info?: any): void;
    fail(challenge: any, status: number): void;
    fail(status: number): void;
    redirect(url: string, status?: number | undefined): void;
    pass(): void;
    error(err: Error): void;
}
