import test from 'node:test';
import assert from 'node:assert/strict';
import { checkout } from '../src/checkout.js';

const items = [{ priceCents: 1299, quantity: 2 }, { priceCents: 2499, quantity: 1 }];

test('SAVE10 takes 10% off the subtotal, rounded down', () => {
  const result = checkout(items, { coupon: 'SAVE10' });
  assert.equal(result.subtotal, 5097);
  assert.equal(result.discount, 509);
});

test('no coupon means no discount', () => {
  const result = checkout(items);
  assert.equal(result.subtotal, 5097);
  assert.equal(result.discount, 0);
});

test('unknown coupon is rejected', () => {
  assert.throws(() => checkout(items, { coupon: 'BOGUS' }), /Unknown coupon/);
});
