import test from 'node:test';
import assert from 'node:assert/strict';
import { cartSubtotal, shippingCents } from '../src/cart.js';
import { checkout } from '../src/checkout.js';

test('subtotal sums every line', () => {
  assert.equal(cartSubtotal([{ priceCents: 1299, quantity: 2 }, { priceCents: 2499, quantity: 1 }]), 5097);
});

test('free shipping from 40.00', () => {
  assert.equal(shippingCents(4000), 0);
  assert.equal(shippingCents(3999), 499);
});

test('checkout rejects an empty cart', () => {
  assert.throws(() => checkout([]), /Cart is empty/);
});
