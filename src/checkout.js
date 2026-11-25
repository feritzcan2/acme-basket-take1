import { cartSubtotal, shippingCents } from './cart.js';

export function checkout(items, { coupon } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart is empty');
  }
  let rate = 0;
  if (coupon) {
    if (coupon !== 'SAVE10') throw new Error('Unknown coupon');
    rate = 10;
  }
  const subtotal = cartSubtotal(items);
  const discount = Math.floor((subtotal * rate) / 100);
  const shipping = shippingCents(subtotal - discount);
  return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}
