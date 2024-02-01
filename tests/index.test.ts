import { Strategy } from '../src'
import express from 'express';
import chai from 'chai';

chai.use(require('chai-passport-strategy'));

beforeEach(() => {
})

describe('Strategy', () => {
  // @ts-ignore
  chai.passport.use(new Strategy({}))
    .request((req: express.Request) => {
      req.body = { username: 'example', password: 'example' };
    })
    .success((user: any) => {
      console.log(user)
    })
    .authenticate('example', {});
})