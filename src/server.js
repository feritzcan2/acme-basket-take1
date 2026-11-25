import http from 'node:http';
import { checkout } from './checkout.js';
import { products, findProduct } from './products.js';

const server = http.createServer(async (req, res) => {
  const send = (status, body) => {
    res.writeHead(status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  };
  if (req.method === 'GET' && req.url === '/health') return send(200, { ok: true });
  if (req.method === 'GET' && req.url === '/products') return send(200, products);
  if (req.method === 'GET' && req.url.startsWith('/products/')) {
    const product = findProduct(decodeURIComponent(req.url.slice('/products/'.length)));
    return product ? send(200, product) : send(404, { error: 'Product not found' });
  }
  if (req.method === 'POST' && req.url === '/checkout') {
    let raw = '';
    for await (const chunk of req) raw += chunk;
    try {
      return send(200, checkout(JSON.parse(raw).items));
    } catch (error) {
      return send(400, { error: error.message });
    }
  }
  send(404, { error: 'Not found' });
});

server.listen(process.env.PORT ?? 3000);
