export const products = [
  { id: 'mug', name: 'Acme Mug', priceCents: 1299 },
  { id: 'tee', name: 'Acme T-Shirt', priceCents: 2499 },
  { id: 'cap', name: 'Acme Cap', priceCents: 1899 },
];

export function findProduct(id) {
  return products.find((product) => product.id === id);
}
