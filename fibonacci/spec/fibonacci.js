/* global fibonacci, describe, it, expect, should */

describe('fibonacci()', function () {
  'use strict';

  it('exists', function () {
    expect(fibonacci).to.be.a('function');

  });

  it('1st term to be 0', function () {
    expect(fibonacci(1)).to.equal(0);
  });

  it('2nd term to be 1', function () {
    expect(fibonacci(2)).to.equal(1);
  });

  // Add more assertions here
});
