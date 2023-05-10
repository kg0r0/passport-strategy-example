import { Strategy } from '../src'
import express from 'express';

beforeEach(() => {
})

describe('Strategy', () => {
  const strategy = new Strategy();
  const mockRequest = {
  } as unknown as express.Request;
  it('authenticate should not throw error', () => {
    strategy.authenticate(mockRequest, {});
  })
})