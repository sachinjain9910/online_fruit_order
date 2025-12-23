const products = [
  { id: 'APPLE', name: 'Apple', price: 10, rating: 4.5 },
  { id: 'ORANGE', name: 'Orange', price: 20, rating: 4.2 },
  { id: 'BANANA', name: 'Banana', price: 5, rating: 4.0 },
  { id: 'MANGO', name: 'Mango', price: 30, rating: 4.8 }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

module.exports = {
  getAllProducts,
  getProductById
};
