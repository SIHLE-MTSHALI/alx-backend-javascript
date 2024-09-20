#!/usr/bin/node

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
