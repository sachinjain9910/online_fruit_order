const express = require('express');
const app = express();

const productRoutes = require('./product.routes');

app.use(express.json());
app.use('/products', productRoutes);

const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'product-service' });
});

app.listen(PORT, () => {
  console.log('product-service running on port', PORT);
});
