#!/usr/bin/node

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.returnValues[0]).to.equal(120);
    
    spy.restore();
  });
});
