const express = require('express');
const router = express.Router();

const productStore = require('./product.store');
const { sortProducts } = require('./product.service');

/**
 * GET /products
 */
router.get('/', (req, res) => {
  const { sortBy, order } = req.query;

  let products = productStore.getAllProducts();

  if (sortBy) {
    products = sortProducts(products, { sortBy, order });
  }

  res.json(products);
});

/**
 * GET /products/:id
 */
router.get('/:id', (req, res) => {
  const product = productStore.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

module.exports = router;
