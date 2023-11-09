import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import { Strategy as ExampleStrategy } from '../../lib/';

const app: express.Express = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new ExampleStrategy({}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

declare module 'express-session' {
  export interface SessionData {
    passport: any;
  }
}

/**
 * routes
 */
app.post('/',
  passport.authenticate('example', {}),
  (req: express.Request, res: express.Response) => {
    res.send(`wellcome ${req.session.passport?.user}!`);
  }
);

app.listen(3000, () => {
  console.log('listen port: 3000');
});