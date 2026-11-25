import test from 'node:test';
import assert from 'node:assert/strict';
import { findProduct } from '../src/products.js';

test('findProduct returns a known product', () => {
  assert.deepEqual(findProduct('mug'), { id: 'mug', name: 'Acme Mug', priceCents: 1299 });
});

test('findProduct returns undefined for an unknown id', () => {
  assert.equal(findProduct('nope'), undefined);
});
