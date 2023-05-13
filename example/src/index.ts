import express from 'express';
import passport from 'passport';
import { Strategy as ExampleStrategy } from '../../lib/';
const app: express.Express = express()

passport.use('example', new ExampleStrategy({}));

/**
 * routes
 */
app.get('/', (req: express.Request, res: express.Response) => {
  passport.authenticate('example', {}, () => {
    console.log('test')
  });
  res.send('OK')
});

app.get('/login',
  passport.authenticate('example', {}),
  (req: express.Request, res: express.Response) => {
    res.send('OK')
  }
);

app.listen(3000, () => {
  console.log('listen port: 3000');
});