// Cart math for Acme Shop. All amounts are integer cents.

export function lineTotal(item) {
  return item.priceCents * item.quantity;
}

export function cartSubtotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

export function shippingCents(subtotalCents) {
  return subtotalCents >= 4000 ? 0 : 499;
}
