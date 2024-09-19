#!/usr/bin/env node

const assert = require('assert');

/**
 * Calculates the sum of two numbers after rounding them.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum of rounded a and b.
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
