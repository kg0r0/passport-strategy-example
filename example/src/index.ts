import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import { Strategy as ExampleStrategy } from '../../lib/';

const app: express.Express = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

type VerifiedUserOrErrorFunc = (err: Error | null, user?: Object, info?: Object) => void;

const strategyVerifyCallback = function (username: string, password: string, verified: VerifiedUserOrErrorFunc, req?: express.Request): void {
  if (username === 'johndoe' && password === 'secret') {
    verified(null, username);
  } else {
    verified(new Error('username and password are required'));
  }
};

passport.use(new ExampleStrategy({}, strategyVerifyCallback));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj: Express.User, done) {
  done(null, obj);
});

declare module 'express-session' {
  export interface SessionData {
    passport: any;
  }
}

/**
 * routes
 */
app.post('/login',
  passport.authenticate('example', {}),
  (req: express.Request, res: express.Response) => {
    res.send(`wellcome ${req.session.passport?.user}!`);
  }
);

app.get('/content', (req: express.Request, res: express.Response) => {
  if (req.session.passport?.user) {
    res.send(`Hello ${req.session.passport?.user}!`);
  } else {
    res.sendStatus(401);
  }
});

app.listen(3000, () => {
  console.log('listen port: 3000');
});