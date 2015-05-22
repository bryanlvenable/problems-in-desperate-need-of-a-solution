/* global mergeSort, describe, it, expect, should */

describe('mergeSort()', function () {
  'use strict';

  it('exists', function () {
    expect(mergeSort).to.be.a('function');

  });

  it('add 1 plus 2', function () {
    expect(mergeSort(1,2)).to.equal(3);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
