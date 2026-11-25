import { cartSubtotal, shippingCents } from './cart.js';

export function checkout(items, { coupon } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart is empty');
  }
  if (coupon && coupon !== 'SAVE10') {
    throw new Error('Unknown coupon');
  }
  const subtotal = cartSubtotal(items);
  const discount = coupon === 'SAVE10' ? Math.floor(subtotal * 0.1) : 0;
  const shipping = shippingCents(subtotal - discount);
  return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}
