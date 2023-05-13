import express from 'express';
import passport from 'passport';
import { Strategy as ExampleStrategy } from '../../lib/';
const app: express.Express = express()

passport.use(new ExampleStrategy());

/**
 * routes
 */
app.get('/', (req: express.Request, res: express.Response) => {
  passport.authenticate('example', {});
  res.send('OK')
});

app.listen(3000, () => {
  console.log('listen port: 3000');
});